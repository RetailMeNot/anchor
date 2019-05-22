// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, number } from '@storybook/addon-knobs';
// import { text, boolean } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// README
import * as README from './README.md';
// COMPONENT
import { Button } from './Button.component';
import { HitArea } from './HitArea/HitArea.component';
import * as Icon from '../Icon';
import { Typography, Cell, Grid, Cut, SuccessOutline } from '..';
import { colors } from '../theme';

const StyledStory = styled.div`
    padding: 2rem 3rem;
`;

const StyledStoryPrime = styled(StyledStory)`
    width: 1200px;
`;

const StyledReverseStory = styled(StyledStory)`
    width: 1200px;
    background-color: ${colors.grapePurchase.base};
    color: ${colors.white.base};
`;

const Label = styled(Typography)`
    text-transform: uppercase !important;
    color: ${colors.charcoal.light} !important;
    font-size: 12px;
    font-weight: bold;
    display: block;
    && {
        margin-bottom: 1rem;
    }
`;

const ReverseLabel = styled(Label)`
    color: ${colors.white.base} !important;
`;

const Heading = styled(Typography)`
    && {
        font-size: 14px;
        font-weight: bold;
        margin: 3rem 0 1rem 0;
        display: block;
    }
`;

const ShowHitbox = styled.div`
    button > ${HitArea} {
        background: rgba(255, 0, 0, 0.1);
    }
`;

