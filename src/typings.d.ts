declare module '*.md' {
    const value: string;
    export default value;
}

declare module '@xstyled/styled-components' {
    import {
        StyledInterface,
        ThemedCssFunction,
        DefaultTheme,
    } from 'styled-components';

    export {
        FlattenSimpleInterpolation,
        createGlobalStyle,
    } from 'styled-components';

    export const ThemeProvider: any;
    export const css: ThemedCssFunction<DefaultTheme>;

    const styled: StyledInterface;
    export default styled;
}

declare module '@xstyled/system' {
    export const variant: <T extends {}>({
        key,
        default: defaultValue,
        variants,
        prop,
    }: {
        key?: string;
        default: string | number;
        variants?: {
            [key: string]: T;
            [key: number]: T;
        };
        prop?: string;
    }) => (props: any) => any;

    export const breakpoints: any;
    export const th: any;
    export const margin: any;
}
