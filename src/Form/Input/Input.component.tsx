// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// COMPONENTS
import { Typography } from '../../Typography';
import { Grid, Cell, CenteredCell } from '../../Grid';
// UTILS
import { get } from '../../utils/get/get';

const { useState, forwardRef, useImperativeHandle } = React;

type InputTypes =
    // | 'button'
    // | 'checkbox'
    // | 'color'
    // | 'date'
    // | 'datetime-local'
    | 'email'
    // | 'file'
    // | 'hidden'
    // | 'image'
    // | 'month'
    | 'number'
    // | 'password'
    // | 'radio'
    // | 'range'
    // | 'reset'
    // | 'search'
    // | 'submit'
    | 'tel'
    | 'text';
// | 'time'
// | 'url'
// | 'week'

type InputContentType = string | number | any;
type InputEventHandler = (
    value?: InputContentType,
    event?: KeyboardEvent
) => any;

interface InputProps {
    // Identifiers
    id?: string;
    className?: string;
    name?: string;
    // Value Assignment
    value?: InputContentType;
    // Presentation
    autoFocus?: boolean;
    disabled?: boolean;
    // fullWidth?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    label?: string;
    ariaLabel?: string;
    // TODO: buttons?
    prefix?: React.FunctionComponent<any> | JSX.Element;
    suffix?: React.FunctionComponent<any> | JSX.Element;
    size?: 'sm' | 'md' | 'lg';
    type?: InputTypes;
    // Overrides
    inputProps?: any;
    // Event Handlers
    onChange?: InputEventHandler;
    onBlur?: InputEventHandler;
    onKeyDown?: InputEventHandler;
    onKeyUp?: InputEventHandler;
    onFocus?: InputEventHandler;
}

const InputSizeDimensions = {
    sm: css`
        height: 2.5rem;

        input {
            height: 1rem;
            font-size: 0.875rem;
        }
    `,
    md: css`
        height: 3.125rem;
        padding: 0.25rem;

        input {
            height: 1rem;
            font-size: 0.875rem;
        }
    `,
    lg: css`
        height: 3.125rem;
        padding: 0.25rem;

        input {
            height: 1rem;
            font-size: 1rem;
        }
    `,
};

const StyledInputWrapper = styled('div')`
    // Input Display Size
    display: block;
    position: relative;
    border: solid thin ${th.color('borders.base')};
    border-radius: 0.25rem;
    cursor: text;
    box-sizing: border-box;
    min-width: 5rem;
    width: 100%;
    margin: 0;
    // TODO: delete
    overflow: hidden;

    ${({ size = 'md' }: InputProps) => InputSizeDimensions[size]};

    ::placeholder {
        font-family: ${th('typography.fontFamily')};
        color: text.placeholder;
    }

    &.focus {
        border-color: ${th.color('borders.dark')};
    }

    label {
        transform-origin: left bottom;
        height: 1.4rem;
        transform: translate(0, 0.6rem) scale(1);
        &.lift {
            transform: translate(0, 0) scale(1);
        }
    }
`;

const StyledReversedCell = styled(Cell)`
    display: flex;
    flex-flow: column-reverse;
    padding: 0 0.25rem;
    justify-content: center;
`;

const LabelPresent = css`
    &:focus::-webkit-input-placeholder {
        opacity: 1;
    }

    ::-webkit-input-placeholder {
        opacity: 0;
        transition: inherit;
    }
`;

interface StyledInputProps {
    hasLabel?: boolean;
    name: string;
    onBlur?: InputEventHandler;
    onChange: InputEventHandler;
    onFocus: InputEventHandler;
    value: InputContentType;
    type: InputTypes;
    placeholder: InputContentType;
}

const StyledInput = styled('input')<StyledInputProps>`
    box-sizing: border-box;
    border: none;
    padding: 0;
    outline: none !important;
    touch-action: manipulation;
    -webkit-appearance: none;
    background-color: transparent;
    z-index: 1;
    color: text.body;
    // TODO: bring this back when the 'bug' in styled components gets sorted out (MVP)
    //transition: all 250ms;
    font-family: ${th('typography.fontFamily')};
    // Disable Number Spinners
    &[type='number']::-webkit-inner-spin-button,
    &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &:placeholder-shown + label {
        cursor: text;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ${({ hasLabel = false }: any) => (hasLabel ? LabelPresent : null)};
`;

