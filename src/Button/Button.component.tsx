// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, {
    css,
    FlattenSimpleInterpolation,
    ThemeContext,
} from '@xstyled/styled-components';
import { variant as createVariant, th } from '@xstyled/system';
import { transparentize } from 'polished';
// ANCHOR
import {
    Theme,
    TRANSITION_SPEED,
    REVEAL_BACKGROUND_COLOR,
    REVEAL_COLOR,
} from './utils';
import { rem } from '../utils/rem/rem';
import { cloneWithProps } from '../utils/cloneWithProps/cloneWithProps';
import { Flip } from './Flip';
import { HitArea } from './HitArea';

type Variant = 'filled' | 'outline' | 'minimal';
type ButtonSize = 'lg' | 'md' | 'sm' | 'xs' | string;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: any;
    disabled?: boolean;
    revealed?: boolean;
    showSpinner?: boolean;
    className?: string;
    margin?: string;

    flip?: boolean;
    colorTheme?: Theme;
    minWidth?: string;
    block?: boolean;
    circular?: boolean;
    reverse?: boolean;

    prefix?: any;
    suffix?: any;

    forceHover?: boolean;
    forceFocus?: boolean;
    forceActive?: boolean;

    onClick?: () => void;
    variant?: Variant;
    size?: ButtonSize;
}

export interface StyledButtonProps extends ButtonProps {
    iconOnly?: boolean;
    borderRadius: string;
    buttonStyles: ButtonStyles;
    padding?: string;

    // named this way to avoid applying html attributes
    $height: number;
    $size: ButtonSize;
    $fontSize?: string | number;

    // make nonnullable
    colorTheme: Theme;
    variant: Variant;
}

// Todo: These should not be hardcoded like this, and needs
// a better solution.
// Basically a copy of 'ash'
const disabledColor = {
    dark: '#808080',
    light: '#D3D3D3',
};
// Just a copy of 'savvyCyan'
const primaryColor = {
    base: '#0998D6',
    light: '#66CCFF',
    dark: '#0074A6',
};
// Just a copy of 'charcoal'
const grayColor = {
    base: '#323232',
    light: '#595959',
    dark: '#000000',
};

const themeDefaults = {
    filled: primaryColor,
    outline: {
        base: primaryColor.dark,
        light: primaryColor.base,
        dark: primaryColor.dark,
    },
    minimal: {
        base: primaryColor.dark,
        light: primaryColor.base,
        dark: primaryColor.dark,
    },
};

const reverseDefaults = {
    filled: {
        base: grayColor.light,
        light: grayColor.light,
        dark: grayColor.dark,
    },
    outline: {
        base: 'white',
        light: 'white',
        dark: grayColor.light,
    },
    minimal: {
        base: 'white',
        light: 'white',
        dark: 'white',
    },
};

