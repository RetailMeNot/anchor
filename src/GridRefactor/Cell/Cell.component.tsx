// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { Cell as ACell } from 'styled-css-grid';
import classNames from 'classnames';
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
    className?: string;
    debug?: boolean;
    height?: number | BreakpointType | undefined;
    left?: number | BreakpointType | undefined;
    middle?: boolean;
    top?: number | BreakpointType | undefined;
    width?: number | BreakpointType | undefined;
}

const StyledCell = styled(ACell)<CellProps>`
    &.hide {
        display: none;
    }

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
    className,
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
    const [state, setState] =  React.useState<CellProps>({
        height,
        left,
        top,
        width,
    });

    /*
        Iterates over the props in cellState and formats any responsive object. It does nothing to
        a prop that is a number or undefined.
    */
    React.useEffect(() => {
        const obj: CellProps = {};

        Object.keys(state).forEach(key => {
            obj[key] =  typeof state[key] === 'number' || state[key] === undefined
                ? state[key]
                : createResponsiveObject(state[key], breakpoints);
        });

        setState(obj);
    }, []);

    // I hate having these 4 blobs of code, but I haven't been able to find a better way to handle
    // updating the responsive values quickly. Setting them via state always causes TS errors
    // because there's a delay.
    const responsiveWidth =
        typeof state.width === 'number'  || state.width === undefined
            ? state.width
            : getResponsiveValue(state.width, innerWidth, breakpoints);

    const responsiveLeft =
        typeof state.left === 'number' || state.left === undefined
            ? state.left
            : getResponsiveValue(state.left, innerWidth, breakpoints);

    const responsiveHeight =
        typeof state.height === 'number' || state.height === undefined
            ? state.height
            : getResponsiveValue(state.height, innerWidth, breakpoints);

    const responsiveTop =
        typeof state.top === 'number' || state.top === undefined
            ? state.top
            : getResponsiveValue(state.top, innerWidth, breakpoints);

    return (
        <StyledCell
            {...props}
            className={classNames("anchor-cell", className, responsiveWidth === 0 && 'hide')}
            center={center}
            debug={contextDebug || debug}
            height={responsiveHeight}
            left={responsiveLeft}
            middle={middle}
            top={responsiveTop}
            width={responsiveWidth}
        >
            {children}
        </StyledCell>
    );
};
