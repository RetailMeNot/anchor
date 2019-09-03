// REACT
import * as React from 'react';
// VENDOR
import styled, { createGlobalStyle } from '@xstyled/styled-components';
import { Link, withPrefix } from 'gatsby';
import {
    ThemeProvider,
    RootTheme,
} from '@retailmenot/anchor';
// COMPONENTS
import { HomeTopNav } from '../components/Navigation/HomeTopNav';
import { Wave } from '../components/Wave';
import { HomeCard } from '../components/HomeCard';

const CONTENT_WIDTH = 940;

// TODO: Delete this override when migrated over to Page
const TempOverride = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }
`;

const StyledIndexPage = styled('div')`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 55rpx;
`;

const StyledIntro = styled('div')`
    width: 100%;
    max-width: ${CONTENT_WIDTH}px;
    margin: 0 auto;
    padding-top: 100rpx;
`;

const StyledLogo = styled('img')`
    flex: 1 1 auto;
`;

const StyledCaption = styled('p')`
    padding: 1rem 0;
    font-family: AvenirNext-Medium, Avenir, sans-serif;
    font-size: 1rem;
    color: #222222;
    text-align: left;
    line-height: 1.5rem;
    max-width: 610rpx;
`;

const StyledCards = styled('section')`
    width: 100%;
    max-width: ${CONTENT_WIDTH}px;
    margin: 0 auto;
    display: flex;
    padding-top:4rem;
`;

const Column = styled('div')`
    width: 50%;

    &:nth-child(0) {
        margin-left: 2.5%;
    }

    &:nth-child(1) {
        margin-right: 2.5%;
    }
`;

const StyledOcean = styled('div')`
    margin-top: 3rem;
    height: 28rem;
    width: 100%;
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    overflow:hidden;
    z-index:-1;
`;

const StyledFooter = styled('footer')`
    width: 100%;
    display:block;
    position: absolute;
    bottom:2rem;
    left:0;
    right:0;
    text-align:center;
    z-index:30;

    img {
        display:block;
    }

    a {
        display:inline-block;
        padding: 0 1rem;
    }
`;

export const IndexPage = (): React.ReactElement<any> => (
    <ThemeProvider theme={RootTheme}>
        <StyledIndexPage>
            <TempOverride />

            <HomeTopNav contentWidth={CONTENT_WIDTH} />

            <StyledIntro>
                <Link to="/overview">
                    <StyledLogo
                        src={withPrefix('/images/anchor-logo-horizontal.svg')}
                    />
                </Link>

                <StyledCaption>
                    Anchor is a design system by <strong>RetailMeNot</strong>,
                    fostered with a sense of collaboration, community, and
                    scalability. We hope it's as useful for you as it is for us.
                </StyledCaption>
            </StyledIntro>

            <StyledCards>
                <Column>
                    <HomeCard
                        description="Take a look at our design philosophy & human interface guidelines."
                        imgSrc="/images/designer-icon.svg"
                        title="Designers"
                        disabled
                    />
                </Column>
                <Column>
                    <HomeCard
                        description="Check out our components & documentation."
                        imgSrc="/images/developer-icon.svg"
                        title="Developers"
                        to="/components"
                    />
                </Column>
            </StyledCards>

            <StyledOcean>
                <Wave duration="89s" top="0" image={1} />
                <Wave duration="88s" top="10px" image={5} />
                <Wave duration="85s" top="20px" image={4} />
                <Wave duration="62s" top="50px" image={3} />
                <Wave duration="65s" top="80px" image={2} />
                <Wave duration="67s" top="120px" image={1} />
            </StyledOcean>

            <StyledFooter>
                    <a href="//retailmenot.com" target="_blank">
                        <img src={withPrefix('/images/r-mark.svg')} />
                    </a>
                    <a href="//github.com/RetailMeNot/anchor" target="_blank">
                        <img src={withPrefix('/images/octocat.svg')} />
                    </a>
                </StyledFooter>
        </StyledIndexPage>
    </ThemeProvider>
);

export default IndexPage;
