// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
import { AutoComplete } from '@retailmenot/anchor';
import styled, { css, ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { fonts, NormalizeCSS } from '../../../../../src/theme';
import { RootTheme } from '../../../../../src/theme';
import { Footer } from '../';
import { EnhancedSideNavigation } from '../../Navigation';
import { CodePreview } from '../../CodePreview';
import { Row, Col, Search, Typography } from '../../../../../src';
// ASSETS
import logo from './anchor-logo.svg';
// THEME
import { colors } from '../../../../../src/theme';

const StyledPageElement = styled('div')``;

interface PageProps {
    className?: string;
    children?: any;
    enableFooter?: boolean;
}

const StyledContentMain = styled('main')`

// Defining this in one location so that it can be used both in the table styles for the pre tag,
// and for the StyledInlineCode component fed to MDX's custom Components.
const InlineCodeStyle = css`
    display: inline;
    background-color: rgba(27, 31, 35, 0.05);
    font-family: 'SFMono-Regular', Consolas, Liberation Mono, Menlo, Courier,
        monospace;
    border-radius: 3px;
    padding: 0.2em 0.4em;
    font-size: 85%;
`;

const StyledContentBody = styled('div')`
    box-sizing: border-box;
    width: 95%;

    table {
        width: 100%;
        font-family: ${fonts.fontFamily};
        margin: 1rem 0;
    }
    th {
        text-align: left;
        padding: 0.75rem 0.5rem;
        border-bottom: solid thin ${colors.silver.dark};
    }
    tr {
        &:nth-child(even) {
            background-color: ${colors.silver.light};
        }
    }
    td {
        padding: 0.75rem 0.5rem;
        line-height: 1.5rem;

        &:first-child {
            font-family: monospace;
            color: ${colors.flashPink.dark};
        }
        &:nth-child(3) {
            font-family: monospace;
            color: ${colors.cyberMango.dark};
        }
        &:nth-child(4) {
            text-align: left;
            font-family: monospace;
        }

        pre {
            ${InlineCodeStyle}
        }
    }

    blockquote {
        padding-bottom: 0;
        > p {
            padding-bottom: 0.5rem;
        }
    }
`;

const StyledLogoContainer = styled('a')`
    box-sizing: border-box;
    border-right: solid thin ${colors.silver.base};
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
`;

const StyledSideNav = styled('div')`
    box-sizing: border-box;
    background-color: ${colors.silver.light};
    border-right: solid thin ${colors.silver.base};
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
        color: ${colors.charcoal.base};
        &:hover {
            color: ${colors.flashPink.base};
        }
    }
`;

const CenteredCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

// These are standard markdown styles for an inlineCode block. Can't use 'code' because that is tied
// to the CodePreview component.
const StyledInlineCode = styled('span')`
    background-color: rgba(27, 31, 35, 0.05);
    font-family: 'SFMono-Regular', Consolas, Liberation Mono, Menlo, Courier,
        monospace;
    border-radius: 3px;
    padding: 0.2em 0.4em;
    font-size: 85%;
    ${InlineCodeStyle};
`;

const StyledLi = styled('li')`
    padding-bottom: 0.5rem;
`;

const StyledHr = styled('hr')`
    margin: 2rem 0;
`;

const StyledTable = styled.table``;

const Components: any = {};

Components.code = (props: any) => <CodePreview {...props} />;
Components.wrapper = (props: any) => <React.Fragment {...props} />;
Components.inlineCode = (props: any) => <StyledInlineCode {...props} />;
Components.pre = (props: any) => <Typography tag="pre" {...props} />;
Components.h1 = ({ children, ...props }: any) => (
    <Typography
        id={`${children}`.toLowerCase()}
        weight={600}
        tag="h1"
        {...props}
        children={children}
    />
);
Components.h2 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h2"
        lineHeight={2.3}
        {...props}
        children={children}
    />
);
Components.h3 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h3"
        lineHeight={2.5}
        {...props}
        children={children}
    />
);
Components.h4 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h4"
        {...props}
        children={children}
    />
);
Components.h5 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h5"
        {...props}
        children={children}
    />
);
Components.h6 = ({ children, ...props }: any) => (
    <Typography
        id={`${children.split(' ').join('-')}`.toLowerCase()}
        weight={600}
        tag="h6"
        mb="1"
        {...props}
        children={children}
    />
);

Components.p = (props: any) => <Typography tag="p" {...props} />;
Components.a = (props: any) => (
    <Typography color={colors.flashPink.base} tag="a" {...props} />
);
Components.blockquote = (props: any) => (
    <Typography tag="blockquote" {...props} />
);
Components.strong = (props: any) => (
    <Typography weight={600} tag="strong" {...props} />
);
Components.ul = (props: any) => <ul {...props} />;
Components.ol = (props: any) => <ol {...props} />;
Components.li = (props: any) => (
    <StyledLi>
        <Typography {...props} />
    </StyledLi>
);
Components.hr = (props: any) => <StyledHr {...props} />;
// TODO: This only binds to MD tables, not HTML
Components.table = (props: any) => <StyledTable {...props} />;

const AnchorTheme = {
    ...RootTheme,
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
};

export const Page = ({
    children,
    className,
    enableFooter,
}: PageProps): React.ReactElement<any> => (
    <ThemeProvider theme={AnchorTheme}>
        <StyledPageElement className={classNames(className)}>
            <NormalizeCSS />
            <StyledHeader>
                <Row>
                    <CenteredCol lg={2}>
                        <StyledLogoContainer href="/">
                            <img alt="Anchor Logo Horizontal" src={logo} />
                        </StyledLogoContainer>
                    </CenteredCol>
                    <CenteredCol lg={6}>
                        <AutoComplete
                            placeholder="Search on Anchor"
                            prefix={<Search />}
                            shadow={false}
                            border={false}
                            dataSource={['1', '1', '1', '1']}
                        />
                    </CenteredCol>
                    <CenteredCol lg={4}>
                        <StyledPrimaryNav>
                            <Typography
                                tag="a"
                                weight={600}
                                className="active"
                                href="/support"
                            >
                                Support
                            </Typography>
                            <Typography
                                tag="a"
                                weight={600}
                                className="active"
                                href="/support"
                            >
                                Github
                            </Typography>
                        </StyledPrimaryNav>
                    </CenteredCol>
                </Row>
            </StyledHeader>
            <Row>
                <Col lg={2}>
                    <StyledSideNav>
                        <EnhancedSideNavigation />
                    </StyledSideNav>
                </Col>
                <Col lg={10}>
                    <StyledContentMain>
                        <br />
                        <MDXProvider components={Components}>
                            {children}
                        </MDXProvider>
                        {enableFooter && <Footer />}
                    </StyledContentMain>
                </Col>
            </Row>
        </StyledPageElement>
    </ThemeProvider>
);

export default Page;
