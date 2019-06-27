// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import classnames from 'classnames';

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
    font-family: ${th('typography.fontFamily')};
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
    margin-bottom: 0.25rem;
    display: flex;
    cursor: pointer;

    // Styles the track the knob slides on
    &:before {
        position: absolute;
        top: 50%;
        content: '';

        height: ${trackHeight};
        width: ${knobWidth};
        border-radius: circular;
        background-color: neutrals.ash.light;
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
        border-radius: circular;
        background-color: neutrals.ash.dark;
        transform: translate(0, -50%);
    }

    ${({ checked, knobSize, toggleColor }) =>
        checked &&
        css`
            &:before {
                background-color: ${toggleColor};
                opacity: 0.5;
            }

            &:after {
                transform: translate(calc(${trackWidth} - ${knobSize}), -50%);
                background-color: ${toggleColor};
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
    <StyledToggle className={classnames('anchor-toggle', className)}>
        <label htmlFor={id}>
            <StyledCheckbox
                type="checkbox"
                id={id}
                checked={checked}
                {...props}
                {...inputProps}
            />
            <StyledSpan
                knobSize={knobSize}
                toggleColor={toggleColor}
                checked={checked}
                {...props}
            />
        </label>
        {showText && (checked ? 'ON' : 'OFF')}
    </StyledToggle>
);
