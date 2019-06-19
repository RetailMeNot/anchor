// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Header } from './Header.component';
// README
import * as README from './README.md';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 3rem;
`;

storiesOf('Components/Layout/Header', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Header />
            </StyledStory>
        </ThemeProvider>
    ));
