// REACT
import * as React from 'react';
const { forwardRef } = React;
// VENDOR
import styled, { css } from '@xstyled/styled-components';
import {
    compose,
    space as spaceStyles,
    color as colorStyles,
    backgroundColor as backgroundColorStyles,
    SpaceProps,
} from '@xstyled/system';
import classnames from 'classnames';

// ANCHOR
import { Check } from '../../Icon';

const HiddenInput = styled('input')<CheckboxProps>`
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const StyledCheckbox = styled('label')<CheckboxProps>`
    box-sizing: border-box;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    user-select: none;
    // todo: don't hardcode
    border: thin solid #808080;
    // todo: may want to read from a theme value here
    border-radius: 2px;

    ${({ size, disabled }) =>
        css({
            height: size,
            width: size,
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.4 : 1,
        })};

    ${compose(spaceStyles, colorStyles, backgroundColorStyles)};
`;

interface CheckboxProps extends SpaceProps {
    className?: string;
    id?: string;
    htmlFor?: string;
    backgroundColor?: string;

    checked?: boolean;
    disabled?: boolean;
    name?: string;

    size?: string;
    color?: string;

    inputProps?: any;
    onChange?: (arg: any) => any;
}

export const Checkbox = forwardRef(
    (
        {
            id,
            className,
            inputProps,
            color = 'primary.base',
            backgroundColor,
            checked,
            size = '1.375rem',
            disabled,
            onChange,
            ...props
        }: CheckboxProps,
        ref: React.RefObject<any>
    ): React.ReactElement<CheckboxProps> => (
        <StyledCheckbox
            className={classnames('anchor-checkbox', className)}
            disabled={disabled}
            htmlFor={id}
            color={color}
            backgroundColor={
                backgroundColor || (disabled ? 'background.base' : 'white')
            }
            size={size}
            checked={checked}
            {...props}
        >
            {checked && <Check scale="sm" />}
            <HiddenInput
                type="checkbox"
                id={id}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
                ref={ref}
                {...props}
                {...inputProps}
            />
        </StyledCheckbox>
    )
);
