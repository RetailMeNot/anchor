// VENDOR
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Cell, Grid } from './index';
import { FLOW } from './utils';
import { RootTheme } from '../theme';

storiesOf('Components/GridRefactor', module)
    .add('Default', () => {
        return(
            <ThemeProvider theme={RootTheme}>
                <Grid debug flow={FLOW.column}>
                    <Cell width={2}>Cell 1</Cell>

                    <Cell
                        debug
                        left={3}
                        width={{
                            xs: 9,
                            md: 6,
                            lg: 3,
                        }}
                        height={3}
                        center
                        middle
                    >
                        Cell
                    </Cell>
                </Grid>
            </ThemeProvider>
        );
    });
