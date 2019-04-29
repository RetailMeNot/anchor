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
import { Typography, Cell, Grid, Cut as IconCut, SuccessOutline as IconSuccessOutline, colors } from '..';

const StyledStory = styled.div`
    padding: 2rem 3rem;
`;

const StyledStoryPrime = styled(StyledStory)`
width: 1200px;
`;

const Label = styled(Typography)`
text-transform: uppercase !important;
color: ${colors.charcoal.light} !important;
font-size: 12px;
font-weight: bold;
display: block;
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
button > div{
    background: rgba(255,0,0,0.1);
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

                <Heading>
                    x-Large Button
                </Heading>
                <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>min width - 200 px</Label> </Cell>
                    <Cell> <Button size="xlarge">CTA</Button> </Cell>

                    <Cell> <Label>flex width</Label> </Cell>
                    <Cell> <Button size="xlarge">I'm a very long CTA Text</Button> </Cell>

                    <Cell> <Label>button with icon</Label> </Cell>
                    <Cell> <Button size="xlarge"><IconCut /> CTA Text</Button> </Cell>
                </Grid>

                <Heading>
                    Large Button
                </Heading>
                <Grid columns="200px minmax(200px, max-content) 200px max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>min width - 200 px</Label> </Cell>
                    <Cell> <Button size="large">CTA</Button> </Cell>

                    <Cell> <Label>flex width</Label> </Cell>
                    <Cell> <Button size="large">I'm a very long CTA Text</Button> </Cell>

                    <Cell> <Label>button with flip</Label> </Cell>
                    <Cell> <Button size="large" flip>CTA</Button> </Cell>

                    <Cell> <Label>min width - 112px</Label> </Cell>
                    <Cell> <Button size="large" minWidth="7rem">CTA</Button> </Cell>

                    <Cell> <Label>button with icon</Label> </Cell>
                    <Cell> <Button size="large"><IconCut /> CTA Text</Button> </Cell>
                </Grid>

                <Heading>
                    Small Button
                </Heading>
                <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>min width - 80 px</Label> </Cell>
                    <Cell> <Button size="small">CTA</Button> </Cell>

                    <Cell> <Label>flex width</Label> </Cell>
                    <Cell> <Button size="small">I'm a very long CTA Text</Button> </Cell>

                    <Cell> <Label>button with icon</Label> </Cell>
                    <Cell> <Button size="small"><IconCut /> CTA Text</Button> </Cell>
                </Grid>

                <Heading>
                    x-Small Button
                </Heading>
                <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>min width - 64 px</Label> </Cell>
                    <Cell> <Button size="xsmall">CTA</Button> </Cell>

                    <Cell> <Label>flex width</Label> </Cell>
                    <Cell> <Button size="xsmall">I'm a very long CTA Text</Button> </Cell>

                    <Cell> <Label>button with icon</Label> </Cell>
                    <Cell> <Button size="xsmall"><IconCut /> CTA Text</Button> </Cell>

                    <Cell> <Label>hit box</Label> </Cell>
                    <Cell> <ShowHitbox><Button size="xsmall" onClick={action('onClick!')}>CTA</Button></ShowHitbox> </Cell>
                </Grid>

                <Heading>
                    Button States
                </Heading>
                <Grid columns="200px 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>default</Label> </Cell>
                    <Cell> <Button>CTA</Button> </Cell>

                    <Cell> <Label>hover</Label> </Cell>
                    <Cell> <Button forceHover>CTA</Button> </Cell>

                    <Cell> <Label>pressed</Label> </Cell>
                    <Cell> <Button forceActive>CTA</Button> </Cell>

                    <Cell> <Label>focused</Label> </Cell>
                    <Cell> <Button forceFocus>CTA</Button> </Cell>

                    <Cell> <Label>disabled</Label> </Cell>
                    <Cell> <Button disabled>CTA</Button> </Cell>
                </Grid>
                <Grid columns="200px 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>default</Label> </Cell>
                    <Cell> <Button flip>CTA</Button> </Cell>

                    <Cell> <Label>hover</Label> </Cell>
                    <Cell> <Button flip forceHover>CTA</Button> </Cell>

                    <Cell> <Label>pressed</Label> </Cell>
                    <Cell> <Button flip forceActive>CTA</Button> </Cell>

                    <Cell> <Label>focused</Label> </Cell>
                    <Cell> <Button flip forceFocus>CTA</Button> </Cell>

                    <Cell> <Label>revealed</Label> </Cell>
                    <Cell> <Button flip revealed>Code Revealed</Button> </Cell>
                </Grid>

                <Heading>
                    Alternate Theme Color
                </Heading>
                <Grid columns="200px minmax(200px, max-content) 200px max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>default</Label> </Cell>
                    <Cell> <Button themeColor="dealEnvy">CTA</Button> </Cell>

                    <Cell> <Label>button with flip</Label> </Cell>
                    <Cell> <Button themeColor="dealEnvy" flip>CTA</Button> </Cell>

                    <Cell> <Label>hover</Label> </Cell>
                    <Cell> <Button themeColor="dealEnvy" forceHover>CTA</Button> </Cell>

                    <Cell> <Label>hover with flip</Label> </Cell>
                    <Cell> <Button themeColor="dealEnvy" flip forceHover>CTA</Button> </Cell>

                    <Cell> <Label>disabled</Label> </Cell>
                    <Cell> <Button themeColor="dealEnvy" disabled>CTA</Button> </Cell>
                </Grid>

                <Heading>
                    Block Buttons
                </Heading>
                <div style={{ border: `2px solid ${colors.silver.base}`, width: '375px', padding: '1rem' }}>
                    <Button size="large" block>CTA</Button>
                    <Button size="large" block disabled>CTA</Button>
                </div>

            </StyledStoryPrime>
        );
    })
    .add('Outline', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Outline Buttons
            </Typography>

            <Heading>
                x-Large Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button variant="outline" size="xlarge">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="outline" size="xlarge">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="outline" size="xlarge"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Large Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button variant="outline" size="large">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="outline" size="large">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>min width - 112px</Label> </Cell>
                <Cell> <Button variant="outline" size="large" minWidth="7rem">CTA</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="outline" size="large"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Small Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 80 px</Label> </Cell>
                <Cell> <Button variant="outline" size="small">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="outline" size="small">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="outline" size="small"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                x-Small Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 64 px</Label> </Cell>
                <Cell> <Button variant="outline" size="xsmall">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="outline" size="xsmall">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="outline" size="xsmall"><IconCut /> CTA Text</Button> </Cell>

                <Cell> <Label>hit box</Label> </Cell>
                <Cell> <ShowHitbox><Button variant="outline" size="xsmall" onClick={action('onClick!')}>CTA</Button></ShowHitbox> </Cell>
            </Grid>

            <Heading>
                Button States
            </Heading>
            <Grid columns="200px 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>default</Label> </Cell>
                <Cell> <Button variant="outline">CTA</Button> </Cell>

                <Cell> <Label>hover</Label> </Cell>
                <Cell> <Button variant="outline" forceHover>CTA</Button> </Cell>

                <Cell> <Label>pressed</Label> </Cell>
                <Cell> <Button variant="outline" forceActive>CTA</Button> </Cell>

                <Cell> <Label>focused</Label> </Cell>
                <Cell> <Button variant="outline" forceFocus>CTA</Button> </Cell>

                <Cell> <Label>disabled</Label> </Cell>
                <Cell> <Button variant="outline" disabled>CTA</Button> </Cell>
            </Grid>

            <Heading>
                Alternate Theme Color
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>default</Label> </Cell>
                <Cell> <Button variant="outline" themeColor="dealEnvy">CTA</Button> </Cell>

                <Cell> <Label>hover</Label> </Cell>
                <Cell> <Button variant="outline" themeColor="dealEnvy" forceHover>CTA</Button> </Cell>

                <Cell> <Label>disabled</Label> </Cell>
                <Cell> <Button variant="outline" themeColor="dealEnvy" disabled>CTA</Button> </Cell>
            </Grid>

            <Heading>
                On Background
            </Heading>
            <div style={{ border: `2px solid ${colors.silver.base}`, width: 'auto', padding: '1rem', background: colors.dealEnvy.light}}>
                <Grid columns="200px minmax(200px, max-content) 200px max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                    <Cell> <Label>default</Label> </Cell>
                    <Cell> <Button variant="outline" themeColor="white" inverseColor="dealEnvy">CTA</Button> </Cell>

                    <Cell> <Label>hover</Label> </Cell>
                    <Cell> <Button variant="outline" themeColor="white" inverseColor="savvyCyan">CTA</Button> </Cell>
                </Grid>
            </div>

            <Heading>
                Block Buttons
            </Heading>
            <div style={{ border: `2px solid ${colors.silver.base}`, width: '375px', padding: '1rem' }}>
                <Button variant="outline" block>CTA</Button>
                <Button variant="outline" block disabled>CTA</Button>
            </div>
        </StyledStoryPrime>
    ))
    .add('Minimal', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Minimal Buttons
            </Typography>

            <Heading>
                x-Large Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button variant="minimal" size="xlarge">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="minimal" size="xlarge">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="minimal" size="xlarge"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Large Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button variant="minimal" size="large">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="minimal" size="large">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>min width - 112px</Label> </Cell>
                <Cell> <Button variant="minimal" size="large" minWidth="7rem">CTA</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="minimal" size="large"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Small Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 80 px</Label> </Cell>
                <Cell> <Button variant="minimal" size="small">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="minimal" size="small">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="minimal" size="small"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                x-Small Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 64 px</Label> </Cell>
                <Cell> <Button variant="minimal" size="xsmall">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="minimal" size="xsmall">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="minimal" size="xsmall"><IconCut /> CTA Text</Button> </Cell>

                <Cell> <Label>hit box</Label> </Cell>
                <Cell> <ShowHitbox><Button variant="minimal" size="xsmall" onClick={action('onClick!')}>CTA</Button></ShowHitbox> </Cell>
            </Grid>

            <Heading>
                Button States
            </Heading>
            <Grid columns="200px 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>default</Label> </Cell>
                <Cell> <Button variant="minimal">CTA</Button> </Cell>

                <Cell> <Label>hover</Label> </Cell>
                <Cell> <Button variant="minimal" forceHover>CTA</Button> </Cell>

                <Cell> <Label>pressed</Label> </Cell>
                <Cell> <Button variant="minimal" forceActive>CTA</Button> </Cell>

                <Cell> <Label>focused</Label> </Cell>
                <Cell> <Button variant="minimal" forceFocus>CTA</Button> </Cell>

                <Cell> <Label>disabled</Label> </Cell>
                <Cell> <Button variant="minimal" disabled>CTA</Button> </Cell>
            </Grid>

            <Heading>
                Alternate Theme Color
            </Heading>
            <Grid columns="200px minmax(200px, max-content) max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button variant="minimal" themeColor="dealEnvy">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button variant="minimal" themeColor="dealEnvy">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>min width - 112px</Label> </Cell>
                <Cell> <Button variant="minimal" themeColor="dealEnvy" minWidth="7rem">CTA</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button variant="minimal" themeColor="dealEnvy"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Block Buttons
            </Heading>
            <div style={{ border: `2px solid ${colors.silver.base}`, width: '375px', padding: '1rem' }}>
                <Button variant="minimal" size="large" block>CTA</Button>
                <Button variant="minimal" size="large" block disabled>CTA</Button>
            </div>
        </StyledStoryPrime>
    ))
    .add('Reverse | Primary', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Primary Buttons
            </Typography>

            <Heading>
                x-Large Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button reverse size="xlarge">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button reverse size="xlarge">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button reverse size="xlarge"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Large Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button reverse size="large">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button reverse size="large">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>min width - 112px</Label> </Cell>
                <Cell> <Button reverse size="large" minWidth="7rem">CTA</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button reverse size="large"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Small Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 80 px</Label> </Cell>
                <Cell> <Button reverse size="small">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button reverse size="small">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button reverse size="small"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                x-Small Button
            </Heading>
            <Grid columns="200px minmax(200px, max-content) 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 64 px</Label> </Cell>
                <Cell> <Button reverse size="xsmall">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button reverse size="xsmall">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button reverse size="xsmall"><IconCut /> CTA Text</Button> </Cell>

                <Cell> <Label>hit box</Label> </Cell>
                <Cell> <ShowHitbox><Button reverse size="xsmall" onClick={action('onClick!')}>CTA</Button></ShowHitbox> </Cell>
            </Grid>

            <Heading>
                Button States
            </Heading>
            <Grid columns="200px 200px 200px 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>default</Label> </Cell>
                <Cell> <Button reverse>CTA</Button> </Cell>

                <Cell> <Label>hover</Label> </Cell>
                <Cell> <Button reverse forceHover>CTA</Button> </Cell>

                <Cell> <Label>pressed</Label> </Cell>
                <Cell> <Button reverse forceActive>CTA</Button> </Cell>

                <Cell> <Label>focused</Label> </Cell>
                <Cell> <Button reverse forceFocus>CTA</Button> </Cell>

                <Cell> <Label>disabled</Label> </Cell>
                <Cell> <Button reverse disabled>CTA</Button> </Cell>
            </Grid>

            <Heading>
                Alternate Theme Color
            </Heading>
            <Grid columns="200px minmax(200px, max-content) max-content 200px" flow="column" rows="2rem auto" gap="0" columnGap="1.5rem">
                <Cell> <Label>min width - 200 px</Label> </Cell>
                <Cell> <Button reverse themeColor="dealEnvy">CTA</Button> </Cell>

                <Cell> <Label>flex width</Label> </Cell>
                <Cell> <Button reverse themeColor="dealEnvy">I'm a very long CTA Text</Button> </Cell>

                <Cell> <Label>min width - 112px</Label> </Cell>
                <Cell> <Button reverse themeColor="dealEnvy" minWidth="7rem">CTA</Button> </Cell>

                <Cell> <Label>button with icon</Label> </Cell>
                <Cell> <Button reverse themeColor="dealEnvy"><IconCut /> CTA Text</Button> </Cell>
            </Grid>

            <Heading>
                Block Buttons
            </Heading>
            <div style={{ border: `2px solid ${colors.silver.base}`, width: '375px', padding: '1rem' }}>
                <Button reverse size="large" block>CTA</Button>
                <Button reverse size="large" block disabled>CTA</Button>
            </div>
        </StyledStoryPrime>
    ))
    .add('Icons', () => (
        <StyledStoryPrime>
            <Typography tag="h2" weight={'bold'}>
                Icons Only Buttons
            </Typography>

            <Grid columns="120px 120px 120px 120px 120px 120px 120px" flow="column" rows="auto auto auto auto auto" gap="2rem">
                <Cell> <Heading>Primary</Heading> </Cell>

                <Cell> <Label>x-large</Label> <Button size="xlarge" icon={IconSuccessOutline}></Button> </Cell>
                <Cell> <Label>large</Label> <Button size="large" icon={IconSuccessOutline}></Button> </Cell>
                <Cell> <Label>small</Label> <Button size="small" icon={IconSuccessOutline}></Button> </Cell>
                <Cell> <Label>xsmall</Label> <Button size="xsmall" icon={IconSuccessOutline}></Button> </Cell>

                <Cell> <Heading>Outline</Heading> </Cell>
                <Cell> <Label>x-large</Label> <Button size="xlarge" icon={IconSuccessOutline} variant="outline" /> </Cell>
                <Cell> <Label>large</Label> <Button size="large" icon={IconSuccessOutline} variant="outline" /> </Cell>
                <Cell> <Label>small</Label> <Button size="small" icon={IconSuccessOutline} variant="outline" /> </Cell>
                <Cell> <Label>xsmall</Label> <Button size="xsmall" icon={IconSuccessOutline} variant="outline" /> </Cell>

                <Cell> <Heading>Minimal</Heading> </Cell>
                <Cell> <Label>x-large</Label> <Button size="xlarge" icon={IconSuccessOutline} variant="minimal" /> </Cell>
                <Cell> <Label>large</Label> <Button size="large" icon={IconSuccessOutline} variant="minimal" /> </Cell>
                <Cell> <Label>small</Label> <Button size="small" icon={IconSuccessOutline} variant="minimal" /> </Cell>
                <Cell> <Label>xsmall</Label> <Button size="xsmall" icon={IconSuccessOutline} variant="minimal" /> </Cell>

                <Cell> <Heading>Primary + Circular</Heading> </Cell>
                <Cell> <Label>x-large</Label> <Button size="xlarge" icon={IconSuccessOutline} circular/> </Cell>
                <Cell> <Label>large</Label> <Button size="large" icon={IconSuccessOutline} circular/> </Cell>
                <Cell> <Label>small</Label> <Button size="small" icon={IconSuccessOutline} circular/> </Cell>
                <Cell> <Label>xsmall</Label> <Button size="xsmall" icon={IconSuccessOutline} circular/> </Cell>

                <Cell> <Heading>Outline + Circular</Heading> </Cell>
                <Cell> <Label>x-large</Label> <Button size="xlarge" icon={IconSuccessOutline} circular variant="outline"/> </Cell>
                <Cell> <Label>large</Label> <Button size="large" icon={IconSuccessOutline} circular variant="outline"/> </Cell>
                <Cell> <Label>small</Label> <Button size="small" icon={IconSuccessOutline} circular variant="outline"/> </Cell>
                <Cell> <Label>xsmall</Label> <Button size="xsmall" icon={IconSuccessOutline} circular variant="outline"/> </Cell>

                <Cell> <Heading>Minimal + Circular</Heading> </Cell>
                <Cell> <Label>x-large</Label> <Button size="xlarge" icon={IconSuccessOutline} circular variant="minimal"/> </Cell>
                <Cell> <Label>large</Label> <Button size="large" icon={IconSuccessOutline} circular variant="minimal"/> </Cell>
                <Cell> <Label>small</Label> <Button size="small" icon={IconSuccessOutline} circular variant="minimal"/> </Cell>
                <Cell> <Label>xsmall</Label> <Button size="xsmall" icon={IconSuccessOutline} circular variant="minimal"/> </Cell>
            </Grid>
        </StyledStoryPrime>
    ))
