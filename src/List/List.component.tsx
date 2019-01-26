// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { fonts, colors, sizes } from '../theme';

interface ListProps {
  className?: string;
  children?: any;
  title?: string;
  hidden?: boolean;
}

export const StyledList = styled.div`
  .title {
    margin: 0;
    padding: ${sizes.padding.md};
    font-family: ${fonts.fontFamily};
    font-size: .75rem;
    font-weight: 600;
    color: ${colors.neutrals.ash.dark};
    line-height: .75rem;
  }
`;

const DefaultProps: ListProps = {
};

export const List: React.SFC<ListProps> = ({
  className,
  children,
  title,
...props
}: ListProps = DefaultProps): React.ReactElement<any> => (
  <StyledList className={classNames(className)} {...props}>
    {title && <p className="title">{title}</p>}
    {children}
  </StyledList>
);

List.defaultProps = DefaultProps;

export default List;
