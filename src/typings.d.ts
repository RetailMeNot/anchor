declare module '*.md' {
    const value: string;
    export default value;
}

declare module '@xstyled/styled-components' {
    import {
        ThemedCssFunction,
        DefaultTheme,
        StyledInterface,
    } from 'styled-components';
    export {
        StyledInterface,
        ThemedCssFunction,
        DefaultTheme,
        FlattenSimpleInterpolation,
        createGlobalStyle,
        FlattenInterpolation,
        ThemeProps,
        ThemeContext,
    } from 'styled-components';

    export const ThemeProvider: any;
    export const css: ThemedCssFunction<DefaultTheme>;
    export const withTheme: any;

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
        default?: string | number;
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

    export interface TypographyProps<TLength = TLengthStyledSystem> {
        fontFamily?: ResponsiveValue<CSS.FontFamilyProperty>;
        fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>>;
        lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>>;
        fontWeight?: ResponsiveValue<CSS.FontWeightProperty>;
        textAlign?: ResponsiveValue<CSS.TextAlignProperty>;
        letterSpacing?: ResponsiveValue<CSS.LetterSpacingProperty<TLength>>;
        color?: ResponsiveValue<CSS.ColorProperty>;
        textTransform?: ResponsiveValue<CSS.TextTransformProperty>;
    }

    export interface LayoutProps<TLength = TLengthStyledSystem> {
        display?: ResponsiveValue<CSS.DisplayProperty>;
        width?: ResponsiveValue<CSS.WidthProperty<TLength>>;
        height?: ResponsiveValue<CSS.HeightProperty<TLength>>;
        maxWidth?: ResponsiveValue<CSS.MaxWidthProperty<TLength>>;
        maxHeight?: ResponsiveValue<CSS.MaxHeightProperty<TLength>>;
        minWidth?: ResponsiveValue<CSS.MinWidthProperty<TLength>>;
        minHeight?: ResponsiveValue<CSS.MinHeightProperty<TLength>>;
        verticalAlign?: ResponsiveValue<CSS.VerticalAlignProperty<TLength>>;
        size?: ResponsiveValue<CSS.HeightProperty<TLength>>;
    }

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

    export interface DisplayProps extends Pick<LayoutProps, 'display'> {}
    export interface WidthProps extends Pick<LayoutProps, 'width'> {}
    export interface MaxWidthProps extends Pick<LayoutProps, 'maxWidth'> {}
    export interface MinWidthProps extends Pick<LayoutProps, 'minWidth'> {}
    export interface HeightProps extends Pick<LayoutProps, 'height'> {}
    export interface MaxHeightProps extends Pick<LayoutProps, 'maxHeight'> {}
    export interface MinHeightProps extends Pick<LayoutProps, 'minHeight'> {}
    export interface VerticalAlignProps
        extends Pick<LayoutProps, 'verticalAlign'> {}

    export interface FontFamilyProps
        extends Pick<TypographyProps, 'fontFamily'> {}
    export interface FontSizeProps extends Pick<TypographyProps, 'fontSize'> {}
    export interface LineHeightProps
        extends Pick<TypographyProps, 'lineHeight'> {}
    export interface FontWeightProps
        extends Pick<TypographyProps, 'fontWeight'> {}
    export interface TextAlignProps
        extends Pick<TypographyProps, 'textAlign'> {}
    export interface LetterSpacingProps
        extends Pick<TypographyProps, 'letterSpacing'> {}
    export interface TextTransformProps
        extends Pick<TypographyProps, 'textTransform'> {}
    export interface ColorProps extends Pick<TypographyProps, 'color'> {}

    export interface BackgroundColorProps<TLength = TLengthStyledSystem> {
        backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
    }

    export interface StyleFn {
        (...args: any[]): any;
        propTypes?: string[];
    }

    export const fontFamily: StyleFn;
    export const fontSize: StyleFn;
    export const lineHeight: StyleFn;
    export const fontWeight: StyleFn;
    export const textAlign: StyleFn;
    export const letterSpacing: StyleFn;
    export const textTransform: StyleFn;
    export const color: StyleFn;

    export const backgroundColor: StyleFn;

    export const space: StyleFn;
    export const margin: StyleFn;
    export const padding: StyleFn;
    export const width: StyleFn;
    export const minWidth: StyleFn;
    export const maxWidth: StyleFn;
    export const height: StyleFn;
    export const minHeight: StyleFn;
    export const maxHeight: StyleFn;
    export const display: StyleFn;
    export const verticalAlign: StyleFn;
}
