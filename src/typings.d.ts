declare module '*.md' {
    const content: string;
    export = content;
}

declare module '@xstyled/*' {
    const styled: any;
}
