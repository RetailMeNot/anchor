// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Title } from './Title.component';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/List/Title', module).add('Primary', () => (
    <ThemeProvider theme={RootTheme}>
        <StyledStory>
            <p>Title</p>
            <Title>Title 1</Title>
        </StyledStory>
    </ThemeProvider>
));
