// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
// import { Box } from '@rebass/grid';
// STYLES
import { colors, sizes } from '../../theme';
// COMPONENTS
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer.component';
import { NormalizeCSS, GlobalCSS } from '../../theme/GlobalStyles';

const StyledPageElement = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100vw;

    header {
        flex: 0 0 auto;
        max-width: 100vw;
    }

    footer {
        flex: 0 0 auto;
        max-width: 100vw;
    }
`;

const StyledBodyElement = styled.section`
    flex: 1 0 auto;
    background-color: ${colors.silver.base};
    max-width: 100vw;
    align-self: stretch;
    padding: ${sizes.padding.lg} ${sizes.padding.xl};
`;

interface PageProps {
    className?: string;
    children?: any;
}

export const Page = ({ children }: PageProps): React.ReactElement<any> => (
    <StyledPageElement className="anchor-page">
        <NormalizeCSS />
        <GlobalCSS />
        <Header />
        <StyledBodyElement>{children}</StyledBodyElement>
        <Footer />
    </StyledPageElement>
);
