// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import CardActionArea from './CardActionArea.component';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Card/CardActionArea', module).add('Default', () => (
    <StyledStory>
        <p>CardActionArea 1</p>
        <CardActionArea>Children</CardActionArea>
    </StyledStory>
));
