// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../Typography';
import { Cell, Grid } from './index';
import { FLOW } from './utils';
import { RootTheme } from '../theme';

const StoryGrid = styled(Grid)`
    height: 100vh;
`;

storiesOf('Components/GridRefactor', module)
    .add('Default', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <br />
                <Grid debug flow={FLOW.row}>
                    <Cell
                        center
                        middle
                        height={{ sm: 1, md: 2, lg: 3 }}
                        width={{ xs: 0, md: 12 }}
                    >
                        <Typography tag="h1">Grid Refactor</Typography>
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
            </ThemeProvider>
        );
    })
    .add('Custom Columns/Rows', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <StoryGrid
                    columns={'20% 1fr 20%'}
                    debug
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
            </ThemeProvider>
        );
    });
