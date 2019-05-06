// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { text, boolean } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// README
import * as README from './README.md';
// COMPONENT
import { Button } from './Button.component';
import { Typography, Cell, Grid, Cut, SuccessOutline, colors } from '..';

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
    button > div {
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

                <Heading>x-Large Button</Heading>
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
                        <Button size="xlarge">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="xlarge">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="xlarge" icon={Cut}>
                            {' '}
                            CTA Text
                        </Button>
                    </Cell>
                </Grid>

                <Heading>Large Button</Heading>
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
                        <Button size="large">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="large">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with flip</Label>
                    </Cell>
                    <Cell>
                        <Button size="large" flip>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>min width - 112px</Label>
                    </Cell>
                    <Cell>
                        <Button size="large" minWidth="7rem">
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="large" icon={Cut}>
                            {' '}
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
                        <Button size="small">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="small">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="small" icon={Cut}>
                            {' '}
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
                        <Button size="xsmall">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>flex width</Label>
                    </Cell>
                    <Cell>
                        <Button size="xsmall">I'm a very long CTA Text</Button>
                    </Cell>

                    <Cell>
                        <Label>button with icon</Label>
                    </Cell>
                    <Cell>
                        <Button size="xsmall" icon={Cut}>
                            {' '}
                            CTA Text
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>hit area</Label>
                    </Cell>
                    <Cell>
                        <ShowHitbox>
                            <Button size="xsmall" onClick={action('onClick!')}>
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
                        <Button colorTheme="dealEnvy">CTA</Button>
                    </Cell>

                    <Cell>
                        <Label>button with flip</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme="dealEnvy" flip>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>hover</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme="dealEnvy" forceHover>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>hover with flip</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme="dealEnvy" flip forceHover>
                            CTA
                        </Button>
                    </Cell>

                    <Cell>
                        <Label>disabled</Label>
                    </Cell>
                    <Cell>
                        <Button colorTheme="dealEnvy" disabled>
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
                    <Button size="large" block>
                        CTA
                    </Button>
                    <Button size="large" block disabled>
                        CTA
                    </Button>
                </div>
            </StyledStoryPrime>
        );
    })
    .add('Outline', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Outline Buttons
            </Typography>

            <Heading>x-Large Button</Heading>
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
                    <Button variant="outline" size="xlarge">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="xlarge">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="xlarge" icon={Cut}>
                        {' '}
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Large Button</Heading>
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
                    <Button variant="outline" size="large">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="large">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>min width - 112px</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="large" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="large" icon={Cut}>
                        {' '}
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
                    <Button variant="outline" size="small">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="small">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="small" icon={Cut}>
                        {' '}
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
                    <Button variant="outline" size="xsmall">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="xsmall">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" size="xsmall" icon={Cut}>
                        {' '}
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
                            size="xsmall"
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
                    <Button variant="outline" colorTheme="dealEnvy">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>hover</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" colorTheme="dealEnvy" forceHover>
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>disabled</Label>
                </Cell>
                <Cell>
                    <Button variant="outline" colorTheme="dealEnvy" disabled>
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
                <Button variant="outline" block>
                    CTA
                </Button>
                <Button variant="outline" block disabled>
                    CTA
                </Button>
            </div>
        </StyledStoryPrime>
    ))
    .add('Minimal', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Minimal Buttons
            </Typography>

            <Heading>x-Large Button</Heading>
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
                    <Button variant="minimal" size="xlarge">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="xlarge">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="xlarge" icon={Cut}>
                        {' '}
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Large Button</Heading>
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
                    <Button variant="minimal" size="large">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="large">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>min width - 112px</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="large" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="large" icon={Cut}>
                        {' '}
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
                    <Button variant="minimal" size="small">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="small">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="small" icon={Cut}>
                        {' '}
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
                    <Button variant="minimal" size="xsmall">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="xsmall">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" size="xsmall" icon={Cut}>
                        {' '}
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
                            size="xsmall"
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
                    <Button variant="minimal" colorTheme="dealEnvy">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>flex width</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" colorTheme="dealEnvy">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <Label>min width - 112px</Label>
                </Cell>
                <Cell>
                    <Button
                        variant="minimal"
                        colorTheme="dealEnvy"
                        minWidth="7rem"
                    >
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <Label>button with icon</Label>
                </Cell>
                <Cell>
                    <Button variant="minimal" colorTheme="dealEnvy" icon={Cut}>
                        {' '}
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
                <Button variant="minimal" size="large" block>
                    CTA
                </Button>
                <Button variant="minimal" size="large" block disabled>
                    CTA
                </Button>
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
                    <Label>x-large</Label>
                    <Button size="xlarge" icon={SuccessOutline} />
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button size="large" icon={SuccessOutline} />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button size="small" icon={SuccessOutline} />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button size="xsmall" icon={SuccessOutline} />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Outline</Heading>
                </Cell>
                <Cell>
                    <Label>x-large</Label>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        variant="outline"
                    />
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        variant="outline"
                    />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="small"
                            icon={SuccessOutline}
                            variant="outline"
                        />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button
                            size="xsmall"
                            icon={SuccessOutline}
                            variant="outline"
                        />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Minimal</Heading>
                </Cell>
                <Cell>
                    <Label>x-large</Label>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        variant="minimal"
                    />
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        variant="minimal"
                    />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="small"
                            icon={SuccessOutline}
                            variant="minimal"
                        />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button
                            size="xsmall"
                            icon={SuccessOutline}
                            variant="minimal"
                        />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Primary + Circular</Heading>
                </Cell>
                <Cell>
                    <Label>x-large</Label>
                    <Button size="xlarge" icon={SuccessOutline} circular />
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button size="large" icon={SuccessOutline} circular />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button size="small" icon={SuccessOutline} circular />
                    </ShowHitbox>
                </Cell>
                <Cell>
                    <Label>xsmall</Label>
                    <ShowHitbox>
                        <Button size="xsmall" icon={SuccessOutline} circular />
                    </ShowHitbox>
                </Cell>

                <Cell>
                    <Heading>Outline + Circular</Heading>
                </Cell>
                <Cell>
                    <Label>x-large</Label>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                    />
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                    />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="small"
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
                            size="xsmall"
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
                    <Label>x-large</Label>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                    />
                </Cell>
                <Cell>
                    <Label>large</Label>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                    />
                </Cell>
                <Cell>
                    <Label>small</Label>
                    <ShowHitbox>
                        <Button
                            size="small"
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
                            size="xsmall"
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

            <Heading>x-Large Button</Heading>
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
                    <Button reverse size="xlarge">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="xlarge">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="xlarge" icon={Cut}>
                        {' '}
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Large Button</Heading>
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
                    <Button reverse size="large">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="large">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>min width - 112px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="large" minWidth="7rem">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="large" icon={Cut}>
                        {' '}
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
                    <Button reverse size="small">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="small">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="small" icon={Cut}>
                        {' '}
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
                    <Button reverse size="xsmall">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="xsmall">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse size="xsmall" icon={Cut}>
                        {' '}
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
                            size="xsmall"
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
                <Button reverse size="large" block>
                    CTA
                </Button>
                <Button reverse size="large" block disabled>
                    CTA
                </Button>
            </div>
        </StyledReverseStory>
    ))
    .add('Reverse | Outline', () => (
        <StyledReverseStory>
            <Typography tag="h2" weight={'bold'}>
                Primary Buttons
            </Typography>

            <Heading>x-Large Button</Heading>
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
                    <Button reverse variant="outline" size="xlarge">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="xlarge">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="xlarge" icon={Cut}>
                        {' '}
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Large Button</Heading>
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
                    <Button reverse variant="outline" size="large">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="large">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>min width - 112px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button
                        reverse
                        variant="outline"
                        size="large"
                        minWidth="7rem"
                    >
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="large" icon={Cut}>
                        {' '}
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
                    <Button reverse variant="outline" size="small">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="small">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="small" icon={Cut}>
                        {' '}
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
                    <Button reverse variant="outline" size="xsmall">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="xsmall">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="outline" size="xsmall" icon={Cut}>
                        {' '}
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
                            size="xsmall"
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
                <Button reverse variant="outline" size="large" block>
                    CTA
                </Button>
                <Button reverse variant="outline" size="large" block disabled>
                    CTA
                </Button>
            </div>
        </StyledReverseStory>
    ))
    .add('Reverse | Minimal', () => (
        <StyledReverseStory>
            <Typography tag="h2" weight={'bold'}>
                Primary Buttons
            </Typography>

            <Heading>x-Large Button</Heading>
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
                    <Button reverse variant="minimal" size="xlarge">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="xlarge">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="xlarge" icon={Cut}>
                        {' '}
                        CTA Text
                    </Button>
                </Cell>
            </Grid>

            <Heading>Large Button</Heading>
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
                    <Button reverse variant="minimal" size="large">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="large">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>min width - 112px</ReverseLabel>
                </Cell>
                <Cell>
                    <Button
                        reverse
                        variant="minimal"
                        size="large"
                        minWidth="7rem"
                    >
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="large" icon={Cut}>
                        {' '}
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
                    <Button reverse variant="minimal" size="small">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="small">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="small" icon={Cut}>
                        {' '}
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
                    <Button reverse variant="minimal" size="xsmall">
                        CTA
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>flex width</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="xsmall">
                        I'm a very long CTA Text
                    </Button>
                </Cell>

                <Cell>
                    <ReverseLabel>button with icon</ReverseLabel>
                </Cell>
                <Cell>
                    <Button reverse variant="minimal" size="xsmall" icon={Cut}>
                        {' '}
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
                            size="xsmall"
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
                <Button reverse variant="minimal" size="large" block>
                    CTA
                </Button>
                <Button reverse variant="minimal" size="large" block disabled>
                    CTA
                </Button>
            </div>
        </StyledReverseStory>
    ))
    .add('Reverse | Icons', () => (
        <StyledReverseStory>
            <Typography tag="h2" weight={'bold'}>
                Reverse Buttons
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
                    <ReverseLabel>x-large</ReverseLabel>
                    <Button size="xlarge" icon={SuccessOutline} reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button size="large" icon={SuccessOutline} reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button size="small" icon={SuccessOutline} reverse />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button size="xsmall" icon={SuccessOutline} reverse />
                </Cell>

                <Cell>
                    <Heading>Outline</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>x-large</ReverseLabel>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="small"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xsmall"
                        icon={SuccessOutline}
                        variant="outline"
                        reverse
                    />
                </Cell>

                <Cell>
                    <Heading>Minimal</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>x-large</ReverseLabel>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="small"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xsmall"
                        icon={SuccessOutline}
                        variant="minimal"
                        reverse
                    />
                </Cell>

                <Cell>
                    <Heading>Primary + Circular</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>x-large</ReverseLabel>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        circular
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        circular
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="small"
                        icon={SuccessOutline}
                        circular
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xsmall"
                        icon={SuccessOutline}
                        circular
                        reverse
                    />
                </Cell>

                <Cell>
                    <Heading>Outline + Circular</Heading>
                </Cell>
                <Cell>
                    <ReverseLabel>x-large</ReverseLabel>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="small"
                        icon={SuccessOutline}
                        circular
                        variant="outline"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xsmall"
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
                    <ReverseLabel>x-large</ReverseLabel>
                    <Button
                        size="xlarge"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>large</ReverseLabel>
                    <Button
                        size="large"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>small</ReverseLabel>
                    <Button
                        size="small"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
                <Cell>
                    <ReverseLabel>xsmall</ReverseLabel>
                    <Button
                        size="xsmall"
                        icon={SuccessOutline}
                        circular
                        variant="minimal"
                        reverse
                    />
                </Cell>
            </Grid>
        </StyledReverseStory>
    ));
