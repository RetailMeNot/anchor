/* ================================================ @rebass/grid ================================================ */
type FlexGlobals = 'inherit' | 'initial' | 'unset';
type FlexProperty = 'flex-end' | 'flex-start' | 'center' | FlexGlobals;
type FlexDirectionProperty = 'row' | 'row-reverse' | 'column' | 'column-reverse' | FlexGlobals;
type FlexWrapProperty = 'nowrap' | 'wrap-reverse' | 'wrap' | FlexGlobals;
type AlignItemsProperty = 'stretch' | 'center' | 'start' | 'end' | FlexGlobals;
type MarginValue = string | number | string[] | number[];
type PaddingValue = string | number | string[] | number[];

declare module '@rebass/grid' {
  interface BoxProps {
    width?: number | string | number[] | string[];
    order?: number | string | number[] | string[];
    flex?: string | string[]; // According to the docs numbers don't work here ¯\_(ツ)_/¯
    className?: string;
    fontSize?: number | number[];

    alignSelf?: string | string[];
    alignItems?: AlignItemsProperty | AlignItemsProperty[];
    justifyContent?: FlexProperty | FlexProperty[];
    flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
    flexWrap?: FlexWrapProperty | FlexWrapProperty[];

    bg?: string;

    // Margins
    m?: MarginValue;
    mt?: MarginValue;
    mr?: MarginValue;
    mb?: MarginValue;
    ml?: MarginValue;
    mx?: MarginValue;
    my?: MarginValue;

    // Padding
    p?: PaddingValue;
    pt?: PaddingValue;
    pr?: PaddingValue;
    pb?: PaddingValue;
    pl?: PaddingValue;
    px?: PaddingValue;
    py?: PaddingValue;

    css?: any;

    as?: string;
  }

  interface FlexProps extends BoxProps {
    alignItems?: AlignItemsProperty | AlignItemsProperty[];
    justifyContent?: FlexProperty | FlexProperty[];
    flexDirection?: FlexDirectionProperty | FlexDirectionProperty[];
    flexWrap?: FlexWrapProperty | FlexWrapProperty[];
  }

  export function Flex(props: FlexProps): any;
  export function Box(props: BoxProps): any;

  // export function Color(props: any): any;

  export function ThemeProvider(props: { theme: { space?: any[]; breakpoints?: any[] } }): any;
}
/* ============================================================================================================== */
