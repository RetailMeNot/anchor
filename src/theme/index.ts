// Theme Files
import { typography } from './typography.theme';
import { ColorsTheme } from './colors.theme';
import { ThemeProvider as XstyledThemeProvider } from '@xstyled/styled-components';
import { fonts } from './fonts.theme';
// TODO: ============================================================ move all of these v consts to a different location

// When re-exporting an interface its type must be explicitly defined
import { Color } from './colors.theme';
export type Color = Color;

export { variables } from './variables.theme';
export { colors } from './colors.theme';
export { fonts } from './fonts.theme';
// I'm sorry internet, but this works.
import { sizes as Sizes } from './sizes.theme';
export const sizes = Sizes;

// TODO: ============================================================ move all of these ^ consts to a different location

import { BUTTON_KEY, BUTTON_THEME } from '../Button';
import { INPUT_KEY, INPUT_THEME } from '../Form/Input/utils';

export const RootTheme = {
    typography,
    radii: { none: '0', base: '4px', modal: '8px', circular: '1000px' },
    [BUTTON_KEY]: BUTTON_THEME,
    [INPUT_KEY]: INPUT_THEME,
    colors: ColorsTheme,
    fonts: {
        base: fonts.fontFamily,
        mono: `'SFMono-Regular', Consolas, Liberation Mono, Menlo, Courier, monospace`,
    },
    breakpoints: {
        xs: 0,
    },
    // todo: we should likely remove the color.borders colors and just use this
    // or find a way to reference the colors.border colors here
    // e.g. `thin solid borders.base`
    borders: {
        light: `thin solid ${ColorsTheme.borders.light}`,
        base: `thin solid ${ColorsTheme.borders.base}`,
        dark: `thin solid ${ColorsTheme.borders.dark}`,
    },
};

// Exporting out @xstyled's ThemeProvider. Only way I could get it to work w/o issues.
export class ThemeProvider extends XstyledThemeProvider {}
