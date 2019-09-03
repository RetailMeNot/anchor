declare module '*.svg';

declare module '@mdx-js/tag' {
  export function MDXProvider(props: any): any;
}

declare module '@reach/component-component' {
  const Component: any;
}
declare module '@retailmenot/anchor' {
  const AutoComplete: any;
  const Badge: any;
  const Cart: any;
  const Col: any;
  const colors: any;
  const Collapse: any;
  const CollapseGroup: any;
  const DropDown: any;
  const Input: any;
  const ModalProvider: any;
  const Row: any;
  const Search: any;
  const sizes: any;
  const RootTheme: any;
  const ThemeProvider: any;
  const Typography: any;
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
