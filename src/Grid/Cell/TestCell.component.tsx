import * as React from 'react';
import styled, { css } from "@xstyled/styled-components";
import { breakpoints } from '@xstyled/system';
import { BreakpointType } from '../utils';

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
    finalObj?: any;
}

const StyledCell = styled.div<CellProps>`
    height: 100%;
    min-width: 0;
    ${({ finalObj }) => breakpoints(finalObj)}
    ${({ center }) => center && `text-align: center`};
    ${({ area }) => area && `grid-area: ${area}`};
    ${({ middle }) => middle && css`
        display: inline-flex;
        flex-flow: column wrap;
        justify-content: center;
        justify-self: stretch;
    `}
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
    const generateGridCss = (key: string, responsiveSettings: undefined | number | BreakpointType) => {
        if (typeof responsiveSettings !== 'object') {
            return responsiveSettings;
        } else if (typeof responsiveSettings === 'number') {
            return [{ xs: responsiveSettings }]
        }
        const returnObj: any = [];
        const ops = {
            width: (w: any) => `grid-column-end: span ${w};`,
            height: (h: any) => `grid-row-end: span ${h};`,
            left: (l: any) => `grid-column-start: ${l};`,
            top: (t: any) => `grid-row-start: ${t};`,
        };

        Object.keys(responsiveSettings).forEach(breakpoint => {
            returnObj.push({ [breakpoint]: ops[key](responsiveSettings[breakpoint])});
        });

        return returnObj;
    };

    const allOptions = [].concat(
        generateGridCss('width', width),
        generateGridCss('left', left),
        generateGridCss('top', top),
        generateGridCss('height', height)
    );
    const finalObj = {};

    allOptions.forEach((opt: any) => {
        if (opt !== undefined) {
            const optKey = Object.keys(opt)[0];
            const optVal = Object.values(opt)[0];

            if (finalObj[optKey]) {
                finalObj[optKey] += optVal;
            } else {
                finalObj[optKey] = optVal;
            }
        }
    });
    Object.keys(finalObj).map(o => {
        finalObj[o] = css`${finalObj[o]}`;
    });
    console.log(finalObj);

    return(<StyledCell {...props} finalObj={finalObj}>{children}</StyledCell>);
}
