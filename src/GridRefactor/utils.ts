import { createContext } from 'react';
import { RootTheme } from '../theme';

const { breakpoints } = RootTheme;

const createBreakpointObject = () => Object.keys(breakpoints).reduce((prev, next) => {
    prev[next] = 1;
    return prev;
}, {});

export function columnsToRender(obj: object) {
    const defaultObject = createBreakpointObject();
    let lastValid = Object.keys(defaultObject)[0];

    return Object.keys(defaultObject).reduce((acc, next) => {
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
    const test = Object.keys(breakpoints).reverse().reduce((acc, next) => {
        return innerWidth <= breakpoints[acc] ? next : acc;
    }, 'xl');

    return columns[test];
}

export const WidthContext = createContext(0);

export enum FLOW {
    column = 'column',
    row = 'row',
}
