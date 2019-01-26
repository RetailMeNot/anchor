// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { colors, fonts, sizes, variables } from '../../theme';

export interface ItemProps {
  children?: any;
  className?: string;
}

export const StyledItem = styled.a`
  display: flex;
  border-radius: ${variables.borderRadius};
  padding: ${sizes.padding.sm} ${sizes.padding.md};
  cursor: pointer;
  color: ${colors.neutrals.charcoal.base};
  font-family: ${fonts.fontFamily};
  font-weight: normal;
  text-decoration: none;
  line-height: 1.5rem;
  transition: background-color 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, .05);
  }
`;

const DefaultProps: ItemProps = {
};

export const Item = ({
  className,
  children,
  ...props
}: ItemProps = DefaultProps): React.ReactElement<any> => (
  <StyledItem className={classNames(className)} {...props}>
    {children}
  </StyledItem>
);

Item.defaultProps = DefaultProps;

export default Item;
