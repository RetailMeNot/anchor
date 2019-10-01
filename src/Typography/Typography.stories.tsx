// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import {
    Typography,
    TextAlign,
    FontWeights,
    TextTransforms,
} from './Typography.component';
import * as README from './README.md';
import { RootTheme } from '../theme';
import { typography, TypographyTags, Scale } from '../theme/typography.theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
    font-family: base;
    color: text.body;
`;

const scales = [62, 52, 44, 36, 32, 28, 24, 20, 18, 16, 14, 12];
const alignments = [
    'center',
    'left',
    'right',
    'inherit',
    'justify',
    'start',
    'end',
];
const weights = [
    'normal',
    'bold',
    'bolder',
    'lighter',
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    'initial',
    'inherit',
];
const transforms = [
    'none',
    'capitalize',
    'uppercase',
    'lowercase',
    'initial',
    'inherit',
] as TextTransforms[];
const tags = Object.keys(typography.tag) as TypographyTags[];

type TagSelect = TypographyTags | '';
type ScaleSelect = Scale | '';
type AlignSelect = TextAlign | '';
type WeightSelect = FontWeights | '';
type TransformsSelect = TextTransforms | '';
const Tags = [''].concat(tags) as TagSelect[];
const Scales = ['']
    .concat(Object.keys(typography.scale))
    .map(x => parseInt(x, 10) || '') as ScaleSelect[];
const Alignments = [''].concat(alignments) as AlignSelect[];
const Weights = weights.concat('') as WeightSelect[];
const Transforms = [''].concat(transforms) as TransformsSelect[];

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
                            <Typography
                                color="neutrals.charcoal.base"
                                scale={scale}
                            >
                                Font size is {scale}px | Scale value = {scale}
                            </Typography>
                        </div>
                    ))}
                </div>
                <Typography tag="h1">Elements</Typography>
                <div>
                    {tags.map((element: any) => (
                        <div key={element}>
                            <Typography tag={element}>
                                Element: {element}
                            </Typography>
                        </div>
                    ))}
                </div>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Knobus Propus', () => {
        const content = text(
            'content',
            'The quick brown fox jumps over the lazy dog.'
        );

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <Typography
                        tag={select('tag', Tags, '') || undefined}
                        scale={select('scale', Scales, '') || undefined}
                        color={text('color', '') || undefined}
                        size={text('size', '') || undefined}
                        lineHeight={text('lineHeight', '') || undefined}
                        align={select('align', Alignments, '') || undefined}
                        weight={select('weight', Weights, '') || undefined}
                        transform={
                            select('transform', Transforms, '') || undefined
                        }
                    >
                        {content}
                    </Typography>
                </StyledStory>
            </ThemeProvider>
        );
    });
