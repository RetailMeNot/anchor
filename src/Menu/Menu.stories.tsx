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
                    <Item path="/">
                        Categories <ChevronDown color="white" />
                    </Item>
                    <Item path="/">
                        Stores <ChevronDown color="white" />
                    </Item>
                    <Item path="/">More</Item>
                </Menu>

                <br />

                <Typography tag="p">Small</Typography>

                <Menu size="small">
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

                <Menu size="small" justify="flex-end" background="#4B2354">
                    <Item path="/">Rx Saver</Item>
                    <Item path="/">Genie</Item>
                    <Item path="/">Everyday</Item>
                    <Item path="/">Real Deal</Item>
                    <Item path="/">Get the App</Item>
                </Menu>
            </StyledStory>
        </ThemeProvider>
    ));
