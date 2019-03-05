// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import DropDown from './DropDown.component';
import { Menu, Item } from '../Menu';
import { List, Item as ListItem } from '../List';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

const MockList = () => (
    <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
    </List>
);

storiesOf('Components/DropDown', module).add('Default', () => (
    <StyledStory>
        <p>DropDown 1</p>
        <DropDown overlay={<MockList />}>
            <a>
                DropDown Link <br /> big
            </a>
        </DropDown>
        <p>DropDown 2</p>
        <DropDown overlay={<MockList />}>
            <a>DropDown Link</a>
        </DropDown>
        <p>Menu</p>
        <Menu>
            <DropDown overlay={<MockList />}>
                <Item path="/">Categories</Item>
            </DropDown>
            <DropDown overlay={<MockList />}>
                <Item path="/">Stores</Item>
            </DropDown>
        </Menu>
    </StyledStory>
));
