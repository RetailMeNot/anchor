// VENDOR
import * as React from 'react';
import { Grid as AGrid, Cell as ACell } from "styled-css-grid";
import styled, { css } from '@xstyled/styled-components';
import { columnsToRender, getColumnValue } from './utils';
// import { RootTheme } from '../theme';

// const BREAKPOINTS = ['xs', 'sm', 'md', 'lg', 'xl'];

export enum FLOW {
    column = 'column',
    row = 'row',
}

type Flow = keyof typeof FLOW;

interface GridProps {
    children?: any;
    columns?: number;
    debug?: boolean;
    flow?: Flow;
    gap?: string;
}

interface CellProps {
    children?: any;
    debug?: boolean;
    left?: number;
    height?: number;
    top?: number;
    width?: any;
}

const StyledCell = styled(ACell)<CellProps>`
    ${({debug}) => debug ? css`
        background-color: rgba(255,0,0,0.4);
    ` : null}
`;

const StyledGrid = styled(AGrid)<GridProps>`
    ${({debug}) => debug ? css`
        background-color: rgba(255,0,0,0.4);
    ` : null}
`;

const WidthContext = React.createContext(0);
const WidthProvider = WidthContext.Provider;

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
            <WidthProvider value={innerWidth}>
                {children}
            </WidthProvider>
        </StyledGrid>
    );
};

export const Cell = ({
    children,
    debug = false,
    height = 1,
    left,
    top,
    width = 1,
    ...props
}: CellProps) => {
    const innerWidth = React.useContext(WidthContext);
    const [columns, setColumns] = React.useState<number | object>(width);

    React.useEffect(() => {
        setColumns(typeof width === 'number' ? width : columnsToRender(width));
    }, []);

    const adjustedWidth = getColumnValue(columns, innerWidth);
    console.log(adjustedWidth);
    return (
        <StyledCell
            {...props}
            className="anchor-cell"
            debug={debug}
            height={height}
            left={left}
            top={top}
            width={adjustedWidth}
        >
            {children}
        </StyledCell>
    );
};
