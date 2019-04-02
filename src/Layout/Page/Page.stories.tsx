// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Page } from './Page.component';
import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';

const StyledStory = styled.div``;

storiesOf('Components/Layout/Page', module).add('default', () => (
    <StyledStory>
        <Page
            layout="sidebar"
            sidebarWidth="100px"
            headerHeight="50px"
            header={<Header />}
            footer={<Footer />}
            contentWidth={'200px'}
        >
            <h1>Hello!</h1>
        </Page>
    </StyledStory>
));
