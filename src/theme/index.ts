// Theme Files
import { typography } from './typography.theme';
import { ColorsTheme } from './colors.theme';

import { BUTTON_KEY, BUTTON_THEME } from '../Button';
import { SKELETON_KEY, SKELETON_THEME } from '../Skeleton';
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
    // These are all minimums
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1600,
    },
    // todo: we should likely remove the color.borders colors and just use this
    // or find a way to reference the colors.border colors here
    // e.g. `thin solid borders.base`
    borders: {
        light: `thin solid ${ColorsTheme.borders.light}`,
        base: `thin solid ${ColorsTheme.borders.base}`,
        dark: `thin solid ${ColorsTheme.borders.dark}`,
    },

    [SKELETON_KEY]: SKELETON_THEME,
};
