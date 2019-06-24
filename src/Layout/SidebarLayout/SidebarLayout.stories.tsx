// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text, color, select } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import {
    SidebarLayout,
    DEFAULT_LAYOUT_WIDTH,
    DEFAULT_CONTENT_WIDTH,
    DEFAULT_SIDEBAR_WIDTH,
    TRANSPARENT,
} from './SidebarLayout.component';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Sider } from '../Sider';
import { colors, RootTheme } from '../../theme/index';
import { Page } from '../Page';
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
    .add('Sidebar Layout', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Page header={<Header />} footer={<Footer />}>
                    <SidebarLayout
                        layoutWidth={text('Layout Width', DEFAULT_LAYOUT_WIDTH)}
                        contentWidth={text('Content Width', DEFAULT_CONTENT_WIDTH)}
                        layoutBackgroundColor={color(
                            'Layout Background Color',
                            TRANSPARENT
                        )}
                        contentBackgroundColor={color(
                            'Content Background Color',
                            TRANSPARENT
                        )}
                        sidebar={<Sider />}
                        sidebarAlign={select<'left' | 'right'>(
                            'Sidebar Alignment',
                            ['left', 'right'],
                            'left'
                        )}
                        sidebarWidth={text('Sidebar Width', DEFAULT_SIDEBAR_WIDTH)}
                    >
                        <h1>Hello!</h1>
                    </SidebarLayout>
                </Page>
            </StyledStory>
        </ThemeProvider>
    ));
