// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { CardAction } from './CardAction.component';
// README
import * as README from './README.md';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/Card/CardAction', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <p>CardAction 1</p>
                <CardAction>Children</CardAction>
            </StyledStory>
        </ThemeProvider>
    ));
