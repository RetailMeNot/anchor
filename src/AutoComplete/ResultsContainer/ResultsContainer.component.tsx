// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { List } from '../../List';
// UTILS
// import { get } from '../../../utils/get/get';
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
                        active: index === currentIndex,
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
                                active: index === currentIndex,
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

// const handleNext = () => {};

export const ResultsContainer = forwardRef(
    (
        {
            initialIndex = -1,
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
        const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
        const [initialTerm, setInitialTerm] = useState<string>('');
        const results = generateResults(
            dataSource,
            currentIndex,
            emitActiveIndex,
            emitSelectedItem
        );
        const iterativeIndexes: number[] = [-1];
        results.forEach(({ value: { listItemType } }: any, index: number) => {
            if (!listItemType || listItemType === 'item') {
                iterativeIndexes.push(index);
            }
        });

        useImperativeHandle(resultsContainerRef, () => ({
            setActiveIndex: (newIndex: number) => setCurrentIndex(newIndex),
            clearInitialTerm: () => setInitialTerm(''),
            handleNext: (currentTerm: string) => {
                // Check if there's a initialTerm
                if (!initialTerm || initialTerm === '') {
                    // If there's no initialTerm, assign the current input value
                    setInitialTerm(currentTerm);
                }
                // Get the current index
                const newIndex = iterativeIndexes.indexOf(currentIndex);
                // If the currentIndex is -1, display the initial term and iterate to the next value
                if (currentIndex === -1) {
                    console.log(1);
                    setCurrentIndex(0);
                    emitActiveTerm(results[0].label);
                } else if (
                    newIndex >= iterativeIndexes[iterativeIndexes.length - 1]
                ) {
                    console.log(2);
                    emitActiveTerm(initialTerm);
                    setInitialTerm('');
                    setCurrentIndex(-1);
                } else {
                    console.log(3, newIndex + 1);
                    emitActiveTerm(results[newIndex + 1].label);
                    setCurrentIndex(newIndex + 1);
                }
            },
            handlePrevious: (currentTerm: string) => {
                // Check if there's a initialTerm
                if (!initialTerm || initialTerm === '') {
                    // If there's no initialTerm, assign the current input value
                    setInitialTerm(currentTerm);
                }

                // Get the current index
                const newIndex = iterativeIndexes.indexOf(currentIndex);
                if (currentIndex === -1) {
                    const lastItem =
                        iterativeIndexes[iterativeIndexes.length - 1];
                    setCurrentIndex(lastItem);
                    emitActiveTerm(results[lastItem].label);
                } else if (newIndex === 1) {
                    emitActiveTerm(initialTerm);
                    setInitialTerm('');
                    setCurrentIndex(-1);
                } else {
                    emitActiveTerm(
                        results[iterativeIndexes[newIndex - 1]].label
                    );
                    setCurrentIndex(iterativeIndexes[newIndex - 1]);
                }
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
                {/*<List className="auto-complete-results">*/}
                {/*    {results*/}
                {/*        // TODO: this should be better*/}
                {/*        // .filter(({ label }: DataItem) => term && term.length ? label.includes(term) : true)*/}
                {/*        .map((item: DataItem, index: number) => (*/}
                {/*            <Item*/}
                {/*                onMouseOver={() => emitActiveIndex(index)}*/}
                {/*                onSelect={() => emitSelectedItem(item)}*/}
                {/*                key={`anchor-result-${index}`}*/}
                {/*                active={index === currentIndex}*/}
                {/*                value={item.value}*/}
                {/*            >*/}
                {/*                {item.label}*/}
                {/*            </Item>*/}
                {/*        ))}*/}
                {/*</List>*/}
                <List items={results} className="auto-complete-results" />
            </StyledResultsContainerContainer>
        );
    }
);

export default ResultsContainer;
