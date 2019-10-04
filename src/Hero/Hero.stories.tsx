// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { Typography } from '..';
import { colors, RootTheme } from '../theme';
import * as README from './README.md';
import SomeImage from './temporary/some_image.svg';
import { Button } from '../Button';
// SUBJECT
import { Hero } from './Hero.component';
const { Title, Subtitle } = Hero;

const StyledStory = styled('div')`
    background: white;
    width: 100vw;
`;

const tealGradient = `linear-gradient(224deg, #00CCCD, #00E0D1)`;

storiesOf('Components/Hero', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Hero
                    background={color('Hero Background', tealGradient)}
                    minHeight="9.375rem"
                >
                    <Title>{text('Title', 'Baratheon')}</Title>
                    <div>
                        <Subtitle>
                            {text('Subtitle', 'Ours is the Fury')}
                        </Subtitle>
                    </div>
                </Hero>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Simple', () => {
        const BreadCrumbs = styled(Typography)`
            // https://github.com/styled-components/styled-components/issues/1816
            && {
                margin-bottom: 6px;
            }
        `;

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <Hero
                        background={color('Hero Background', tealGradient)}
                        color={color('Hero Color', colors.white.base)}
                    >
                        <BreadCrumbs scale={14} weight={500}>
                            {text('Subtext', 'Westeros / House Tyrell')}
                        </BreadCrumbs>
                        <Title>{text('Title', 'Olenna Tyrell')}</Title>
                    </Hero>
                </StyledStory>
            </ThemeProvider>
        );
    })
    .add('CTA', () => {
        const StyledImageWrapper = styled('div')`
            position: absolute;
            right: 0;
            bottom: 0;
            svg {
                display: block;
            }
        `;

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <Hero
                        background={color('Hero Background', tealGradient)}
                        minHeight="12.5rem"
                    >
                        <div>
                            <StyledImageWrapper>
                                <SomeImage />
                            </StyledImageWrapper>
                            <Title scale={44}>
                                {text('Title', 'House Lannister')}
                            </Title>
                            <div>
                                <Subtitle>
                                    {text(
                                        'Subtitle',
                                        'A Lannister always pays his debts'
                                    )}
                                </Subtitle>
                            </div>
                            <div>
                                <Button
                                    variant="outline"
                                    reverse
                                    onClick={() => alert('Paid!')}
                                    margin="0 auto"
                                >
                                    {text('Button Text', 'Pay Debts Today')}
                                </Button>
                            </div>
                        </div>
                    </Hero>
                </StyledStory>
            </ThemeProvider>
        );
    });
