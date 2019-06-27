// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import classnames from 'classnames';

// ANCHOR
import { colors } from '../../theme/colors.theme';
import { fonts } from '../../theme/fonts.theme';

const StyledInput = styled('input')`
    display: none;
`;

const StyledLabel = styled('label')<RadioProps>`
    position: relative;
    display: inline-flex;
    cursor: pointer;
    ${({ size }) => css({ width: size, height: size })}
    font-family: ${fonts.fontFamily};

    &:before {
        display: block;
        position: absolute;
        box-sizing: border-box;
        content: '';
        top: 0;
        left: 0;
        z-index: 1;
        border: 1px solid ${th.color('neutrals.ash.light')};
        border-radius: 50%;
        background-color: white;

        ${({ size }) => css({ width: size, height: size })}
    }

    &:after {
        position: absolute;
        z-index: 2;
        ${({ size, fillSize }) =>
            css({
                width: fillSize,
                height: fillSize,
                top: `calc((${size} - ${fillSize}) / 2)`,
                left: `calc((${size} - ${fillSize}) / 2)`,
            })}
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
    fillSize?: string;

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
    ...props
}: RadioProps): React.ReactElement<RadioProps> => (
    <StyledLabel
        className={classnames('anchor-radio', className)}
        size={size}
        fillSize={fillSize}
        {...props}
    >
        <StyledInput type="checkbox" id={id} {...props} {...inputProps} />
    </StyledLabel>
);
