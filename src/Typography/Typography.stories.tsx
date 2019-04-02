// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import { Typography } from './Typography.component';
import { Grid, Cell } from '../Grid';
// THEME

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

storiesOf('Components/Typography', module).add('Default', () => (
    <StyledStory>
        <Typography as="h1">Scales</Typography>
        <Grid columns="100%" minRowHeight="50px" gap="16px">
            {scales.map((scale: any) => (
                <Cell key={scale}>
                    <Typography scale={scale}>
                        Font size is {scale}px | Scale value = {scale}
                    </Typography>
                </Cell>
            ))}
        </Grid>
        <Typography as="h1">Elements</Typography>
        <Grid columns="100%" minRowHeight="50px" gap="16px">
            {elements.map((element: any) => (
                <Cell key={element}>
                    <Typography as={element}>Element: {element}</Typography>
                </Cell>
            ))}
        </Grid>
    </StyledStory>
));