// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import classnames from 'classnames';

const StyledInput = styled('input')`
    display: none;
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0
    right: 0;
    bottom: 0;
`;

const StyledLabel = styled('label')<RadioProps>`
    position: relative;
    display: inline-flex;
    cursor: pointer;
    font-family: ${th.color('typography.fontFamily')};
    ${({ size }) => css({ width: size, height: size })}

    &:before {
        display: block;
        position: absolute;
        box-sizing: border-box;
        content: '';
        top: 0;
        left: 0;
        z-index: 1;
        border-radius: circular;
        background-color: white;

        ${({ size }) =>
            css({
                width: size,
                height: size,
            })}
        ${({ disabled }) => css`
            border: 1px solid
                ${th.color(disabled ? 'text.disabled' : 'neutrals.ash.light')};
        `}
    }

    &:after {
        position: absolute;
        border-radius: circular;
        ${({ checked, size, fillSize, fillColor }) =>
            css({
                width: fillSize,
                height: fillSize,
                top: `calc((${size} - ${fillSize}) / 2)`,
                left: `calc((${size} - ${fillSize}) / 2)`,
                backgroundColor: fillColor,
                visibility: !checked ? 'hidden' : undefined,
            })}
        content: '';
        z-index: 2;
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
    fillSize?: string;
    fillColor?: string;

    inputProps?: any;
    onChange?: (arg: any) => any;
}

export const Radio = ({
    id,
    children,
    className,
    inputProps,
    size = '1.375rem',
    fillSize = '0.75rem',
    fillColor = '#794a83',
    ...props
}: RadioProps): React.ReactElement<RadioProps> => (
    <StyledLabel
        className={classnames('anchor-radio', className)}
        size={size}
        fillSize={fillSize}
        fillColor={fillColor}
        {...props}
    >
        <StyledInput type="checkbox" id={id} {...props} {...inputProps} />
    </StyledLabel>
);
