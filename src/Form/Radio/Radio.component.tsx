// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from 'styled-components';
import classnames from 'classnames';

// ANCHOR
import { colors } from '../../theme/colors.theme';
import { fonts } from '../../theme/fonts.theme';
import { Typography } from '../../Typography/index';

const StyledInput = styled('input')`
    display: none;
`;

const StyledLabel = styled('label')<RadioProps>`
    position: relative;
    display: flex;
    cursor: pointer;
    ${({ size }) => css`
        padding-left: calc(${size} + 0.5rem);
        line-height: ${size};
    `}
    margin-bottom: 1rem;
    font-family: ${fonts.fontFamily};

    &:before {
        display: block;
        position: absolute;
        box-sizing: border-box;
        content: '';
        top: 0;
        left: 0;
        z-index: 1;
        border: 1px solid ${colors.ash.light};
        border-radius: 50%;
        background-color: white;

        ${({ size }) => css({ width: size, height: size })}
    }

    &:after {
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 2;
        width: 12px;
        height: 12px;
        content: '';
        border-radius: 50%;
        background-color: ${colors.grapePurchase.base};

        ${({ checked }) => !checked && css({ visibility: 'hidden' })}
    }
`;

interface RadioProps {
    children?: any;
    className?: string;
    id?: string;

    checked?: boolean;
    disabled?: boolean;
    value?: string;

    size?: string;

    inputProps?: any;
    onChange?: (arg: any) => any;
}

export const Radio = ({
    id,
    children,
    className,
    inputProps,
    size = '1.375rem',
    ...props
}: RadioProps): React.ReactElement<RadioProps> => (
    <StyledLabel
        className={classnames('anchor-radio', className)}
        htmlFor={id}
        size={size}
        {...props}
    >
        <StyledInput type="checkbox" id={id} {...props} {...inputProps} />
        <Typography>{children}</Typography>
    </StyledLabel>
);
