// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { List } from '../../List';
// UTILS
const { useState, forwardRef, useImperativeHandle } = React;

export type DataItem = {
    value: any;
    label: string;
    [key: string]: any;
};

type EmitActiveIndex = (index: number) => void;
type EmitSelectedItem = (newItem: DataItem) => void;
type EmitActiveTerm = (newTerm: string) => void;

export interface ResultsContainerProps {
    initialIndex?: number;
    className?: string;
    term: string;
    dataSource: any[];
    emitActiveIndex: EmitActiveIndex;
    emitSelectedItem: EmitSelectedItem;
    emitActiveTerm: EmitActiveTerm;
    childComponent?: React.ReactChild[];
}
export interface StyledResultsContainerProps {
    children?: any;
}

const StyledResultsContainerContainer = styled.div<StyledResultsContainerProps>`
    background-color: white;
    position: absolute;
    width: inherit;
    z-index: 3;
    box-sizing: content-box;
    top: 3.5rem;
    box-shadow: 0 0.5rem 0.75rem -0.375rem rgba(0, 0, 0, 0.12);
    border-radius: 0 0 4px 4px;
`;

const createResult = (label: string, value?: any): DataItem => ({
    label: label,
    value: value || label,
});

type ObjectItem = { label: string; [key: string]: any };

const generateResults = (
    results: any[],
    currentIndex: number,
    emitActiveIndex: EmitActiveIndex,
    emitSelectedItem: EmitSelectedItem
): any => {
    const cleanResults: DataItem[] = [];
    if (Array.isArray(results) && results.length) {
        // Generic arrays are converted to DataItems
        if (typeof results[0] === 'string') {
            results.forEach((result: string, index: number) => {
                cleanResults.push(
                    createResult(result, {
                        label: result,
                        // Add one to index so that the input is an index
                        active: relativeIndex(index) === currentIndex,
                        key: `anchor-result-${index}`,
                        onMouseOver: () => emitActiveIndex(index),
                        onSelect: () =>
                            emitSelectedItem({
                                label: result,
                                value: { label: result, value: result },
                            }),
                    })
                );
            });
        } else if (typeof results[0] === 'object') {
            results.forEach(
                ({ label, ...props }: ObjectItem, index: number) => {
                    if (label) {
                        cleanResults.push(
                            createResult(label, {
                                label,
                                ...props,
                                // Add one to index so that the input is an index
                                active: relativeIndex(index) === currentIndex,
                                key: `anchor-result-${index}`,
                                onMouseOver: () => emitActiveIndex(index),
                                onSelect: () =>
                                    emitSelectedItem({
                                        label,
                                        value: { label, ...props },
                                    }),
                            })
                        );
                    } else {
                        /* tslint:disable no-console */
                        console.warn(
                            'Autocomplete objects MUST contain a label property.'
                        );
                    }
                }
            );
        } else {
            console.log(3, typeof results);
        }
    }
    return cleanResults;
};

/*
    Entire List:    [ 0, 1, 2, 3, 4 ]
    Iterable List:  [ 1, 3, 4 ]

    forward:
        - go to next iterable index
        - unless at max; go to 0 (assign initialTerm)
    backward:
        - go to previous iterable index
        - unless at 0; go to max (assign initialTerm)
    both
        - store initialTerm
        - Emit initialTerm or currentLabel
        - Update currentIndex
    ===================================================

    getNext(currentTerm: string, max = iterableList.length - 1, min = 0, currentIndex, direction): number
    emitTermAndUpdateIndex(newIndex, values): void
        • updateIndex(emitActiveIndex, setCurrentIndex): void
        • updateTerm(emitActiveIndex, setCurrentIndex): void
*/

const relativeIndex = (index: number) => index + 1;

export const ResultsContainer = forwardRef(
    (
        {
            className,
            dataSource = [],
            emitActiveIndex,
            emitSelectedItem,
            emitActiveTerm,
            term,
            childComponent,
            ...props
        }: ResultsContainerProps,
        resultsContainerRef: React.Ref<any>
    ): JSX.Element => {
        const [currentIndex, setCurrentIndex] = useState<number>(0);
        const [initialTerm, setInitialTerm] = useState<string>('');
        const results = generateResults(
            dataSource,
            currentIndex,
            emitActiveIndex,
            emitSelectedItem
        );
        const iterativeIndexes: number[] = [0];
        results.forEach(({ value: { listItemType } }: any, index: number) => {
            if (!listItemType || listItemType === 'item') {
                // Add one to index to allow input to be item 0
                iterativeIndexes.push(relativeIndex(index));
            }
        });

        const traverse = (
            range: any[],
            index: number,
            forward: boolean
        ): number => {
            // Get the max range; the minimum index of any array is 0
            const max = range.length - 1;
            // Determine the actual index relative to all iterable values
            const indexRelative: number = range.indexOf(index);
            // Increment/decrement accordingly
            let nextIndex = forward ? indexRelative + 1 : indexRelative - 1;
            // For 'next' iteration, reset to 0 if at max
            if (forward && nextIndex > max) {
                nextIndex = 0;
            }
            // For 'prev' iteration, reset to max if at 0
            if (!forward && nextIndex < 0) {
                nextIndex = max;
            }
            return nextIndex;
        };

        const handleTraversal = (currentTerm: string, forward: boolean) => {
            // Check if there's a initialTerm
            if (!initialTerm || initialTerm === '') {
                // If there's no initialTerm, assign the current input value
                setInitialTerm(currentTerm);
            }
            // Determine the next index
            const nextIndex = traverse(iterativeIndexes, currentIndex, forward);
            // Assign that index locally
            setCurrentIndex(iterativeIndexes[nextIndex]);
            if (nextIndex === 0) {
                // Emit the user's initial term
                emitActiveTerm(initialTerm);
                setInitialTerm('');
            } else {
                // Emit the active term, but subtract one bc the input is not part of the original data set
                emitActiveTerm(
                    dataSource[iterativeIndexes[nextIndex] - 1].label
                );
            }
        };

        useImperativeHandle(resultsContainerRef, () => ({
            setActiveIndex: (newIndex: number) => setCurrentIndex(newIndex),
            clearInitialTerm: () => setInitialTerm(''),
            handleNext: (currentTerm: string) => {
                handleTraversal(currentTerm, true);
            },
            handlePrevious: (currentTerm: string) => {
                handleTraversal(currentTerm, false);
            },
            selectActive: () => {
                if (currentIndex >= 0 && currentIndex <= results.length) {
                    emitSelectedItem(results[currentIndex]);
                }
            },
        }));
        return (
            <StyledResultsContainerContainer
                className={classNames(
                    'anchor-auto-complete-results-container',
                    className
                )}
                {...props}
            >
                <List items={results} className="auto-complete-results" />
            </StyledResultsContainerContainer>
        );
    }
);

export default ResultsContainer;
