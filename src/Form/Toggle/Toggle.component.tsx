// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from 'styled-components';
import classnames from 'classnames';

// ANCHOR
import { colors } from '../../theme/colors.theme';

const metaTextColor = colors.ash.dark;

const inputHeight = `22px`;
const knobWidth = `32px`;
const trackWidth = `32px`;
const trackHeight = `12px`;

const StyledCheckbox = styled('input')`
    display: none;
`;

const StyledSpan = styled('span')<ToggleProps>`
    position: relative;
    height: ${inputHeight};
    width: ${trackWidth};
    display: flex;
    cursor: pointer;

    // Styles the track the knob slides on
    &:before {
        position: absolute;
        top: 50%;
        content: '';

        height: ${trackHeight};
        width: ${knobWidth};
        border-radius: ${knobWidth};
        background-color: ${colors.ash.light};
        transform: translate(0, -50%);
        transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    // Styles the knob of the toggle
    &:after {
        display: block;
        position: absolute;
        box-sizing: border-box;
        content: '';
        transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
            background-color 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        top: 50%;
        ${({ knobSize }) => css`
            width: ${knobSize};
            height: ${knobSize};
        `}
        border-radius: 50%;
        background-color: ${metaTextColor};
        transform: translate(0, -50%);
    }

    ${({ checked, knobSize }) =>
        checked &&
        css`
            &:before {
                background-color: ${colors.grapePurchase.light};
            }

            &:after {
                transform: translate(calc(${trackWidth} - ${knobSize}), -50%);
                background-color: ${colors.grapePurchase.base};
            }
        `}
`;

interface ToggleProps {
    children?: any;
    className?: string;
    id?: string;

    checked?: boolean;
    disabled?: boolean;

    knobSize?: string;

    inputProps?: any;
    onChange?: (arg: any) => any;
}

export const Toggle = ({
    id,
    children,
    className,
    inputProps,
    knobSize = '1.125rem',
    ...props
}: ToggleProps): React.ReactElement<ToggleProps> => (
    <label className={classnames('anchor-toggle', className)} htmlFor={id}>
        <StyledCheckbox type="checkbox" id={id} {...props} {...inputProps} />
        <StyledSpan knobSize={knobSize} {...props}>
            {children}
        </StyledSpan>
    </label>
);
