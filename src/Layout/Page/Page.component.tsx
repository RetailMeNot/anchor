// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import classnames from 'classnames';
// COMPONENTS
import { NormalizeCSS, GlobalCSS } from '../../theme/GlobalStyles';

// Constants
// ------------------------------------------------------------------------------------------------------------------
export const DEFAULT_HEADER_HEIGHT = '1.5rem';
export const DEFAULT_FOOTER_HEIGHT = '20.375rem';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledPage = styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
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

// Components
// ------------------------------------------------------------------------------------------------------------------
export const Page = ({
    header,
    footer,
    headerHeight = DEFAULT_HEADER_HEIGHT,
    footerHeight = DEFAULT_FOOTER_HEIGHT,
    className,
    children,
}: PageProps): React.ReactElement<any> => (
    <StyledPage className={classnames('anchor-page', className)}>
        <NormalizeCSS />
        <GlobalCSS />
        <Grid
            columns={1}
            rows={`minmax(${headerHeight},auto) 1fr minmax(${footerHeight},auto)`}
            height={'100vh'}
        >
            {header && <Cell>{header}</Cell>}

            <Cell>{children}</Cell>

            {footer && <Cell>{footer}</Cell>}
        </Grid>
    </StyledPage>
);

export default Page;
