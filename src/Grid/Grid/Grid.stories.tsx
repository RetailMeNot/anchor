// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import { storiesOf } from '@storybook/react';
import { boolean, radios, select } from '@storybook/addon-knobs';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../../Typography';
import { Button } from '../../Button';
import { Grid, ResponsiveProvider } from '../index';
import { FLOW } from '../utils';
import { RootTheme } from '../../theme';

const { Cell } = Grid;

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
                    <Grid
                        flow={FLOW.row}
                        debug={boolean('Grid Debug', true)}
                        p={1}
                        m={3}
                    >
                        <Cell
                            align="center"
                            valign="middle"
                            height={{ md: 2, lg: 3 }}
                            width={{ xs: 0, md: 12 }}
                        >
                            <Typography tag="h1">Grid</Typography>
                        </Cell>
                        <Cell width={{ xs: 12, md: 6 }}>
                            <Typography>Cell 1</Typography>
                        </Cell>
                        <Cell
                            align={radios('Align', { left: 'left', center: 'center', right: 'right' }, 'left')}
                            valign={radios('Valign', { top: 'top', middle: 'middle', bottom: 'bottom' }, 'top')}
                            p={select('Padding', [0, 1, 2, 3, 4], 0)}
                            height={4}
                            width={{ xs: 12, md: 6 }}
                        >
                            <Button>Align Me!</Button>
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
                        <Cell width={3} align="center" valign="middle">
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

                        <Cell width={3} align="center" valign="middle">
                            <Typography tag="h2">Footer</Typography>
                        </Cell>
                    </StoryGrid>
                </ResponsiveProvider>
            </ThemeProvider>
        );
    });
