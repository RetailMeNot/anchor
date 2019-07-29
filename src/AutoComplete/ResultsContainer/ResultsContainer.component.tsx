// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { List } from '../../List';
// UTILS
const { useState, forwardRef, useImperativeHandle } = React;

type DataItem = {
    value: any;
    label: string;
    [key: string]: any;
};

type EmitSelectedItem = (newItem: DataItem) => void;
type EmitActiveTerm = (newTerm: string) => void;

interface ResultsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    initialIndex?: number;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    term: string;
    dataSource: any[];
    emitSelectedItem: EmitSelectedItem;
    emitActiveTerm: EmitActiveTerm;
    resultTemplate?: (props: ResultItemProps) => any;
}
interface StyledResultsContainerProps {
    children?: any;
    size?: 'sm' | 'md' | 'lg';
}

export interface ResultItemProps {
    term: string;
    currentIndex: number;
    index: number;
    label: string;
    value: any;
}

const ResultContainerSpaceFromAutoComplete = {
    sm: '2.6rem',
    md: '3.25rem',
    lg: '3.25rem',
};

const StyledResultsContainer = styled('div')<StyledResultsContainerProps>`
    background-color: white;
    position: absolute;
    width: inherit;
    z-index: 3;
    box-sizing: border-box;
    box-shadow: 0 0.5rem 0.75rem -0.375rem rgba(0, 0, 0, 0.2);
    border-radius: 0 0 ${th.radius('base')} ${th.radius('base')};
    padding: 1rem;
    ${({ size = 'md' }) =>
        css({ top: ResultContainerSpaceFromAutoComplete[size] })};
`;

const createResult = (label: string, value?: any): DataItem => ({
    label: label,
    value: value || label,
});

type ObjectItem = { label: string; [key: string]: any };

const generateResults = (
    results: any[],
    currentIndex: number,
    setCurrentIndex: any,
    emitSelectedItem: EmitSelectedItem,
    term: string,
    setTerm: any
): any => {
    const cleanResults: DataItem[] = [];
    if (Array.isArray(results) && results.length) {
        // Generic arrays are converted to DataItems
        if (typeof results[0] === 'string') {
            results.forEach((result: string, index: number) => {
                const itemIndex = relativeIndex(index);
                cleanResults.push(
                    createResult(result, {
                        label: result || '',
                        // Add one to index so that the input is an index
                        active: itemIndex === currentIndex,
                        key: `anchor-result-${itemIndex}`,
                        onMouseOver: () => {
                            setCurrentIndex(itemIndex);
                            setTerm(term);
                        },
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
                ({ label = '', ...props }: ObjectItem, index: number) => {
                    const itemIndex = relativeIndex(index);
                    cleanResults.push(
                        createResult(label, {
                            label,
                            ...props,
                            // Add one to index so that the input is an index
                            active: itemIndex === currentIndex,
                            key: `anchor-result-${itemIndex}`,
                            onMouseOver: () => {
                                setCurrentIndex(itemIndex);
                                setTerm(term);
                            },
                            onSelect: () =>
                                emitSelectedItem({
                                    label,
                                    value: { label, ...props },
                                }),
                        })
                    );
                }
            );
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
            emitSelectedItem,
            emitActiveTerm,
            term,
            resultTemplate,
            ...props
        }: ResultsContainerProps,
        resultsContainerRef: React.Ref<any>
    ): JSX.Element => {
        const [currentIndex, setCurrentIndex] = useState<number>(0);
        const [initialTerm, setInitialTerm] = useState<string>('');

        const results = generateResults(
            dataSource,
            currentIndex,
            setCurrentIndex,
            emitSelectedItem,
            term,
            setInitialTerm
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

        const handleTraversal = (
            currentTerm: string = '',
            forward: boolean
        ) => {
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
                emitActiveTerm(results[iterativeIndexes[nextIndex] - 1].label);
            }
        };

        useImperativeHandle(resultsContainerRef, () => ({
            setActiveIndex: (itemIndex: number) => {
                setCurrentIndex(itemIndex);
            },
            clearInitialTerm: () => {
                setInitialTerm('');
            },
            handleNext: (currentTerm: string) => {
                handleTraversal(currentTerm, true);
            },
            handlePrevious: (currentTerm: string) => {
                handleTraversal(currentTerm, false);
            },
            selectActive: () => {
                if (currentIndex >= 0 && currentIndex <= results.length) {
                    emitSelectedItem(results[currentIndex - 1]);
                }
            },
        }));
        return (
            <StyledResultsContainer
                className={classNames(
                    'anchor-auto-complete-results-container',
                    className
                )}
                {...props}
            >
                {resultTemplate ? (
                    <div className="auto-complete-results">
                        {results.map(
                            (
                                { label, value }: ResultItemProps,
                                index: number
                            ) =>
                                React.createElement(resultTemplate, {
                                    label,
                                    value,
                                    term,
                                    currentIndex,
                                    index: relativeIndex(index),
                                    key: relativeIndex(index),
                                })
                        )}
                    </div>
                ) : (
                    <List items={results} className="auto-complete-results" />
                )}
            </StyledResultsContainer>
        );
    }
);
