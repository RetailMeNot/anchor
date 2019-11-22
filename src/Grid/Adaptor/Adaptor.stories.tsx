// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
// VENDOR
import styled from '@xstyled/styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Adaptor } from './Adaptor.component';
import { ResponsiveContext, ResponsiveProvider } from '../ResponsiveProvider';
import { RootTheme } from '../../theme';
import { Typography } from '../../index';
// README
import * as README from './README.md';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const Test = () => {
    const { current, innerWidth } = React.useContext(ResponsiveContext);

    return (
        <>
            <Typography tag="h2">ResponsiveContext</Typography>
            <Typography pr="2">{current}</Typography> |
            <Typography pl="2">{innerWidth}</Typography>
        </>
    );
};

storiesOf('Components/Grid/Adaptor', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Adaptor, Custom Breakpoints', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Typography tag="h4">
                    Use knobs to set custom breakpoints
                </Typography>
                <Adaptor
                    minWidth={number('Minimum Width', 1)}
                    maxWidth={number('Maximum Width', 99999)}
                >
                    <Typography tag="p" pt="3">
                        My dimensions are defined by knobs.
                    </Typography>
                </Adaptor>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Adaptor, From & To', () => (
        <ThemeProvider theme={RootTheme}>
            <ResponsiveProvider debug>
                <Typography tag="h2">Resize the Window</Typography>
                <Adaptor from="xs" to="md">
                    <Typography>
                        I only show up between the xs and md breakpoints.
                    </Typography>
                </Adaptor>
                <Adaptor from="md" to="xl">
                    <Typography>
                        I only show up between the md and xl breakpoints.
                    </Typography>
                </Adaptor>
                <Adaptor from="xl">
                    <Typography>
                        I only show up at xl breakpoint and up.
                    </Typography>
                </Adaptor>
            </ResponsiveProvider>
        </ThemeProvider>
    ))
    .add('Responsive Context', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider>
                    <Test />
                </ResponsiveProvider>
            </ThemeProvider>
        );
    });
