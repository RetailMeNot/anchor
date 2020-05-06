declare module '*.md' {
    const value: string;
    export default value;
}

declare module '@xstyled/styled-components' {
    import {
        ThemedCssFunction,
        DefaultTheme,
        StyledInterface,
        CSSKeyframes,
        SimpleInterpolation,
        Keyframes,
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
    export const Box: any;
    export const useTheme: any;

    export const keyframes: (
        strings: TemplateStringsArray | CSSKeyframes,
        ...interpolations: SimpleInterpolation[]
    ) => Keyframes;

    export const up: (breakpoint: string, styles: any) => any;
    export const down: (breakpoint: string, styles: any) => any;

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

    export interface BordersProps<TLength = TLengthStyledSystem> {
        border?: ResponsiveValue<CSS.BorderProperty<TLength>>;
        borderColor?: ResponsiveValue<CSS.BorderColorProperty>;
        borderWidth?: ResponsiveValue<CSS.BorderWidthProperty<TLength>>;
        borderStyle?: ResponsiveValue<CSS.BorderStyleProperty>;
        borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
        borderTop?: ResponsiveValue<CSS.BorderTopProperty<TLength>>;
        borderTopColor?: ResponsiveValue<CSS.BorderTopColorProperty>;
        borderRight?: ResponsiveValue<CSS.BorderRightProperty<TLength>>;
        borderRightColor?: ResponsiveValue<CSS.BorderRightColorProperty>;
        borderLeft?: ResponsiveValue<CSS.BorderLeftProperty<TLength>>;
        borderLeftColor?: ResponsiveValue<CSS.BorderLeftColorProperty>;
        borderBottom?: ResponsiveValue<CSS.BorderBottomProperty<TLength>>;
        borderBottomColor?: ResponsiveValue<CSS.BorderBottomColorProperty>;
    }

    export interface FlexboxProps<TLength = TLengthStyledSystem> {
        display?: ResponsiveValue<CSS.DisplayProperty>;
        alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
        alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
        justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
        justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
        flexWrap?: ResponsiveValue<CSS.FlexWrapProperty>;
        flexBasis?: ResponsiveValue<CSS.FlexBasisProperty<TLength>>;
        flexDirection?: ResponsiveValue<CSS.FlexDirectionProperty>;
        flex?: ResponsiveValue<CSS.FlexProperty<TLength>>;
        justifySelf?: ResponsiveValue<CSS.JustifySelfProperty>;
        alignSelf?: ResponsiveValue<CSS.AlignSelfProperty>;
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

    export interface BorderProps extends Pick<BordersProps, 'border'> {}
    export interface BorderColorProps
        extends Pick<BordersProps, 'borderColor'> {}
    export interface BorderWidthProps
        extends Pick<BordersProps, 'borderWidth'> {}
    export interface BorderStyleProps
        extends Pick<BordersProps, 'borderStyle'> {}
    export interface BorderRadiusProps
        extends Pick<BordersProps, 'borderRadius'> {}
    export interface BorderTopProps extends Pick<BordersProps, 'borderTop'> {}
    export interface BorderTopColorProps
        extends Pick<BordersProps, 'borderTopColor'> {}
    export interface BorderRightProps
        extends Pick<BordersProps, 'borderRight'> {}
    export interface BorderRightColorProps
        extends Pick<BordersProps, 'borderRightColor'> {}
    export interface BorderLeftProps extends Pick<BordersProps, 'borderLeft'> {}
    export interface BorderLeftColorProps
        extends Pick<BordersProps, 'borderLeftColor'> {}
    export interface BorderBottomProps
        extends Pick<BordersProps, 'borderBottom'> {}
    export interface BorderBottomColorProps
        extends Pick<BordersProps, 'borderBottomColor'> {}

    export interface BackgroundColorProps<TLength = TLengthStyledSystem> {
        backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
    }

    export interface StyleFn {
        propTypes?: string[];
        (...args: any[]): any;
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

    export const flexboxes: StyleFn;

    export const space: StyleFn;
    export const layout: StyleFn;
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

    export const border: StyleFn;
    export const borderWidth: StyleFn;
    export const borderStyle: StyleFn;
    export const borderColor: StyleFn;
    export const borderRadius: StyleFn;
    export const borderTop: StyleFn;
    export const borderTopColor: StyleFn;
    export const borderRight: StyleFn;
    export const borderRightColor: StyleFn;
    export const borderLeft: StyleFn;
    export const borderLeftColor: StyleFn;
    export const borderBottom: StyleFn;
    export const borderBottomColor: StyleFn;
}
