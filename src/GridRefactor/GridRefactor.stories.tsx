// VENDOR
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../Typography';
import { Cell, Grid } from './index';
import { FLOW } from './utils';
import { RootTheme } from '../theme';

storiesOf('Components/GridRefactor', module)
    .add('Default', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <br />
                <Grid debug flow={FLOW.row}>
                    <Cell center width={{ xs: 0, md: 12}}>
                        <Typography tag="h1">
                            Grid Refactor
                        </Typography>
                    </Cell>
                    <Cell width={{ xs: 12, md: 6}}>
                        <Typography>
                            Cell 1
                        </Typography>
                    </Cell>
                    <Cell width={{ xs: 12, md: 6}}>
                        <Typography>
                            Cell 2
                        </Typography>
                    </Cell>
                    <Cell width={{ xs: 12, md: 6}} left={{ xs: 1, md: 4 }}>
                        <Typography>
                            Cell 3
                        </Typography>
                    </Cell>
                </Grid>
            </ThemeProvider>
        );
    })
    .add('Custom Columns/Rows', () => {
        return(
            <ThemeProvider theme={RootTheme}>
                <Grid
                    columns={"100px 1fr 100px"}
                    rows={"minmax(45px,auto) 1fr minmax(45px,auto)"}
                >
                    <Cell width={3} center>
                        <Typography tag="h1">
                            Header
                        </Typography>
                    </Cell>

                    <Cell>
                        <Typography>
                            Menu
                        </Typography>
                    </Cell>
                    <Cell>
                        <Typography>
                            Content
                        </Typography>
                    </Cell>
                    <Cell>
                        <Typography>
                            Ads
                        </Typography>
                    </Cell>

                    <Cell width={3}>
                        <Typography>
                            Footer
                        </Typography>
                    </Cell>
                </Grid>
            </ThemeProvider>
        );
    });
