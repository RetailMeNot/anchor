// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css, InterpolationValue } from 'styled-components';
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
  size?: 'sm' | 'md' | 'lg';
}

interface ButtonStylesGroup {
  [key: string]: InterpolationValue[];
}

// TODO: a11y

const ButtonColorStyles: ButtonStylesGroup = {
  primary: css`
    border: solid thin ${colors.accent.savvyCyan.base};
    background-color: ${colors.accent.savvyCyan.base};
    color: ${colors.neutrals.white.base};

    &:hover {
      background-color: ${darken(0.05, colors.accent.savvyCyan.base)};
    }
  `,
  secondary: css`
    border: solid thin ${colors.accent.savvyCyan.light};
    background-color: ${colors.accent.savvyCyan.light};
    color: ${colors.neutrals.white.base};

    &:hover {
      background-color: ${darken(0.1, colors.accent.savvyCyan.light)};
    }
  `,
  text: css`
    border: solid thin ${colors.neutrals.white.base};
    background-color: ${colors.neutrals.white.base};
    color: ${colors.accent.savvyCyan.base};

    &:hover {
      color: ${darken(0.25, colors.accent.savvyCyan.base)};
    }
  `,
};

const ButtonSizeStyles: ButtonStylesGroup = {
  sm: css`
    padding: ${sizes.padding.xs};
    font-size: ${fonts.baseFontSize * 0.75}px;
  `,
  md: css`
    padding: ${sizes.padding.sm} ${sizes.padding.md};
    font-size: ${fonts.baseFontSize}px;
  `,
  lg: css`
    padding: ${sizes.padding.md};
    font-size: ${fonts.baseFontSize * 1.5}px;
  `,
};

export const StyledButton = styled.button`
	position: relative;
	min-width: 2rem;
	border-radius: ${sizes.border.radius.base};
	font-weight: 500;
	font-family: ${fonts.fontFamily};
	text-align: center;
	cursor: pointer;
  margin-right: ${sizes.padding.md};

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
  ${({ size = 'md' }: ButtonProps) => ButtonSizeStyles[size]}

  /* Disabled State */
  ${({ disabled }: ButtonProps) => disabled && css`
    opacity: .5;
    cursor: not-allowed;
  `}

`;

const DefaultProps: ButtonProps = {};

export const Button = ({ className, ...props }: ButtonProps = DefaultProps): React.ReactElement<any> =>
  <StyledButton className={classNames(className)} {...props} />;

Button.defaultProps = DefaultProps;

export default Button;
