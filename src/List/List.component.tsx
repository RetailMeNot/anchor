// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
// COMPONENTS
import { Item } from './Item';
import { Title } from './Title';
import { Divider } from './Divider';

type ListItemType = 'item' | 'title' | 'divider';

type ListItem = {
    label: string;
    value: {
        [key: string]: any;
        listItemType?: ListItemType;
    };
};

interface ListProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    className?: string;
    children?: any;
    hidden?: boolean;
    items?: ListItem[];
}

const itemComponent = {
    item: Item,
    title: Title,
    divider: Divider,
};

const StyledList = styled('div')`
    box-sizing: border-box;
    ${spaceStyles}
`;

export const List: React.FunctionComponent<ListProps> = ({
    className,
    children = [],
    items,
    ...props
}: ListProps): React.ReactElement<ListProps> => (
    <StyledList className={classNames('anchor-list', className)} {...props}>
        {items
            ? items.map(
                  (
                      {
                          label,
                          value: { listItemType = 'item', key, ...r },
                      }: ListItem,
                      index: number
                  ) => {
                      return React.createElement<any>(
                          itemComponent[listItemType],
                          { label, key: key || `list-${index}`, ...r },
                          label
                      );
                  }
              )
            : children}
    </StyledList>
);
