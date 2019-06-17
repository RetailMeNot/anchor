// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from './Typography.component';
import { Grid, Cell } from '../Grid';
// README
import * as README from './README.md';
// THEME
import typography from '../theme/typography.theme';

const StyledStory = styled.div`
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
];

const Theme = {
    typography,
};

storiesOf('Components/Typography', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={Theme}>
            <StyledStory>
                <Typography tag="h1">Scales</Typography>
                <Grid columns="100%" minRowHeight="5rem" gap="1rem">
                    {scales.map((scale: any) => (
                        <Cell key={scale}>
                            <Typography color="ash" scale={scale}>
                                Font size is {scale}px | Scale value = {scale}
                            </Typography>
                        </Cell>
                    ))}
                </Grid>
                <Typography tag="h1">Elements</Typography>
                <Grid columns="100%" minRowHeight="5rem" gap="1rem">
                    {elements.map((element: any) => (
                        <Cell key={element}>
                            <Typography hue="dark" tag={element}>
                                Element: {element}
                            </Typography>
                        </Cell>
                    ))}
                </Grid>
            </StyledStory>
        </ThemeProvider>
    ));