storiesOf('Components/Button', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Primary', () => {
        return (
            <StyledStoryPrime>
                <Typography tag="h2" weight={'bold'}>
                    Primary Buttons
                </Typography>

                <Heading>Large Button</Heading>
                <Grid
                    columns="200px minmax(200px, max-content) 200px 200px 200px"
                    flow="column"
                    rows="2rem auto"
                    gap="0"
                    columnGap="1.5rem"
                >
                    <Cell>
                        <Label>min width - 200 px</Label>
                    </Cell>
                    <Cell>
                        <Button size="lg">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="lg">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="lg" icon={Cut}>
                            CTA Text
                        </Button>
                    </Cell>
                </Grid>

                <Heading>Medium Button</Heading>
                <Grid
                    columns="200px minmax(200px, max-content) 200px max-content 200px"
                    flow="column"
                    rows="2rem auto"
                    gap="0"
                    columnGap="1.5rem"
                >
                    <Cell>
                        <Label>min width - 200 px</Label>
                    </Cell>
                    <Cell>
                        <Button size="md">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="md">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with flip</Label>
                    </Cell>
                    <Cell>
                        <Button size="md" flip>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>min width - 112px</Label>
                    </Cell>
                    <Cell>
                        <Button size="md" minWidth="7rem">
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="md" icon={Cut}>
                            CTA Text
                        </Button>
                    </Cell>
                </Grid>

                <Heading>Small Button</Heading>
                <Grid
                    columns="200px minmax(200px, max-content) 200px 200px 200px"
                    flow="column"
                    rows="2rem auto"
                    gap="0"
                    columnGap="1.5rem"
                >
                    <Cell>
                        <Label>min width - 80 px</Label>
                    </Cell>
                    <Cell>
                        <Button size="sm">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="sm">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="sm" icon={Cut}>
                            CTA Text
                        </Button>
                    </Cell>
                </Grid>

                <Heading>x-Small Button</Heading>
                <Grid
                    columns="200px minmax(200px, max-content) 200px 200px 200px"
                    flow="column"
                    rows="2rem auto"
                    gap="0"
                    columnGap="1.5rem"
                >
                    <Cell>
                        <Label>min width - 64 px</Label>
                    </Cell>
                    <Cell>
                        <Button size="xs">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="xs">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="xs" icon={Cut}>
                            CTA Text
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>hit area</Label>
                    </Cell>
                    <Cell>
                        <ShowHitbox>
                            <Button size="xs" onClick={action('onClick!')}>
                                CTA
                            </Button>
                        </ShowHitbox>
                    </Cell>
                </Grid>

                <Heading>Button States</Heading>
                <Grid
                    columns="200px 200px 200px 200px"
                    flow="column"
                    rows="1rem auto 1rem auto"
                    gap="1rem"
                    columnGap="1.5rem"
                >
                    <Cell>
                        <Label>default</Label>
                    </Cell>
                    <Cell>
                        <Button>CTA</Button>
                    </Cell>
                    <Cell>
                        <Label>default</Label>
                    </Cell>
                    <Cell>
                        <Button flip>CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>hover</Label>
                    </Cell>
                    <Cell>
                        <Button forceHover>CTA</Button>
                    </Cell>
                    <Cell>
                        <Label>hover</Label>
                    </Cell>
                    <Cell>
                        <Button flip forceHover>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>pressed</Label>
                    </Cell>
                    <Cell>
                        <Button forceActive>CTA</Button>
                    </Cell>
                    <Cell>
                        <Label>pressed</Label>
                    </Cell>
                    <Cell>
                        <Button flip forceActive>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>focused</Label>
                    </Cell>
                    <Cell>
                        <Button forceFocus>CTA</Button>
                    </Cell>
                    <Cell>
                        <Label>focused</Label>
                    </Cell>
                    <Cell>
                        <Button flip forceFocus>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>disabled</Label>
                    </Cell>
                    <Cell>
                        <Button disabled>CTA</Button>
                    </Cell>
                    <Cell>
                        <Label>revealed</Label>
                    </Cell>
                    <Cell>
                        <Button flip revealed>
                            Code Revealed
                        </Button>
                    </Cell>
                </Grid>

                <Heading>Alternate Theme Color</Heading>
                <Grid
                    columns="200px minmax(200px, max-content) 200px max-content 200px"
                    flow="column"
                    rows="2rem auto"
                    gap="0"
                    columnGap="1.5rem"
                >
                    <Cell>
                        <Label>default</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme={colors.dealEnvy}>CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>button with flip</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme={colors.dealEnvy} flip>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>hover</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme={colors.dealEnvy} forceHover>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>hover with flip</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme={colors.dealEnvy} flip forceHover>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>disabled</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme={colors.dealEnvy} disabled>
                            CTA
                        </Button>
                    </Cell>
                </Grid>

                <Heading>Block Buttons</Heading>
                <div
                    style={{
                        border: `2px solid ${colors.silver.base}`,
                        width: '375px',
                        padding: '1rem',
                    }}
                >
                    <Grid columns={1} gap="1rem">
                        <Cell>
                            <Button size="md" block>
                                CTA
                            </Button>
                        </Cell>
                        <Cell>
                            <Button size="md" block disabled>
                                CTA
                            </Button>
                        </Cell>
                    </Grid>
                </div>
            </StyledStoryPrime>
        );
    })
    .add('Outline', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Outline Buttons
            </Typography>

            <Heading>Large Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 200 px</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="lg">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="lg">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="lg" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Medium Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) max-content 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 200 px</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="md">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="md">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>min width - 112px</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="md" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="md" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 80 px</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="sm">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="sm">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="sm" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>x-Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 64 px</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="xs">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="xs">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="xs" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>hit area</Label>
                </Cell>
                <Cell>
                    <ShowHitbox>
                        <Button
                            variant="outline"
                            size="xs"
                            onClick={action('onClick!')}
                        >
                            CTA
                        </Button>
                    </ShowHitbox>
                </Cell>
            </Grid>

            <Heading>Button States</Heading>
            <Grid
                columns="200px 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>default</Label>
                </Cell>
                <Cell>
                    <Button variant="outline">CTA</Button>
                </Cell>

                <Cell>
                    <Label>hover</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" forceHover>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>pressed</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" forceActive>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>focused</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" forceFocus>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>disabled</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" disabled>
                        CTA
                    </Button>
                </Cell>
            </Grid>

            <Heading>Alternate Theme Color</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px max-content 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>default</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" colorTheme={colors.dealEnvy}>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>hover</Label>
                </Cell>
                <Cell>
                    <Button
                        variant="outline"
                        colorTheme={colors.dealEnvy}
                        forceHover
                    >
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>disabled</Label>
                </Cell>
                <Cell>
                    <Button
                        variant="outline"
                        colorTheme={colors.dealEnvy}
                        disabled
                    >
                        CTA
                    </Button>
                </Cell>
            </Grid>

            <Heading>Block Buttons</Heading>
            <div
                style={{
                    border: `2px solid ${colors.silver.base}`,
                    width: '375px',
                    padding: '1rem',
                }}
            >
                <Grid columns={1} gap="1rem">
                    <Cell>
                        <Button variant="outline" block>
                            CTA
                        </Button>
                    </Cell>
                    <Cell>
                        <Button variant="outline" block disabled>
                            CTA
                        </Button>
                    </Cell>
                </Grid>
            </div>
        </StyledStoryPrime>
    ))
    .add('Minimal', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Minimal Buttons
            </Typography>

            <Heading>Large Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 200 px</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="lg">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="lg">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="lg" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Medium Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) max-content 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 200 px</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="md">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="md">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>min width - 112px</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="md" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="md" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 80 px</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="sm">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="sm">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="sm" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>x-Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 64 px</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="xs">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="xs">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="xs" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>hit area</Label>
                </Cell>
                <Cell>
                    <ShowHitbox>
                        <Button
                            variant="minimal"
                            size="xs"
                            onClick={action('onClick!')}
                        >
                            CTA
                        </Button>
                    </ShowHitbox>
                </Cell>
            </Grid>

            <Heading>Button States</Heading>
            <Grid
                columns="200px 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>default</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal">CTA</Button>
                </Cell>

                <Cell>
                    <Label>hover</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" forceHover>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>pressed</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" forceActive>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>focused</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" forceFocus>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>disabled</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" disabled>
                        CTA
                    </Button>
                </Cell>
            </Grid>

            <Heading>Alternate Theme Color</Heading>
            <Grid
                columns="200px minmax(200px, max-content) max-content 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <Label>min width - 200 px</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" colorTheme={colors.dealEnvy}>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" colorTheme={colors.dealEnvy}>
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>min width - 112px</Label>
                </Cell>
                <Cell>
                    <Button
                        variant="minimal"
                        colorTheme={colors.dealEnvy}
                        minWidth="7rem"
                    >
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button
                        variant="minimal"
                        colorTheme={colors.dealEnvy}
                        icon={Cut}
                    >
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Block Buttons</Heading>
            <div
                style={{
                    border: `2px solid ${colors.silver.base}`,
                    width: '375px',
                    padding: '1rem',
                }}
            >
                <Grid columns={1} gap="1rem">
                    <Cell>
                        <Button variant="minimal" size="md" block>
                            CTA
                        </Button>
                    </Cell>
                    <Cell>
                        <Button variant="minimal" size="md" block disabled>
                            CTA
                        </Button>
                    </Cell>
                </Grid>
            </div>
        </StyledStoryPrime>
    ))
    .add('Icons', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Icons Only Buttons
            </Typography>

            <Grid
                columns="120px 120px 120px 120px 120px 120px 120px"
                flow="column"
                rows="auto auto auto auto auto"
                gap="2rem"
            >
                <Cell>
                    <Heading>Primary</Heading>
                </Cell>

                <Cell>
                    <Label>large</Label>
                    <Button size="lg" icon={SuccessOutline} />
                </Cell>
                <Cell>
                    <Label>Medium</Label>
                    <Button size="md" icon={SuccessOutline} />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button size="sm" icon={SuccessOutline} />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button size="xs" icon={SuccessOutline} />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Outline</Heading>
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button size="lg" icon={SuccessOutline} variant="outline" />
                </Cell>
                <Cell>
                    <Label>Medium</Label>
                    <Button size="md" icon={SuccessOutline} variant="outline" />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="sm"
                            icon={SuccessOutline}
                            variant="outline"
                        />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button
                            size="xs"
                            icon={SuccessOutline}
                            variant="outline"
                        />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Minimal</Heading>
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button size="lg" icon={SuccessOutline} variant="minimal" />
                </Cell>
                <Cell>
                    <Label>Medium</Label>
                    <Button size="md" icon={SuccessOutline} variant="minimal" />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="sm"
                            icon={SuccessOutline}
                            variant="minimal"
                        />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button
                            size="xs"
                            icon={SuccessOutline}
                            variant="minimal"
                        />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Primary + Circular</Heading>
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button size="lg" icon={SuccessOutline} circular />
                </Cell>
                <Cell>
                    <Label>Medium</Label>
                    <Button size="md" icon={SuccessOutline} circular />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button size="sm" icon={SuccessOutline} circular />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button size="xs" icon={SuccessOutline} circular />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Outline + Circular</Heading>
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button
                        size="lg"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                    />
                </Cell>
                <Cell>
                    <Label>Medium</Label>
                    <Button
                        size="md"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                    />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="sm"
                            icon={SuccessOutline}
                            circular
                            variant="outline"
                        />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button
                            size="xs"
                            icon={SuccessOutline}
                            circular
                            variant="outline"
                        />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Minimal + Circular</Heading>
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button
                        size="lg"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                    />
                </Cell>
                <Cell>
                    <Label>Medium</Label>
                    <Button
                        size="md"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                    />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="sm"
                            icon={SuccessOutline}
                            circular
                            variant="minimal"
                        />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button
                            size="xs"
                            icon={SuccessOutline}
                            circular
                            variant="minimal"
                        />
                    </ShowHitbox>
                </Cell>
            </Grid>
        </StyledStoryPrime>
    ))
    .add('Reverse | Primary', () => (
        <StyledReverseStory>
            <Typography tag="h2" weight={'bold'}>
                Primary Buttons
            </Typography>

            <Heading>Large Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 200 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="lg">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="lg">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="lg" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Medium Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) max-content 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 200 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="md">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="md">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>min width - 112px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="md" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="md" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 80 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="sm">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="sm">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="sm" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>x-Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 64 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="xs">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="xs">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="xs" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>hit area</ReverseLabel>
                </Cell>
                <Cell>
                    <ShowHitbox>
                        <Button reverse size="xs" onClick={action('onClick!')}>
                            CTA
                        </Button>
                    </ShowHitbox>
                </Cell>
            </Grid>

            <Heading>Button States</Heading>
            <Grid
                columns="200px 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>default</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse>CTA</Button>
                </Cell>

                <Cell>
                    <ReverseLabel>hover</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse forceHover>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>pressed</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse forceActive>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>focused</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse forceFocus>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>disabled</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse disabled>
                        CTA
                    </Button>
                </Cell>
            </Grid>

            <Heading>Block Buttons</Heading>
            <div
                style={{
                    border: `2px solid ${colors.silver.base}`,
                    width: '375px',
                    padding: '1rem',
                }}
            >
                <Grid columns={1} gap="1rem">
                    <Cell>
                        <Button reverse block>
                            CTA
                        </Button>
                    </Cell>
                    <Cell>
                        <Button reverse block disabled>
                            CTA
                        </Button>
                    </Cell>
                </Grid>
            </div>
        </StyledReverseStory>
    ))
    .add('Reverse | Outline', () => (
        <StyledReverseStory>
            <Typography tag="h2" weight={'bold'}>
                Outline Buttons
            </Typography>

            <Heading>Large Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 200 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="lg">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="lg">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="lg" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Medium Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) max-content 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 200 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="md">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="md">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>min width - 112px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="md" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="md" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 80 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="sm">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="sm">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="sm" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>x-Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 64 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="xs">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="xs">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="xs" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>hit area</ReverseLabel>
                </Cell>
                <Cell>
                    <ShowHitbox>
                        <Button
                            reverse
                            variant="outline"
                            size="xs"
                            onClick={action('onClick!')}
                        >
                            CTA
                        </Button>
                    </ShowHitbox>
                </Cell>
            </Grid>

            <Heading>Button States</Heading>
            <Grid
                columns="200px 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>default</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>hover</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" forceHover>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>pressed</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" forceActive>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>focused</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" forceFocus>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>disabled</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" disabled>
                        CTA
                    </Button>
                </Cell>
            </Grid>

            <Heading>Block Buttons</Heading>
            <div
                style={{
                    border: `2px solid ${colors.silver.base}`,
                    width: '375px',
                    padding: '1rem',
                }}
            >
                <Grid columns={1} gap="1rem">
                    <Cell>
                        <Button reverse variant="outline" size="md" block>
                            CTA
                        </Button>
                    </Cell>
                    <Cell>
                        <Button
                            reverse
                            variant="outline"
                            size="md"
                            block
                            disabled
                        >
                            CTA
                        </Button>
                    </Cell>
                </Grid>
            </div>
        </StyledReverseStory>
    ))
    .add('Reverse | Minimal', () => (
        <StyledReverseStory>
            <Typography tag="h2" weight={'bold'}>
                Minimal Buttons
            </Typography>

            <Heading>Large Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 200 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="lg">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="lg">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="lg" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Medium Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) max-content 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 200 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="md">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="md">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>min width - 112px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="md" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="md" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 80 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="sm">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="sm">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="sm" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>x-Small Button</Heading>
            <Grid
                columns="200px minmax(200px, max-content) 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>min width - 64 px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="xs">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="xs">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="xs" icon={Cut}>
                        CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>hit area</ReverseLabel>
                </Cell>
                <Cell>
                    <ShowHitbox>
                        <Button
                            reverse
                            variant="minimal"
                            size="xs"
                            onClick={action('onClick!')}
                        >
                            CTA
                        </Button>
                    </ShowHitbox>
                </Cell>
            </Grid>

            <Heading>Button States</Heading>
            <Grid
                columns="200px 200px 200px 200px"
                flow="column"
                rows="2rem auto"
                gap="0"
                columnGap="1.5rem"
            >
                <Cell>
                    <ReverseLabel>default</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>hover</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" forceHover>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>pressed</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" forceActive>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>focused</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" forceFocus>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>disabled</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" disabled>
                        CTA
                    </Button>
                </Cell>
            </Grid>

            <Heading>Block Buttons</Heading>
            <div
                style={{
                    border: `2px solid ${colors.silver.base}`,
                    width: '375px',
                    padding: '1rem',
                }}
            >
                <Grid columns={1} gap="1rem">
                    <Cell>
                        <Button reverse variant="minimal" size="md" block>
                            CTA
                        </Button>
                    </Cell>
                    <Cell>
                        <Button
                            reverse
                            variant="minimal"
                            size="md"
                            block
                            disabled
                        >
                            CTA
                        </Button>
                    </Cell>
                </Grid>
            </div>
        </StyledReverseStory>
    ))
    .add('Reverse | Icons', () => (
        <StyledReverseStory>
            <Typography tag="h2" weight={'bold'}>
                Icon Only Buttons
            </Typography>

            <Grid
                columns="120px 120px 120px 120px 120px 120px 120px"
                flow="column"
                rows="auto auto auto auto auto"
                gap="2rem"
            >
                <Cell>
                    <Heading>Primary</Heading>
                </Cell>

                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button size="lg" icon={SuccessOutline} reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>Medium</ReverseLabel>
                    <Button size="md" icon={SuccessOutline} reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button size="sm" icon={SuccessOutline} reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button size="xs" icon={SuccessOutline} reverse />
                </Cell>

                <Cell>
                    <Heading>Outline</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="lg"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>Medium</ReverseLabel>
                    <Button
                        size="md"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="sm"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xs"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>

                <Cell>
                    <Heading>Minimal</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="lg"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>Medium</ReverseLabel>
                    <Button
                        size="md"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="sm"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xs"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>

                <Cell>
                    <Heading>Primary + Circular</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button size="lg" icon={SuccessOutline} circular reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>Medium</ReverseLabel>
                    <Button size="md" icon={SuccessOutline} circular reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button size="sm" icon={SuccessOutline} circular reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button size="xs" icon={SuccessOutline} circular reverse />
                </Cell>

                <Cell>
                    <Heading>Outline + Circular</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="lg"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>Medium</ReverseLabel>
                    <Button
                        size="md"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="sm"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xs"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                        reverse
                    />
                </Cell>

                <Cell>
                    <Heading>Minimal + Circular</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="lg"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>Medium</ReverseLabel>
                    <Button
                        size="md"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="sm"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xs"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
            </Grid>
        </StyledReverseStory>
    ))
    .add('Button with Knobs', () => {
        const chosenIcon = select(
            'icon',
            ['none', ...Object.keys(Icon)],
            'none'
        );
        const chosenColor = select(
            'colorTheme',
            ['default', ...Object.keys(colors)],
            'default'
        );
        const buttonText = text('Text', 'Hello World');
        const minWidth = text('minWidth', '');
        const margin = text('margin', '');
        const chosenSize = select('size', ['lg', 'md', 'sm', 'xs'], 'md');
        const chosenVariant = select(
            'variant',
            ['primary', 'outline', 'minimal'],
            'primary'
        );
        const isReversed = boolean('reverse', false);
        const numberOfButtons = number('button count', 1);

        const StoryComponent = isReversed ? StyledReverseStory : StyledStory;

        return (
            <StoryComponent>
                <Typography tag="h2" weight={'bold'}>
                    Configure me
                </Typography>
                {Array.from(Array(numberOfButtons)).map((x, i) => (
                    <Button
                        key={`button${i}`}
                        variant={chosenVariant}
                        size={chosenSize}
                        forceActive={boolean('force-state: active', false)}
                        forceFocus={boolean('force-state: focus', false)}
                        forceHover={boolean('force-state: hover', false)}
                        reverse={isReversed}
                        block={boolean('block', false)}
                        flip={boolean('flip', false)}
                        circular={boolean('circular', false)}
                        disabled={boolean('disabled', false)}
                        revealed={boolean('revealed', false)}
                        minWidth={minWidth ? minWidth : undefined}
                        margin={margin ? margin : undefined}
                        colorTheme={
                            chosenColor === 'default'
                                ? undefined
                                : colors[chosenColor]
                        }
                        icon={
                            chosenIcon === 'none' ? undefined : Icon[chosenIcon]
                        }
                    >
                        {buttonText ? buttonText : undefined}
                    </Button>
                ))}
            </StoryComponent>
        );
    });
