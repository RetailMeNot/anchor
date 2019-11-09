// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
// VENDOR
import styled from '@xstyled/styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { XS, SM, MD, LG, XL, XXL, CustomAdaptor } from './Adaptor.component';
import { ResponsiveProvider } from '../ResponsiveProvider';
import { RootTheme } from '../../theme';
import { Typography } from '../../index';
// README
import * as README from './README.md';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/Grid/Adaptor', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Custom Breakpoints', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <h4>Use knobs to set custom breakpoints</h4>
                <CustomAdaptor
                    minWidth={number('Minimum Width', 1)}
                    maxWidth={number('Maximum Width', 99999)}
                >
                    <p>My dimensions are defined by knobs.</p>
                </CustomAdaptor>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Fixed Adaptors', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider
                    debug={boolean('ResponsiveProvider Debug', true)}
                >
                    <StyledStory>
                        <XS>
                            <Typography tag="h4">XS</Typography>
                        </XS>
                        <SM>
                            <Typography tag="h4">SM</Typography>
                        </SM>
                        <MD>
                            <Typography tag="h4">MD</Typography>
                        </MD>
                        <LG>
                            <Typography tag="h4">LG</Typography>
                        </LG>
                        <XL>
                            <Typography tag="h4">XL</Typography>
                        </XL>
                        <XXL>
                            <Typography tag="h4">XXL</Typography>
                        </XXL>
                    </StyledStory>
                </ResponsiveProvider>
            </ThemeProvider>
        );
    });
