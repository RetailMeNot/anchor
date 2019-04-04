// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Header } from './Header.component';
// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 3rem;
`;

storiesOf('Components/Layout/Header', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('default', () => (
        <StyledStory>
            <Header />
        </StyledStory>
    ));
