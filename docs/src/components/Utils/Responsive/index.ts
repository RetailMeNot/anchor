export { AddBreakpoints, responsiveCSS } from './AddBreakpoints.component';

export enum breakpoints {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
}
export type BreakpointsType = keyof typeof breakpoints;
