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
    const [cellState, setCellState] =  React.useState<CellProps>({
        width,
        left,
        height,
    });

    React.useEffect(() => {
        const obj = {};

        Object.keys(cellState).forEach(key => {
            obj[key] =  typeof cellState[key] === 'number' || cellState[key] === undefined
                ? cellState[key]
                : createResponsiveObject(cellState[key], breakpoints);
        });

        setCellState(obj);
    }, []);

    const responsiveWidth =
        typeof cellState.width === 'number'  || cellState.width === undefined
            ? cellState.width
            : getResponsiveValue(cellState.width, innerWidth, breakpoints);

    const responsiveLeft =
        typeof cellState.left === 'number' || cellState.left === undefined
            ? cellState.left
            : getResponsiveValue(cellState.left, innerWidth, breakpoints);

    const responsiveHeight =
        typeof cellState.height === 'number' || cellState.height === undefined
            ? cellState.height
            : getResponsiveValue(cellState.height, innerWidth, breakpoints);

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
