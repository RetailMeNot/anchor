// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, number, object } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { RootTheme } from '../theme';
// README
import * as README from './README.md';
// COMPONENT
import { Button } from './Button.component';
import { HitArea } from './HitArea/HitArea.component';
import * as Icon from '../Icon';
import { Typography, Cut, SuccessOutline } from '..';

const alternateColors = {
    base: '#14A382',
    light: '#00CDAD',
    dark: '#268068',
};

const StyledStory = styled('div')`
    padding: 2rem 3rem;
`;

const StyledStoryPrime = styled(StyledStory)`
    width: 1200px;
`;

const StyledReverseStory = styled(StyledStory)`
    width: 1200px;
    background-color: primary.base;
    color: white;
`;

const Label = styled(Typography)`
    && {
        text-transform: uppercase;
        color: text.light;
        font-size: 12px;
        font-weight: bold;
        display: block;
        margin-bottom: 1rem;
    }
`;

const ReverseLabel = styled(Label)`
    && {
        color: white;
    }
`;

const Heading = styled(Typography)`
    && {
        font-size: 14px;
        font-weight: bold;
        margin: 3rem 0 1rem 0;
        display: block;
    }
`;

const ShowHitbox = styled('div')`
    button > ${HitArea} {
        background: rgba(255, 0, 0, 0.1);
    }
`;

const BlockBox = styled('div')`
    border: light;
    width: 375px;
    padding: 1rem;
`;

