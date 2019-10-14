// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, {
    css,
    FlattenSimpleInterpolation,
} from '@xstyled/styled-components';
import { variant as createVariant, th } from '@xstyled/system';
import { transparentize } from 'polished';
// ANCHOR
import { colors } from '../theme/colors.theme';
import { fonts } from '../theme/fonts.theme';
import { sizes } from '../theme/sizes.theme';
import { Theme, TRANSITION_SPEED } from './utils';
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

const themeDefaults = {
    filled: colors.savvyCyan,
    outline: {
        base: colors.savvyCyan.dark,
        light: colors.savvyCyan.base,
        dark: colors.savvyCyan.dark,
    },
    minimal: {
        base: colors.savvyCyan.dark,
        light: colors.savvyCyan.base,
        dark: colors.savvyCyan.dark,
    },
};

const reverseDefaults = {
    filled: {
        base: colors.charcoal.light,
        light: colors.charcoal.light,
        dark: colors.charcoal.dark,
    },
    outline: {
        base: colors.white.base,
        light: colors.white.base,
        dark: colors.charcoal.light,
    },
    minimal: colors.white,
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
                          border: solid thin ${colors.white.base};
                          background-color: ${colors.white.base};
                          color: ${colorTheme.base};
                      `
                    : css`
                          border: solid thin ${colorTheme.base};
                          background-color: ${colorTheme.base};
                          color: ${colors.white.base};
                      `,
            disabled: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin ${colors.white.base};
                          background-color: ${colors.white.base};
                          color: ${colorTheme.base};
                          opacity: 0.5;
                      `
                    : css`
                          border: solid thin ${colors.ash.light};
                          background-color: ${colors.ash.light};
                          color: ${colors.ash.dark};
                      `,
            hover: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin
                              ${transparentize(0.15, colors.white.base)};
                          background-color: ${transparentize(
                              0.15,
                              colors.white.base
                          )};
                          color: ${colorTheme.base};
                      `
                    : css`
                          background-color: ${colorTheme.dark};
                          border: solid thin ${colorTheme.dark};
                      `,
            active: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin ${colors.white.base};
                          background-color: ${colors.white.base};
                      `
                    : undefined,
            focus: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin ${colors.white.base};
                          background-color: ${colors.white.base};
                      `
                    : undefined,
            focusOutline: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colors.white.base)};
                      `
                    : css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colorTheme.base)};
                      `,
        },
        outline: {
            base: ({ reverse, colorTheme }: StyledButtonProps) =>
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
                          border: solid thin ${colors.ash.dark};
                          background-color: transparent;
                          color: ${colors.ash.dark};
                      `,
            hover: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin ${colorTheme.base};
                          background-color: ${colorTheme.base};
                          color: ${colors.charcoal.light};
                      `
                    : css`
                          background-color: ${colorTheme.dark};
                          border: solid thin ${colorTheme.dark};
                          color: ${colors.white.base};
                      `,
            focusOutline: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colors.white.base)};
                      `
                    : css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colorTheme.light)};
                      `,
        },
        minimal: {
            base: ({ reverse, colorTheme }: StyledButtonProps) =>
                css`
                    border: solid thin transparent;
                    background-color: transparent;
                    color: ${colorTheme.base};
                `,
            disabled: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          border: solid thin transparent;
                          background-color: transparent;
                          color: ${colors.ash.dark};
                      `
                    : css`
                          border: solid thin ${colors.ash.light};
                          background-color: ${colors.ash.light};
                          color: ${colors.ash.dark};
                      `,
            hover: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          background: ${transparentize(0.84, colorTheme.base)};
                          color: ${colorTheme.base};
                      `
                    : css`
                          background: ${transparentize(0.84, colors.ash.dark)};
                          color: ${colorTheme.dark};
                      `,
            active: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          background: ${transparentize(0.8, colorTheme.base)};
                      `
                    : undefined,
            focusOutline: ({ reverse, colorTheme }: StyledButtonProps) =>
                reverse
                    ? css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colors.white.base)};
                      `
                    : css`
                          box-shadow: 0 0 0 2px
                              ${transparentize(0.6, colors.ash.dark)};
                      `,
        },
    },
};

const sizeStyles = createVariant({
    key: 'buttons.sizes',
    prop: 'size',
    default: 'md',
    variants: BUTTON_THEME.sizes,
});

interface ButtonStyles {
    base:
        | ((args: StyledButtonProps) => FlattenSimpleInterpolation | undefined)
        | FlattenSimpleInterpolation;
    disabled:
        | ((args: StyledButtonProps) => FlattenSimpleInterpolation | undefined)
        | FlattenSimpleInterpolation;
    hover:
        | ((args: StyledButtonProps) => FlattenSimpleInterpolation | undefined)
        | FlattenSimpleInterpolation;
    active?:
        | ((args: StyledButtonProps) => FlattenSimpleInterpolation | undefined)
        | FlattenSimpleInterpolation;
    focus?:
        | ((args: StyledButtonProps) => FlattenSimpleInterpolation | undefined)
        | FlattenSimpleInterpolation;
    focusOutline?:
        | ((args: StyledButtonProps) => FlattenSimpleInterpolation | undefined)
        | FlattenSimpleInterpolation;
}

const stateStyles = createVariant({
    key: 'buttons.variants',
    prop: 'variant',
    default: 'filled',
    variants: BUTTON_THEME.variants,
});

const OutlineStyles = ({ buttonStyles, borderRadius }: StyledButtonProps) =>
    css`
        &:after {
            position: absolute;
            content: '';

            // overlap border and extend 2px past
            // TODO: determine xstyled approach for resolving calculations
            top: calc(-${sizes.border.width.base} - 2px);
            left: calc(-${sizes.border.width.base} - 2px);
            right: calc(-${sizes.border.width.base} - 2px);
            bottom: calc(-${sizes.border.width.base} - 2px);

            border-radius: calc(${th.radius(borderRadius)} + 2px);

            // shadow instead of border so that it doesn't contribute to clickable area
            ${buttonStyles.focusOutline}
        }
    `;

const StyledButton = styled('button')<StyledButtonProps>`
    position: relative;
    ${({ borderRadius }) => css`
        border-radius: ${borderRadius};
    `};
	font-weight: 600;
	font-family: ${fonts.fontFamily};
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
            & + & {
                margin-left: ${block ? sizes.margin.sm : sizes.margin.md};
            }
        `};

	transition: ${TRANSITION_SPEED} ease background-color,
                ${TRANSITION_SPEED} ease border-color,
                ${TRANSITION_SPEED} ease color,
                ${TRANSITION_SPEED} ease fill;

	// These properties are deprecated but help make white text on colored backgrounds look more crisp in Chrome and
	// Firefox.
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
            background-color: ${colors.silver.base};
            border: solid thin ${colors.silver.base};
            color: ${colors.charcoal.light};
            font-weight: bold;
        `}
