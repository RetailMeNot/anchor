// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import { text } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Avatar } from './Avatar.component';
// README
import * as README from './README.md';
// THEME
import { colors, RootTheme } from '../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
    background-color: ${colors.grapePurchase.base};
    color: ${colors.white.base};
`;

storiesOf('Components/Avatar', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <p>Avatar</p>
                <Avatar />
                <p>Avatar With Initials</p>
                <Avatar label={text('Avatar Initials', 'CC')} />
            </StyledStory>
        </ThemeProvider>
    ));
