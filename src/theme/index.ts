// Theme Files
import { typography } from './typography.theme';
import { ColorsTheme } from './colors.theme';
import { ThemeProvider as XstyledThemeProvider } from '@xstyled/styled-components';

import { BUTTON_KEY, BUTTON_THEME } from '../Button';
import { INPUT_KEY, INPUT_THEME } from '../Form/Input/utils';

export const RootTheme = {
    typography,
    radii: { none: '0', base: '4px', modal: '8px', circular: '1000px' },
    [BUTTON_KEY]: BUTTON_THEME,
    [INPUT_KEY]: INPUT_THEME,
    colors: ColorsTheme,
    fonts: {
        base:
            'Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Roboto, sans-serif',
        mono: `'SFMono-Regular', Consolas, Liberation Mono, Menlo, Courier, monospace`,
    },
    breakpoints: {
        sm: 767,
        xs: 575,
        md: 991,
        lg: 1199,
        xl: 1599,
    },
    // todo: we should likely remove the color.borders colors and just use this
    // or find a way to reference the colors.border colors here
    // e.g. `thin solid borders.base`
    borders: {
        light: `thin solid ${ColorsTheme.borders.light}`,
        base: `thin solid ${ColorsTheme.borders.base}`,
        dark: `thin solid ${ColorsTheme.borders.dark}`,
    },

    skeleton: {
        colorStart: '#E7E7E7',
        colorEnd: '#D3D3D3',
    },
};

// Exporting out @xstyled's ThemeProvider. Only way I could get it to work w/o issues.
export class ThemeProvider extends XstyledThemeProvider {}
