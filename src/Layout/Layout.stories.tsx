// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import {
    Layout,
    DEFAULT_LAYOUT_WIDTH,
    DEFAULT_CONTENT_WIDTH,
    TRANSPARENT,
} from './Layout.component';
import { colors, RootTheme } from '../theme';
import { Footer } from './Footer';
import { Page } from './Page';
// README
import * as README from './README.md';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledStory = styled('div')`
    background: ${colors.white.base};
`;

// Stories
// ------------------------------------------------------------------------------------------------------------------
storiesOf('Components/Layout', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Page footer={<Footer />}>
                    <Layout
                        layoutWidth={text('Layout Width', DEFAULT_LAYOUT_WIDTH)}
                        contentWidth={text(
                            'Content Width',
                            DEFAULT_CONTENT_WIDTH
                        )}
                        layoutBackgroundColor={color(
                            'Layout Background Color',
                            TRANSPARENT
                        )}
                        contentBackgroundColor={color(
                            'Content Background Color',
                            TRANSPARENT
                        )}
                    >
                        <h1>Default Layout</h1>
                        <h2>
                            This example uses the Page component as a wrapper.
                        </h2>
                    </Layout>
                </Page>
            </StyledStory>
        </ThemeProvider>
    ));
