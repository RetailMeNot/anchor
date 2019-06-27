// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from 'styled-components';
import classnames from 'classnames';

// ANCHOR
import { colors } from '../../theme/colors.theme';
import { fonts } from '../../theme/fonts.theme';

const inputHeight = `22px`;
const knobWidth = `32px`;
const trackWidth = `32px`;
const trackHeight = `12px`;

const StyledCheckbox = styled('input')`
    display: none;
`;

const StyledToggle = styled('span')`
    display: inline-flex;
    flex-direction: column;

    // Styles for the ON/OFF
    font-family: ${fonts.fontFamily};
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    text-align: center;
    color: #555;

    user-select: none;
`;

const StyledSpan = styled('span')<ToggleProps>`
    position: relative;
    height: ${inputHeight};
    width: ${trackWidth};
    margin-bottom: 4px;
    display: flex;
    cursor: pointer;

    // Styles the track the knob slides on
    &:before {
        position: absolute;
        top: 50%;
        content: '';

        height: ${trackHeight};
        width: ${knobWidth};
        border-radius: 1000px;
        background-color: ${colors.ash.light};
        transform: translate(0, -50%);
        transition: background-color 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                    opacity 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
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
        background-color: ${colors.ash.dark};
        transform: translate(0, -50%);
    }

    ${({ checked, knobSize }) =>
        checked &&
        css`
            &:before {
                // background-color: ${colors.grapePurchase.light};
                background-color: #784c82;
                opacity: 0.5;
            }

            &:after {
                transform: translate(calc(${trackWidth} - ${knobSize}), -50%);
                // background-color: ${colors.grapePurchase.base};
                background-color: #784c82;
            }
        `}
`;

interface ToggleProps {
    className?: string;
    id?: string;

    checked?: boolean;
    disabled?: boolean;

    showText?: boolean;
    knobSize?: string;
    toggleColor?: string;

    inputProps?: any;
    onChange?: (arg: any) => any;
}

export const Toggle = ({
    id,
    className,
    inputProps,
    checked,
    showText = true,
    toggleColor = '#784c82',
    knobSize = '1.125rem',
    ...props
}: ToggleProps): React.ReactElement<ToggleProps> => (
    <StyledToggle className={classnames('anchor-toggle', className)} >
        <label htmlFor={id}>
            <StyledCheckbox type="checkbox" id={id} checked={checked} {...props} {...inputProps} />
            <StyledSpan knobSize={knobSize} toggleColor={toggleColor} checked={checked} {...props} />
        </label>
        {showText && (checked ? 'ON' : 'OFF')}
    </StyledToggle>
);
