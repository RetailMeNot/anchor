// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { Link } from 'gatsby';
// THEME
import { colors, fonts, sizes } from '../../../../../src/theme';

export const StyledSideNavigationElement = styled.nav`
  min-width: 299px;
  max-width: 299px;
  background-color: ${colors.neutrals.silver.base};
  border-right: solid 1px ${colors.neutrals.silver.dark};
  overflow-y: auto;
  overflow-x: hidden;

  > ul {
    > li {
    border-bottom: solid thin ${colors.neutrals.silver.dark};
      > a {
        font-weight: 500;
      }
    }

   ul li a {
    padding-left: ${sizes.padding.lg};
   }

   &:last-of-type {
     padding-bottom: ${sizes.padding.xl};
   }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    li {
      flex: 1;

      a {
        display: block;
        padding: ${sizes.padding.md};
        cursor: pointer;
        text-decoration: none;
        color: ${colors.neutrals.charcoal.light};

        font-size: ${fonts.paragraph.informational.fontSize};

        transition: background-color 250ms;

        &:hover {
          background-color: ${colors.neutrals.silver.dark};
        }

        &.active {
          color: ${colors.neutrals.charcoal.dark};
        }
      }
    }
  }
`;

interface SideNavigationProps {
  className?: string;
  children?: any;
}

interface NavigationItem {
  route: string;
  label: string;
  children?: any[];
}

const navOptions: NavigationItem[] = [
  { route: '/support', label: 'Support' },
  { route: '/utilities', label: 'Utilities', children: [
      { route: '/theme', label: 'Theme' },
  ]},
  { route: '/components', label: 'Components', children: [
      { route: '/components/button', label: 'Button' },
      { route: '/components/grid', label: 'Grid' },
      { route: '/components/layout', label: 'Layout' },
  ]},
];

const navLink = (route: string, label: string, children?: any[]): React.ReactElement<any> => (
  <li key={label}>
    <Link to={route} activeClassName="active">{label}</Link>
    {children && children.length ?
      <ul>
        {children
          .map(({ route: subRoute, label: subLabel, children: subChildren }) => navLink(subRoute, subLabel, subChildren)
        )}
      </ul>
      : null
    }
  </li>
);

export const SideNavigation = ({ children, className }: SideNavigationProps): React.ReactElement<any> => (
  <StyledSideNavigationElement className={classNames(className)}>
    <ul>
      {navOptions.map(({ route, label, children: navChildren }) => navLink(route, label, navChildren))}
    </ul>
  </StyledSideNavigationElement>
);
