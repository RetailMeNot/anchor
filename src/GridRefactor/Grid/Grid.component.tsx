// VENDOR
import * as React from 'react';
import { Grid as AGrid } from "styled-css-grid";
import styled, { css } from '@xstyled/styled-components';
// COMPONENTS & UTILS
import { FLOW, WidthContext } from '../utils';

type Flow = keyof typeof FLOW;

interface GridProps {
    children?: any;
    columns?: number;
    debug?: boolean;
    flow?: Flow;
    gap?: string;
}

const StyledGrid = styled(AGrid)<GridProps>`
    ${({debug}) => debug ? css`
        background-color: rgba(255,0,0,0.4);
    ` : null}
`;

export const Grid = ({
    children,
    columns = 12,
    debug = false,
    flow = FLOW.row,
    gap = "0.5rem",
    ...props
}: GridProps) => {
    const [innerWidth, setInnerWidth] = React.useState<number>(window ? window.innerWidth : 0);
    const hasWindow = (window && window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => {
            setInnerWidth(hasWindow ? window.innerWidth : 0);
        };

        if (hasWindow) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledGrid
            columns={columns}
            {...props}
            className="anchor-grid"
            debug={debug}
            flow={flow}
            gap={gap}
        >
            <WidthContext.Provider value={innerWidth}>
                {children}
            </WidthContext.Provider>
        </StyledGrid>
    );
};
