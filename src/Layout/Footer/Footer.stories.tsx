// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Footer } from './Footer.component';
// README
import * as README from './README.md';
import { RootTheme } from '../../theme';

const StyledStory = styled.div`
    padding: 2rem 0;
`;

storiesOf('Components/Layout/Footer', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Footer />
            </StyledStory>
        </ThemeProvider>
    ));
// .add('custom navigation', () => (
//     <StyledStory>
//         <Footer>
//             {Footer.renderLinks([
//                 {
//                     title: 'Find Deals',
//                     key: 1,
//                     children: [
//                         { label: 'Seasonal/Ideas', href: '#', key: 1 },
//                         {
//                             label: 'Browse Categories',
//                             href: '/coupons',
//                             key: 2,
//                         },
//                         { label: 'Exclusive Deals', href: '#', key: 3 },
//                         { label: 'Deal Squad', href: '#', key: 4 },
//                     ],
//                 },
//             ])}
//         </Footer>
//     </StyledStory>
// ));
