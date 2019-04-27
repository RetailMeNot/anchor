// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
import { AutoComplete } from '@retailmenot/anchor';
// COMPONENTS
import { NormalizeCSS } from '../../../../../src/theme';
import { Footer } from '../';
import { CodePreview } from '../../CodePreview';
import {
    Grid,
    Cell,
    CenteredCell,
    Search,
    Typography,
} from '../../../../../src';
// ASSETS
import logo from './anchor-logo.svg';
// THEME
import { colors } from '../../../../../src/theme';

const StyledPageElement = styled.div``;

interface PageProps {
    className?: string;
    children?: any;
    enableFooter?: boolean;
}

const StyledContentBody = styled.div``;

const StyledLogoContainer = styled.a`
    border-right: solid thin ${colors.silver.base};
    width: 100%;
    margin-left: 1rem;
    display: block;
`;

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    display: block;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16);
`;

const StyledSideNav = styled(Cell)`
    box-sizing: border-box;
    background-color: ${colors.silver.light};
    border-right: solid thin ${colors.silver.base};
`;

const StyledPrimaryNav = styled.nav`
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

const Components: any = {};

Components.code = (props: any) => <CodePreview {...props} />;
Components.inlineCode = (props: any) => <code {...props} />;
Components.wrapper = (props: any) => <React.Fragment {...props} />;
Components.h1 = (props: any) => <Typography weight={600} tag="h1" {...props} />;
Components.h2 = (props: any) => <h2 {...props} />;
Components.h3 = (props: any) => <h3 {...props} />;
Components.h4 = (props: any) => <h4 {...props} />;
Components.h5 = (props: any) => <h5 {...props} />;
Components.h6 = (props: any) => <h6 {...props} />;
Components.p = (props: any) => <p {...props} />;
Components.ul = (props: any) => <ul {...props} />;
Components.ol = (props: any) => <ol {...props} />;
Components.li = (props: any) => <li {...props} />;
Components.a = (props: any) => <a {...props} />;
Components.blockquote = (props: any) => <blockquote {...props} />;
Components.strong = (props: any) => <strong {...props} />;

export const Page = ({
    children,
    className,
    enableFooter,
}: PageProps): React.ReactElement<any> => (
    <StyledPageElement className={classNames(className)}>
        <NormalizeCSS />
        <StyledHeader>
            <Grid
                columns="300px minmax(300px, 1fr) minmax(200px, 1fr)"
                columnGap="1rem"
                minRowHeight="4.625rem"
            >
                <CenteredCell>
                    <StyledLogoContainer href="/">
                        <img alt="Anchor Logo Horizontal" src={logo} />
                    </StyledLogoContainer>
                </CenteredCell>
                <CenteredCell>
                    <AutoComplete
                        placeholder="Search on Anchor"
                        prefix={<Search />}
                        shadow={false}
                        border={false}
                        dataSource={['1', '1', '1', '1']}
                    />
                </CenteredCell>
                <Cell>
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
                </Cell>
            </Grid>
        </StyledHeader>
        <StyledContentBody>
            <Grid columns="minmax(180px, 300px) 1fr">
                <StyledSideNav>
                    <Typography tag="p">TODO: when we have accordions</Typography>
                </StyledSideNav>
                <Cell>
                    <main>
                        <MDXProvider components={Components}>
                            {children}
                        </MDXProvider>
                        {enableFooter && <Footer />}
                    </main>
                </Cell>
            </Grid>
        </StyledContentBody>
    </StyledPageElement>
);

export default Page;
