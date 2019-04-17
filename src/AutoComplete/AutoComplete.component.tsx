// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { List, Item } from '../List';
import { Input } from '../Form';
// THEME
import { colors } from '../theme';

const { useState, useRef } = React;

// TODO: This should be built from a FormControl Input, but we don't have one yet. =(

type DataItem = {
    value: number | string;
    label: number | string;
};

interface AutoCompleteProps {
    dataSource: DataItem[];
    className?: string;
    size?: 'small' | 'large';
    placeholder?: string;
    children?: any;
    value?: string | number;
    // Children
    suffix?: React.ReactElement<any>; // TODO: consider buttons & other elements
    prefix?: React.ReactElement<any>; // TODO: consider buttons & other elements
    // Event Handlers
    onFilter?: (...props: any) => void;
    onSelect?: (...props: any) => void;
    onFocus?: (...props: any) => void;
    onBlur?: (...props: any) => void;
}

const EventKeyCodes = {
    TAB: 9,
    ENTER: 13,
    ARROW_UP: 38,
    ARROW_DOWN: 40,
};

const StyledAutoComplete = styled.div`
    width: 100%;
    position: relative;
    border: solid thin ${colors.ash.light};
    border-radius: 0.25rem;
    transition: border-color 250ms;
    background: ${colors.white.base};

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

const StyledAutoCompleteResults = styled.div`
    background-color: white;
    position: absolute;
    width: inherit;
    z-index: 3;
    box-sizing: content-box;
    top: 3.5rem;
    box-shadow: 0 0.5rem 0.75rem -0.375rem rgba(0, 0, 0, 0.12);
    border-radius: 0 0 4px 4px;
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
    ...props
}: AutoCompleteProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [activeResult, setActiveResult] = useState<number>(0);
    const inputRef = useRef<any>();
    const returnValue = (newValueIndex: number) =>
        dataSource[newValueIndex].value;
    const selectValue = (newValueIndex: number) => {
        setActiveResult(newValueIndex);
        onSelect(returnValue(newValueIndex));
    };

    return (
        <StyledAutoComplete
            className={classNames('anchor-auto-complete', className)}
            {...props}
        >
            <Input
                ref={inputRef}
                size="lg"
                prefix={prefix}
                suffix={suffix}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={(event: React.KeyboardEvent) => {
                    switch (event.keyCode) {
                        case EventKeyCodes.TAB:
                        case EventKeyCodes.ENTER:
                            event.preventDefault();
                            event.stopPropagation();
                            inputRef.current.update(returnValue(activeResult));
                            inputRef.current.blur();
                            break;
                        case EventKeyCodes.ARROW_DOWN:
                            event.preventDefault();
                            event.stopPropagation();
                            dataSource.length - 1 === activeResult
                                ? selectValue(0)
                                : selectValue(activeResult + 1);
                            break;
                        case EventKeyCodes.ARROW_UP:
                            event.preventDefault();
                            event.stopPropagation();
                            activeResult === 0
                                ? selectValue(dataSource.length - 1)
                                : selectValue(activeResult - 1);
                            break;
                        default:
                            break;
                    }
                }}
                name="auto-complete"
                className="auto-complete-input"
            />
            <StyledAutoCompleteResults>
                {children}
                {isFocused && !children && (
                    <List
                        title="Recent Searches"
                        className="auto-complete-results"
                    >
                        {dataSource.map((item: DataItem, index: number) => (
                            <Item
                                onSelect={(itemValue: number | string) => {
                                    inputRef.current.update(itemValue);
                                    selectValue(index);
                                }}
                                key={`anchor-result-${index}`}
                                active={index === activeResult}
                                value={item.value}
                            >
                                {item.label}
                            </Item>
                        ))}
                    </List>
                )}
            </StyledAutoCompleteResults>
        </StyledAutoComplete>
    );
};

export default AutoComplete;
