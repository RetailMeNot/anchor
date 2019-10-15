import React from 'react';
import { ScreenClass } from '@retailmenot/anchor';
import { BreakpointsType } from './';

export function AddBreakpoints(Component: any) {
    return class EnhancedWithBreakpoints extends React.Component {
        render() {
            return (
                <ScreenClass
                    render={(breakpoint: BreakpointsType) => (
                        <Component breakpoint={breakpoint} {...this.props} />
                    )}
                />
            );
        }
    };
}

/*
    This helper function applies CSS based on passed breakpoints. It was designed to apply the same
    css to multiple breakpoints, the most common use-case being for xs and sm. The function itself
    returns a tagged template literal which concatenates CSS. Example:

    const StyledApiTable = styled('section')<StyledApiTableProps>`
        ${({ breakpoint }) => responsiveCSS(breakpoint, [
            breakpoints.xs,
            breakpoints.sm,
        ])`
            overflow-x: scroll;
            white-space: nowrap;
        `}
    `;
*/
export function responsiveCSS(
    breakpoint: BreakpointsType | undefined,
    breakpoints: BreakpointsType[] | string
) {
    const inBreakpoint =
        typeof breakpoints === 'string'
            ? breakpoint === breakpoints
            : breakpoint
            ? breakpoints.includes(breakpoint)
            : false;

    if (inBreakpoint) {
        return (strings: TemplateStringsArray, ...values: []) => {
            return strings.reduce((acc: string, str: string, i: number) => {
                return acc + str + (values[i] || '');
            }, '');
        };
    }

    // TODO: Typescript gives an error if values are passed and inBreakpoint is false.
    // It's crying that the function is being overloaded, but I haven't found a solid
    // way to make it happy.
    return () => null;
}
