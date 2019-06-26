// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import { Grid, Cell } from 'styled-css-grid';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { XS, CustomAdaptor, StandardBreakpoints } from '../../Grid';
// README
import * as README from './README.md';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/Grid/Flex & Box', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Layout', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <h4>Three column layout</h4>
                <Grid columns={3}>
                    <Cell width={1}>1</Cell>
                    <Cell width={1}>2</Cell>
                    <Cell width={1}>3</Cell>
                </Grid>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Adaptive Layout', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <h4>
                    Three columns on every device except xs (max:{' '}
                    {StandardBreakpoints.xs.max}px)
                </h4>
                <CustomAdaptor minWidth={StandardBreakpoints.xs.max}>
                    <Grid columns={3}>
                        <Cell width={1}>1</Cell>
                        <Cell width={1}>2</Cell>
                        <Cell width={1}>3</Cell>
                    </Grid>
                </CustomAdaptor>
                <XS>
                    <Grid columns={1}>
                        <Cell width={1}>1</Cell>
                        <Cell width={1}>2</Cell>
                        <Cell width={1}>3</Cell>
                    </Grid>
                </XS>
            </StyledStory>
        </ThemeProvider>
    ));
