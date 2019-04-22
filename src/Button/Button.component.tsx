// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { darken } from 'polished';
// THEME
import { colors, fonts, sizes } from '../theme';

interface ButtonProps {
    children?: any;
    disabled?: boolean;
    showSpinner?: boolean;
    className?: string;

    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'text';
    size?: 'small' | 'medium' | 'large';
}

interface ButtonStylesGroup {
    [key: string]: FlattenSimpleInterpolation;
}

const ButtonColorStyles: ButtonStylesGroup = {
    primary: css`
        border: solid thin ${colors.savvyCyan.base};
        background-color: ${colors.savvyCyan.base};
        color: ${colors.white.base};

        &:hover {
            background-color: ${darken(0.05, colors.savvyCyan.base)};
        }
    `,
    secondary: css`
        border: solid thin ${colors.savvyCyan.light};
        background-color: ${colors.savvyCyan.light};
        color: ${colors.white.base};

        &:hover {
            background-color: ${darken(0.1, colors.savvyCyan.light)};
        }
    `,
    text: css`
        border: solid thin transparent;
        background-color: transparent;
        color: ${colors.savvyCyan.base};

        &:hover {
            color: ${darken(0.25, colors.savvyCyan.base)};
        }
    `,
};

const ButtonSizeStyles: ButtonStylesGroup = {
    small: css`
        padding: ${sizes.padding.xs};
        font-size: 0.75rem;
    `,
    medium: css`
        padding: ${sizes.padding.sm} ${sizes.padding.md};
        font-size: 1rem;
    `,
    large: css`
        padding: ${sizes.padding.md};
        font-size: 1.5rem;
    `,
};

const StyledButton = styled.button`
	position: relative;
	min-width: 2rem;
	border-radius: ${sizes.border.radius.base};
	font-weight: 500;
	font-family: ${fonts.fontFamily};
	text-align: center;
	cursor: pointer;
    margin-right: ${sizes.padding.md};
    outline: none !important;

	transition: 500ms ease background-color,
	            500ms ease border-color,
                500ms ease color,
                500ms ease fill;

	// These properties are deprecated but help make white text on colored backgrounds look more crisp in Chrome and
	// Firefox.
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

  /* Variants are color schemes */
  ${({ variant = 'primary' }: ButtonProps) => ButtonColorStyles[variant]}

  /* Sizes */
  ${({ size = 'medium' }: ButtonProps) => ButtonSizeStyles[size]}

  /* Disabled State */
  ${({ disabled }: ButtonProps) =>
      disabled &&
      css`
          opacity: 0.5;
          cursor: not-allowed;
      `}

`;

export const Button = ({
    className,
    ...props
}: ButtonProps): React.ReactElement<any> => (
    <StyledButton
        className={classNames('anchor-button', className)}
        {...props}
    />
);
