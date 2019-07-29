// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import classnames from 'classnames';
// COMPONENTS
import { Grid, Cell } from '../../Grid';
import { NormalizeCSS } from '../../theme/GlobalStyles';

// Constants
// ------------------------------------------------------------------------------------------------------------------
export const DEFAULT_HEADER_HEIGHT = '1.5rem';
export const DEFAULT_FOOTER_HEIGHT = '20.375rem';

// Styled Components
// ------------------------------------------------------------------------------------------------------------------
const StyledPage = styled('main')`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-width: 100%;
    width: 100vw;
`;

// Interfaces
// ------------------------------------------------------------------------------------------------------------------
interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The header of the website. This can be a component. */
    header?: any;
    /** The footer of the website. This can be a component. */
    footer?: any;
    /** The height of the header. It will not hide on overflow. */
    headerHeight?: string;
    /** The height of the footer. It will not hide on overflow. */
    footerHeight?: string;
    /** Additional classname. */
    className?: string;
    children?: any;
}

// Components
// ------------------------------------------------------------------------------------------------------------------
export const Page: React.FunctionComponent<PageProps> = ({
    header,
    footer,
    headerHeight = DEFAULT_HEADER_HEIGHT,
    footerHeight = DEFAULT_FOOTER_HEIGHT,
    className,
    children,
    ...props
}: PageProps): React.ReactElement<PageProps> => (
    <StyledPage className={classnames('anchor-page', className)} {...props}>
        <NormalizeCSS />
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
