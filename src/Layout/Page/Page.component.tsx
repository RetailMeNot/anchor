// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import classnames from 'classnames';
// COMPONENTS
import { NormalizeCSS, GlobalCSS } from '../../theme/GlobalStyles';
import { CustomAdaptor, StandardBreakpoints } from '../../Grid/Adaptor';

// Constants
// ------------------------------------------------------------------------------------------------------------------
export const DEFAULT_LAYOUT_WIDTH = '100%';
export const DEFAULT_CONTENT_WIDTH = '71.25rem';
export const DEFAULT_SIDEBAR_WIDTH = '13.75rem';
export const TRANSPARENT = 'transparent';
const DEFAULT_HEADER_HEIGHT = '1.5rem';
const DEFAULT_FOOTER_HEIGHT = '20.375rem';
const RIGHT = 'right';

// Defaults
// ------------------------------------------------------------------------------------------------------------------
const PageDefaultProps = {
    headerHeight: DEFAULT_HEADER_HEIGHT,
    footerHeight: DEFAULT_FOOTER_HEIGHT,
};

const DefaultLayoutDefaultProps = {
    layoutWidth: DEFAULT_LAYOUT_WIDTH,
    contentWidth: DEFAULT_CONTENT_WIDTH,
    layoutBackgroundColor: TRANSPARENT,
    contentBackgroundColor: TRANSPARENT,
};

const SidebarLayoutDefaultProps = {
    sidebarWidth: DEFAULT_SIDEBAR_WIDTH,
    layoutWidth: DEFAULT_CONTENT_WIDTH,
    contentWidth: DEFAULT_CONTENT_WIDTH,
    layoutBackgroundColor: TRANSPARENT,
    contentBackgroundColor: TRANSPARENT,
};

// Types
// ------------------------------------------------------------------------------------------------------------------
type SidebarAlignment = 'left' | 'right';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledPage = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
`;

const StyledLayout = styled.section<StyledLayoutProps>`
    max-width: ${props => props.layoutWidth};
    background-color: ${props => props.layoutBackgroundColor};
    margin: 0 auto;
`;

const StyledContent = styled.div<StyledContentProps>`
    max-width: ${props => props.contentWidth};
    background-color: ${props => props.contentBackgroundColor};
    margin: 0 auto;
`;

// Interfaces
// ------------------------------------------------------------------------------------------------------------------
interface PageProps {
    /** The header of the website. This can be a component. */
    header?: any;
    /** The footer of the website. This can be a component. */
    footer?: any;
    /** The height of the header. It will not hide on overflow. */
    headerHeight?: string | number;
    /** The height of the footer. It will not hide on overflow. */
    footerHeight?: string | number;
    /** Additional classname. */
    className?: string;
    children?: any;
}

interface DefaultLayoutProps {
    /** The width of the layout, edge to edge. */
    layoutWidth?: string | number;
    /** The width of the content within the layout. */
    contentWidth?: string | number;
    /** The background color of the layout. Default is transparent. */
    layoutBackgroundColor?: string;
    /** The background color of the content within the layout area. Default is transparent. */
    contentBackgroundColor?: string;
    /** Additional classname. */
    className?: string;
    children?: any;
}

interface SidebarLayoutProps {
    /** The width of the layout, edge to edge. */
    layoutWidth?: string | number;
    /** The width of the content within the layout. */
    contentWidth?: string | number;
    /** The width of the area for the sidebar. */
    sidebarWidth?: string | number;
    /** If the sidebar is on the left or the right of the layout */
    sidebarAlign?: SidebarAlignment;
    /** The actual sidebar. This can be a component. */
    sidebar?: any;
    /** The background color of the layout. Default is transparent. */
    layoutBackgroundColor?: string;
    /** The background color of the content within the layout area. Default is transparent. */
    contentBackgroundColor?: string;
    /** Additional classname. */
    className?: string;
    children?: any;
}

interface StyledLayoutProps {
    layoutWidth?: string | number;
    layoutBackgroundColor?: string;
}

interface StyledContentProps {
    contentWidth?: string | number;
    contentBackgroundColor?: string;
}

// Components
// ------------------------------------------------------------------------------------------------------------------
export const Page = (props: PageProps): React.ReactElement<any> => (
    <StyledPage className={classnames('.anchor-page', props.className)}>
        <NormalizeCSS />
        <GlobalCSS />
        <Grid
            columns={1}
            rows={`minmax(${props.headerHeight},auto) 1fr minmax(${
                props.footerHeight
            },auto)`}
            height={'100vh'}
        >
            {props.header && <Cell>{props.header}</Cell>}

            <Cell>{props.children}</Cell>

            {props.footer && <Cell>{props.footer}</Cell>}
        </Grid>
    </StyledPage>
);

Page.defaultProps = PageDefaultProps;

export const DefaultLayout = (
    props: DefaultLayoutProps
): React.ReactElement<any> => (
    <StyledLayout
        layoutWidth={props.layoutWidth}
        layoutBackgroundColor={props.layoutBackgroundColor}
        className={classnames('.anchor-default-layout', props.className)}
    >
        <StyledContent
            contentWidth={props.contentWidth}
            contentBackgroundColor={props.contentBackgroundColor}
        >
            {props.children}
        </StyledContent>
    </StyledLayout>
);

DefaultLayout.defaultProps = DefaultLayoutDefaultProps;

export const SidebarLayout = (
    props: SidebarLayoutProps
): React.ReactElement<any> => (
    <StyledLayout
        layoutWidth={props.layoutWidth}
        layoutBackgroundColor={props.layoutBackgroundColor}
        className={classnames('.anchor-sidebar-layout', props.className)}
    >
        <StyledContent
            contentWidth={props.contentWidth}
            contentBackgroundColor={props.contentBackgroundColor}
        >
            {props.sidebarAlign === RIGHT ? (
                <Grid columns={`1fr ${props.sidebarWidth}`}>
                    <CustomAdaptor maxWidth={StandardBreakpoints.sm.max}>
                        <Cell width={2}>{props.children}</Cell>
                    </CustomAdaptor>

                    <CustomAdaptor minWidth={StandardBreakpoints.md.min}>
                        <Cell>{props.children}</Cell>
                        <Cell>{props.sidebar}</Cell>
                    </CustomAdaptor>
                </Grid>
            ) : (
                <Grid columns={`${props.sidebarWidth} 1fr `}>
                    <CustomAdaptor maxWidth={StandardBreakpoints.sm.max}>
                        <Cell width={2}>{props.children}</Cell>
                    </CustomAdaptor>

                    <CustomAdaptor minWidth={StandardBreakpoints.md.min}>
                        <Cell>{props.sidebar}</Cell>
                        <Cell>{props.children}</Cell>
                    </CustomAdaptor>
                </Grid>
            )}
        </StyledContent>
    </StyledLayout>
);

SidebarLayout.defaultProps = SidebarLayoutDefaultProps;