`;

export const Button = ({
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
}: ButtonProps): React.ReactElement<ButtonProps> => {
    const [mouseDown, setMouseDown] = React.useState(false);

    // if there are no children and only prefix or only suffix are set
    const iconOnly =
        (prefix ? !suffix : !!suffix) && React.Children.count(children) === 0;

    /* tslint:disable no-console */
    if (flip && circular) {
        console.warn(
            "Buttons should not have both 'flip' and 'circular' props."
        );
    }
    if (flip && reverse) {
        console.warn(
            "Buttons should not have both 'flip' and 'reverse' props."
        );
    }
    if (flip && disabled) {
        console.warn(
            "Buttons with 'flip' are not meant to be 'disabled'. Did you mean to make it 'revealed'?"
        );
    }
    if (iconOnly && minWidth) {
        console.warn("Button is icon-only so 'minWidth' prop will be ignored.");
    }
    if (iconOnly && block) {
        console.warn("Button is icon-only so 'block' prop will be ignored.");
    }
    if (block && minWidth) {
        console.warn(
            "Button has 'block' prop so 'minWidth' prop will be ignored."
        );
    }
    /* tslint:enable no-console */

    const iconScale = iconOnly
        ? size === 'xs' || (size === 'sm' && variant === 'minimal')
            ? 'md'
            : 'lg'
        : 'md';

    const dims = sizeStyles({ ...props, size });
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

    const buttonStyles = stateStyles({ ...props, colorTheme, variant });

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
                    margin: iconOnly ? undefined : `0 ${affixSpacing}rem 0 0`,
                    className: 'anchor-button-prefix',
                })}
            {children}
            {suffix &&
                cloneWithProps(suffix, {
                    scale: iconScale,
                    margin: iconOnly ? undefined : `0 0 0 ${affixSpacing}rem`,
                    className: 'anchor-button-suffix',
                })}
            {flip && !disabled && !revealed && <Flip colorTheme={colorTheme} />}
        </StyledButton>
    );
};
