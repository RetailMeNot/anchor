// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { transparentize } from 'polished';
// THEME
import { colors, fonts, sizes } from '../theme';
import { Colors } from '../Typography/Typography.component';

type Variant =
    | 'primary'
    | 'outline'
    | 'minimal'

type ButtonSize =
    | 'xlarge'
    | 'large'
    | 'small'
    | 'xsmall'

interface ButtonProps {
    children?: any;
    disabled?: boolean;
    revealed?: boolean;
    showSpinner?: boolean;
    className?: string;

    flip?: boolean;
    themeColor?: Colors;
    inverseColor?: string;
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

    // make nonnullable
    themeColor: Colors;
    variant: Variant;
    inverseColor: string;
    size: ButtonSize;
}

interface ButtonStylesGroup {
    [key: string]: {
        base: FlattenSimpleInterpolation;
        disabled: FlattenSimpleInterpolation;
        hover: FlattenSimpleInterpolation;
    }
}

const ButtonColorStyles = ({ themeColor, inverseColor }: { themeColor: Colors, inverseColor: string }): ButtonStylesGroup => ({
    primary: {
        base: css`
            border: solid thin ${colors[themeColor].base};
            background-color: ${colors[themeColor].base};
            color: ${colors.white.base};
        `,
        disabled: css`
            border: solid thin ${colors.ash.light};
            background-color: ${colors.ash.light};
            color: ${colors.ash.dark};
        `,
        hover: css`
            background-color: ${colors[themeColor].dark};
            border: solid thin ${colors[themeColor].dark};
        `,
    },
    outline: {
        base: css`
            border: solid thin ${colors[themeColor].base};
            background-color: transparent;
            color: ${colors[themeColor].base};
        `,
        disabled: css`
            border: solid thin ${colors.ash.dark};
            background-color: transparent;
            color: ${colors.ash.dark};
            `,
            hover: css`
            background-color: ${colors[themeColor].dark};
            border: solid thin ${colors[themeColor].dark};
            color: ${colors[inverseColor].base}
        `,
    },
    minimal: {
        base: css`
            border: solid thin transparent;
            background-color: transparent;
            color: ${colors[themeColor].base};
        `,
        disabled: css`
            border: solid thin ${colors.ash.light};
            background-color: ${colors.ash.light};
            color: ${colors.ash.dark};
        `,
        hover: css`
            background: ${transparentize(0.9, colors.ash.dark)};
            color: ${colors[themeColor].dark};
        `,
    },
});

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

const StyledButton = styled.button<StyledButtonProps>`
	position: relative;
    border-radius: ${({ circular, size }: StyledButtonProps) =>
        circular ? `${dimensions[size].height / 2}rem` : sizes.border.radius.base};
	font-weight: 600;
	font-family: ${fonts.fontFamily};
	text-align: center;
	cursor: pointer;
    margin-right: ${sizes.padding.md};
    display: flex;
    justify-content: center;
    align-items: center;
    // outline: none !important;

	transition: ${transitionSpeed} ease background-color,
                ${transitionSpeed} ease border-color,
                ${transitionSpeed} ease color,
                ${transitionSpeed} ease fill;

	// These properties are deprecated but help make white text on colored backgrounds look more crisp in Chrome and
	// Firefox.
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

    /* Variants are color schemes */
    ${({ variant, themeColor, inverseColor, disabled }: StyledButtonProps) => (
        disabled
            ? ButtonColorStyles({ themeColor, inverseColor })[variant].disabled
            : ButtonColorStyles({ themeColor, inverseColor })[variant].base
    )}

    /* Sizes */
    ${({ size }: StyledButtonProps) => ButtonSizeStyles[size]}

    /* Disabled State */
    ${({ disabled }: StyledButtonProps) =>
        disabled &&
        css`
            cursor: not-allowed;
        `}

    &:hover, &:focus, &:active {
        ${({ themeColor, variant, inverseColor, disabled, revealed }: StyledButtonProps) =>
            !disabled && !revealed && ButtonColorStyles({ themeColor, inverseColor })[variant].hover
        }
        &:after {
            opacity: 0;
        }
    }

    ${({ themeColor, variant, inverseColor, forceHover, forceFocus, forceActive }: StyledButtonProps) => (
        (forceHover || forceFocus || forceActive) && ButtonColorStyles({ themeColor, inverseColor })[variant].hover
    )}

    /* Flip */
    ${({ flip, themeColor, forceHover, forceFocus, forceActive, revealed }: StyledButtonProps) => flip && !revealed && css`
        &:after, &:before {
            border-top-right-radius: ${sizes.border.radius.base};
            border-bottom-left-radius: ${sizes.border.radius.base};

            position: absolute;
            top: -1px;
            right: -1px;
            width: 20px;
            height: 20px;
            content: "";
        }

        &:after {
            transition: ${transitionSpeed} ease opacity;
            z-index: 2;
            background: linear-gradient(45deg, ${colors[themeColor].light},${colors[themeColor].light} 50%,${colors.silver.base} 0);
        }
        &:before {
            z-index: 1;
            background: linear-gradient(45deg, ${colors[themeColor].base},${colors[themeColor].base} 50%,${colors.silver.base} 0);
        }

        &:hover, &:focus, &:active {
            &:after {
                opacity: 0;
            }
        }

        ${(forceHover || forceFocus || forceActive) && css`
            &:after {
                opacity: 0;
            }
        `}

        /* make sure button doesn't peek behind the flap */
        /* but maybe nvm because it seems to be causing some artifacting issues in chrome */
        // border-top-right-radius: 5px;
        `
    }

    /* Block sizing */
    ${({ block }: StyledButtonProps) => block && css`
        display: block;
        width: 100%;
    `}

    /* Specified min width */
    ${({ minWidth }: StyledButtonProps) => minWidth && css`min-width: ${minWidth}`}

    /* Revealed State */
    ${({ variant, revealed }: StyledButtonProps) => variant === 'primary' && revealed && css`
        background-color: ${colors.silver.base};
        border: solid thin ${colors.silver.base};
        color: ${colors.charcoal.light};
        font-weight: bold;
    `}

    /* Icon Only */
    // todo, handle icon= + text
    ${({ icon, size }: StyledButtonProps) => icon && css`
        // todo hitbox for small/xsmall icon-only
        width: ${dimensions[size].height}rem;
        min-width: initial;
        padding: 0;
    `}
`;

const StyledHitbox = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    margin: -0.5rem 0;
`;

export const Button = ({
    className,
    flip = false,
    variant = 'primary',
    themeColor = 'savvyCyan',
    inverseColor = 'white',
    size = 'large',
    block = false,
    circular,
    children,
    icon: Icon,
    ...props
}: ButtonProps): React.ReactElement<any> => {
    return (
        <React.Fragment>
            <StyledButton
                className={classNames('anchor-button', className)}
                flip={flip}
                size={size}
                block={block}
                themeColor={themeColor}
                inverseColor={inverseColor}
                icon={Icon}
                circular={circular}
                variant={variant}
                {...props}
            >
                {Icon && <Icon scale={size === 'xsmall' || (size === 'small' && (circular || variant === 'minimal')) ? 'md' : 'lg'}/>}
                {children}
                {size === 'xsmall' && <StyledHitbox></StyledHitbox>}
            </StyledButton>
        </React.Fragment>
    );
};
