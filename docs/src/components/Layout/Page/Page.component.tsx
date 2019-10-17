// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
import styled, { createGlobalStyle } from '@xstyled/styled-components';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import merge from 'lodash.merge';
// ANCHOR & COMPONENTS
import {
    Col,
    Button,
    Container,
    Hamburger,
    RootTheme,
    Row,
    ScreenClass,
    ThemeProvider,
    Typography,
    Visible,
} from '@retailmenot/anchor';
import { Footer } from '../';
import {
    EnhancedSectionNavigation,
    EnhancedNextPrevious,
} from '../../Navigation';
import { MDXComponents } from './MDXComponents';
import { breakpoints, BreakpointsType, responsiveCSS } from '../../Utils';
// ASSETS
import logo from './anchor-logo.svg';

const GlobalCSS = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const StyledPageElement = styled('div')`
    // The Row component can't be extended, so targeting it via class
    .anchor-row {
        margin-left: 0;
        margin-right: 0;
    }
`;

interface PageProps {
    className?: string;
    children?: any;
    enableFooter?: boolean;
}

interface StyledContentMainProps {
    breakpoint?: BreakpointsType;
}

const StyledContentMain = styled('main')<StyledContentMainProps>`
    box-sizing: border-box;
    width: 95%;
    max-width: 80rem;
    padding: 1rem 1rem 3rem;
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        width: 100%;
    `}

    blockquote {
        padding-bottom: 0;
        > p {
            padding-bottom: 0.5rem;
        }
    }
`;

const StyledLogoContainer = styled(Link)`
    box-sizing: border-box;
    border-right: light;
    margin-left: 1rem;
    display: block;
    flex: 0 0 auto;
`;

const StyledHeader = styled('header')`
    z-index: 90; // Set high because of the code editor
    position: sticky;
    top: 0;
    display: block;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16);

    // The Row component can't be extended, so targeting it via class
    .anchor-row:first-child {
        flex-wrap: nowrap;
    }
`;

interface StyledSectionNavProps {
    breakpoint?: BreakpointsType;
}

const StyledSectionNav = styled('div')<StyledSectionNavProps>`
    box-sizing: border-box;
    background-color: background.base;
    border-right: light;
    ${({ breakpoint }) => responsiveCSS(breakpoint, [
        breakpoints.xs,
        breakpoints.sm,
    ])`
        position: fixed;
        width: 100vw;
        height: 120%;
        z-index: 90;
        overflow-y: scroll;
        top: 4.5rem;
        left: 0;
        right: 0;
        padding-bottom: 30rem;
    `}
`;

// For mobile, fixes the body position so it doesn't scroll around when the navigation is open
const FixedBody = createGlobalStyle`
    body {
        position:fixed;
    }
`;

const StyledPrimaryNav = styled('nav')`
    height: 100%;
    display: flex;
    justify-content: flex-end;

    a {
        padding: 1.5rem;
        box-sizing: border-box;
        display: inline-flex;
        height: 100%;
        min-width: 4rem;
        color: text.base;
        &:hover {
            color: text.link.hover;
        }
    }
`;

const CenteredCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

const HamburgerCol = styled(CenteredCol)`
    max-width: 3rem;
`;

const AnchorDocsTheme = merge({}, RootTheme, {
    colors: {
        primary: {
            base: '#DF206C',
            light: '#E665A1',
            dark: '#B81D5B',
        },
        secondary: {
            base: '#EB663D',
            light: '#FA9F5A',
            dark: '#C74E30',
        },
        borders: {
            light: '#F1F1F1',
            base: '#E7E7E7',
            dark: '#D3D3D3',
        },
        background: {
            base: '#FAFAFA',
            code: '#F1F1F1',
        },
        text: {
            link: {
                hover: '#DF206C',
            },
        },
    },
    borders: {
        light: 'solid thin #F1F1F1',
        base: 'solid thin #E7E7E7',
        dark: 'solid thin #D3D3D3',
    },
    awesomegrid: {
        container: {
            xs: 'full',
            sm: 'full',
            md: 'full',
            lg: 'full',
            xl: 'full',
        },
        paddingWidth: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
            xl: 0,
        },
    },
});

export const Page = ({
    children,
    className,
    enableFooter,
}: PageProps): React.ReactElement<any> => {
    const [sectionNavOpen, setSectionNavOpen] = React.useState<boolean>(false);

    return (
        <ThemeProvider theme={AnchorDocsTheme}>
            <ScreenClass
                render={(breakpoint: BreakpointsType) => (
                    <StyledPageElement className={classNames(className)}>
                        <Helmet htmlAttributes={{ lang: 'en' }} />

                        <GlobalCSS />

                        <StyledHeader>
                            <Container>
                                <Row>
                                    <Visible xs sm>
                                        <HamburgerCol xs={1} sm={1}>
                                            <Button
                                                variant="minimal"
                                                prefix={<Hamburger />}
                                                onClick={() =>
                                                    setSectionNavOpen(
                                                        !sectionNavOpen
                                                    )
                                                }
                                            />
                                        </HamburgerCol>
                                    </Visible>

                                    <CenteredCol md={2} xs={2} sm={4}>
                                        <StyledLogoContainer to="/">
                                            <img
                                                alt="Anchor Logo Horizontal"
                                                src={logo}
                                            />
                                        </StyledLogoContainer>
                                    </CenteredCol>

                                    <CenteredCol md={2} xs={1} sm={1}>
                                        {/* TODO: Search will go here */}
                                    </CenteredCol>

                                    <CenteredCol md={4} xs={1} sm={3}>
                                        <StyledPrimaryNav>
                                            <Typography
                                                tag="a"
                                                weight={600}
                                                className="active"
                                                href="https://github.com/RetailMeNot/anchor"
                                            >
                                                Github
                                            </Typography>
                                        </StyledPrimaryNav>
                                    </CenteredCol>
                                </Row>
                            </Container>
                        </StyledHeader>

                        <Row>
                            <Col md={2} lg={2}>
                                {(sectionNavOpen ||
                                    (breakpoint !== breakpoints.sm &&
                                        breakpoint !== breakpoints.xs)) && (
                                    <>
                                        {sectionNavOpen && (
                                            <Visible sm xs>
                                                <FixedBody />
                                            </Visible>
                                        )}

                                        <StyledSectionNav
                                            breakpoint={breakpoint}
                                        >
                                            <EnhancedSectionNavigation />
                                        </StyledSectionNav>
                                    </>
                                )}
                            </Col>
                            <Col md={6} lg={10}>
                                <StyledContentMain breakpoint={breakpoint}>
                                    <br />
                                    <MDXProvider components={MDXComponents}>
                                        {children}
                                    </MDXProvider>

                                    <EnhancedNextPrevious section="components" />

                                    {enableFooter && <Footer />}
                                </StyledContentMain>
                            </Col>
                        </Row>
                    </StyledPageElement>
                )}
            />
        </ThemeProvider>
    );
};

export default Page;
