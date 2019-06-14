declare module '*.md' {
    const value: string;
    export default value;
}

declare module '@xstyled/system' {
    const styled: any;
    const css: any;
    const breakpoints: any;
    const ThemeProvider: any;
    const variant: any;
    const th: any;
}

declare module '@xstyled/styled-components' {
    import {
        StyledInterface,
        ThemedCssFunction,
        DefaultTheme,
    } from 'styled-components';

    const ThemeProvider: any;
    export const css: ThemedCssFunction<DefaultTheme>;

    const styled: StyledInterface;
    export default styled;
}
