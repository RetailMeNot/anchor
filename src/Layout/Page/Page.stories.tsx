// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { select, text } from '@storybook/addon-knobs';
// COMPONENT
import { Page, SidebarLayout, DefaultLayout, DEFAULT_LAYOUT_WIDTH, DEFAULT_SIDEBAR_WIDTH } from './Page.component';
import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';
import { Sider } from '../Sider/Sider.component';

// Constants
// ------------------------------------------------------------------------------------------------------------------
const alignmentOptions = {
  left: 'left',
  right: 'right',
};

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledStory = styled.div``;

// Stories
// ------------------------------------------------------------------------------------------------------------------
storiesOf('Components/Layout/Page', module).add('default', () => (
  <StyledStory>
    <Page
      header={<Header />}
      footer={<Footer />}
    >
      <DefaultLayout
        layoutWidth={text('Layout Width', DEFAULT_LAYOUT_WIDTH)}
      >
        <h1>Hello!</h1>
      </DefaultLayout>
    </Page>
  </StyledStory>
));

storiesOf('Components/Layout/Page', module).add('sidebar', () => (
  <StyledStory>
    <Page
      header={<Header />}
      footer={<Footer />}
    >
      <SidebarLayout
        sidebar={<Sider />}
        sidebarAlign={select('Sidebar Alignment', alignmentOptions, 'left')}
        layoutWidth={text('Layout Width', DEFAULT_LAYOUT_WIDTH)}
        sidebarWidth={text('Sidebar Width', DEFAULT_SIDEBAR_WIDTH)}
      >
        <h1>Hello!</h1>
      </SidebarLayout>
    </Page>
  </StyledStory>
));
