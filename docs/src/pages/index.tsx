// REACT
import * as React from 'react';
// VENDOR
import styled, { createGlobalStyle } from '@xstyled/styled-components';
import { Link, withPrefix } from 'gatsby';
// ANCHOR & COMPONENTS
import {
    Col,
    Container,
    Hidden,
    RootTheme,
    Row,
    ScreenClass,
    ThemeProvider,
    Visible,
} from '@retailmenot/anchor';
import { HomeCard } from '../components/HomeCard';
import { HomeTopNav } from '../components/Navigation/HomeTopNav';
import {
    breakpoints,
    BreakpointsType,
    responsiveCSS,
} from '../components/Utils';
import { Wave } from '../components/Wave';

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

interface BreakpointProps {
    breakpoint?: BreakpointsType;
}

const StyledIndexPage = styled('div')<BreakpointProps>`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 3.4375rem;
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        padding-top: 1rem;
        min-height: 130vh;
        margin-bottom: 20rem;
        display:block;
    `}
`;

const StyledIntro = styled('div')<BreakpointProps>`
    width: 100%;
    max-width: ${CONTENT_WIDTH}px;
    margin: 0 auto;
    padding-top: 6.25rem;
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        padding-top: 1rem;
    `}
`;

interface StyledLogoProps extends BreakpointProps {
    test?: string;
}

const StyledLogo = styled('img')<StyledLogoProps>`
    flex: 1 1 auto;
    box-sizing: border-box;
    width: 80%;
    max-width: 22.25rem;

    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        margin: 2rem auto;
        position: relative;
        display: block;
    `}
`;

const StyledCaption = styled('p')<BreakpointProps>`
    padding: 1rem 0;
    font-family: AvenirNext-Medium, Avenir, sans-serif;
    font-size: 1rem;
    color: #222222;
    text-align: left;
    line-height: 1.5rem;
    max-width: 38.125rem;
    margin: 0 1rem;
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        background: rgba(255,255,255,0.95);
        padding: 1.5rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
    `}
`;

const StyledOcean = styled('div')<BreakpointProps>`
    margin-top: 3rem;
    height: 28rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        position:fixed;
        bottom: -24vw; // Using vw to make it's position more relative to the device width
    `}
`;

const StyledFooter = styled('footer')<BreakpointProps>`
    width: 100%;
    display: block;
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 30;
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        position: fixed;
        z-index: -1;
    `}

    img {
        display: block;
    }

    a {
        display: inline-block;
        padding: 0 1rem;
    }
`;

export const IndexPage = (): React.ReactElement<any> => (
    <ThemeProvider theme={RootTheme}>
        <ScreenClass
            render={(breakpoint: BreakpointsType) => (
                <StyledIndexPage breakpoint={breakpoint}>
                    <TempOverride />

                    <HomeTopNav contentWidth={CONTENT_WIDTH} />

                    <StyledIntro breakpoint={breakpoint}>
                        <Link to="/overview">
                            <Hidden xs sm>
                                <StyledLogo
                                    src={withPrefix(
                                        '/images/anchor-logo-horizontal.svg'
                                    )}
                                />
                            </Hidden>
                            <Visible xs sm>
                                <StyledLogo
                                    breakpoint={breakpoint}
                                    src={withPrefix('/images/anchor-logo.svg')}
                                />
                            </Visible>
                        </Link>

                        <StyledCaption breakpoint={breakpoint}>
                            Anchor is a design system by{' '}
                            <strong>RetailMeNot</strong>, fostered with a sense
                            of collaboration, community, and scalability. We
                            hope it's as useful for you as it is for us.
                        </StyledCaption>
                    </StyledIntro>

                    <Container>
                        <Row>
                            <Col
                                offset={{
                                    md: 1,
                                    lg: 2,
                                    xl: 2,
                                }}
                            >
                                <Row>
                                    <Col lg={5} md={3}>
                                        <HomeCard
                                            description="Check out our components & documentation."
                                            imgSrc="/images/developer-icon.svg"
                                            title="Developers"
                                            to="/components"
                                            breakpoint={breakpoint}
                                        />
                                    </Col>
                                    <Col lg={5} md={3}>
                                        <HomeCard
                                            description="Take a look at our design philosophy & human interface guidelines."
                                            imgSrc="/images/designer-icon.svg"
                                            title="Designers"
                                            disabled
                                            breakpoint={breakpoint}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                    <StyledOcean breakpoint={breakpoint}>
                        <Wave duration="89s" top="0" image={1} />
                        <Wave duration="88s" top="10px" image={5} />
                        <Wave duration="85s" top="20px" image={4} />
                        <Wave duration="62s" top="50px" image={3} />
                        <Wave duration="65s" top="80px" image={2} />
                        <Wave duration="67s" top="120px" image={1} />
                    </StyledOcean>

                    <StyledFooter breakpoint={breakpoint}>
                        <a href="//retailmenot.com" target="_blank">
                            <img src={withPrefix('/images/r-mark.svg')} />
                        </a>
                        <a
                            href="//github.com/RetailMeNot/anchor"
                            target="_blank"
                        >
                            <img src={withPrefix('/images/octocat.svg')} />
                        </a>
                    </StyledFooter>
                </StyledIndexPage>
            )}
        />
    </ThemeProvider>
);

export default IndexPage;
