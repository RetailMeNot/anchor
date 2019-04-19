// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { text, color } from '@storybook/addon-knobs';
// ANCHOR
import { Typography } from '..';
import { colors } from '../theme';
import * as README from './README.md';
import SomeImage from './temporary/some_image.svg';
import { Grid, CustomAdaptor, StandardBreakpoints } from '../Grid';
import { Button } from '../Button';

import { Hero } from './Hero.component';
const { Title, Subtitle } = Hero;

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledStory = styled.div`
    background: ${colors.white.base};
    width: 100vw;
`;

// Stories
// ------------------------------------------------------------------------------------------------------------------
const tealGradient = 'linear-gradient(224deg,#00cccd,#2de2b3)';

storiesOf('Components/Hero', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <Hero
                background={color('Hero Background', tealGradient)}
                minHeight="9.375rem"
            >
                <Title scale={44}>{text('Title', 'Baratheon')}</Title>
                <CustomAdaptor minWidth={StandardBreakpoints.sm.min}>
                    <Subtitle>{text('Subtitle', 'Ours is the Fury')}</Subtitle>
                </CustomAdaptor>
            </Hero>
        </StyledStory>
    ))
    .add('Simple', () => {
        const BreadCrumbs = styled(Typography)`
            &&{ margin-bottom: 6px; }}
        `;

        return (
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
        );
    })
    .add('CTA', () => {
        // Replace when proper button exists
        const NeatButton = styled(Button)`
            color: white;
            border: thin solid white;
            width: 9.5rem;
            text-align: center;
            margin: 0.1835rem auto;
            font-size: 15px;
        `;

        const StyledImageWrapper = styled.div`
            position: absolute;
            right: 0;
            bottom: 0;
            svg {
                display: block;
            }
        `;

        return (
            <StyledStory>
                <Hero
                    background={color('Hero Background', tealGradient)}
                    minHeight="12.5rem"
                >
                    <Grid gap="0.375rem" columns={1}>
                        <StyledImageWrapper>
                            <SomeImage />
                        </StyledImageWrapper>
                        <Title>{text('Title', 'House Lannister')}</Title>
                        <CustomAdaptor minWidth={StandardBreakpoints.sm.min}>
                            <Subtitle>
                                {text(
                                    'Subtitle',
                                    'A Lannister always pays his debts'
                                )}
                            </Subtitle>
                        </CustomAdaptor>
                        <NeatButton
                            variant="text"
                            onClick={() => alert('Paid!')}
                        >
                            {text('Button Text', 'Pay Debts Today')}
                        </NeatButton>
                    </Grid>
                </Hero>
            </StyledStory>
        );
    });
