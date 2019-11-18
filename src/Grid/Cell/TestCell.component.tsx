import * as React from 'react';
import styled, { css } from "@xstyled/styled-components";
import { breakpoints } from '@xstyled/system';
import { BreakpointType, debugColor, generateBreakpointCSS, GridContext, middleCSS } from '../utils';
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
    responsiveCSS?: BreakpointType[];
    top?: number | BreakpointType | undefined;
    width?: number | BreakpointType | undefined;
}

const StyledCell = styled.div<CellProps>`
    height: 100%;
    min-width: 0;

    ${({responsiveCSS}) => {
        return responsiveCSS && responsiveCSS.map((k: BreakpointType) => {
            return breakpoints(k);
        });
    }}

    ${({ left }) => left && `grid-column-start: ${left}`};
    ${({ width }) => width && `grid-column-end: span ${width}`};
    ${({ top }) => top && `grid-row-start: ${top}`};
    ${({ height }) => height && `grid-row-end: span ${height}`};

    ${({ center }) => center && `text-align: center`};
    ${({ area }) => area && `grid-area: ${area}`};
    ${({ middle, width }) => middle && width && middleCSS}
    ${({ debug }) => debug && css({
        backgroundColor: debugColor,
    })};
`;

export const TestCell = ({
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
    const { debug: contextDebug } = React.useContext(GridContext);
    const { breakpoints: sortedBreakpoints } = React.useContext(ResponsiveContext);
    const { sortedResponsiveCSS, generalSettings } = generateBreakpointCSS({
        left,
        height,
        top,
        width,
    }, sortedBreakpoints, middle);
    return(
        <StyledCell
            center={center}
            middle={middle}
            debug={contextDebug || debug}
            responsiveCSS={sortedResponsiveCSS}
            left={generalSettings.left || undefined}
            height={generalSettings.height || undefined}
            top={generalSettings.top || undefined}
            width={generalSettings.width || undefined}
        >
            {children}
        </StyledCell>);
};
