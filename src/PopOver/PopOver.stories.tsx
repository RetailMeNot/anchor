// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { PopOver } from './PopOver.component';

const StyledStory = styled('div')`
    padding: 2rem;
    color: text.base;
    font-family: base;
`;

storiesOf('Components/PopOver', module).add('Default', () => (
    <ThemeProvider theme={RootTheme}>
        <StyledStory>
            <PopOver />
        </StyledStory>
    </ThemeProvider>
));
