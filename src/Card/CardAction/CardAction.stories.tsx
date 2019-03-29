// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import CardAction from './CardAction.component';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Card/CardAction', module).add('Default', () => (
    <StyledStory>
        <p>CardAction 1</p>
        <CardAction>Children</CardAction>
    </StyledStory>
));
