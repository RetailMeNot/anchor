// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Header } from './Header.component';

const StyledStory = styled.div`
    padding: 2rem 3rem;
`;

storiesOf('Components/Layout/Header', module).add('default', () => (
    <StyledStory>
        <Header />
    </StyledStory>
));
