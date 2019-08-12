// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from './Typography.component';
// README
import * as README from './README.md';
// THEME
import { RootTheme } from '../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const scales = [62, 52, 44, 36, 32, 28, 24, 20, 18, 16, 14, 12];

const elements = [
    'p',
    'span',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'address',
    'code',
    'pre',
    'a',
];

storiesOf('Components/Typography', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Typography tag="h1">Scales</Typography>
                <div>
                    {scales.map((scale: any) => (
                        <div key={scale}>
                            <Typography color="charcoal" scale={scale}>
                                Font size is {scale}px | Scale value = {scale}
                            </Typography>
                        </div>
                    ))}
                </div>
                <Typography tag="h1">Elements</Typography>
                <div>
                    {elements.map((element: any) => (
                        <div key={element}>
                            <Typography tag={element}>
                                Element: {element}
                            </Typography>
                        </div>
                    ))}
                </div>
            </StyledStory>
        </ThemeProvider>
    ));