storiesOf('Components/Button', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Filled', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStoryPrime>
                    <Typography as="h2" weight={'bold'}>
                        Filled Buttons
                    </Typography>

                    <Heading>Large Button</Heading>
                    <div>
                        <div>
                            <Label>min width - 200 px</Label>
                        </div>
                        <div>
                            <Button size="lg">CTA</Button>
                        </div>

                        <div>
                            <Label>flex width</Label>
                        </div>
                        <div>
                            <Button size="lg">I'm a very long CTA Text</Button>
                        </div>

                        <div>
                            <Label>button with icon</Label>
                        </div>
                        <div>
                            <Button size="lg" prefix={<Cut />}>
                                CTA Text
                            </Button>
                        </div>
                    </div>

                    <Heading>Medium Button</Heading>
                    <div>
                        <div>
                            <Label>min width - 200 px</Label>
                        </div>
                        <div>
                            <Button size="md">CTA</Button>
                        </div>

                        <div>
                            <Label>flex width</Label>
                        </div>
                        <div>
                            <Button size="md">I'm a very long CTA Text</Button>
                        </div>

                        <div>
                            <Label>button with flip</Label>
                        </div>
                        <div>
                            <Button size="md" flip>
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>min width - 112px</Label>
                        </div>
                        <div>
                            <Button size="md" minWidth="7rem">
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>button with icon</Label>
                        </div>
                        <div>
                            <Button size="md" prefix={<Cut />}>
                                CTA Text
                            </Button>
                        </div>
                    </div>

                    <Heading>Small Button</Heading>
                    <div>
                        <div>
                            <Label>min width - 80 px</Label>
                        </div>
                        <div>
                            <Button size="sm">CTA</Button>
                        </div>

                        <div>
                            <Label>flex width</Label>
                        </div>
                        <div>
                            <Button size="sm">I'm a very long CTA Text</Button>
                        </div>

                        <div>
                            <Label>button with icon</Label>
                        </div>
                        <div>
                            <Button size="sm" prefix={<Cut />}>
                                CTA Text
                            </Button>
                        </div>
                    </div>

                    <Heading>x-Small Button</Heading>
                    <div>
                        <div>
                            <Label>min width - 64 px</Label>
                        </div>
                        <div>
                            <Button size="xs">CTA</Button>
                        </div>

                        <div>
                            <Label>flex width</Label>
                        </div>
                        <div>
                            <Button size="xs">I'm a very long CTA Text</Button>
                        </div>

                        <div>
                            <Label>button with icon</Label>
                        </div>
                        <div>
                            <Button size="xs" prefix={<Cut />}>
                                CTA Text
                            </Button>
                        </div>

                        <div>
                            <Label>hit area</Label>
                        </div>
                        <div>
                            <ShowHitbox>
                                <Button size="xs" onClick={action('onClick!')}>
                                    CTA
                                </Button>
                            </ShowHitbox>
                        </div>
                    </div>

                    <Heading>Button States</Heading>
                    <div>
                        <div>
                            <Label>default</Label>
                        </div>
                        <div>
                            <Button>CTA</Button>
                        </div>
                        <div>
                            <Label>default</Label>
                        </div>
                        <div>
                            <Button flip>CTA</Button>
                        </div>

                        <div>
                            <Label>hover</Label>
                        </div>
                        <div>
                            <Button forceHover>CTA</Button>
                        </div>
                        <div>
                            <Label>hover</Label>
                        </div>
                        <div>
                            <Button flip forceHover>
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>pressed</Label>
                        </div>
                        <div>
                            <Button forceActive>CTA</Button>
                        </div>
                        <div>
                            <Label>pressed</Label>
                        </div>
                        <div>
                            <Button flip forceActive>
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>focused</Label>
                        </div>
                        <div>
                            <Button forceFocus>CTA</Button>
                        </div>
                        <div>
                            <Label>focused</Label>
                        </div>
                        <div>
                            <Button flip forceFocus>
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>disabled</Label>
                        </div>
                        <div>
                            <Button disabled>CTA</Button>
                        </div>
                        <div>
                            <Label>revealed</Label>
                        </div>
                        <div>
                            <Button flip revealed>
                                Code Revealed
                            </Button>
                        </div>
                    </div>

                    <Heading>Alternate Theme Color</Heading>
                    <div>
                        <div>
                            <Label>default</Label>
                        </div>
                        <div>
                            <Button colorTheme={alternateColors}>CTA</Button>
                        </div>

                        <div>
                            <Label>button with flip</Label>
                        </div>
                        <div>
                            <Button colorTheme={alternateColors} flip>
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>hover</Label>
                        </div>
                        <div>
                            <Button colorTheme={alternateColors} forceHover>
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>hover with flip</Label>
                        </div>
                        <div>
                            <Button
                                colorTheme={alternateColors}
                                flip
                                forceHover
                            >
                                CTA
                            </Button>
                        </div>

                        <div>
                            <Label>disabled</Label>
                        </div>
                        <div>
                            <Button colorTheme={alternateColors} disabled>
                                CTA
                            </Button>
                        </div>
                    </div>

                    <Heading>Block Buttons</Heading>
                    <div
                        style={{
                            border: 'light',
                            width: '375px',
                            padding: '1rem',
                        }}
                    >
                        <div>
                            <div>
                                <Button size="md" block>
                                    CTA
                                </Button>
                            </div>
                            <div>
                                <Button size="md" block disabled>
                                    CTA
                                </Button>
                            </div>
                        </div>
                    </div>
                </StyledStoryPrime>
            </ThemeProvider>
        );
    })
    .add('Outline', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStoryPrime>
                <Typography as="h2" weight={'bold'}>
                    Outline Buttons
                </Typography>

                <Heading>Large Button</Heading>
                <div>
                    <div>
                        <Label>min width - 200 px</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="lg">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="lg">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="lg" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Medium Button</Heading>
                <div>
                    <div>
                        <Label>min width - 200 px</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="md">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="md">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>min width - 112px</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="md" minWidth="7rem">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="md" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Small Button</Heading>
                <div>
                    <div>
                        <Label>min width - 80 px</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="sm">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="sm">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="sm" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>x-Small Button</Heading>
                <div>
                    <div>
                        <Label>min width - 64 px</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="xs">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="xs">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="outline" size="xs" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>hit area</Label>
                    </div>
                    <div>
                        <ShowHitbox>
                            <Button
                                variant="outline"
                                size="xs"
                                onClick={action('onClick!')}
                            >
                                CTA
                            </Button>
                        </ShowHitbox>
                    </div>
                </div>

                <Heading>Button States</Heading>
                <div>
                    <div>
                        <Label>default</Label>
                    </div>
                    <div>
                        <Button variant="outline">CTA</Button>
                    </div>

                    <div>
                        <Label>hover</Label>
                    </div>
                    <div>
                        <Button variant="outline" forceHover>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>pressed</Label>
                    </div>
                    <div>
                        <Button variant="outline" forceActive>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>focused</Label>
                    </div>
                    <div>
                        <Button variant="outline" forceFocus>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>disabled</Label>
                    </div>
                    <div>
                        <Button variant="outline" disabled>
                            CTA
                        </Button>
                    </div>
                </div>

                <Heading>Alternate Theme Color</Heading>
                <div>
                    <div>
                        <Label>default</Label>
                    </div>
                    <div>
                        <Button variant="outline" colorTheme={alternateColors}>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>hover</Label>
                    </div>
                    <div>
                        <Button
                            variant="outline"
                            colorTheme={alternateColors}
                            forceHover
                        >
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>disabled</Label>
                    </div>
                    <div>
                        <Button
                            variant="outline"
                            colorTheme={alternateColors}
                            disabled
                        >
                            CTA
                        </Button>
                    </div>
                </div>

                <Heading>Block Buttons</Heading>
                <BlockBox>
                    <div>
                        <div>
                            <Button variant="outline" block>
                                CTA
                            </Button>
                        </div>
                        <div>
                            <Button variant="outline" block disabled>
                                CTA
                            </Button>
                        </div>
                    </div>
                </BlockBox>
            </StyledStoryPrime>
        </ThemeProvider>
    ))
    .add('Minimal', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStoryPrime>
                <Typography as="h2" weight={'bold'}>
                    Minimal Buttons
                </Typography>

                <Heading>Large Button</Heading>
                <div>
                    <div>
                        <Label>min width - 200 px</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="lg">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="lg">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="lg" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Medium Button</Heading>
                <div>
                    <div>
                        <Label>min width - 200 px</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="md">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="md">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>min width - 112px</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="md" minWidth="7rem">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="md" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Small Button</Heading>
                <div>
                    <div>
                        <Label>min width - 80 px</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="sm">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="sm">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="sm" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>x-Small Button</Heading>
                <div>
                    <div>
                        <Label>min width - 64 px</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="xs">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="xs">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button variant="minimal" size="xs" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>hit area</Label>
                    </div>
                    <div>
                        <ShowHitbox>
                            <Button
                                variant="minimal"
                                size="xs"
                                onClick={action('onClick!')}
                            >
                                CTA
                            </Button>
                        </ShowHitbox>
                    </div>
                </div>

                <Heading>Button States</Heading>
                <div>
                    <div>
                        <Label>default</Label>
                    </div>
                    <div>
                        <Button variant="minimal">CTA</Button>
                    </div>

                    <div>
                        <Label>hover</Label>
                    </div>
                    <div>
                        <Button variant="minimal" forceHover>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>pressed</Label>
                    </div>
                    <div>
                        <Button variant="minimal" forceActive>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>focused</Label>
                    </div>
                    <div>
                        <Button variant="minimal" forceFocus>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>disabled</Label>
                    </div>
                    <div>
                        <Button variant="minimal" disabled>
                            CTA
                        </Button>
                    </div>
                </div>

                <Heading>Alternate Theme Color</Heading>
                <div>
                    <div>
                        <Label>min width - 200 px</Label>
                    </div>
                    <div>
                        <Button variant="minimal" colorTheme={alternateColors}>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>flex width</Label>
                    </div>
                    <div>
                        <Button variant="minimal" colorTheme={alternateColors}>
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <Label>min width - 112px</Label>
                    </div>
                    <div>
                        <Button
                            variant="minimal"
                            colorTheme={alternateColors}
                            minWidth="7rem"
                        >
                            CTA
                        </Button>
                    </div>

                    <div>
                        <Label>button with icon</Label>
                    </div>
                    <div>
                        <Button
                            variant="minimal"
                            colorTheme={alternateColors}
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Block Buttons</Heading>
                <BlockBox>
                    <div>
                        <div>
                            <Button variant="minimal" size="md" block>
                                CTA
                            </Button>
                        </div>
                        <div>
                            <Button variant="minimal" size="md" block disabled>
                                CTA
                            </Button>
                        </div>
                    </div>
                </BlockBox>
            </StyledStoryPrime>
        </ThemeProvider>
    ))
    .add('Icons', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStoryPrime>
                <Typography as="h2" weight={'bold'}>
                    Icons Only Buttons
                </Typography>

                <div>
                    <div>
                        <Heading>Filled</Heading>
                    </div>

                    <div>
                        <Label>large</Label>
                        <Button size="lg" prefix={<SuccessOutline />} />
                    </div>
                    <div>
                        <Label>Medium</Label>
                        <Button size="md" prefix={<SuccessOutline />} />
                    </div>
                    <div>
                        <Label>small</Label>
                        <ShowHitbox>
                            <Button size="sm" prefix={<SuccessOutline />} />
                        </ShowHitbox>
                    </div>
                    <div>
                        <Label>xsmall</Label>
                        <ShowHitbox>
                            <Button size="xs" prefix={<SuccessOutline />} />
                        </ShowHitbox>
                    </div>

                    <div>
                        <Heading>Outline</Heading>
                    </div>
                    <div>
                        <Label>large</Label>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            variant="outline"
                        />
                    </div>
                    <div>
                        <Label>Medium</Label>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            variant="outline"
                        />
                    </div>
                    <div>
                        <Label>small</Label>
                        <ShowHitbox>
                            <Button
                                size="sm"
                                prefix={<SuccessOutline />}
                                variant="outline"
                            />
                        </ShowHitbox>
                    </div>
                    <div>
                        <Label>xsmall</Label>
                        <ShowHitbox>
                            <Button
                                size="xs"
                                prefix={<SuccessOutline />}
                                variant="outline"
                            />
                        </ShowHitbox>
                    </div>

                    <div>
                        <Heading>Minimal</Heading>
                    </div>
                    <div>
                        <Label>large</Label>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            variant="minimal"
                        />
                    </div>
                    <div>
                        <Label>Medium</Label>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            variant="minimal"
                        />
                    </div>
                    <div>
                        <Label>small</Label>
                        <ShowHitbox>
                            <Button
                                size="sm"
                                prefix={<SuccessOutline />}
                                variant="minimal"
                            />
                        </ShowHitbox>
                    </div>
                    <div>
                        <Label>xsmall</Label>
                        <ShowHitbox>
                            <Button
                                size="xs"
                                prefix={<SuccessOutline />}
                                variant="minimal"
                            />
                        </ShowHitbox>
                    </div>

                    <div>
                        <Heading>Filled + Circular</Heading>
                    </div>
                    <div>
                        <Label>large</Label>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            circular
                        />
                    </div>
                    <div>
                        <Label>Medium</Label>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            circular
                        />
                    </div>
                    <div>
                        <Label>small</Label>
                        <ShowHitbox>
                            <Button
                                size="sm"
                                prefix={<SuccessOutline />}
                                circular
                            />
                        </ShowHitbox>
                    </div>
                    <div>
                        <Label>xsmall</Label>
                        <ShowHitbox>
                            <Button
                                size="xs"
                                prefix={<SuccessOutline />}
                                circular
                            />
                        </ShowHitbox>
                    </div>

                    <div>
                        <Heading>Outline + Circular</Heading>
                    </div>
                    <div>
                        <Label>large</Label>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            circular
                            variant="outline"
                        />
                    </div>
                    <div>
                        <Label>Medium</Label>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            circular
                            variant="outline"
                        />
                    </div>
                    <div>
                        <Label>small</Label>
                        <ShowHitbox>
                            <Button
                                size="sm"
                                prefix={<SuccessOutline />}
                                circular
                                variant="outline"
                            />
                        </ShowHitbox>
                    </div>
                    <div>
                        <Label>xsmall</Label>
                        <ShowHitbox>
                            <Button
                                size="xs"
                                prefix={<SuccessOutline />}
                                circular
                                variant="outline"
                            />
                        </ShowHitbox>
                    </div>

                    <div>
                        <Heading>Minimal + Circular</Heading>
                    </div>
                    <div>
                        <Label>large</Label>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            circular
                            variant="minimal"
                        />
                    </div>
                    <div>
                        <Label>Medium</Label>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            circular
                            variant="minimal"
                        />
                    </div>
                    <div>
                        <Label>small</Label>
                        <ShowHitbox>
                            <Button
                                size="sm"
                                prefix={<SuccessOutline />}
                                circular
                                variant="minimal"
                            />
                        </ShowHitbox>
                    </div>
                    <div>
                        <Label>xsmall</Label>
                        <ShowHitbox>
                            <Button
                                size="xs"
                                prefix={<SuccessOutline />}
                                circular
                                variant="minimal"
                            />
                        </ShowHitbox>
                    </div>
                </div>
            </StyledStoryPrime>
        </ThemeProvider>
    ))
    .add('Reverse | Filled', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledReverseStory>
                <Typography as="h2" weight={'bold'}>
                    Filled Buttons
                </Typography>

                <Heading>Large Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 200 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="lg">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="lg">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="lg" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Medium Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 200 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="md">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="md">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>min width - 112px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="md" minWidth="7rem">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="md" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Small Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 80 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="sm">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="sm">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="sm" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>x-Small Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 64 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="xs">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="xs">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse size="xs" prefix={<Cut />}>
                            CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>hit area</ReverseLabel>
                    </div>
                    <div>
                        <ShowHitbox>
                            <Button
                                reverse
                                size="xs"
                                onClick={action('onClick!')}
                            >
                                CTA
                            </Button>
                        </ShowHitbox>
                    </div>
                </div>

                <Heading>Button States</Heading>
                <div>
                    <div>
                        <ReverseLabel>default</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse>CTA</Button>
                    </div>

                    <div>
                        <ReverseLabel>hover</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse forceHover>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>pressed</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse forceActive>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>focused</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse forceFocus>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>disabled</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse disabled>
                            CTA
                        </Button>
                    </div>
                </div>

                <Heading>Block Buttons</Heading>
                <BlockBox>
                    <div>
                        <div>
                            <Button reverse block>
                                CTA
                            </Button>
                        </div>
                        <div>
                            <Button reverse block disabled>
                                CTA
                            </Button>
                        </div>
                    </div>
                </BlockBox>
            </StyledReverseStory>
        </ThemeProvider>
    ))
    .add('Reverse | Outline', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledReverseStory>
                <Typography as="h2" weight={'bold'}>
                    Outline Buttons
                </Typography>

                <Heading>Large Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 200 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="lg">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="lg">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="outline"
                            size="lg"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Medium Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 200 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="md">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="md">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>min width - 112px</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="outline"
                            size="md"
                            minWidth="7rem"
                        >
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="outline"
                            size="md"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Small Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 80 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="sm">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="sm">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="outline"
                            size="sm"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>x-Small Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 64 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="xs">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" size="xs">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="outline"
                            size="xs"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>hit area</ReverseLabel>
                    </div>
                    <div>
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
                    </div>
                </div>

                <Heading>Button States</Heading>
                <div>
                    <div>
                        <ReverseLabel>default</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>hover</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" forceHover>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>pressed</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" forceActive>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>focused</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" forceFocus>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>disabled</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="outline" disabled>
                            CTA
                        </Button>
                    </div>
                </div>

                <Heading>Block Buttons</Heading>
                <BlockBox>
                    <div>
                        <div>
                            <Button reverse variant="outline" size="md" block>
                                CTA
                            </Button>
                        </div>
                        <div>
                            <Button
                                reverse
                                variant="outline"
                                size="md"
                                block
                                disabled
                            >
                                CTA
                            </Button>
                        </div>
                    </div>
                </BlockBox>
            </StyledReverseStory>
        </ThemeProvider>
    ))
    .add('Reverse | Minimal', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledReverseStory>
                <Typography as="h2" weight={'bold'}>
                    Minimal Buttons
                </Typography>

                <Heading>Large Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 200 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="lg">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="lg">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="minimal"
                            size="lg"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Medium Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 200 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="md">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="md">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>min width - 112px</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="minimal"
                            size="md"
                            minWidth="7rem"
                        >
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="minimal"
                            size="md"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>Small Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 80 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="sm">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="sm">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="minimal"
                            size="sm"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>
                </div>

                <Heading>x-Small Button</Heading>
                <div>
                    <div>
                        <ReverseLabel>min width - 64 px</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="xs">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>flex width</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" size="xs">
                            I'm a very long CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>button with icon</ReverseLabel>
                    </div>
                    <div>
                        <Button
                            reverse
                            variant="minimal"
                            size="xs"
                            prefix={<Cut />}
                        >
                            CTA Text
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>hit area</ReverseLabel>
                    </div>
                    <div>
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
                    </div>
                </div>

                <Heading>Button States</Heading>
                <div>
                    <div>
                        <ReverseLabel>default</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal">
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>hover</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" forceHover>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>pressed</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" forceActive>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>focused</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" forceFocus>
                            CTA
                        </Button>
                    </div>

                    <div>
                        <ReverseLabel>disabled</ReverseLabel>
                    </div>
                    <div>
                        <Button reverse variant="minimal" disabled>
                            CTA
                        </Button>
                    </div>
                </div>

                <Heading>Block Buttons</Heading>
                <BlockBox>
                    <div>
                        <div>
                            <Button reverse variant="minimal" size="md" block>
                                CTA
                            </Button>
                        </div>
                        <div>
                            <Button
                                reverse
                                variant="minimal"
                                size="md"
                                block
                                disabled
                            >
                                CTA
                            </Button>
                        </div>
                    </div>
                </BlockBox>
            </StyledReverseStory>
        </ThemeProvider>
    ))
    .add('Reverse | Icons', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledReverseStory>
                <Typography as="h2" weight={'bold'}>
                    Icon Only Buttons
                </Typography>

                <div>
                    <div>
                        <Heading>Filled</Heading>
                    </div>

                    <div>
                        <ReverseLabel>large</ReverseLabel>
                        <Button size="lg" prefix={<SuccessOutline />} reverse />
                    </div>
                    <div>
                        <ReverseLabel>Medium</ReverseLabel>
                        <Button size="md" prefix={<SuccessOutline />} reverse />
                    </div>
                    <div>
                        <ReverseLabel>small</ReverseLabel>
                        <Button size="sm" prefix={<SuccessOutline />} reverse />
                    </div>
                    <div>
                        <ReverseLabel>xsmall</ReverseLabel>
                        <Button size="xs" prefix={<SuccessOutline />} reverse />
                    </div>

                    <div>
                        <Heading>Outline</Heading>
                    </div>
                    <div>
                        <ReverseLabel>large</ReverseLabel>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            variant="outline"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>Medium</ReverseLabel>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            variant="outline"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>small</ReverseLabel>
                        <Button
                            size="sm"
                            prefix={<SuccessOutline />}
                            variant="outline"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>xsmall</ReverseLabel>
                        <Button
                            size="xs"
                            prefix={<SuccessOutline />}
                            variant="outline"
                            reverse
                        />
                    </div>

                    <div>
                        <Heading>Minimal</Heading>
                    </div>
                    <div>
                        <ReverseLabel>large</ReverseLabel>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            variant="minimal"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>Medium</ReverseLabel>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            variant="minimal"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>small</ReverseLabel>
                        <Button
                            size="sm"
                            prefix={<SuccessOutline />}
                            variant="minimal"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>xsmall</ReverseLabel>
                        <Button
                            size="xs"
                            prefix={<SuccessOutline />}
                            variant="minimal"
                            reverse
                        />
                    </div>

                    <div>
                        <Heading>Filled + Circular</Heading>
                    </div>
                    <div>
                        <ReverseLabel>large</ReverseLabel>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            circular
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>Medium</ReverseLabel>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            circular
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>small</ReverseLabel>
                        <Button
                            size="sm"
                            prefix={<SuccessOutline />}
                            circular
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>xsmall</ReverseLabel>
                        <Button
                            size="xs"
                            prefix={<SuccessOutline />}
                            circular
                            reverse
                        />
                    </div>

                    <div>
                        <Heading>Outline + Circular</Heading>
                    </div>
                    <div>
                        <ReverseLabel>large</ReverseLabel>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            circular
                            variant="outline"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>Medium</ReverseLabel>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            circular
                            variant="outline"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>small</ReverseLabel>
                        <Button
                            size="sm"
                            prefix={<SuccessOutline />}
                            circular
                            variant="outline"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>xsmall</ReverseLabel>
                        <Button
                            size="xs"
                            prefix={<SuccessOutline />}
                            circular
                            variant="outline"
                            reverse
                        />
                    </div>

                    <div>
                        <Heading>Minimal + Circular</Heading>
                    </div>
                    <div>
                        <ReverseLabel>large</ReverseLabel>
                        <Button
                            size="lg"
                            prefix={<SuccessOutline />}
                            circular
                            variant="minimal"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>Medium</ReverseLabel>
                        <Button
                            size="md"
                            prefix={<SuccessOutline />}
                            circular
                            variant="minimal"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>small</ReverseLabel>
                        <Button
                            size="sm"
                            prefix={<SuccessOutline />}
                            circular
                            variant="minimal"
                            reverse
                        />
                    </div>
                    <div>
                        <ReverseLabel>xsmall</ReverseLabel>
                        <Button
                            size="xs"
                            prefix={<SuccessOutline />}
                            circular
                            variant="minimal"
                            reverse
                        />
                    </div>
                </div>
            </StyledReverseStory>
        </ThemeProvider>
    ))
    .add('Button with Knobs', () => {
        const chosenPrefix = select(
            'prefix',
            ['none', ...Object.keys(Icon)],
            'none'
        );
        const chosenSuffix = select(
            'suffix',
            ['none', ...Object.keys(Icon)],
            'none'
        );
        const chosenColor = select(
            'colorTheme',
            ['default', 'alternative'],
            'default'
        );
        const buttonText = text('Text', 'Hello World');
        const minWidth = text('minWidth', '');
        const margin = text('margin', '');
        const chosenSize = select('size', ['lg', 'md', 'sm', 'xs'], 'md');
        const chosenVariant = select(
            'variant',
            ['filled', 'outline', 'minimal'],
            'filled'
        );
        const isReversed = boolean('reverse', false);
        const numberOfButtons = number('button count', 1);

        const StoryComponent = isReversed ? StyledReverseStory : StyledStory;

        const Prefix = chosenPrefix === 'none' ? undefined : Icon[chosenPrefix];
        const Suffix = chosenSuffix === 'none' ? undefined : Icon[chosenSuffix];

        return (
            <ThemeProvider theme={RootTheme}>
                <StoryComponent>
                    <Typography as="h2" weight={'bold'}>
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
                                {
                                    default: undefined,
                                    alternative: alternateColors,
                                }[chosenColor]
                            }
                            prefix={Prefix && <Prefix />}
                            suffix={Suffix && <Suffix />}
                        >
                            {buttonText ? buttonText : undefined}
                        </Button>
                    ))}
                </StoryComponent>
            </ThemeProvider>
        );
    })
    .add('Button with Custom Theme', () => {
        const chosenPrefix = select(
            'prefix',
            ['none', ...Object.keys(Icon)],
            'none'
        );
        const chosenSuffix = select(
            'suffix',
            ['none', ...Object.keys(Icon)],
            'none'
        );
        const chosenColor = select(
            'colorTheme',
            ['default', 'alternative'],
            'default'
        );
        const buttonText = text('Text', 'Hello World');
        const minWidth = text('minWidth', '');
        const margin = text('margin', '');
        const chosenSize = select('size', ['lg', 'md', 'sm', 'xs'], 'md');
        const chosenVariant = select(
            'variant',
            ['filled', 'outline', 'minimal'],
            'filled'
        );
        const isReversed = boolean('reverse', false);
        const numberOfButtons = number('button count', 1);

        const StoryComponent = isReversed ? StyledReverseStory : StyledStory;

        const Prefix = chosenPrefix === 'none' ? undefined : Icon[chosenPrefix];
        const Suffix = chosenSuffix === 'none' ? undefined : Icon[chosenSuffix];

        return (
            <ThemeProvider theme={object('theme', RootTheme)}>
                <StoryComponent>
                    <Typography as="h2" weight={'bold'}>
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
                                {
                                    default: undefined,
                                    alternative: alternateColors,
                                }[chosenColor]
                            }
                            prefix={Prefix && <Prefix />}
                            suffix={Suffix && <Suffix />}
                        >
                            {buttonText ? buttonText : undefined}
                        </Button>
                    ))}
                </StoryComponent>
            </ThemeProvider>
        );
    });
