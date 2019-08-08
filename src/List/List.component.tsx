// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Item } from './Item';
import { Title } from './Title';
import { Divider } from './Divider';

type ListItemType = 'item' | 'title' | 'divider';

type ListItem = {
    label: string;
    value: {
        listItemType?: ListItemType;
        [key: string]: any;
    };
};

interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
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

    .anchor-list-title {
        margin-top: 0.75rem;
    }

    .anchor-list-item {
        margin-bottom: 0.25rem;
        & + .anchor-list-title {
            margin-top: 0.5rem;
        }
    }

    .anchor-list-divider {
        // no rules for this yet
    }
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
