// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR
import * as README from './README.md';
import { Typography, Avatar, Button, Close } from '..';
import { RootTheme } from '../theme';
import { typography, TypographyTags, Scale } from '../theme/typography.theme';
import { Skeleton } from './Skeleton.component';

const StyledStory = styled('div')`
    padding: 2rem 4rem;
    color: text.body;
    font-family: ${th('typography.fontFamily')};
`;

const Card = styled('div')`
    width: 330px;
    background-color: white;
    border-radius: base;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
`;

const CardHeader = styled('div')`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    position: relative;

    button {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
    }

    .anchor-avatar {
        background-color: #ec5673;
    }
`;

const CardInfo = styled('div')`
    margin-left: 1rem;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
`;

const CardImage = styled('div')`
    width: 100%;
    height: 190px;
    background: linear-gradient(170deg, #df206c 0%, #f16667 100%);
`;
const CardContent = styled('div')`
    width: 100%;
`;
const CardFooter = styled('div')`
    padding: 1rem 1rem 1.5rem;
`;

type TagSelect = TypographyTags | '';
type ScaleSelect = Scale | '';
const Tags = [''].concat(Object.keys(typography.tag)) as TagSelect[];
const Scales = ['']
    .concat(Object.keys(typography.scale))
    .map(x => parseInt(x, 10) || '') as ScaleSelect[];

storiesOf('Components/Skeleton', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Text', () => {
        const loading = boolean('loading', true);
        const defaultText =
            // tslint:disable-next-line: max-line-length
            'For a long time in software companies the practice of building software as one-off initiatives at has been called into question and deemed insular. Its no longer acceptable to deliver a piece of software that solves a particular problem and call it a solution. As new requirements emerge, narrowing our focus just to a particular challenges requirements results in organizational tension, substandard solutions, churn, code rot, technical debt, etc.';

        const textLength = parseInt(text('textLength', ''), 10) || undefined;
        const tag = select<TagSelect>('Typography tag', Tags, '');
        const scale = select<ScaleSelect>('Typography scale', Scales, '');

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <Typography
                        tag={tag || undefined}
                        scale={scale || undefined}
                    >
                        <Skeleton loading={loading} textLength={textLength}>
                            {text('Text', defaultText)}
                        </Skeleton>
                    </Typography>
                </StyledStory>
            </ThemeProvider>
        );
    })
    .add('Custom Shape', () => {
        const loading = boolean('loading', true);

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <Skeleton
                        loading={loading}
                        display={text('display', '') || undefined}
                        borderRadius={text('borderRadius', 'circular')}
                        width={text('width', '10rem') || undefined}
                        height={text('height', '2rem') || undefined}
                        maxWidth={text('maxWidth', '') || undefined}
                        maxHeight={text('maxHeight', '') || undefined}
                        minWidth={text('minWidth', '') || undefined}
                        minHeight={text('minHeight', '') || undefined}
                        margin={text('margin', '') || undefined}
                        padding={text('padding', '') || undefined}
                        textLength={
                            parseInt(text('textLength', ''), 10) || undefined
                        }
                    />
                </StyledStory>
            </ThemeProvider>
        );
    })
    .add('Default', () => {
        const loading = boolean('loading', true);

        const fetchedData = {
            title: text('title', 'Keanu Reeves'),
            subtitle: text('subtitle', 'Actor, Musician'),
            description: text(
                'description',
                'Keanu Charles Reeves is a Canadian actor and musician. You may know him by his real name, John Wick.'
            ),
            initials: text('initials', 'KR'),
        };
        const placeholderData = {
            title: text('loading.title', 'Friendly title'),
            subtitle: text('loading.subtitle', 'Lovely subtitle'),
            description: text(
                'loading.description',
                "The text here doesn't actually matter, its just used to determine how long to make the skeleton text."
            ),
            initials: text('loading.initials', '') || undefined,
        };

        const { title, subtitle, initials, description } = loading
            ? placeholderData
            : fetchedData;

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <Card>
                        <CardHeader>
                            <Skeleton loading={loading} borderRadius="circular">
                                <Avatar label={initials} />
                            </Skeleton>

                            <CardInfo>
                                <Typography scale={16} weight={500}>
                                    <Skeleton loading={loading}>
                                        {title}
                                    </Skeleton>
                                </Typography>
                                <Typography scale={14}>
                                    <Skeleton loading={loading}>
                                        {subtitle}
                                    </Skeleton>
                                </Typography>
                            </CardInfo>
                            {!loading && (
                                <Button
                                    variant="minimal"
                                    circular
                                    size="sm"
                                    outline={false}
                                    prefix={<Close />}
                                />
                            )}
                        </CardHeader>
                        <CardContent>
                            <Skeleton loading={loading} display="block">
                                <CardImage />
                            </Skeleton>
                        </CardContent>
                        <CardFooter>
                            <Typography scale={14}>
                                <Skeleton loading={loading}>
                                    {description}
                                </Skeleton>
                            </Typography>
                        </CardFooter>
                    </Card>
                </StyledStory>
            </ThemeProvider>
        );
    });
