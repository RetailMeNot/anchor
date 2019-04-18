// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Input } from '../Form';
import { ResultsContainer, DataItem } from './ResultsContainer';
// THEME
import { colors } from '../theme';

const { useState, useRef } = React;

interface AutoCompleteProps {
    dataSource: any[];
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    value?: string | number;
    resultsTitle?: string;
    // TODO: allowClear
    allowClear?: boolean;
    // Visual
    border?: boolean;
    background?: string;
    color?: string;
    // Children Components
    children?: any;
    suffix?: React.ReactElement<any>;
    prefix?: React.ReactElement<any>;
    // Event Handlers
    onFilter?: (term: string | number) => void;
    onSelect?: (value?: string | number, item?: DataItem) => void;
    onChange?: (value?: string | number, item?: DataItem) => void;
    onFocus?: (event?: React.FocusEvent) => void;
    onBlur?: (event?: React.FocusEvent) => void;
}

interface StyledAutoCompleteProps {
    border?: boolean;
    background?: string;
    color?: string;
}

const EventKeyCodes = {
    TAB: 9,
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
};

const StyledAutoComplete = styled.div<StyledAutoCompleteProps>`
    width: 100%;
    position: relative;
    ${({ border }: StyledAutoCompleteProps) =>
        border ? `border: solid thin ${colors.ash.light}` : null};
    border-radius: 0.25rem;
    transition: border-color 250ms;
    background: ${({ background }: StyledAutoCompleteProps) => background};
    color: ${({ color }: StyledAutoCompleteProps) => color};

    &:hover {
        border: solid thin ${colors.ash.base};
    }

    &:active,
    &:focus {
        border: solid thin ${colors.ash.dark};
    }

    .auto-complete-input {
        border: none;
    }
`;

export const AutoComplete = ({
    className,
    placeholder,
    children,
    suffix,
    prefix,
    dataSource,
    value = '',
    onFilter = () => null,
    onSelect = () => null,
    onChange = () => null,
    size = 'lg',
    resultsTitle,
    border = true,
    background = colors.white.base,
    color = colors.charcoal.light,
    ...props
}: AutoCompleteProps) => {
    // Flag for autocomplete focus
    const [isFocused, setIsFocused] = useState<boolean>(false);
    // The index of the active result item; starts at -1 because the first active result is the value of the input
    const [activeResultIndex, setActiveResultIndex] = useState<number>(-1);
    // TODO: the autocomplete itself doesn't have a value
    // The current search term
    const [term, setTerm] = useState<string | number>(value);
    // Instance of the nested input
    const inputRef = useRef<any>();
    const resultsRef = useRef<any>();

    // Handle updating the search term
    const changeSearchTerm = (newTerm: string | number) => {
        // Fire external filter event
        onFilter(newTerm);
        // Update new term
        setTerm(newTerm);
    };
    // Handle updating the search term
    const updateInputAndTerm = (newTerm: string | number) => {
        // Update the filter
        setTerm(newTerm);
        // Update the input
        inputRef.current.update(newTerm);
    };

    const setIndex = (newIndex: number) => {
        setActiveResultIndex(newIndex);
        resultsRef.current.setActiveIndex(newIndex);
    };

    // Handle updating the autocomplete value
    const changeActiveValue = (newValue: DataItem) => {
        changeSearchTerm(newValue.value);
        // Fire External Select/Change Event
        onSelect(newValue.value, newValue);
        onChange(newValue.value, newValue);
        // Update the input value
        inputRef.current.update(newValue.value);
        inputRef.current.blur();
        // Reset the index
        setActiveResultIndex(0);
    };
    return (
        <StyledAutoComplete
            border={border}
            background={background}
            color={color}
            className={classNames('anchor-auto-complete', className)}
            {...props}
        >
            <Input
                value={term}
                ref={inputRef}
                size={size}
                prefix={prefix}
                suffix={suffix}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(newValue: string | number) => {
                    changeSearchTerm(newValue);
                }}
                onKeyDown={(event: React.KeyboardEvent) => {
                    switch (event.keyCode) {
                        case EventKeyCodes.TAB:
                        case EventKeyCodes.ENTER:
                            event.preventDefault();
                            event.stopPropagation();
                            // Unset initialTerm
                            resultsRef.current.clearInitialTerm();
                            // Set the active value of the autocomplete
                            changeActiveValue(dataSource[activeResultIndex]);
                            break;
                        case EventKeyCodes.ARROW_DOWN:
                            event.preventDefault();
                            event.stopPropagation();
                            resultsRef.current.handleNext(term);
                            break;
                        case EventKeyCodes.ARROW_UP:
                            event.preventDefault();
                            event.stopPropagation();
                            resultsRef.current.handlePrevious(term);
                            break;
                        default:
                            setIndex(-1);
                            break;
                    }
                }}
                name="auto-complete"
                className="auto-complete-input"
            />
            {isFocused && (
                <ResultsContainer
                    ref={resultsRef}
                    initialIndex={activeResultIndex}
                    emitSelectedItem={(a: DataItem) => {
                        changeActiveValue(a);
                    }}
                    emitActiveIndex={(i: number) => {
                        setActiveResultIndex(i);
                    }}
                    emitActiveTerm={(newTerm: string) => {
                        updateInputAndTerm(newTerm);
                    }}
                    dataSource={children || dataSource}
                />
            )}
        </StyledAutoComplete>
    );
};

export default AutoComplete;
