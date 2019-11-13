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
import { ResponsiveContext } from '../ResponsiveProvider';

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

interface CellState {
    left?: any;
    top?: any;
    height?: any;
    width?: any;
    responsiveTop?: any;
    responsiveHeight?: any;
    responsiveWidth?: any;
    responsiveLeft?: any;
    ready: boolean;
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
    className,
    debug = false,
    height,
    left,
    middle,
    top,
    width = 1,
    ...props
}: CellProps) => {
    const { breakpoints, innerWidth } = React.useContext(ResponsiveContext);
    const { debug: contextDebug } = React.useContext(GridContext);
    const [state, setState] = React.useState<CellState>({
        height: createResponsiveObject(height, breakpoints),
        left: createResponsiveObject(left, breakpoints),
        top: createResponsiveObject(top, breakpoints),
        width: createResponsiveObject(width, breakpoints),
        responsiveHeight: false,
        responsiveLeft: false,
        responsiveTop: false,
        responsiveWidth: false,
        ready: false,
    });

    React.useEffect(() => {
        setState({
            ...state,
            responsiveHeight: getResponsiveValue(
                state.height,
                innerWidth,
                breakpoints
            ),
            responsiveLeft: getResponsiveValue(
                state.left,
                innerWidth,
                breakpoints
            ),
            responsiveTop: getResponsiveValue(
                state.top,
                innerWidth,
                breakpoints
            ),
            responsiveWidth: getResponsiveValue(
                state.width,
                innerWidth,
                breakpoints
            ),
            ready: true,
        });
    }, [innerWidth]);

    // Without the ready check, there can be a brief blip where the user will see the wrong
    // breakpoint on page load. Additionally, a responsiveWidth of 0 means don't show the Cell.
    return state.ready && state.responsiveWidth !== 0 ? (
        <StyledCell
            {...props}
            className={classNames('anchor-cell', className)}
            center={center}
            debug={contextDebug || debug}
            height={state.responsiveHeight}
            left={state.responsiveLeft}
            middle={middle}
            top={state.responsiveTop}
            width={state.responsiveWidth}
        >
            {children}
        </StyledCell>
    ) : null;
};
