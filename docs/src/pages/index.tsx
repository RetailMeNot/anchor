// VENDOR
import * as React from 'react';
import styled, { createGlobalStyle, css } from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';
import { Link, withPrefix } from 'gatsby';
// ANCHOR & COMPONENTS
import {
    Cell,
    Grid,
    ResponsiveProvider,
    RootTheme,
    ThemeProvider,
} from '@retailmenot/anchor';
import { HomeCard } from '../components/HomeCard';
import { HomeTopNav } from '../components/Navigation/HomeTopNav';
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

const StyledIndexPage = styled('div')`
    display: block;
    height: 100vh;
    margin-bottom: 20rem;
    min-height: 130vh;
    padding-top: 1rem;

    ${breakpoints({
        md: css`
            display: flex;
            flex-direction: column;
            margin-bottom: auto;
            min-height: auto;
            padding-top: 3.4375rem;
        `,
    })}
`;

const StyledIntro = styled('div')`
    width: 100%;
    max-width: ${CONTENT_WIDTH}px;
    margin: 0 auto;
    padding-top: 1rem;

    ${breakpoints({
        sm: css`
            padding-top: 6.25rem;
        `,
    })}
`;

const StyledLogo = styled('img')`
    box-sizing: border-box;
    display: block;
    flex: 1 1 auto;
    margin: 2rem auto;
    max-width: 22.25rem;
    position: relative;
    width: 80%;

    ${breakpoints({
        sm: css`
            margin: inherit;
        `,
    })}
`;

const StyledCaption = styled('p')`
    background: rgba(255, 255, 255, 0.95);
    border-radius: 0.5rem;
    color: #222222;
    font-family: base;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
    max-width: auto;
    padding: 1.5rem;
    text-align: left;

    ${breakpoints({
        md: css`
            background: transparent;
            border-radius: 0;
            margin-bottom: 0;
            max-width: 38.125rem;
            padding: 1rem 0;
        `,
    })}
`;

const StyledContainer = styled('div')`
    width: 100%;
    max-width: ${CONTENT_WIDTH}px;
    margin: 0 auto;
    padding: 0 1rem;

    ${breakpoints({
        sm: css`
            padding-top:4rem;
        `,
    })}
`;

const StyledOcean = styled('div')`
    bottom: -24vw; // Using vw to make its position more relative to the device width
    height: 28rem;
    left: 0;
    margin-top: 3rem;
    overflow: hidden;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: -1;

    ${breakpoints({
        sm: css`
            bottom: 0;
            position: absolute;
        `,
    })}
`;

const StyledFooter = styled('footer')`
    bottom: 2rem;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    width: 100%;
    z-index: -1;

    ${breakpoints({
        sm: css`
            position: absolute;
            z-index: 30;
        `,
    })}

    img {
        display: block;
    }

    a {
        display: inline-block;
        padding: 0 1rem;
    }
`;

const StyledGrid = styled(Grid)`
    row-gap: 2rem;
    column-gap: 0rem;
`;

export const IndexPage = (): React.ReactElement<any> => (
    <ThemeProvider theme={RootTheme}>
        <ResponsiveProvider>
            <StyledIndexPage>
                <TempOverride />

                <HomeTopNav contentWidth={CONTENT_WIDTH} />

                <StyledIntro>
                    <Link to="/overview">
                        <Grid>
                            <Cell width={{xs: 0, md: 12}}>
                                <StyledLogo
                                    src={withPrefix(
                                        '/images/anchor-logo-horizontal.svg'
                                    )}
                                />
                            </Cell>
                            <Cell width={{xs: 12, md: 0}}>
                                <StyledLogo
                                    src={withPrefix(
                                        '/images/anchor-logo.svg'
                                    )}
                                />
                            </Cell>
                        </Grid>
                    </Link>

                    <StyledCaption>
                        Anchor is a design system by{' '}
                        <strong>RetailMeNot</strong>, fostered with a sense
                        of collaboration, community, and scalability. We
                        hope it's as useful for you as it is for us.
                    </StyledCaption>
                </StyledIntro>

                <StyledContainer>
                    <StyledGrid columns={13}>
                        <Cell width={{xs: 13, md: 6}}>
                            <HomeCard
                                description="Check out our components & documentation."
                                imgSrc="/images/developer-icon.svg"
                                title="Developers"
                                to="/components"
                            />
                        </Cell>
                        <Cell width={{xs: 13, md: 6}} left={{xs: 0, md: 8}} top={{xs: 2, md: 1 }}>
                            <HomeCard
                                description="Take a look at our design philosophy & human interface guidelines."
                                imgSrc="/images/designer-icon.svg"
                                title="Designers"
                                disabled
                            />
                        </Cell>
                    </StyledGrid>
                </StyledContainer>

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
                    <a
                        href="//github.com/RetailMeNot/anchor"
                        target="_blank"
                    >
                        <img src={withPrefix('/images/octocat.svg')} />
                    </a>
                </StyledFooter>
            </StyledIndexPage>
        </ResponsiveProvider>
    </ThemeProvider>
);

export default IndexPage;
