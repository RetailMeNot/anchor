// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { Cell as ACell } from 'styled-css-grid';
// COMPONENTS & UTILS
import {
    BreakpointType,
    createResponsiveObject,
    getResponsiveValue,
    GridContext,
} from '../utils';

interface CellProps {
    area?: string;
    center?: boolean;
    children?: any;
    debug?: boolean;
    height?: number | BreakpointType | undefined;
    left?: number | BreakpointType | undefined;
    middle?: boolean;
    top?: number;
    width?: number | BreakpointType | undefined;
}

const StyledCell = styled(ACell)<CellProps>`
    ${({ debug }) =>
        debug
            ? css`
                  background-color: rgba(255, 0, 0, 0.4);
              `
            : null}
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
    const { breakpoints, debug: contextDebug, innerWidth } = React.useContext(
        GridContext
    );
    const [columns, setColumns] = React.useState<
        number | BreakpointType | undefined
    >(width);
    const [columnsLeft, setColumnsLeft] = React.useState<
        number | BreakpointType | undefined
    >(left);
    const [rowsHeight, setRowsHeight] = React.useState<
        number | BreakpointType | undefined
    >(height);

    React.useEffect(() => {
        setColumns(
            typeof width === 'number'  || width === undefined
                ? width
                : createResponsiveObject(width, breakpoints)
        );

        setColumnsLeft(
            typeof left === 'number' || left === undefined
                ? left
                : createResponsiveObject(left, breakpoints)
        );

        setRowsHeight(
            typeof height === 'number' || height === undefined
                ? height
                : createResponsiveObject(height, breakpoints)
        );
    }, []);

    const responsiveWidth =
        typeof columns === 'number'  || columns === undefined
            ? columns
            : getResponsiveValue(columns, innerWidth, breakpoints);

    const responsiveLeft =
        typeof columnsLeft === 'number' || columnsLeft === undefined
            ? columnsLeft
            : getResponsiveValue(columnsLeft, innerWidth, breakpoints);

    const responsiveHeight =
        typeof rowsHeight === 'number' || rowsHeight === undefined
            ? rowsHeight
            : getResponsiveValue(rowsHeight, innerWidth, breakpoints);

    return responsiveWidth > 0 ? (
        <StyledCell
            {...props}
            className="anchor-cell"
            center={center}
            debug={contextDebug || debug}
            height={responsiveHeight}
            left={responsiveLeft}
            middle={middle}
            top={top}
            width={responsiveWidth}
        >
            {children}
        </StyledCell>
    ) : null;
};
