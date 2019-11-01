/*
    All of the logic here does NOT assume that the breakpoints in the RootTheme are specifically set
    as xs, sm, md, lg, xl. However it does assume that the order of the breakpoints is descending.
*/

import { createContext } from 'react';
import { RootTheme } from '../theme';

const { breakpoints } = RootTheme;
const breakpointKeys = Object.keys(breakpoints);
const firstBreakpoint = breakpointKeys[0];
const lastBreakpoint = breakpointKeys[breakpointKeys.length - 1];

/*
    Using a passed object, creates a full object with all breakpoints getting a value. Ex:

    const obj = { xs: 1, md: 3, lg: 8 };
    createResponsiveObject(obj); // { xs: 1, sm: 1, md: 3, lg: 8, xl: 8}

    This function is mobile first, so setting a smaller breakpoint's value will use that same value
    for larger breakpoints.
*/
export function createResponsiveObject(obj: object) {
    let lastValid = firstBreakpoint;

    // Walks through the keys in the breakpoints and sees if there is a corresponding key declared in
    // the passed object. If so, it adds it to a return object. If not, it tries to use the value
    // from the previous key. If THAT fails, it defaults to 1.
    return breakpointKeys.reduce((acc, next) => {
        if (typeof obj[next] === 'number') {
            acc[next] = obj[next];
            lastValid = next;
        } else {
            acc[next] = typeof obj[lastValid] === 'number' ? obj[lastValid] : 1;
        }
        return acc;
    }, {});
}

/*
    Using the passed object, determines what responsive value should be returned based on the
    window's innerWidth by using the values assigned to breakpoints.
*/
export function getResponsiveValue(obj: object | number, innerWidth: number) {
    // Using the breakpointKeys variable above causes a noticable re-render flicker
    const breakpoint = Object.keys(breakpoints)
        .reverse()
        .reduce((acc, next) => {
            return innerWidth <= breakpoints[acc] ? next : acc;
        }, lastBreakpoint);

    return obj[breakpoint];
}

// Creates the context used by both Grid and Cell for tracking the window's inner width
export const GridContext = createContext({
    innerWidth: 0,
    debug: false,
});

export enum FLOW {
    column = 'column',
    row = 'row',
}
