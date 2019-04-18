// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { Item, List } from '../../List';

const { useState, forwardRef, useImperativeHandle } = React;

export type DataItem = {
    value: number | string;
    label: number | string;
    [key: string]: any;
};

export interface ResultsContainerProps {
    initialIndex?: number;
    className?: string;
    dataSource: any[];
    emitActiveIndex: (index: number) => void;
    emitSelectedItem: (newItem: DataItem) => void;
    emitActiveTerm: (newTerm: string) => void;
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

const createResult = (value: string | number) => ({
    label: `${value}`,
    value: value,
});

const generateResults = (results: any[]) => {
    return results.map(createResult);
};

export const ResultsContainer = forwardRef(
    (
        {
            initialIndex = -1,
            className,
            dataSource = [],
            emitActiveIndex,
            emitSelectedItem,
            emitActiveTerm,
            ...props
        }: ResultsContainerProps,
        resultsContainerRef: React.Ref<any>
    ): JSX.Element => {
        const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
        const [initialTerm, setInitialTerm] = useState<string>('');

        useImperativeHandle(resultsContainerRef, () => ({
            setActiveIndex: (newIndex: number) => setCurrentIndex(newIndex),
            clearInitialTerm: () => setInitialTerm(''),
            handleNext: (currentTerm: string) => {
                // New index for down event
                const newIndex = currentIndex + 1;
                // Check if there's a initialTerm
                if (!initialTerm || initialTerm === '') {
                    // If there's no initialTerm, assign the current input value
                    setInitialTerm(currentTerm);
                }
                // Update the active index of the results container
                if (dataSource.length === currentIndex) {
                    setCurrentIndex(0);
                    emitActiveTerm(results[0].label);
                } else {
                    setCurrentIndex(newIndex);
                    // If the user hits the bottom of the results and keeps going
                    if (dataSource.length === newIndex) {
                        // Clear the initial term
                        setInitialTerm('');
                        emitActiveTerm(initialTerm);
                    } else {
                        emitActiveTerm(results[newIndex].label);
                    }
                }
            },
            handlePrevious: (currentTerm: string) => {
                // New index for up event
                const newIndex = currentIndex - 1;
                // Check if there's a initialTerm
                if (!initialTerm || initialTerm === '') {
                    // If there's no initialTerm, assign the current input value
                    setInitialTerm(currentTerm);
                }
                // Update the active index of the results container
                if (newIndex === -2) {
                    // Set the index to the end of the results
                    setCurrentIndex(results.length - 1);
                    emitActiveTerm(results[results.length - 1].label);
                } else {
                    // Otherwise set the new up index
                    setCurrentIndex(newIndex);
                    // If the user hits the top of the results and keeps going
                    if (newIndex === -1) {
                        emitActiveTerm(initialTerm);
                        // Clear the term
                        setInitialTerm('');
                    } else {
                        emitActiveTerm(results[newIndex].label);
                    }
                }
            },
        }));

        const results = generateResults(dataSource);

        return (
            <StyledResultsContainerContainer
                className={classNames(
                    'anchor-auto-complete-results-container',
                    className
                )}
                {...props}
            >
                <List className="auto-complete-results">
                    {results.map((item: DataItem, index: number) => (
                        <Item
                            onMouseOver={() => emitActiveIndex(index)}
                            onSelect={() => emitSelectedItem(item)}
                            key={`anchor-result-${index}`}
                            active={index === currentIndex}
                            value={item.value}
                        >
                            {item.label}
                        </Item>
                    ))}
                </List>
            </StyledResultsContainerContainer>
        );
    }
);

export default ResultsContainer;
