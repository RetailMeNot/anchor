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
    const { breakpoints, innerWidth } = React.useContext(ResponsiveContext);
    const { debug: contextDebug } = React.useContext(GridContext);
    // const [state, setState] = React.useState<CellProps>({
    //     height,
    //     left,
    //     top,
    //     width,
    // });

    /*
        Iterates over the props in cellState and formats any responsive object. It does nothing to
        a prop that is a number or undefined.
    */
    // React.useLayoutEffect(() => {
    //     const obj: CellProps = {};

    //     Object.keys(state).forEach(key => {
    //         obj[key] = createResponsiveObject(state[key], breakpoints);
    //     });

    //     setState(obj);
    // }, []);

    // I hate having these 4 blobs of code, but I haven't been able to find a better way to handle
    // updating the responsive values quickly. Setting them via state always causes TS errors
    // because there's a delay.
    // const responsiveWidth = getResponsiveValue(state.width, innerWidth, breakpoints);

    // const responsiveLeft = getResponsiveValue(state.left, innerWidth, breakpoints);

    // const responsiveHeight = getResponsiveValue(state.height, innerWidth, breakpoints);

    // const responsiveTop = getResponsiveValue(state.top, innerWidth, breakpoints);

    const responsiveWidth = getResponsiveValue(
        createResponsiveObject(width, breakpoints),
        innerWidth,
        breakpoints
    );

    const responsiveLeft = getResponsiveValue(
        createResponsiveObject(left, breakpoints),
        innerWidth,
        breakpoints
    );

    const responsiveHeight = getResponsiveValue(
        createResponsiveObject(height, breakpoints),
        innerWidth,
        breakpoints
    );

    const responsiveTop = getResponsiveValue(
        createResponsiveObject(top, breakpoints),
        innerWidth,
        breakpoints
    );

    return (
        <StyledCell
            {...props}
            className={classNames(
                'anchor-cell',
                className,
                responsiveWidth === 0 && 'hide'
            )}
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
