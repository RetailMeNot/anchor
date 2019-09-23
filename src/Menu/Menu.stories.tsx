// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Menu } from './Menu.component';
import { Item } from './Item';
import { ChevronDown } from '../Icon';
// README
import * as README from './README.md';
import { RootTheme } from '../theme';
import { Typography } from '../Typography';
import { DropDown } from '../DropDown';
import { List, Item as ListItem } from '../List';

const listItemArray = [
    { key: 1, label: 'List Item 1' },
    { key: 2, label: 'List Item 2' },
    { key: 3, label: 'List Item 3' },
    { key: 4, label: 'List Item 4' },
    { key: 5, label: 'List Item 5' },
];

const MockList = () => (
    <List>
        {listItemArray.map(({ key, label }: any) => (
            <ListItem
                key={key}
                onClick={() => {
                    /* tslint:disable no-console */
                    console.log(`${label} has been clicked`);
                    /* tslint:enable no-console */
                }}
            >
                {label}
            </ListItem>
        ))}
    </List>
);

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/Menu', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Typography tag="p">Large</Typography>

                <Menu>
                    <DropDown
                        overlay={<MockList />}
                        position="bottomStart"
                        showArrow={false}
                        trigger="both"
                    >
                        <Item>
                            DropDown Link <ChevronDown color="white" />
                        </Item>
                    </DropDown>
                    <DropDown
                        overlay={<MockList />}
                        position="bottomStart"
                        showArrow={false}
                        trigger="both"
                    >
                        <Item>
                            Stores <ChevronDown color="white" />
                        </Item>
                    </DropDown>
                    <Item path="/">More</Item>
                </Menu>

                <br />

                <Typography tag="p">Small</Typography>

                <Menu size="sm">
                    <Item path="/">Rx Saver</Item>
                    <Item path="/">Genie</Item>
                    <Item path="/">Everyday</Item>
                    <Item path="/">Real Deal</Item>
                    <Item path="/">Get the App</Item>
                </Menu>

                <br />
                <Typography tag="p">
                    Small, Custom Color, &amp; Custom Position
                </Typography>

                <Menu size="sm" justify="flex-end" background="#4B2354">
                    <Item path="/">Rx Saver</Item>
                    <Item path="/">Genie</Item>
                    <Item path="/">Everyday</Item>
                    <Item path="/">Real Deal</Item>
                    <Item path="/">Get the App</Item>
                </Menu>
            </StyledStory>
        </ThemeProvider>
    ));
