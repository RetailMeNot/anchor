// VENDOR
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@xstyled/styled-components';
// tslint:disable-next-line: no-submodule-imports
// import { Flex, Box } from 'reflexbox/styled-components';
// COMPONENTS
import { Cell, FLOW, Grid } from './index';
import { RootTheme } from '../theme';

storiesOf('Components/GridRefactor', module)
    .add('Default', () => {
        return(
            <ThemeProvider theme={RootTheme}>
                <Grid debug flow={FLOW.column}>
                    <Cell
                        debug
                        left={2}
                        width={{
                            xs: 10,
                            md: 6,
                            lg: 3,
                        }}
                        height={3}
                    >
                        Cell 1
                    </Cell>
                </Grid>
            </ThemeProvider>
        );
    });
