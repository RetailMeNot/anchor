// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
// THEME
import { colors, sizes } from '../../../../../src/theme';
// COMPONENTS

export const StyledFooterElement = styled.footer`
  padding: ${sizes.padding.lg};
  background-color: ${colors.neutrals.silver.light};
  border-top: solid thin ${colors.neutrals.silver.base};
  height: 6rem;
  width: 100%;
`;

interface FooterProps {
  className?: string;
  children?: any;
}

export const Footer = ({ children, className }: FooterProps): React.ReactElement<any> => (
  <StyledFooterElement className={classNames(className)}>
    I'm the footer. Neat.
  </StyledFooterElement>
);
