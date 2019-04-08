// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { select, text, color } from '@storybook/addon-knobs';
// COMPONENT
import Page, {
    Page as PageComponent,
    DEFAULT_LAYOUT_WIDTH,
    DEFAULT_CONTENT_WIDTH,
    DEFAULT_SIDEBAR_WIDTH,
    TRANSPARENT,
    LEFT,
    RIGHT,
} from './Page.component';
import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';
import { Sider } from '../Sider/Sider.component';
import { colors } from '../../theme';

// Constants
// ------------------------------------------------------------------------------------------------------------------
const alignmentOptions = {
    left: LEFT,
    right: RIGHT,
};

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledStory = styled.div`
    background: ${colors.white.base};
`;

// Stories
// ------------------------------------------------------------------------------------------------------------------
storiesOf('Components/Layout/Page', module).add('Default Layout', () => (
    <StyledStory>
        <PageComponent header={<Header />} footer={<Footer />}>
            <Page.DefaultLayout
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
            >
                <h1>Hello!</h1>
            </Page.DefaultLayout>
        </PageComponent>
    </StyledStory>
));

storiesOf('Components/Layout/Page', module).add('Sidebar Layout', () => (
    <StyledStory>
        <PageComponent header={<Header />} footer={<Footer />}>
            <Page.SidebarLayout
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
                sidebarAlign={select(
                    'Sidebar Alignment',
                    alignmentOptions,
                    LEFT
                )}
                sidebarWidth={text('Sidebar Width', DEFAULT_SIDEBAR_WIDTH)}
            >
                <h1>Hello!</h1>
            </Page.SidebarLayout>
        </PageComponent>
    </StyledStory>
));
