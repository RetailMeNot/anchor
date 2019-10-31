// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { Cell as ACell } from "styled-css-grid";
// COMPONENTS & UTILS
import { columnsToRender, getColumnValue, WidthContext } from '../utils';

type Breakpoints  = {
    [key: string]: number;
}

interface CellProps {
    center?: boolean;
    children?: any;
    debug?: boolean;
    height?: number;
    left?: number;
    middle?: boolean;
    top?: number;
    width?: number | Breakpoints;
}

const StyledCell = styled(ACell)<CellProps>`
    ${({debug}) => debug ? css`
        background-color: rgba(255,0,0,0.4);
    ` : null}
`;

export const Cell = ({
    center,
    children,
    debug = false,
    height,
    left,
    middle,
    top,
    width = 1,
    ...props
}: CellProps) => {
    const innerWidth = React.useContext(WidthContext);
    const [columns, setColumns] = React.useState<number | object>(width);

    React.useEffect(() => {
        setColumns(typeof width === 'number' ? width : columnsToRender(width));
    }, []);

    const adjustedWidth = typeof width === 'number' ? width : getColumnValue(columns, innerWidth);
    console.log(adjustedWidth);
    return (
        <StyledCell
            {...props}
            className="anchor-cell"
            center={center}
            debug={debug}
            height={height}
            left={left}
            middle={middle}
            top={top}
            width={adjustedWidth}
        >
            {children}
        </StyledCell>
    );
};