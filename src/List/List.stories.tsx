// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import { List, Item } from './';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/List', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <p>List</p>
            <List>
                <Item>Item 1</Item>
                <Item>Item 3</Item>
                <Item>Item 4</Item>
                <Item>Item 5</Item>
                <Item>Item 6</Item>
                <Item>Item 7</Item>
            </List>
        </StyledStory>
    ));
