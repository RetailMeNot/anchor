// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { lighten } from 'polished';
// COMPONENTS
import { ItemProps } from './Item/Item.component';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children?:
        | Array<React.ReactElement<ItemProps>>
        | React.ReactElement<ItemProps>;
    className?: string;
    size?: 'small' | 'large';
    // Color
    bg?: string;
    color?: string;
    // Configuration
    justify?: 'flex-start' | 'flex-end';
}

const StyledMenu = styled('nav')<MenuProps>`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  min-width: 250px;
  /* TODO: for mobile */
  //overflow-y: hidden;
  //overflow-x: auto;

  ${({ bg = th.color('primary.base') }) =>
      css({
          backgroundColor: bg,
      })};
  font-size: 0.875rem;
  font-family: ${th('typography.fontFamily')};
  border-radius: ${th.radius('base')};

  /* TODO: use React.clone to append a run-time class here instead of using a * selector */
  > * > a,
  > a {
    display: inline-block;
    line-height: 1.125rem;
    ${({ color = th.color('neutrals.white.base') }) =>
        css({
            color,
        })};
    transition: background-color 500ms, color: 500ms;
    margin: 0 0.125rem;

    &:hover {
      ${({ color }) =>
          css({
              color: color
                  ? lighten(20, color)
                  : th.color('neutrals.white.base'),
          })};
      background-color: rgba(255, 255, 255, .1);
    }

    &:active,
    &.active {
      color: ${({ color }) =>
          css({
              color: color
                  ? lighten(20, color)
                  : th.color('neutrals.white.base'),
          })};
      background-color: rgba(255, 255, 255, .1); // TODO: more or less opacity
    }

    &:focus {
      background-color: rgba(255, 255, 255, .1);
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  /* Positioning */
  ${({ justify = 'flex-start' }) =>
      css({
          justifyContent: justify,
      })};

  /* Menu Sizes */
  ${({ size = 'large' }) => MenuSizes[size]};
`;

const MenuSizes = {
    small: css`
        > * > a,
        > a {
            font-size: 0.75rem;
            line-height: 0.75rem;
            font-weight: 500;
            padding: 0.5rem 0.75rem;
        }
    `,
    large: css`
        > * > a,
        > a {
            border-radius: ${th.radius('base')};
            font-weight: 600;
            padding: 1rem 0.75rem;
        }
    `,
};

export const Menu: React.FunctionComponent<MenuProps> = ({
    className,
    children,
    ...props
}: MenuProps): React.ReactElement<MenuProps> => (
    <StyledMenu className={classNames('anchor-menu', className)} {...props}>
        {/* TODO: React.cloneElement() to add props from parent to child? */}
        {/* TODO: Need to solve the container issue */}
        {children}
    </StyledMenu>
);