const eventTypeResolver = (
    handler: (...args: any) => any,
    event: React.FocusEvent<Element> | React.ChangeEvent<HTMLInputElement>,
    type: InputTypes
) => {
    const inputValue = get(event, 'target.value');
    switch (type) {
        case 'number':
            handler(inputValue ? parseFloat(inputValue) : null, event);
            break;
        case 'text':
            handler(inputValue, event);
            break;
        default:
            handler(inputValue, event);
            break;
    }
};

const prefixAndSuffixDimensions = '1.5rem';

const InputLayouts = {
    prefix: `${prefixAndSuffixDimensions} 1fr`,
    suffix: `1fr ${prefixAndSuffixDimensions}`,
    both: `${prefixAndSuffixDimensions} 1fr ${prefixAndSuffixDimensions}`,
    neither: `1fr`,
};

export const Input = forwardRef(
    (
        {
            className,
            onBlur = () => null,
            onKeyDown = () => null,
            onKeyUp = () => null,
            onChange = () => null,
            onFocus = () => null,
            type = 'text',
            placeholder,
            name = 'input',
            label,
            prefix,
            suffix,
            value,
            size,
            id,
            ariaLabel,
        }: InputProps,
        ref: React.RefObject<any>
    ) => {
        const inputRef = React.createRef<HTMLInputElement>();
        const [inputValue, setInputValue] = useState<string | number>(value);
        const [focus, setFocus] = useState<boolean>(false);

        useImperativeHandle(ref, () => ({
            update: (newValue: InputContentType) => setInputValue(newValue),
            blur: () => (inputRef.current ? inputRef.current.blur() : null),
        }));

        // TODO: Doc this
        let inputLayout = InputLayouts.neither;
        if (prefix && suffix) {
            inputLayout = InputLayouts.both;
        } else if (prefix) {
            inputLayout = InputLayouts.prefix;
        } else if (suffix) {
            inputLayout = InputLayouts.suffix;
        }
        return (
            <StyledInputWrapper
                size={size}
                onClick={() => {
                    const { current } = inputRef;
                    if (current) {
                        current.focus();
                    }
                }}
                className={classNames('anchor-input', className, {
                    focus,
                })}
            >
                <Grid columns={inputLayout} gap="0" minRowHeight="2.5rem">
                    {prefix && <CenteredCell>{prefix}</CenteredCell>}
                    <StyledReversedCell>
                        <StyledInput
                            aria-label={ariaLabel}
                            ref={inputRef}
                            id={id}
                            hasLabel={!!label}
                            name={name}
                            onBlur={(event: React.FocusEvent) => {
                                eventTypeResolver(onBlur, event, type);
                                setFocus(false);
                            }}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                const {
                                    target: { value: currentValue },
                                } = event;
                                setInputValue(currentValue);
                                eventTypeResolver(onChange, event, type);
                            }}
                            onKeyDown={(event: React.KeyboardEvent) => {
                                onKeyDown(event);
                            }}
                            onKeyUp={(event: React.KeyboardEvent) => {
                                onKeyUp(event);
                            }}
                            onFocus={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                eventTypeResolver(onFocus, event, type);
                                setFocus(true);
                            }}
                            value={inputValue}
                            type={type}
                            placeholder={placeholder}
                        />
                        {label && (
                            <Typography
                                color="ash"
                                hue="dark"
                                scale={
                                    focus ||
                                    (inputValue && `${inputValue}`.length)
                                        ? 12
                                        : 14
                                }
                                htmlFor={name}
                                tag="label"
                                className={classNames({
                                    lift:
                                        focus ||
                                        (inputValue && `${inputValue}`.length),
                                })}
                            >
                                {label}
                            </Typography>
                        )}
                    </StyledReversedCell>
                    {suffix && <CenteredCell>{suffix}</CenteredCell>}
                </Grid>
            </StyledInputWrapper>
        );
    }
);
