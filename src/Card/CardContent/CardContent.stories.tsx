// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { CardContent } from './CardContent.component';
// README
import * as README from './README.md';
import { RootTheme } from '../../theme';
// THEME

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/Card/CardContent', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <CardContent>
                    <p>
                        This is the container for card content. You can specify
                        it's padding via the <code>Card</code> component.
                    </p>
                </CardContent>
            </StyledStory>
        </ThemeProvider>
    ));
