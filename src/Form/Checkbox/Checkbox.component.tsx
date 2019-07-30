// REACT
import * as React from 'react';
const { forwardRef } = React;

// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { compose } from '@xstyled/system';
import classnames from 'classnames';

// ANCHOR
import { Check } from '../..';
import { StyledIcon } from '../../Icon/utils';
import {
    space as spaceStyles,
    SpaceProps,
    color as colorStyles,
    ColorProps,
    backgroundColor as backgroundColorStyles,
    BackgroundColorProps,
} from '../../theme/system.theme';

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
    border: dark;
    border-radius: 2px;

    ${compose(
        spaceStyles,
        colorStyles,
        backgroundColorStyles
    )}

    ${({ size, disabled }) =>
        css({
            height: size,
            width: size,
            cursor: disabled ? 'default' : 'pointer',
            opacity: disabled ? 0.4 : 1,
        })}

    ${StyledIcon} {
        transition: opacity 100ms ease-in-out;
        ${({ checked }) =>
            css({
                opacity: checked ? 1 : 0,
            })}
    }
`;

interface CheckboxProps extends SpaceProps, ColorProps, BackgroundColorProps {
    className?: string;
    id?: string;
    htmlFor?: string;

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
                backgroundColor || (disabled ? 'neutrals.silver.base' : 'white')
            }
            size={size}
            checked={checked}
            {...props}
        >
            <Check scale="sm" />
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
