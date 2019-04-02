// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
// COMPONENTS
import { NormalizeCSS, GlobalCSS } from '../../theme/GlobalStyles';
import { CustomAdaptor, StandardBreakpoints } from '../../Grid/Adaptor';

// ------------------------------------------------------------------------------------------------------------------

const DEFAULT_CONTENT_WIDTH = '71.25rem';
const DEFAULT_HEADER_HEIGHT = '7.5rem';
const DEFAULT_SIDEBAR_WIDTH = '13.75rem';

// ------------------------------------------------------------------------------------------------------------------

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

const FixedContent = styled.section<FixedContentProps>`
    max-width: ${props => props.contentWidth || DEFAULT_CONTENT_WIDTH };
    margin:0 auto;
`;

// ------------------------------------------------------------------------------------------------------------------

interface PageProps {
    layout?: string;
    header?: any;
    footer?: any;
    sidebarWidth?: string | number;
    headerHeight?: string | number;
    contentWidth?: string | number;
    className?: string;
    children?: any;
}

interface DefaultLayoutProps {
    header?: any;
    footer?: any;
    headerHeight?: string | number;
    contentWidth?: string | number;
    className?: string;
    children?: any;
}

interface SidebarLayoutProps {
    header?: any;
    footer?: any;
    sidebarWidth?: string | number;
    headerHeight?: string | number;
    contentWidth?: string | number;
    className?: string;
    children?: any;
}

interface FixedContentProps {
    contentWidth?: string | number;
}

// ------------------------------------------------------------------------------------------------------------------

const DefaultLayout = (props: DefaultLayoutProps): React.ReactElement<any> => (
    <div>
        {props.header && props.header}
        {props.children}
        {props.footer && props.footer}
    </div>
);

const SidebarLayout = (props: SidebarLayoutProps): React.ReactElement<any> => (
    <Grid
        columns={1}
        rows={`minmax(${props.headerHeight || DEFAULT_HEADER_HEIGHT},auto) 1fr`}
        height={"100vh"}
    >

        {props.header &&
            <Cell>
                {props.header}
            </Cell>
        }

        <Cell>
            <FixedContent contentWidth={props.contentWidth}>
                <Grid columns={`${props.sidebarWidth || DEFAULT_SIDEBAR_WIDTH} 1fr`}>
                    <CustomAdaptor maxWidth={StandardBreakpoints.sm.max}>
                        <Cell width={2}>{props.children}</Cell>
                    </CustomAdaptor>

                    <CustomAdaptor minWidth={StandardBreakpoints.md.min}>
                        <Cell>Menu</Cell>
                        <Cell>{props.children}</Cell>
                    </CustomAdaptor>
                </Grid>
            </FixedContent>
        </Cell>

        {props.footer &&
            <Cell>
                {props.footer}
            </Cell>
        }
    </Grid>
);

// ------------------------------------------------------------------------------------------------------------------

export const Page = (props: PageProps): React.ReactElement<any> => (
    <StyledPageElement>
        <NormalizeCSS />
        <GlobalCSS />

        {(() => {
            switch (props.layout) {
                case 'sidebar': return <SidebarLayout {...props} />;
                default: return <DefaultLayout {...props} />;
            }
        })()}

    </StyledPageElement>
);
