/*
    All of the logic here does NOT assume that the breakpoints in the RootTheme are specifically set
    as xs, sm, md, lg, xl.
*/

import { createContext } from 'react';

export type BreakpointType = {
    [key: string]: number;
};

interface GridContextProps {
    innerWidth: number;
    debug: boolean;
    breakpoints: BreakpointType[];
}

// Creates the context used by both Grid and Cell for tracking the window's inner width
export const GridContext = createContext<GridContextProps>({
    innerWidth: 0,
    debug: false,
    breakpoints: [],
});

export enum FLOW {
    column = 'column',
    row = 'row',
}

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
    Takes a passed responsiveSettings object and fills in the gaps based on the breakpoints passed
    via sortedBreakpoints. This function is mobile first, so setting a smaller breakpoint's value
    will use that same value for larger breakpoints.

    const obj = { xs: 1, md: 3, lg: 8 };
    createResponsiveObject(obj); // { xs: 1, sm: 1, md: 3, lg: 8, xl: 8}
*/
export function createResponsiveObject(
    responsiveSettings: object,
    sortedBreakpoints: BreakpointType[]
) {
    let lastValid = Object.keys(sortedBreakpoints)[0];

    return sortedBreakpoints.reduce((acc: object, next: BreakpointType) => {
        const key = Object.keys(next)[0];

        if (typeof responsiveSettings[key] === 'number') {
            acc[key] = responsiveSettings[key];
            lastValid = key;
        } else {
            acc[key] =
                typeof responsiveSettings[lastValid] === 'number'
                    ? responsiveSettings[lastValid]
                    : 1;
        }

        return acc;
    }, {});
}

/*
    Using the passed responsiveSettings, determines what responsive value should be returned for
    the current breakpoint. Ex:

    const settings = { xs: 1, sm: 3, md: 6 }
    const innerWidth = 800;
    const sortedBreakpoints = [{ xs: 500, sm: 750, md: 1000 }];
    getResponsiveValue(settings, innerWidth, sortedBreakpoints); // 3
*/
export function getResponsiveValue(
    responsiveSettings: object | number,
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
    const breakpointKey =
        typeof breakpoint === 'object' ? Object.keys(breakpoint)[0] : '';

    return responsiveSettings[breakpointKey];
}
