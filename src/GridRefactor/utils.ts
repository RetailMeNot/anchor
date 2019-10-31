import { createContext } from 'react';
import { RootTheme } from '../theme';

const { breakpoints } = RootTheme;
const breakpointKeys = Object.keys(breakpoints);
const firstBreakpoint = breakpointKeys[0];
const lastBreakpoint = breakpointKeys[breakpointKeys.length - 1];

export function columnsToRender(obj: object) {
    let lastValid = firstBreakpoint;

    return breakpointKeys.reduce((acc, next) => {
        if (obj[next]) {
            acc[next] = obj[next];
            lastValid = next;
        } else {
            acc[next] = obj[lastValid] || 1;
        }
        return acc;
    }, {});
}

export function getColumnValue(columns: object | number, innerWidth: number) {
    // Using the breakpointKeys variable above causes a noticable re-render flicker
    const breakpoint = Object.keys(breakpoints).reverse().reduce((acc, next) => {
        return innerWidth <= breakpoints[acc] ? next : acc;
    }, lastBreakpoint);

    return columns[breakpoint];
}

export const WidthContext = createContext(0);

export enum FLOW {
    column = 'column',
    row = 'row',
}
