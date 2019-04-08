// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
// COMPONENT
import {
    Page,
    DEFAULT_HEADER_HEIGHT,
    DEFAULT_FOOTER_HEIGHT,
} from './Page.component';
import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';
import { colors } from '../../theme';
// README
// import * as README from './README.md';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledStory = styled.div`
    background: ${colors.white.base};
    width: 100%;
`;

// Stories
// ------------------------------------------------------------------------------------------------------------------
storiesOf('Components/Layout', module).add('Page', () => (
    <StyledStory>
        <Page
            header={<Header />}
            footer={<Footer />}
            headerHeight={text('Header Height', DEFAULT_HEADER_HEIGHT)}
            footerHeight={text('Footer Height', DEFAULT_FOOTER_HEIGHT)}
        >
            <h1>Page</h1>
            <h2>Main wrapper, includes a header and footer and content</h2>
        </Page>
    </StyledStory>
));

// storiesOf('Components/Layout/Page', module)
//     .addParameters({
//         readme: {
//             sidebar: README,
//         },
//     })
//     .add('default', () => (
//         <StyledStory>
//             <Page>Story</Page>
//         </StyledStory>
//     ));
