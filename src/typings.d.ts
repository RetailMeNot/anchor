declare module '*.md' {
    const content: string;
    export = content;
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
    const ThemeProvider: any;
    const css: any;
}
