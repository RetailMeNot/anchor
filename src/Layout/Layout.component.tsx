// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import classnames from 'classnames';

// Constants
// ------------------------------------------------------------------------------------------------------------------
export const DEFAULT_LAYOUT_WIDTH = '100%';
export const DEFAULT_CONTENT_WIDTH = '71.25rem';
export const TRANSPARENT = 'transparent';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
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

StyledContent.displayName = 'StyledContent';
StyledLayout.displayName = 'StyledLayout';

// Interfaces
// ------------------------------------------------------------------------------------------------------------------
interface LayoutProps {
    /** The width of the layout, edge to edge. */
    layoutWidth?: string;
    /** The width of the content within the layout. */
    contentWidth?: string;
    /** The background color of the layout. Default is transparent. */
    layoutBackgroundColor?: string;
    /** The background color of the content within the layout area. Default is transparent. */
    contentBackgroundColor?: string;
    /** Additional classname. */
    className?: string;
    children?: any;
}

interface StyledLayoutProps {
    layoutWidth?: string;
    layoutBackgroundColor?: string;
}

interface StyledContentProps {
    contentWidth?: string;
    contentBackgroundColor?: string;
}

// Components
// ------------------------------------------------------------------------------------------------------------------
export const Layout = ({
    layoutWidth = DEFAULT_LAYOUT_WIDTH,
    layoutBackgroundColor = TRANSPARENT,
    contentWidth = DEFAULT_CONTENT_WIDTH,
    contentBackgroundColor = TRANSPARENT,
    className,
    children,
}: LayoutProps): React.ReactElement<any> => (
    <StyledLayout
        layoutWidth={layoutWidth}
        layoutBackgroundColor={layoutBackgroundColor}
        className={classnames('anchor-layout', className)}
    >
        <StyledContent
            contentWidth={contentWidth}
            contentBackgroundColor={contentBackgroundColor}
        >
            {children}
        </StyledContent>
    </StyledLayout>
);
