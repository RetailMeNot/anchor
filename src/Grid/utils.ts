/*
    All of the logic here does NOT assume that the breakpoints in the RootTheme are specifically set
    as xs, sm, md, lg, xl.
*/

import { createContext } from 'react';

export type BreakpointType = {
    [key: string]: number;
};

export type GridSetting = undefined | number | BreakpointType;

export interface GridSettings {
    left?: GridSetting;
    height?: GridSetting;
    top?: GridSetting;
    width?: GridSetting;
}

interface GridContextProps {
    debug: boolean;
}

// Creates the context used by both Grid and Cell for enabling debug
export const GridContext = createContext<GridContextProps>({
    debug: false,
});

export enum FLOW {
    column = 'column',
    row = 'row',
}

export const debugColor = 'rgba(255, 0, 0, 0.4)';

/*
    Returns an array of objects sorted by their value, descending. Ex:

    const obj: { xs: 500: md: 800: sm: 650 };
    sortBreakpoints(obj); // [{xs: 500}, {sm: 650}, {md: 800}]
*/
export function sortBreakpoints(unsortedBreakpoints: object) {
    return Object.keys(unsortedBreakpoints)
        .reduce<BreakpointType[]>((acc: [BreakpointType], next: string) => {
            acc.push({ [next]: unsortedBreakpoints[next] });
            return acc;
        }, [])
        .sort(
            (a: BreakpointType, b: BreakpointType) =>
                Object.values(a)[0] - Object.values(b)[0]
        );
}

/*
    Returns the breakpoint key for the specified window's innerWidth. Ex:

    const innerWidth = 920;
    const sortedBreakpoints = [{ xs: 500, sm: 750, md: 1000 }];
    getBreakpointKey(innerWidth, sortedBreakpoints); // sm
 */
export function getBreakpointKey(
    innerWidth: number,
    sortedBreakpoints: BreakpointType[]
) {
    const breakpoint = sortedBreakpoints
        // Get only breakpoints that are above the window's width
        .filter(bp => {
            return innerWidth >= Object.values(bp)[0];
        })
        // Sort those breakpoints, putting the largest breakpoint first
        .sort(
            (a: BreakpointType, b: BreakpointType) =>
                Object.values(b)[0] - Object.values(a)[0]
        )
        // Get the largest breakpoint from the array
        .shift();

    // Gets the key based on the breakpoint (i.e. xs, sm, etc)
    return typeof breakpoint === 'object' ? Object.keys(breakpoint)[0] : '';
}

/*
    Small helper object for the generateBreakpointCSS() function to render the correct CSS for each
    grid setting.
*/
const ops = {
    // If width is 0, don't show the cell. If middle is true, add in the middle CSS.
    width: (width: any, middle: boolean) =>
        width > 0
            ? `grid-column-end: span ${width}; display: block;`
            : 'display: none;',
    height: (height: any) => `grid-row-end: span ${height};`,
    left: (left: any) => `grid-column-start: ${left};`,
    top: (top: any) => `grid-row-start: ${top};`,
};

/*
    Takes the gridSettings object and parses the data to generate sorted css breakpoints. It groups
    css properties based on the breakpoint size so that a single breakpoint declaration for 'xs' can
    have css for left, top, height & width if necessary.

    NOTE: This function uses older loop structures as they are tremendously more performant.
*/
export function generateBreakpointCSS(
    gridSettings: GridSettings,
    sortedBreakpoints: BreakpointType[]
) {
    const responsiveCSS = {};
    const sortedResponsiveCSS: BreakpointType[] = [];
    const generalSettings: GridSettings = {};

    for (const gridSettingKey in gridSettings) {
        // forin requires an 'if' guard
        if (gridSettings[gridSettingKey]) {
            const gridSettingValue = gridSettings[gridSettingKey];
            // Put non-responsive settings into the generalSettings object
            if (
                typeof gridSettingValue === 'number' ||
                typeof gridSettingValue === 'undefined'
            ) {
                generalSettings[gridSettingKey] = gridSettingValue;
            } else if (typeof gridSettingValue === 'object') {
                for (const breakpointKey in gridSettingValue) {
                    if (gridSettingValue[breakpointKey] >= 0) {
                        // 0 is a valid value, no truthiness
                        const responsiveValue = gridSettingValue[breakpointKey];

                        if (!responsiveCSS[breakpointKey]) {
                            responsiveCSS[breakpointKey] = '';
                        }
                        responsiveCSS[breakpointKey] += ops[gridSettingKey](
                            responsiveValue
                        );
                    }
                }
            }
        }
    }

    // eslint-disable-next-line: prefer-for-of
    for (let i = 0; i < sortedBreakpoints.length; i++) {
        for (const breakpointKey in sortedBreakpoints[i]) {
            if (responsiveCSS[breakpointKey] !== undefined) {
                sortedResponsiveCSS.push({
                    [breakpointKey]: responsiveCSS[breakpointKey],
                });
            }
        }
    }

    /*
    sortedResponsiveCSS is an array of breakpoint css associated to a breakpoint key, i.e.
    [
         {xs: 'grid-column-end: span 2; display: block; grid-row-end: span 3;'},
         {md: 'grid-column-end: span 10;'}
    ]

    generalSettings is the returned values which were not responsive objects, i.e.
    {
        left: 1,
        top: undefined,
        height: 1,
        width: 3
    }
    */
    return { sortedResponsiveCSS, generalSettings };
}