export const BUTTON_KEY = 'buttons';
export const BUTTON_THEME = {
    sizes: {
        xs: {
            minWidth: 4,
            height: 2,
            padding: 0.5,
            circularPadding: 1,
            fontSize: 0.75,
            affixSpacing: 0.375,
        },
        sm: {
            minWidth: 5,
            height: 2.5,
            padding: 1,
            circularPadding: 1.5,
            fontSize: 0.875,
            affixSpacing: 0.375,
        },
        md: {
            minWidth: 12.5,
            height: 3,
            padding: 1.5,
            circularPadding: 2,
            fontSize: 1,
            affixSpacing: 0.5,
        },
        lg: {
            minWidth: 12.5,
            height: 3.5,
            padding: 2,
            circularPadding: 2.5,
            fontSize: 1,
            affixSpacing: 0.5,
        },
    },

    variants: {
        filled: {
            base: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin white;
                          background-color: white;
                          color: ${colorTheme.base};
                      `
                    : css`
                          border: solid thin ${colorTheme.base};
                          background-color: ${colorTheme.base};
                          color: white;
                      `,
            disabled: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin white;
                          background-color: white;
                          color: ${colorTheme.base};
                          opacity: 0.5;
                      `
                    : css`
                          border: solid thin ${disabledColor.light};
                          background-color: ${disabledColor.light};
                          color: ${disabledColor.dark};
                      `,
            hover: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin rgba(255, 255, 255, 0.85);
                          background-color: rgba(255, 255, 255, 0.85);
                          color: ${colorTheme.base};
                      `
                    : css`
                          background-color: ${colorTheme.dark};
                          border: solid thin ${colorTheme.dark};
                      `,
            active: ({ reverse }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin white;
                          background-color: white;
                      `
                    : undefined,
            focus: ({ reverse }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin white;
                          background-color: white;
                      `
                    : undefined,
            focusOutline: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
                      `
                    : css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colorTheme.base)};
                      `,
        },
        outline: {
            base: ({ colorTheme }: StyledButtonProps) =>
                css`
                    border: solid thin ${colorTheme.base};
                    background-color: transparent;
                    color: ${colorTheme.base};
                `,
            disabled: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          opacity: 0.5;
                          border: solid thin ${colorTheme.base};
                          background-color: transparent;
                          color: ${colorTheme.base};
                      `
                    : css`
                          border: solid thin ${disabledColor.dark};
                          background-color: transparent;
                          color: ${disabledColor.dark};
                      `,
            hover: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin ${colorTheme.base};
                          background-color: ${colorTheme.base};
                          color: ${grayColor.light};
                      `
                    : css`
                          background-color: ${colorTheme.dark};
                          border: solid thin ${colorTheme.dark};
                          color: white;
                      `,
            focusOutline: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
                      `
                    : css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colorTheme.light)};
                      `,
        },
        minimal: {
            base: ({ colorTheme }: StyledButtonProps) =>
                css`
                    border: solid thin transparent;
                    background-color: transparent;
                    color: ${colorTheme.base};
                `,
            disabled: ({ reverse }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin transparent;
                          background-color: transparent;
                          color: ${disabledColor.dark};
                      `
                    : css`
                          border: solid thin ${disabledColor.light};
                          background-color: ${disabledColor.light};
                          color: ${disabledColor.dark};
                      `,
            hover: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          background: ${transparentize(0.84, colorTheme.base)};
                          color: ${colorTheme.base};
                      `
                    : css`
                          background: ${transparentize(
                              0.84,
                              disabledColor.dark
                          )};
                          color: ${colorTheme.dark};
                      `,
            active: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          background: ${transparentize(0.8, colorTheme.base)};
                      `
                    : undefined,
            focusOutline: ({ reverse }: StyledButtonProps) =>
                reverse
                    ? css`
                          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
                      `
                    : css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, disabledColor.dark)};
                      `,
        },
    },
};

const sizeStyles = createVariant({
    key: `${BUTTON_KEY}.sizes`,
    prop: 'size',
    default: 'md',
    variants: BUTTON_THEME.sizes,
});

type ButtonStyle =
    | ((args: StyledButtonProps) => FlattenSimpleInterpolation | undefined)
    | FlattenSimpleInterpolation;

interface ButtonStyles {
    base: ButtonStyle;
    disabled: ButtonStyle;
    hover: ButtonStyle;
    active?: ButtonStyle;
    focus?: ButtonStyle;
    focusOutline?: ButtonStyle;
}

const stateStyles = createVariant({
    key: `${BUTTON_KEY}.variants`,
    prop: 'variant',
    default: 'filled',
    variants: BUTTON_THEME.variants,
});

const OutlineStyles = ({ buttonStyles, borderRadius }: StyledButtonProps) =>
    css`
        &:after {
            position: absolute;
            content: '';

            // overlap border (1px) and extend 2px past
            // TODO: determine approach for spacing with larger than 1px borders
            top: -3px;
            left: -3px;
            right: -3px;
            bottom: -3px;

            border-radius: calc(${th.radius(borderRadius)} + 2px);

            // shadow instead of border so that it doesn't contribute to clickable area
            ${buttonStyles.focusOutline}
        }
    `;

const StyledButton = styled('button')<StyledButtonProps>`
    position: relative;
    ${({ borderRadius }) => css({ borderRadius })};
	font-weight: 600;
	font-family: base;
	text-align: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none !important;

    margin: ${({ margin }: StyledButtonProps) => margin || `0`};
    ${({ block, margin }: StyledButtonProps) =>
        !margin &&
        css`
            & + .anchor-button {
                margin-left: ${block ? '0.5rem' : '1rem'};
            }
        `};

	transition: ${TRANSITION_SPEED} ease background-color,
                ${TRANSITION_SPEED} ease border-color,
                ${TRANSITION_SPEED} ease color,
                ${TRANSITION_SPEED} ease fill;

    // These properties are deprecated but help make white text
    // on colored backgrounds look more crisp in Chrome and Firefox.
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Base and Disabled Styles */
    ${({ disabled, buttonStyles }: StyledButtonProps) =>
        disabled
            ? css`
                  ${buttonStyles.disabled};
                  cursor: not-allowed;
              `
            : buttonStyles.base}

    /* Sizing */
    ${({ $fontSize, $height, padding }) => css`
        padding: ${padding};
        font-size: ${rem($fontSize)};
        height: ${rem($height)};
    `}


    ${({ minWidth, block }: StyledButtonProps) =>
        block
            ? css`
                  width: 100%;
              `
            : css`
                  min-width: ${rem(minWidth)};
              `}

    /* State styles */
    ${({
        disabled,
        revealed,
        flip,
        forceHover,
        forceFocus,
        forceActive,
        buttonStyles,
        ...props
    }: StyledButtonProps) =>
        !disabled &&
        !revealed &&
        css`
            &:hover,
            &:focus,
            &:active {
                ${buttonStyles.hover}
                ${flip &&
                    css`
                        & > .flip-base {
                            opacity: 0;
                        }
                    `}
            }
            &:active {
                ${buttonStyles.active}
            }
            &:focus {
                ${buttonStyles.focus}
            }

            ${(forceHover || forceFocus || forceActive) &&
                css`
                    ${buttonStyles.hover}
                    ${flip &&
                        css`
                            & > .flip-base {
                                opacity: 0;
                            }
                        `}

                    ${forceActive && buttonStyles.active}
                    ${forceFocus && buttonStyles.focus}
                    ${forceFocus && OutlineStyles({ buttonStyles, ...props })}
                `}
        `}

    &:focus {
        ${OutlineStyles}
    }

    /* Revealed State */
    ${({ variant, revealed }: StyledButtonProps) =>
        variant === 'filled' &&
        revealed &&
        css`
            background-color: ${REVEAL_BACKGROUND_COLOR};
            border: solid thin ${REVEAL_BACKGROUND_COLOR};
            color: ${REVEAL_COLOR};
            font-weight: bold;
        `}
