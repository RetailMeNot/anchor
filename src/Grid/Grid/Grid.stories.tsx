// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../../Typography';
import { Cell, Grid, ResponsiveProvider } from '../index';
import { TestCell } from '../Cell';
import { FLOW } from '../utils';
import { RootTheme } from '../../theme';

const StoryGrid = styled(Grid)`
    height: 100vh;
`;

// Includes stories for both Grid and Cell since they are tightly coupled
storiesOf('Components/Grid', module)
    .add('Default', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider
                    debug={boolean('ResponsiveProvider Debug', true)}
                >
                    <br />
                    <Grid flow={FLOW.row} debug={boolean('Grid Debug', true)}>
                        <Cell
                            center
                            middle
                            height={{ md: 2, lg: 3 }}
                            width={{ xs: 0, md: 12 }}
                        >
                            <Typography tag="h1">Grid</Typography>
                        </Cell>
                        <Cell width={{ xs: 12, md: 6 }}>
                            <Typography>Cell 1</Typography>
                        </Cell>
                        <Cell width={{ xs: 12, md: 6 }}>
                            <Typography>Cell 2</Typography>
                        </Cell>
                        <Cell width={{ xs: 12, md: 6 }} left={{ xs: 1, md: 4 }}>
                            <Typography>Cell 3</Typography>
                        </Cell>
                    </Grid>
                </ResponsiveProvider>
            </ThemeProvider>
        );
    })
    .add('Custom Columns/Rows', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider>
                    <StoryGrid
                        columns={'20% 1fr 20%'}
                        debug={boolean('Grid Debug', true)}
                        rows={'minmax(3rem,auto) 1fr minmax(3rem,auto)'}
                    >
                        <Cell center middle width={3}>
                            <Typography tag="h1">Header</Typography>
                        </Cell>

                        <Cell>
                            <Typography>Menu</Typography>
                        </Cell>
                        <Cell>
                            <Typography>Content</Typography>
                        </Cell>
                        <Cell>
                            <Typography>Ads</Typography>
                        </Cell>

                        <Cell center middle width={3}>
                            <Typography tag="h2">Footer</Typography>
                        </Cell>
                    </StoryGrid>
                </ResponsiveProvider>
            </ThemeProvider>
        );
    })
    .add('Test Cell', () => (
        <ThemeProvider theme={RootTheme}>
        <ResponsiveProvider
            debug={boolean('ResponsiveProvider Debug', true)}
        >
            <br />
            <Grid flow={FLOW.row} debug={boolean('Grid Debug', true)}>
                <TestCell
                    center
                    middle
                    height={{ sm: 1, md: 2, lg: 3 }}
                    width={{ xs: 0, md: 12 }}
                >
                    <Typography tag="h1">Grid</Typography>
                </TestCell>
                <TestCell
                    middle
                    center
                    width={12}
                    height={2}
                >
                    <Typography>Middle Aligned</Typography>
                </TestCell>
                <TestCell width={{ xs: 12, md: 6 }}>
                    <Typography>Cell 1</Typography>
                </TestCell>
                <TestCell width={{ xs: 12, md: 6 }}>
                    <Typography>Cell 2</Typography>
                </TestCell>
                <TestCell width={{ xs: 12, md: 6 }} left={{ xs: 1, md: 4 }}>
                    <Typography>Cell 3</Typography>
                </TestCell>
                <TestCell width={2} left={11}>
                    <Typography>Cell 4</Typography>
                </TestCell>
            </Grid>
        </ResponsiveProvider>
    </ThemeProvider>
    ));
