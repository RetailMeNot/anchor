// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
// VENDOR
import { createGlobalStyle } from 'styled-components';
import styled, { ThemeProvider, css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Tabs } from './Tabs.component';
import { Position, Variant } from './utils';

const { Pane } = Tabs;

const GlobalStyle = createGlobalStyle`
    html {
        ${({ background }: any) =>
            css({
                background: th.color(background),
            })}
    }
`;

const StyledStory = styled('div')`
    padding: 2rem 1rem;
    color: text.body;
    font-family: ${th('typography.fontFamily')};
`;

storiesOf('Components/Tabs', module)
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <GlobalStyle
                    background={
                        text('html bg', 'neutrals.silver.light') || undefined
                    }
                />
                <Tabs
                    variant={select<Variant>(
                        'variant',
                        ['regular', 'tabular'],
                        'regular'
                    )}
                    position={select<Position>(
                        'position',
                        ['top', 'bottom', 'right', 'left'],
                        'top'
                    )}
                    activeKey={text('activeKey', '') || undefined}
                    defaultActiveKey={text('defaultActiveKey', '') || undefined}
                    spacing={text('spacing', '') || undefined}
                >
                    <Pane title="Banana" key="banana">
                        Best when just starting to brown.
                    </Pane>
                    <Pane title="Orange" key="orange">
                        Juicy and delicious, generally underrated.
                    </Pane>
                    <Pane title="Apple" key="apple">
                        Only okay.
                    </Pane>
                    <Pane title="Strawberry" key="strawberry">
                        Trivia: Strawberries are the only known red fruit.
                    </Pane>
                    <Pane title="Blueberry" key="blueberry" disabled>
                        Blueberries are great for making muffins!
                    </Pane>
                    <Pane title="Lemon" key="lemon">
                        Use lemons to brighten up your food.
                    </Pane>
                </Tabs>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Basic', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Tabs
                    variant={select<Variant>(
                        'variant',
                        ['regular', 'tabular'],
                        'regular'
                    )}
                    position={select<Position>(
                        'position',
                        ['top', 'bottom', 'right', 'left'],
                        'top'
                    )}
                >
                    <Pane title="Tab 1">Content 1</Pane>
                    <Pane title="Tab 2">Content 2</Pane>
                    <Pane title="Tab 3">Content 3</Pane>
                </Tabs>
            </StyledStory>
        </ThemeProvider>
    ));
