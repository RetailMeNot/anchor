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

type AutoCompleteDataSource = {
    label?: string;
    listItemType?: 'item' | 'title' | 'divider';
    [key: string]: any;
}[];

interface AutoCompleteProps {
    dataSource?: AutoCompleteDataSource | string[] | number[];
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    value?: string | number;
    // TODO: resultTemplate
    // TODO: allowClear
    allowClear?: boolean;
    // Visual
    border?: boolean;
    background?: string;
    color?: string;
    // TODO: Allow children
    // Children Components
    // children?: any;
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
    box-shadow: 0 0.5rem 0.75rem -0.375rem rgba(0, 0, 0, 0.12);

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
    // children,
    suffix,
    prefix,
    dataSource = [],
    value = '',
    onFilter = () => null,
    onSelect = () => null,
    onChange = () => null,
    size = 'lg',
    border = true,
    background = colors.white.base,
    color = colors.charcoal.light,
    ...props
}: AutoCompleteProps) => {
    // Flag for autocomplete focus
    const [isFocused, setIsFocused] = useState<boolean>(false);
    // The index of the active result item
    const setActiveResultIndex = useState<number>(0)[1];
    // console.log(activeResultIndex);
    // TODO: the autocomplete itself doesn't have a value
    // The current search term
    const [term, setTerm] = useState<string>(value ? `${value}` : '');
    // Instance of the nested input
    const inputRef = useRef<any>();
    const resultsRef = useRef<any>();

    // Handle updating the search term
    const changeSearchTerm = (newTerm: string) => {
        // Fire external filter event
        onFilter(newTerm);
        // Update new term
        setTerm(newTerm);
    };
    // Handle updating the search term
    const updateInputAndTerm = (newTerm: string) => {
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
        changeSearchTerm(newValue.label);
        // Fire External Select/Change Event
        onSelect(newValue.label, newValue);
        onChange(newValue.label, newValue);
        // Update the input value
        inputRef.current.update(newValue.label);
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
                onChange={(newValue: string) => {
                    changeSearchTerm(newValue);
                }}
                onKeyDown={(event: React.KeyboardEvent) => {
                    switch (event.keyCode) {
                        case EventKeyCodes.TAB:
                        case EventKeyCodes.ENTER:
                            event.preventDefault();
                            event.stopPropagation();
                            if (isFocused) {
                                // Unset initialTerm
                                resultsRef.current.clearInitialTerm();
                                // Set the active value of the autocomplete
                                resultsRef.current.selectActive();
                            }
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
                            setIndex(0);
                            resultsRef.current.clearInitialTerm();
                            break;
                    }
                }}
                name="auto-complete"
                className="auto-complete-input"
            />
            {isFocused && (
                <ResultsContainer
                    ref={resultsRef}
                    emitSelectedItem={(item: DataItem) => {
                        changeActiveValue(item);
                    }}
                    emitActiveIndex={(i: number) => {
                        setActiveResultIndex(i);
                    }}
                    emitActiveTerm={(newTerm: string) => {
                        updateInputAndTerm(newTerm);
                    }}
                    dataSource={dataSource}
                    term={term}
                />
            )}
        </StyledAutoComplete>
    );
};

export default AutoComplete;