`;

export const Button = React.forwardRef(
    (
        {
            className,
            flip = false,
            variant = 'filled',
            size = 'md',
            block,
            disabled,
            revealed,
            colorTheme,
            reverse,
            circular,
            children,
            minWidth,
            prefix,
            suffix,
            onMouseDown,
            onMouseUp,
            onFocus,
            ...props
        }: ButtonProps,
        ref: React.RefObject<any>
    ): React.ReactElement<ButtonProps> => {
        const theme = React.useContext(ThemeContext);
        const [mouseDown, setMouseDown] = React.useState(false);

        // if there are no children and only prefix or only suffix are set
        const iconOnly =
            (prefix ? !suffix : !!suffix) &&
            React.Children.count(children) === 0;

        if (flip && circular) {
            /* eslint-disable-next-line */
            console.warn(
                "Buttons should not have both 'flip' and 'circular' props."
            );
        }
        if (flip && reverse) {
            /* eslint-disable-next-line */
            console.warn(
                "Buttons should not have both 'flip' and 'reverse' props."
            );
        }
        if (flip && disabled) {
            /* eslint-disable-next-line */
            console.warn(
                "Buttons with 'flip' are not meant to be 'disabled'. Did you mean to make it 'revealed'?"
            );
        }
        if (iconOnly && minWidth) {
            /* eslint-disable-next-line */
            console.warn(
                "Button is icon-only so 'minWidth' prop will be ignored."
            );
        }
        if (iconOnly && block) {
            /* eslint-disable-next-line */
            console.warn(
                "Button is icon-only so 'block' prop will be ignored."
            );
        }
        if (block && minWidth) {
            /* eslint-disable-next-line */
            console.warn(
                "Button has 'block' prop so 'minWidth' prop will be ignored."
            );
        }

        const iconScale = iconOnly
            ? size === 'xs' || (size === 'sm' && variant === 'minimal')
                ? 'md'
                : 'lg'
            : 'md';

        const dims = sizeStyles({ ...props, size, theme });
        const { height, affixSpacing, fontSize, minWidth: themeWidth } = dims;

        // Value just needs to be larger than the height
        // to make the ends circular. We're using a very
        // large radius so that it doesn't actually have
        // to be calculated from the height.
        const borderRadius = circular ? 'circular' : 'base';
        const width = iconOnly ? height : minWidth || themeWidth;

        if (!colorTheme) {
            colorTheme = reverse
                ? reverseDefaults[variant]
                : themeDefaults[variant];
        }

        const padding = iconOnly
            ? '0'
            : `0 ${circular ? dims.circularPadding : dims.padding}rem`;

        const buttonStyles = stateStyles({
            ...props,
            colorTheme,
            variant,
            theme,
        });

        return (
            <StyledButton
                onMouseDown={event => {
                    setMouseDown(true);
                    if (onMouseDown) {
                        onMouseDown(event);
                    }
                }}
                onMouseUp={event => {
                    setMouseDown(false);
                    if (onMouseUp) {
                        onMouseUp(event);
                    }
                }}
                onFocus={event => {
                    if (mouseDown) {
                        // This keeps the button from being :focused when
                        // clicked so that it is only applied when tabbed to.
                        // We want the outline to appear when tabbing for
                        // accessibility.
                        event.target.blur();
                    }
                    if (onFocus) {
                        onFocus(event);
                    }
                }}
                className={classNames('anchor-button', className)}
                ref={ref}
                flip={flip}
                block={block}
                colorTheme={colorTheme}
                $fontSize={fontSize}
                padding={padding}
                reverse={reverse}
                minWidth={width}
                $height={height}
                $size={size}
                iconOnly={iconOnly}
                circular={circular}
                variant={variant}
                disabled={disabled}
                revealed={revealed}
                borderRadius={borderRadius}
                buttonStyles={buttonStyles}
                {...props}
            >
                {/* Caveat: If the width was set to below 3rem, but the button ended up
                being wider (because wide contents) then a horizontal hitbox could
                be added to the button when it isn't needed. */}
                {(height < 3 || width < 3) && (
                    <HitArea buttonHeight={height} buttonWidth={width} />
                )}
                {prefix &&
                    cloneWithProps(prefix, {
                        scale: iconScale,
                        margin: iconOnly
                            ? undefined
                            : `0 ${affixSpacing}rem 0 0`,
                        className: 'anchor-button-prefix',
                    })}
                {children}
                {suffix &&
                    cloneWithProps(suffix, {
                        scale: iconScale,
                        margin: iconOnly
                            ? undefined
                            : `0 0 0 ${affixSpacing}rem`,
                        className: 'anchor-button-suffix',
                    })}
                {flip && !disabled && !revealed && (
                    <Flip colorTheme={colorTheme} />
                )}
            </StyledButton>
        );
    }
);
