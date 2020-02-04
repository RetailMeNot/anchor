// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import { text } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Avatar } from './Avatar.component';
import { Typography } from '../Typography';
// README
import * as README from './README.md';
// THEME
import { RootTheme } from '../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
    background-color: primary.base;
    color: white;
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
                <Typography as="h1">Avatar</Typography>
                <Avatar />
                <Typography as="h1">Avatar With Initials</Typography>
                <Avatar label={text('Avatar Initials', 'CC')} />
                <Typography as="h1">Avatar With Picture</Typography>
                <Avatar
                    src={text(
                        'Avatar Url',
                        'https://avatars3.githubusercontent.com/u/24923730?s=460&v=4'
                    )}
                />
            </StyledStory>
        </ThemeProvider>
    ));
