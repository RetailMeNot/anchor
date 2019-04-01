// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
// COMPONENTS
import { NormalizeCSS } from '../../theme/GlobalStyles';
import { CustomAdaptor, StandardBreakpoints } from '../../Grid/Adaptor';

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

// const StyledBodyElement = styled.section`
//     flex: 1 0 auto;
//     background-color: ${colors.silver.base};
//     max-width: 100vw;
//     align-self: stretch;
//     padding: ${sizes.padding.lg} ${sizes.padding.xl};
// `;

interface PageProps {
    layout?: string;
    header?: any;
    footer?: any;
    sidebarWidth?: string | number;
    headerHeight?: string | number;
    className?: string;
    children?: any;
}

// ------------------------------------------------------------------------------------------------------------------

interface DefaultLayoutProps {
    header?: any;
    footer?: any;
    headerHeight?: string | number;
    className?: string;
    children?: any;
}

const DefaultLayout = (props: DefaultLayoutProps): React.ReactElement<any> => (
    <div>
        {props.header && props.header}
        {props.children}
        {props.footer && props.footer}
    </div>
);

// ------------------------------------------------------------------------------------------------------------------

interface SidebarLayoutProps {
    header?: any;
    footer?: any;
    sidebarWidth?: string | number;
    headerHeight?: string | number;
    className?: string;
    children?: any;
}

const SidebarLayout = (props: SidebarLayoutProps): React.ReactElement<any> => (
    <Grid
        columns={props.sidebarWidth ? `${props.sidebarWidth} 1fr` : "13.75rem 1fr"}
        rows={props.headerHeight ? `minmax(${props.headerHeight},auto) 1fr` : "minmax(7.5rem,auto) 1fr"}
        height={"100vh"}
    >

        {props.header &&
            <Cell width={2}>
                {props.header}
            </Cell>
        }

        <CustomAdaptor maxWidth={StandardBreakpoints.sm.max}>
            <Cell width={2}>{props.children}</Cell>
        </CustomAdaptor>

        <CustomAdaptor minWidth={StandardBreakpoints.md.min}>
            <Cell>Menu</Cell>
            <Cell>{props.children}</Cell>
        </CustomAdaptor>

        {props.footer &&
            <Cell width={2}>
                {props.footer}
            </Cell>
        }
    </Grid>
);

// ------------------------------------------------------------------------------------------------------------------

export const Page = (props: PageProps): React.ReactElement<any> => (
    <StyledPageElement>
        <NormalizeCSS />

        {(() => {
            switch (props.layout) {
                case 'sidebar': return <SidebarLayout {...props} />;
                default: return <DefaultLayout {...props} />;
            }
        })()}

    </StyledPageElement>
);
