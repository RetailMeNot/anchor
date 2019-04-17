// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import Badge from './Badge.component';
import { Icon } from '../Icon';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Badge', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <p>Badge 1</p>
            <Badge count={text('Badge QTY', '0')}>
                <Icon type="cart" />
            </Badge>
        </StyledStory>
    ));
