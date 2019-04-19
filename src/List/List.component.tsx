// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Item } from './Item';
import { Title } from './Title';
import { Divider } from './Divider';
// UTILS
import { filterChildrenByType } from '../../utils/filterChildrenByType/filterChildrenByType';
// import { get } from '../../utils/get/get';

export type ListItemType = 'item' | 'title' | 'divider';

type ListItem = {
    label: string;
    value: {
        listItemType?: ListItemType;
        [key: string]: any;
    };
};

interface ListProps {
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

const StyledList = styled.div`
    box-sizing: border-box;
`;

export const List: React.FunctionComponent<ListProps> = ({
    className,
    children = [],
    items,
    ...props
}: ListProps): React.ReactElement<any> => (
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
                      return React.createElement<any>(itemComponent[listItemType], { label, key, ...r }, label);
                  }
              )
            : filterChildrenByType(children, ['Item', 'Title', 'Divider'])}
    </StyledList>
);

export default List;
