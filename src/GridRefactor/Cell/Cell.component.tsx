// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { Cell as ACell } from 'styled-css-grid';
// COMPONENTS & UTILS
import {
    createResponsiveObject,
    getResponsiveValue,
    WidthContext,
} from '../utils';

type Breakpoints = {
    [key: string]: number;
};

interface CellProps {
    area?: string;
    center?: boolean;
    children?: any;
    debug?: boolean;
    height?: number;
    left?: number | Breakpoints | undefined;
    middle?: boolean;
    top?: number;
    width?: number | Breakpoints;
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
    const innerWidth = React.useContext(WidthContext);
    const [columns, setColumns] = React.useState<number | Breakpoints>(width);
    const [columnsLeft, setColumnsLeft] = React.useState<number | Breakpoints | undefined>(left);

    React.useEffect(() => {
        setColumns(
            typeof width === 'number' ? width : createResponsiveObject(width)
        );

        setColumnsLeft(
            (typeof left === 'number' || left === undefined)  ? left : createResponsiveObject(left)
        );
    }, []);

    const responsiveWidth =
        typeof width === 'number'
            ? width
            : getResponsiveValue(columns, innerWidth);

    const responsiveLeft =
        (typeof columnsLeft === 'number' || columnsLeft === undefined)
            ? columnsLeft
            : getResponsiveValue(columnsLeft, innerWidth);

    return responsiveWidth > 0 ? (
        <StyledCell
            {...props}
            className="anchor-cell"
            center={center}
            debug={debug}
            height={height}
            left={responsiveLeft}
            middle={middle}
            top={top}
            width={responsiveWidth}
        >
            {children}
        </StyledCell>
    ) : null;
};
