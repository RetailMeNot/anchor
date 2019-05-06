// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { transparentize } from 'polished';
// THEME
import { colors, fonts, sizes } from '../theme';
import { Colors } from '../Typography/Typography.component';

type Variant = 'primary' | 'outline' | 'minimal';

type ButtonSize = 'xlarge' | 'large' | 'small' | 'xsmall';

interface Theme {
    base: string;
    light: string;
    dark: string;
}

interface ButtonProps {
    children?: any;
    disabled?: boolean;
    revealed?: boolean;
    showSpinner?: boolean;
    className?: string;

    flip?: boolean;
    colorTheme?: Theme | Colors;
    minWidth?: string;
    block?: boolean;
    icon?: any;
    circular?: boolean;
    reverse?: boolean;

    forceHover?: boolean;
    forceFocus?: boolean;
    forceActive?: boolean;

    onClick?: () => void;
    variant?: Variant;
    size?: ButtonSize;
}

interface StyledButtonProps extends ButtonProps {
    iconOnly?: boolean;
    height: number;
    borderRadius: string;

    buttonStyles: ButtonStyles;

    // make nonnullable
    colorTheme: Theme;
    variant: Variant;
    size: ButtonSize;
}

const themeDefaults = {
    primary: colors.savvyCyan,
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
    primary: {
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

const dimensions = {
    xsmall: {
        width: 4,
        height: 2,
    },
    small: {
        width: 5,
        height: 2.5,
    },
    large: {
        width: 12.5,
        height: 3,
    },
    xlarge: {
        width: 12.5,
        height: 3.5,
    },
};

const transitionSpeed = `500ms`;

interface ButtonStyles {
    base: FlattenSimpleInterpolation;
    disabled: FlattenSimpleInterpolation;
    hover: FlattenSimpleInterpolation;
    active?: FlattenSimpleInterpolation;
    focus?: FlattenSimpleInterpolation;
    focusOutline?: FlattenSimpleInterpolation;
}

interface ButtonStylesGroup {
    [key: string]: ButtonStyles;
}

const ButtonColorStyles = ({
    colorTheme,
    reverse,
}: {
    colorTheme: Theme;
    reverse?: boolean;
}): ButtonStylesGroup => {
    const { base, dark, light } = colorTheme;

    if (reverse) {
        return {
            primary: {
                base: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                    color: ${base};
                `,
                disabled: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                    color: ${base};
                    opacity: 0.5;
                `,
                hover: css`
                    border: solid thin
                        ${transparentize(0.15, colors.white.base)};
                    background-color: ${transparentize(
                        0.15,
                        colors.white.base
                    )};
                    color: ${base};
                `,
                active: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                `,
                focus: css`
                    border: solid thin ${colors.white.base};
                    background-color: ${colors.white.base};
                `,
                focusOutline: css`
                    box-shadow: 0 0 0 3px ${colors.white.base};
                `,
            },
            outline: {
                base: css`
                    border: solid thin ${base};
                    background-color: transparent;
                    color: ${base};
                `,
                disabled: css`
                    opacity: 0.5;
                    border: solid thin ${base};
                    background-color: transparent;
                    color: ${base};
                `,
                hover: css`
                    border: solid thin ${base};
                    background-color: ${base};
                    color: ${colors.charcoal.light};
                `,
                focusOutline: css`
                    box-shadow: 0 0 0 2px
                        ${transparentize(0.6, colors.white.base)};
                `,
            },
            minimal: {
                base: css`
                    border: solid thin transparent;
                    background-color: transparent;
                    color: ${base};
                `,
                disabled: css`
                    border: solid thin transparent;
                    background-color: transparent;
                    color: ${colors.ash.dark};
                `,
                hover: css`
                    background: ${transparentize(0.84, base)};
                    color: ${base};
                `,
                active: css`
                    background: ${transparentize(0.8, base)};
                `,
                focusOutline: css`
                    box-shadow: 0 0 0 2px
                        ${transparentize(0.6, colors.white.base)};
                `,
            },
        };
    }

    return {
        primary: {
            base: css`
                border: solid thin ${base};
                background-color: ${base};
                color: ${colors.white.base};
            `,
            disabled: css`
                border: solid thin ${colors.ash.light};
                background-color: ${colors.ash.light};
                color: ${colors.ash.dark};
            `,
            hover: css`
                background-color: ${dark};
                border: solid thin ${dark};
            `,
            focusOutline: css`
                box-shadow: 0 0 0 2px ${transparentize(0.6, base)};
            `,
        },
        outline: {
            base: css`
                border: solid thin ${base};
                background-color: transparent;
                color: ${base};
            `,
            disabled: css`
                border: solid thin ${colors.ash.dark};
                background-color: transparent;
                color: ${colors.ash.dark};
            `,
            hover: css`
                background-color: ${dark};
                border: solid thin ${dark};
                color: ${colors.white.base};
            `,
            focusOutline: css`
                box-shadow: 0 0 0 2px ${transparentize(0.6, light)};
            `,
        },
        minimal: {
            base: css`
                border: solid thin transparent;
                background-color: transparent;
                color: ${base};
            `,
            disabled: css`
                border: solid thin ${colors.ash.light};
                background-color: ${colors.ash.light};
                color: ${colors.ash.dark};
            `,
            hover: css`
                background: ${transparentize(0.84, colors.ash.dark)};
                color: ${dark};
            `,
            focusOutline: css`
                box-shadow: 0 0 0 2px ${transparentize(0.6, colors.ash.dark)};
            `,
        },
    };
};

interface ButtonSizesGroup {
    [key: string]: FlattenSimpleInterpolation;
}

const ButtonSizeStyles: ButtonSizesGroup = {
    xsmall: css`
        padding: 0 ${sizes.padding.sm};
        font-size: 0.75rem;
        height: ${dimensions.xsmall.height}rem;
        min-width: ${dimensions.xsmall.width}rem;
    `,
    small: css`
        padding: 0 ${sizes.padding.md};
        font-size: 0.875rem;
        height: ${dimensions.small.height}rem;
        min-width: ${dimensions.small.width}rem;
    `,
    large: css`
        // todo: size doesn't appear to exist for this
        padding: 0 1.5rem;
        font-size: 1rem;
        height: ${dimensions.large.height}rem;
        min-width: ${dimensions.large.width}rem;
    `,
    xlarge: css`
        padding: 0 ${sizes.padding.lg};
        font-size: 1rem;
        height: ${dimensions.xlarge.height}rem;
        min-width: ${dimensions.xlarge.width}rem;
    `,
};

const OutlineStyles = ({
    colorTheme,
    variant,
    reverse,
    borderRadius,
}: StyledButtonProps) =>
    css`
        &:after {
            position: absolute;
            content: '';

            // overlap border and extend 2px past
            top: calc(-${sizes.border.width.base} - 2px);
            left: calc(-${sizes.border.width.base} - 2px);
            right: calc(-${sizes.border.width.base} - 2px);
            bottom: calc(-${sizes.border.width.base} - 2px);

            border-radius: calc(${borderRadius} + 2px);

            // shadow instead of border so that it doesn't contribute to clickable area
            ${ButtonColorStyles({ colorTheme, reverse })[variant].focusOutline}
        }
    `;

const StyledButton = styled.button<StyledButtonProps>`
	position: relative;
    border-radius: ${(props: StyledButtonProps) => props.borderRadius};
	font-weight: 600;
	font-family: ${fonts.fontFamily};
	text-align: center;
	cursor: pointer;
    margin-right: ${sizes.padding.md};
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none !important;

	transition: ${transitionSpeed} ease background-color,
                ${transitionSpeed} ease border-color,
                ${transitionSpeed} ease color,
                ${transitionSpeed} ease fill;

	// These properties are deprecated but help make white text on colored backgrounds look more crisp in Chrome and
	// Firefox.
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Variants are color schemes */
    ${({ disabled, buttonStyles }: StyledButtonProps) =>
        disabled ? buttonStyles.disabled : buttonStyles.base}

    /* Sizes */
    ${({ size }: StyledButtonProps) => ButtonSizeStyles[size]}

    /* Block sizing */
    ${({ block }: StyledButtonProps) =>
        block &&
        css`
            display: block;
            width: 100%;
        `}

    /* Specified min width */
    ${({ minWidth }: StyledButtonProps) =>
        minWidth &&
        css`
            min-width: ${minWidth};
        `}

    /* Disabled State */
    ${({ disabled }: StyledButtonProps) =>
        disabled &&
        css`
            cursor: not-allowed;
        `}

    /* Hover styles */
    ${({
        forceHover,
        forceFocus,
        forceActive,
        disabled,
        revealed,
        flip,
        buttonStyles,
    }: StyledButtonProps) =>
        !disabled &&
        !revealed &&
        css`
            &:hover,
            &:focus,
            &:active {
                ${buttonStyles.hover}
                ${flip && css`
                    & > .flip-base {
                        opacity: 0;
                    }
                `}
            }

            ${(forceHover || forceFocus || forceActive) && css`
                ${buttonStyles.hover}
                ${flip && css`
                    & > .flip-base {
                        opacity: 0;
                    }
                `}
            `}
        `}

    /* Active styles */
    ${({ forceActive, disabled, revealed, buttonStyles }: StyledButtonProps) =>
        !disabled &&
        !revealed &&
        buttonStyles.active &&
        css`
            &:active {
                ${buttonStyles.active}
            }
            ${forceActive && buttonStyles.active}
        `}

    /* Focus styles */
    ${({ forceFocus, disabled, revealed, buttonStyles }: StyledButtonProps) =>
        !disabled &&
        !revealed &&
        buttonStyles.focus &&
        css`
            &:focus {
                ${buttonStyles.focus}
            }
            ${forceFocus && buttonStyles.focus}
        `}

    /* Outline */
    &:focus {
        ${OutlineStyles}
    }
    ${({ forceFocus, ...props }: StyledButtonProps) =>
        forceFocus && OutlineStyles(props)}

    /* Revealed State */
    ${({ variant, revealed }: StyledButtonProps) =>
        variant === 'primary' &&
        revealed &&
        css`
            background-color: ${colors.silver.base};
            border: solid thin ${colors.silver.base};
            color: ${colors.charcoal.light};
            font-weight: bold;
        `}

    /* Icon */
    ${({ icon, iconOnly, size }: StyledButtonProps) =>
        icon &&
        css`
            ${iconOnly
                ? css`
                      // Make it a square
                      width: ${dimensions[size].height}rem;
                      min-width: initial;
                      padding: 0;
                  `
                : css`
                      // Space icon from text
                      & > .anchor-icon {
                          margin-right: ${size === 'xlarge' || size === 'large'
                              ? 0.5
                              : 0.375}rem;
                      }
                  `}
        `}
`;

interface StyledHitboxProps {
    buttonHeight: number;
    buttonWidth?: number;
}

const StyledHitbox = styled.div<StyledHitboxProps>`
    position: absolute;

    // overlap border
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;

    // expand using margin to get to 3 rem tall and wide
    margin: ${({ buttonHeight, buttonWidth }: StyledHitboxProps) =>
        `-${(3 - buttonHeight) / 2}rem ${
            buttonWidth && buttonWidth < 3
                ? `-${(3 - buttonWidth) / 2}rem`
                : '0'
        }`};
`;

interface StyledFlapProps {
    flipColor: string;
}

const StyledFlip = styled.div<StyledFlapProps>`
    border-top-right-radius: ${sizes.border.radius.base};
    border-bottom-left-radius: ${sizes.border.radius.base};

    position: absolute;
    top: -1px;
    right: -1px;
    width: 1.25rem;
    height: 1.25rem;
    content: '';

    transition: ${transitionSpeed} ease opacity;
    background: linear-gradient(
        45deg,
        ${({flipColor}) => flipColor},
        ${({flipColor}) => flipColor} 50%,
        ${colors.silver.base} 0
    );
`;

const Flip = ({ colorTheme }: { colorTheme: Theme }) => (
    <React.Fragment>
        <StyledFlip flipColor={colorTheme.base} />
        <StyledFlip className="flip-base" flipColor={colorTheme.light} />
    </React.Fragment>
);

export const Button = ({
    className,
    flip = false,
    variant = 'primary',
    size = 'large',
    disabled,
    revealed,
    colorTheme,
    reverse,
    circular,
    children,
    icon: Icon,
    ...props
}: ButtonProps): React.ReactElement<any> => {
    const iconOnly = Icon && React.Children.count(children) === 0;

    const iconScale = iconOnly
        ? size === 'xsmall' ||
          (size === 'small' && (circular || variant === 'minimal'))
            ? 'md'
            : 'lg'
        : 'md';

    const height = dimensions[size].height;
    const borderRadius = circular
        ? `${height / 2}rem`
        : sizes.border.radius.base;
    const width = iconOnly ? dimensions[size].height : dimensions[size].width;

    // find theme from string, otherwise use defaults
    if (typeof colorTheme === 'string') {
        colorTheme = colors[colorTheme];
    }
    if (!colorTheme) {
        colorTheme = reverse
            ? reverseDefaults[variant]
            : themeDefaults[variant];
    }

    const buttonStyles = ButtonColorStyles({ colorTheme, reverse })[variant];

    return (
        <StyledButton
            className={classNames('anchor-button', className)}
            flip={flip}
            size={size}
            colorTheme={colorTheme}
            reverse={reverse}
            height={height}
            icon={Icon}
            iconOnly={iconOnly}
            circular={circular}
            variant={variant}
            disabled={disabled}
            revealed={revealed}
            borderRadius={borderRadius}
            buttonStyles={buttonStyles}
            {...props}
        >
            {(height < 3 || width < 3) && (
                <StyledHitbox buttonHeight={height} buttonWidth={width} />
            )}
            {Icon && <Icon scale={iconScale} />}
            {children}
            {flip && !disabled && !revealed && <Flip colorTheme={colorTheme} />}
        </StyledButton>
    );
};
