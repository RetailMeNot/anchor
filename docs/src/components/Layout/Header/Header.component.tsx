// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { Link } from 'gatsby';
// THEME
import { colors } from '../../../../../src/theme';
// COMPONENTS
import { NavigationBar } from '../../Navigation';

export const StyledHeaderElement = styled.header`
  background-color: ${colors.main.grapePurchase.base};
  color: white;
  display: flex;
  padding: 0;
  margin: 0;
  height: 4rem;

  a {
      flex: 1;
      color: ${colors.neutrals.white.base};
      text-decoration: none;
  }

  h1 {
    padding: 1rem;
    margin: 0;
    font-weight: 400;
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 2rem;
  }

  nav {
    flex: 1;
  }
`;

interface HeaderProps {
  className?: string;
  children?: any;
}

export const Header = ({ children, className }: HeaderProps): React.ReactElement<any> => (
  <StyledHeaderElement className={classNames(className)}>
    <Link to="/">
      <h1>Anchor</h1>
    </Link>
    <NavigationBar />
  </StyledHeaderElement>
);
