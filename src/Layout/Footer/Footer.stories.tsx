// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Footer } from './Footer.component';

const StyledStory = styled.div`
    padding: 2rem 0;
`;

storiesOf('Components/Layout/Footer', module).add('default', () => (
    <StyledStory>
        <Footer />
    </StyledStory>
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
