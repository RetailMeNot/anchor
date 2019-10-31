// VENDOR
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../Typography';
import { Cell, Grid } from './index';
import { FLOW } from './utils';
import { RootTheme } from '../theme';

storiesOf('Components/GridRefactor', module).add('Default', () => {
    return (
        <ThemeProvider theme={RootTheme}>
            <br />
            <Grid debug flow={FLOW.row}>
                <Cell debug center width={{ xs: 0, md: 12}}>
                    <Typography tag="h1">
                        Grid Refactor
                    </Typography>
                </Cell>
                <Cell debug width={{ xs: 12, md: 6}}>Cell 1</Cell>
                <Cell debug width={{ xs: 12, md: 6}}>Cell 2</Cell>
                <Cell debug width={{ xs: 12, md: 6}} left={{ xs: 1, md: 4 }}>Cell 3</Cell>
            </Grid>
        </ThemeProvider>
    );
});
