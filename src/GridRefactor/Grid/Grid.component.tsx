// VENDOR
import * as React from 'react';
import { Grid as AGrid } from 'styled-css-grid';
import styled, { css } from '@xstyled/styled-components';
import { debounce } from 'ts-debounce';
// COMPONENTS & UTILS
import { FLOW, WidthContext } from '../utils';

const DEBOUNCE_DELAY = 100;

type Flow = keyof typeof FLOW;

interface GridProps {
    children?: any;
    columns?: number;
    debug?: boolean;
    flow?: Flow;
    gap?: string;
}

const StyledGrid = styled(AGrid)<GridProps>`
    ${({ debug }) =>
        debug
            ? css`
                  background-color: rgba(255, 0, 0, 0.4);
              `
            : null}
`;

export const Grid = ({
    children,
    columns = 12,
    debug = false,
    flow = FLOW.row,
    gap = '0.5rem',
    ...props
}: GridProps) => {
    const [innerWidth, setInnerWidth] = React.useState<number>(
        window ? window.innerWidth : 0
    );
    const hasWindow = window && window.innerWidth;

    React.useEffect(() => {
        const handleResize = debounce(() => {
            setInnerWidth(hasWindow ? window.innerWidth : 0);
        }, DEBOUNCE_DELAY);

        if (hasWindow) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledGrid
            className="anchor-grid"
            columns={columns}
            debug={debug}
            flow={flow}
            gap={gap}
            {...props}
        >
            <WidthContext.Provider value={innerWidth}>
                {children}
            </WidthContext.Provider>
        </StyledGrid>
    );
};
