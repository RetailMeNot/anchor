// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, variant, space as spaceStyles, SpaceProps } from '@xstyled/system';
// COMPONENTS
import { Typography } from '../../Typography';
import { INPUT_THEME, INPUT_KEY } from './utils';
// UTILS
import { get } from '../../utils/get/get';

const {
    useState,
    forwardRef,
    useImperativeHandle,
    useEffect,
    createRef,
} = React;

export type InputPropsType = {
    [key: string]: string;
};

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

interface InputProps extends React.HTMLAttributes<HTMLInputElement>, SpaceProps {
    // Identifiers
    className?: string;
    id?: string;
    name?: string;
    // Value Assignment
    value?: InputContentType;
    // Presentation
    ariaLabel?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    // fullWidth?: boolean;
    label?: string;
    placeholder?: string;
    readOnly?: boolean;
    // TODO: buttons?
    prefix?: any;
    size?: 'sm' | 'md' | 'lg';
    suffix?: any;
    type?: InputTypes;
    // Overrides
    inputProps?: InputPropsType;
    // Event Handlers
    onChange?: InputEventHandler;
    onBlur?: InputEventHandler;
    onKeyDown?: InputEventHandler;
    onKeyUp?: InputEventHandler;
    onFocus?: InputEventHandler;
}

const StyledInputWrapper = styled('div')<InputProps>`
    // Input Display Size
    display: block;
    position: relative;
    border: solid thin ${th.color('borders.base')};
    border-radius: base;
    cursor: text;
    box-sizing: border-box;
    min-width: 5rem;
    width: 100%;
    margin: 0;
    // TODO: delete
    overflow: hidden;

    ::placeholder {
        font-family: base;
        color: text.placeholder;
    }

    &.focus {
        border-color: borders.dark;
    }

    label {
        transform-origin: left bottom;
        height: 1.4rem;
        transform: translate(0, 0.6rem) scale(1);
        &.lift {
            transform: translate(0, 0) scale(1);
        }
    }

    ${variant({
        key: `${INPUT_KEY}.sizes`,
        prop: 'size',
        default: 'md',
        variants: INPUT_THEME.sizes,
    })}

    ${spaceStyles}
`;

const StyledReversedInputContainer = styled('div')`
    flex: 1 1 auto;
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
    color: text.base;
    // TODO: bring this back when the 'bug' in styled components gets sorted out (MVP)
    //transition: all 250ms;
    font-family: base;
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

const StyledInputContainer = styled('div')`
    display: flex;
    align-items: center;
    height: 100%;
`;

const eventTypeResolver = (
    handler: (...args: any) => any,
    event: React.FocusEvent<Element> | React.ChangeEvent<HTMLInputElement>,
    type: InputTypes
) => {
    const inputValue = get(event, 'target.value');

    switch (type) {
        case 'number':
            // Although counter-intuitive, to properly clear an input field with type number it must
            // be fed an empty string.
            handler(inputValue ? parseFloat(inputValue) : '', event);
            break;
        case 'text':
            // An empty inputValue would be null which React doesn't handle well.
            handler(inputValue || '', event);
            break;
        default:
            handler(inputValue || '', event);
            break;
    }
};

export const Input = forwardRef(
    (
        {
            className,
            inputProps,
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
            ...props
        }: InputProps,
        ref: React.RefObject<any>
    ) => {
        const inputRef = createRef<HTMLInputElement>();
        const [inputValue, setInputValue] = useState<string | number>(value);
        const [focus, setFocus] = useState<boolean>(false);

        useEffect(() => {
            setInputValue(value);
        }, [value]);

        useImperativeHandle(ref, () => ({
            update: (newValue: InputContentType) => {
                setInputValue(newValue);
            },
            blur: () => (inputRef.current ? inputRef.current.blur() : null),
        }));

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
                {...props}
            >
                <StyledInputContainer>
                    {prefix
                        ? React.cloneElement(prefix, {
                              className: 'input-prefix',
                          })
                        : null}
                    <StyledReversedInputContainer>
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
                            {...inputProps}
                            {...props}
                        />
                        {label && (
                            <Typography
                                color="text.label"
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
                    </StyledReversedInputContainer>
                    {suffix
                        ? React.cloneElement(suffix, {
                              className: 'input-suffix',
                          })
                        : null}
                </StyledInputContainer>
            </StyledInputWrapper>
        );
    }
);
