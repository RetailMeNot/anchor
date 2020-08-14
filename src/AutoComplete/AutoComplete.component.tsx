// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
// COMPONENTS
import { Input } from '../Form';
import { InputPropsType } from '../Form/Input/Input.component';
import { ResultsContainer } from './ResultsContainer';

const { useEffect, useState, useRef } = React;

type AutoCompleteDataSource = {
    [key: string]: any;
    label?: string;
    listItemType?: 'item' | 'title' | 'divider';
}[];

type InputTypes = 'email' | 'number' | 'search' | 'tel' | 'text';

interface AutoCompleteProps extends SpaceProps {
    className?: string;
    dataSource?: AutoCompleteDataSource | string[] | number[];
    debug?: boolean;
    name?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
    value?: string | number;
    // TODO: resultTemplate
    // TODO: allowClear
    allowClear?: boolean;
    browserAutoComplete?: boolean;
    autoFocus?: boolean;
    // Visual
    background?: string;
    border?: boolean;
    color?: string;
    shadow?: boolean;
    // TODO: Allow children
    resultTemplate?: (props: any) => any;
    inputProps?: InputPropsType;
    inputType?: InputTypes;
    prefix?: any;
    suffix?: any;
    // Event Handlers
    onBlur?: (event?: React.FocusEvent) => void;
    onChange?: (value?: string | number, item?: any) => void;
    onFilter?: (term: string | number) => void;
    onFocus?: (event?: React.FocusEvent) => void;
    onSelect?: (value?: string | number, item?: any) => void;
}

interface StyledAutoCompleteProps {
    background?: string;
    border?: boolean;
    color?: string;
    shadow?: boolean;
}

const EventKeyCodes = {
    TAB: 9,
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
};

const StyledAutoComplete = styled('div')<StyledAutoCompleteProps>`
    width: 100%;
    position: relative;
    border: solid thin transparent;
    ${({ border }) =>
        css({
            borderColor: border ? 'borders.base' : 'transparent',
        })};
    border-radius: base;
    transition: border-color 250ms;
    ${({ background: backgroundColor, color }) =>
        css({ backgroundColor, color })}
    ${({ shadow }) =>
        shadow
            ? 'box-shadow: 0 0.5rem 0.75rem -0.375rem rgba(0, 0, 0, 0.12);'
            : null};

    &:hover {
        ${({ border }) =>
            css({
                borderColor: border ? 'borders.dark' : 'transparent',
            })};
    }

    &:active,
    &.focus,
    &:focus {
        ${({ border }) =>
            css({
                borderColor: border ? 'borders.dark' : 'transparent',
            })};
    }

    .auto-complete-input {
        border: none;
    }
    ${spaceStyles}
`;

export const AutoComplete = ({
    allowClear,
    browserAutoComplete = true,
    autoFocus = false,
    background = 'white',
    border = true,
    className,
    color = 'text.light',
    dataSource = [],
    debug = false,
    inputProps,
    inputType = 'text',
    name = '',
    onChange = () => null,
    onFilter = () => null,
    onSelect = () => null,
    placeholder,
    prefix,
    resultTemplate,
    shadow = false,
    size = 'lg',
    suffix,
    value = '',
    ...props
}: AutoCompleteProps) => {
    // Flag for autocomplete focus
    const [isFocused, setIsFocused] = useState<boolean>(autoFocus);
    // The current search term
    const [term, setTerm] = useState<string>(value ? `${value}` : '');
    const autoFocusRef = useRef<HTMLDivElement>(null);
    // Instance of the nested input
    const inputRef = useRef<any>();
    const resultsRef = useRef<any>();
    let rootElement: any;

    // Handle click outside of auto complete component
    const handleOutsideClick = (e: any) => {
        if (
            isFocused &&
            autoFocusRef.current &&
            !autoFocusRef.current.contains(e.target)
        ) {
            setIsFocused(false);
        }
    };
    // Set root element and listener for outside click
    useEffect(() => {
        rootElement = autoFocusRef.current
            ? autoFocusRef.current.getRootNode()
            : null;

        if (rootElement) {
            rootElement.addEventListener('click', handleOutsideClick);
        }

        return () =>
            rootElement.removeEventListener('click', handleOutsideClick);
    }, [inputRef, isFocused]);

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

    // Handle updating the autocomplete value
    const changeActiveValue = (newValue: any) => {
        changeSearchTerm(newValue.label);
        // Fire External Select/Change Event
        onSelect(newValue.label, newValue);
        onChange(newValue.label, newValue);
        // Update the input value
        inputRef.current.update(newValue.label);
        inputRef.current.blur();
        // Reset the index
        resultsRef.current.setActiveIndex(0);
        setIsFocused(false);
    };

    return (
        <StyledAutoComplete
            ref={autoFocusRef}
            shadow={shadow}
            border={border}
            background={background}
            color={color}
            className={classNames('anchor-auto-complete', className, {
                focus: isFocused,
            })}
            {...props}
        >
            <Input
                ariaLabel={
                    name.length
                        ? `auto-complete-${name.toLowerCase()}`
                        : 'auto-complete'
                }
                inputProps={inputProps}
                type={inputType}
                value={term}
                ref={inputRef}
                size={size}
                autoComplete={browserAutoComplete ? 'on' : 'off'}
                autoFocus={autoFocus}
                prefix={prefix}
                suffix={suffix}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onChange={(newValue: string) => {
                    changeSearchTerm(newValue);
                }}
                onKeyDown={(event: React.KeyboardEvent) => {
                    switch (event.keyCode) {
                        case EventKeyCodes.TAB:
                            if (!term) {
                                break;
                            }
                        case EventKeyCodes.ENTER:
                            if (term) {
                                event.preventDefault();
                            }
                            event.stopPropagation();
                            // This should only fire if the results container exists
                            if (isFocused && resultsRef.current) {
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
                            if (resultsRef.current) {
                                resultsRef.current.clearInitialTerm();
                                resultsRef.current.setActiveIndex(0);
                            }
                            break;
                    }
                }}
                name="auto-complete"
                className="auto-complete-input"
            />

            {(isFocused || debug) && dataSource.length > 0 && (
                <ResultsContainer
                    size={size}
                    ref={resultsRef}
                    emitSelectedItem={(item: any) => {
                        changeActiveValue(item);
                    }}
                    emitActiveTerm={(newTerm: string) => {
                        updateInputAndTerm(newTerm);
                    }}
                    resultTemplate={resultTemplate}
                    dataSource={dataSource}
                    term={term}
                />
            )}
        </StyledAutoComplete>
    );
};
