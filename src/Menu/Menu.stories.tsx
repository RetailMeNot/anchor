// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import Menu from './Menu.component';
import { Item } from './Item';
import { Icon } from '../Icon';
// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Menu', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <p>Large</p>
            <Menu>
                <Item path="/">
                    Categories <Icon type="chevron-down" color="white" />
                </Item>
                <Item path="/">
                    Stores <Icon type="chevron-down" color="white" />
                </Item>
                <Item path="/">More</Item>
            </Menu>
            <br />
            <p>Small</p>
            <Menu size="small">
                <Item path="/">Rx Saver</Item>
                <Item path="/">Genie</Item>
                <Item path="/">Everyday</Item>
                <Item path="/">Real Deal</Item>
                <Item path="/">Get the App</Item>
            </Menu>
            <br />
            <p>Small, Custom Color, & Custom Position</p>
            <Menu size="small" justify="flex-end" bg="#4B2354">
                <Item path="/">Rx Saver</Item>
                <Item path="/">Genie</Item>
                <Item path="/">Everyday</Item>
                <Item path="/">Real Deal</Item>
                <Item path="/">Get the App</Item>
            </Menu>
        </StyledStory>
    ));
