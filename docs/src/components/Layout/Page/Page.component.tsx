// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
import styled, { createGlobalStyle, css } from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import merge from 'lodash.merge';

// ANCHOR & COMPONENTS
import {
    Adaptor,
    Button,
    Grid,
    Hamburger,
    ResponsiveProvider,
    RootTheme,
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
import { Octocat } from '../../Octocat';
// ASSETS
import logo from './anchor-logo.svg';

const { Cell } = Grid;

const GlobalCSS = createGlobalStyle`
    body {
        margin: 0;
    }
`;

const StyledPageElement = styled('div')``;

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
    ${breakpoints({
        md: css`
            width: 95%;
        `,
    })}

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
    sectionNavOpen?: boolean;
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
    ${breakpoints({
        md: css`
            height: auto;
            overflow-y: initial;
            padding-bottom: initial;
            position: relative;
            right: auto;
            top: auto;
            width: auto;
            z-index: 0;
            display: block;
        `,
    })}
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

    .octocat {
        height: 100%;
        display: inline-flex;
        padding-left: 0.5rem;
    }
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
});

export const Page = ({
    children,
    className,
    enableFooter,
}: PageProps): React.ReactElement<any> => {
    const [sectionNavOpen, setSectionNavOpen] = React.useState<boolean>(false);

    return (
        <ThemeProvider theme={AnchorDocsTheme}>
            <ResponsiveProvider>
                <StyledPageElement className={classNames(className)}>
                    <Helmet htmlAttributes={{ lang: 'en' }} />

                    <GlobalCSS />

                    {/* On mobile, the navigation will be full screen when the hamburger is clicked */}
                    <Adaptor from="xs" to="md">
                        <FixedBody sectionNavOpen={sectionNavOpen} />

                        <StyledSectionNav sectionNavOpen={sectionNavOpen}>
                            <EnhancedSectionNavigation />
                        </StyledSectionNav>
                    </Adaptor>

                    <StyledHeader>
                        <Grid>
                            <Cell
                                width={{ xs: 1, md: 0 }}
                                valign="middle"
                                align="center"
                            >
                                <Button
                                    variant="minimal"
                                    prefix={<Hamburger />}
                                    onClick={() =>
                                        setSectionNavOpen(!sectionNavOpen)
                                    }
                                />
                            </Cell>

                            <Cell
                                width={{ xs: 2, md: 3, xl: 2 }}
                                valign="middle"
                            >
                                <StyledLogoContainer to="/">
                                    <img
                                        alt="Anchor Logo Horizontal"
                                        src={logo}
                                    />
                                </StyledLogoContainer>
                            </Cell>

                            <Cell width={{ xs: 0, md: 6 }} valign="middle">
                                <SearchInput />
                            </Cell>

                            <Cell
                                width={{ xs: 9, md: 3, xl: 4 }}
                                align="right"
                                valign="middle"
                            >
                                <StyledPrimaryNav>
                                    <Typography
                                        tag="a"
                                        weight={600}
                                        className="active"
                                        href="https://github.com/RetailMeNot/anchor"
                                    >
                                        Github
                                        <Octocat />
                                    </Typography>
                                </StyledPrimaryNav>
                            </Cell>
                        </Grid>
                    </StyledHeader>

                    <Grid>
                        <Cell width={{ xs: 0, md: 3, xl: 2 }}>
                            <StyledSectionNav>
                                <EnhancedSectionNavigation />
                            </StyledSectionNav>
                        </Cell>

                        <Cell width={{ xs: 12, md: 9, xl: 10 }}>
                            <StyledContentMain>
                                <br />
                                <MDXProvider components={MDXComponents}>
                                    {children}
                                </MDXProvider>

                                <EnhancedNextPrevious section="components" />

                                {enableFooter && <Footer />}
                            </StyledContentMain>
                        </Cell>
                    </Grid>
                </StyledPageElement>
            </ResponsiveProvider>
        </ThemeProvider>
    );
};

export default Page;
