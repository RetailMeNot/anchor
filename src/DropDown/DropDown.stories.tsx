// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { DropDown } from './DropDown.component';
import { Menu, Item } from '../Menu';
import { List, Item as ListItem } from '../List';
// README
import * as README from './README.md';
import { RootTheme } from '../theme';
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

storiesOf('Components/DropDown', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <p>DropDown 1</p>
                <DropDown
                    overlay={<MockList />}
                    position={{ top: 35, left: 50 }}
                >
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
        </ThemeProvider>
    ));
