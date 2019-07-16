// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { List, Item, Title, Divider } from './';
import { Typography } from '../Typography';
import { Home } from '../Icon';
// README
import * as README from './README.md';
import { RootTheme } from '../theme';
// THEME

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/List', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Typography>List</Typography>
                <List>
                    <Title>Title 1</Title>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Title>Title 1</Title>
                    <Item>Item 1</Item>
                    <Item>Item 1</Item>
                    <Item>Item 3</Item>
                    <Divider />
                    <Item>Item 4</Item>
                    <Item>Item 4</Item>
                    <Divider />
                    <Title>Title 2</Title>
                    <Item size="lg">Item 5</Item>
                    <Item suffix={<small>$2.00</small>}>Item 6</Item>
                    <Item
                        prefix={
                            <span
                                style={{
                                    paddingRight: '16px',
                                }}
                            >
                                <Home />
                            </span>
                        }
                    >
                        Item 7
                    </Item>
                </List>
            </StyledStory>
        </ThemeProvider>
    ));
