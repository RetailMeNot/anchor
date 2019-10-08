// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
import styled, { createGlobalStyle, css } from '@xstyled/styled-components';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import merge from 'lodash.merge';
import { config } from 'react-awesome-styled-grid';

// ANCHOR & COMPONENTS
import {
    Col,
    Button,
    Container,
    Hamburger,
    RootTheme,
    Row,
    StandardBreakpoints,
    ThemeProvider,
    Typography,
} from '@retailmenot/anchor';
import { Footer } from '../';
import {
    EnhancedSectionNavigation,
    EnhancedNextPrevious,
} from '../../Navigation';
import { MDXComponents } from './MDXComponents';
import { SearchInput } from '../../SearchInput';
import { breakpoints, rem } from '../../Utils';
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

const StyledContentMain = styled('main')`
    box-sizing: border-box;
    max-width: 80rem;
    padding: 1rem 1rem 3rem;
    width: 100%;
    ${props => config(props).media[breakpoints.md]`
        width: 95%;
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

const SectionNavCol = styled(Col)`
    padding-left: 0;
    padding-right: 0;
`;

interface StyledSectionNavProps {
    sectionNavOpen: boolean;
}

const StyledSectionNav = styled('div')<StyledSectionNavProps>`
    background-color: background.base;
    border-right: light;
    box-sizing: border-box;
    height: 120%;
    left: 0;
    overflow-y: scroll;
    padding-bottom: 30rem;
    position: fixed;
    right: 0;
    top: 4.5rem;
    width: 100vw;
    z-index: 90;
    ${({ sectionNavOpen }) =>
        css({ display: sectionNavOpen ? 'display' : 'none' })}
    ${props => config(props).media[breakpoints.md]`
        height: auto;
        overflow-y: initial;
        padding-bottom: initial;
        position: relative;
        right: auto;
        top: auto;
        width: auto;
        z-index: 0;
        display: block;
    `};
`;

interface FixedBodyProps {
    sectionNavOpen: boolean;
}

// For mobile, fixes the body position so it doesn't scroll around when the navigation is open
const FixedBody = createGlobalStyle<FixedBodyProps>`
    ${({ sectionNavOpen }) =>
        sectionNavOpen &&
        `
        body {
            position: fixed;
        }
    `}
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
    ${props => config(props).media[breakpoints.md]`
        display: none;
    `}
`;

const LogoCol = styled(CenteredCol)`
    padding-right: 0;
`;

// TODO: This is a stopgap measure to get search out. The current mobile layout, plus the way
// DocSearch initializes, makes both the UX and UI for mobile search tricky. Hiding it for mobile
// for now
const SearchCol = styled(CenteredCol)`
    display: none;
    ${props => config(props).media[breakpoints.md]`
        display: flex;
    `}
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
        accent: {
            base: '#E3EEF6',
            light: '#0998D6',
            dark: '#0074A6',
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
        breakpoints: {
            xs: 1,
            sm: rem(StandardBreakpoints.sm.min),
            md: rem(StandardBreakpoints.md.min),
            lg: rem(StandardBreakpoints.lg.min),
            xl: rem(StandardBreakpoints.xl.min),
        },
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
            <StyledPageElement className={classNames(className)}>
                <Helmet htmlAttributes={{ lang: 'en' }} />

                <GlobalCSS />

                <StyledHeader>
                    <Container>
                        <Row>
                            <HamburgerCol xs={1} sm={1}>
                                <Button
                                    variant="minimal"
                                    prefix={<Hamburger />}
                                    onClick={() =>
                                        setSectionNavOpen(!sectionNavOpen)
                                    }
                                />
                            </HamburgerCol>

                            <LogoCol md={2} lg={3} xl={2}>
                                <StyledLogoContainer to="/">
                                    <img
                                        alt="Anchor Logo Horizontal"
                                        src={logo}
                                    />
                                </StyledLogoContainer>
                            </LogoCol>

                            <SearchCol>
                                <SearchInput />
                            </SearchCol>

                            <CenteredCol>
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
                    <SectionNavCol md={2} lg={3} xl={2}>
                        <FixedBody sectionNavOpen={sectionNavOpen} />

                        <StyledSectionNav sectionNavOpen={sectionNavOpen}>
                            <EnhancedSectionNavigation />
                        </StyledSectionNav>
                    </SectionNavCol>

                    <Col md={6} lg={9} xl={10}>
                        <StyledContentMain>
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
        </ThemeProvider>
    );
};

export default Page;
