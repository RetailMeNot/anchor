declare module '*.svg';

declare module '@mdx-js/tag' {
    export function MDXProvider(props: any): any;
}

declare module '@reach/component-component' {
    const Component: any;
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
    export const breakpoints: any;
    export const th: any;

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

    export const compose: any;

    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/styled-system/index.d.ts
    import * as CSS from 'csstype';

    export type TLengthStyledSystem = string | 0 | number;
    export type ResponsiveValue<T> = T | { [key: string]: T };

    export interface SpaceProps<TLength = TLengthStyledSystem> {
        m?: ResponsiveValue<CSS.MarginProperty<TLength>>;
        margin?: ResponsiveValue<CSS.MarginProperty<TLength>>;
        mt?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
        marginTop?: ResponsiveValue<CSS.MarginTopProperty<TLength>>;
        mr?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
        marginRight?: ResponsiveValue<CSS.MarginRightProperty<TLength>>;
        mb?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
        marginBottom?: ResponsiveValue<CSS.MarginBottomProperty<TLength>>;
        ml?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
        marginLeft?: ResponsiveValue<CSS.MarginLeftProperty<TLength>>;
        mx?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
        my?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
        p?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
        padding?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
        pt?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
        paddingTop?: ResponsiveValue<CSS.PaddingTopProperty<TLength>>;
        pr?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
        paddingRight?: ResponsiveValue<CSS.PaddingRightProperty<TLength>>;
        pb?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
        paddingBottom?: ResponsiveValue<CSS.PaddingBottomProperty<TLength>>;
        pl?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
        paddingLeft?: ResponsiveValue<CSS.PaddingLeftProperty<TLength>>;
        px?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
        py?: ResponsiveValue<CSS.PaddingProperty<TLength>>;
    }

    export interface MarginProps
        extends Pick<
            SpaceProps,
            | 'm'
            | 'margin'
            | 'mt'
            | 'marginTop'
            | 'mb'
            | 'marginBottom'
            | 'ml'
            | 'marginLeft'
            | 'mr'
            | 'marginRight'
            | 'my'
            | 'mx'
        > {}
    export interface PaddingProps
        extends Pick<
            SpaceProps,
            | 'p'
            | 'padding'
            | 'pt'
            | 'paddingTop'
            | 'pb'
            | 'paddingBottom'
            | 'pl'
            | 'paddingLeft'
            | 'pr'
            | 'paddingRight'
            | 'py'
            | 'px'
        > {}

    export interface ColorProps {
        color?: ResponsiveValue<CSS.ColorProperty>;
    }
    export interface BackgroundColorProps<TLength = TLengthStyledSystem> {
        backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
    }

    export interface StyleFn {
        (...args: any[]): any;
        propTypes?: string[];
    }

    export const color: StyleFn;
    export const backgroundColor: StyleFn;

    export const space: StyleFn;
    export const margin: StyleFn;
    export const padding: StyleFn;
}

declare module 'react-awesome-styled-grid' {
    interface ConfigKeys {
        breakpoints: object;
        columns: object;
        container: object;
        gutterWidth: object;
        media: object;
        mediaQuery: string;
        paddingWidth: object;
    }

    export function config(props: object): ConfigKeys;
}
