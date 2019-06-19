// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Divider } from './Divider.component';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/List/Divider', module).add('Primary', () => (
    <ThemeProvider theme={RootTheme}>
        <StyledStory>
            <p>Divider</p>
            <Divider>Divider 1</Divider>
        </StyledStory>
    </ThemeProvider>
));
