// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Menu } from './Menu.component';
import { Item } from './Item';
import { ChevronDown, ChevronUp } from '../Icon';
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

const renderDemoMenu = () => {
    const [isItemHovered, setIsItemHovered] = React.useState<boolean>(false);
    const [isItem2Hovered, setIsItem2Hovered] = React.useState<boolean>(false);
    return (
        <>
            <Menu>
                <DropDown
                    overlay={<MockList />}
                    position="bottomStart"
                    showArrow={false}
                    trigger="click"
                    onTriggered={setIsItemHovered}
                >
                    <Item>
                        DropDown Link
                        {isItemHovered ? (
                            <ChevronUp color="white" />
                        ) : (
                            <ChevronDown color="white" />
                        )}
                    </Item>
                </DropDown>
                <DropDown
                    overlay={<MockList />}
                    position="bottomStart"
                    showArrow={false}
                    trigger="click"
                    onTriggered={setIsItem2Hovered}
                >
                    <Item>
                        Stores
                        {isItem2Hovered ? (
                            <ChevronUp color="white" />
                        ) : (
                            <ChevronDown color="white" />
                        )}
                    </Item>
                </DropDown>
                <Item path="/">More</Item>
            </Menu>
        </>
    );
};

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
                <Menu size="lg">
                    <Item path="/">Item 1</Item>
                    <Item path="/">Item 2</Item>
                    <Item path="/">Item 3</Item>
                    <Item path="/">Item 4</Item>
                    <Item path="/">Item 5</Item>
                    <Item path="/">Item 6</Item>
                </Menu>
                <Typography tag="p">Medium</Typography>
                {renderDemoMenu()}
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
