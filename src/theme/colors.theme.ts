// VENDOR
import { transparentize } from 'polished';

export type Color =
    | 'grayscale'
    | 'purple'
    | 'blue'
    | 'green'
    | 'yellow'
    | 'red';

const colors = {
    grayscale: {
        100: '#000000',
        200: '#323232',
        300: '#595959',
        400: '#808080',
        500: '#A6A6A6',
        600: '#D3D3D3',
        700: '#E7E7E7',
        800: '#F1F1F1',
        900: '#FAFAFA',
    },
    purple: {
        base: '#602D6C',
        light: '#91609C',
        dark: '#4B2354',
    },
    blue: {
        base: '#0998D6',
        light: '#66CCFF',
        dark: '#0074A6',
    },
    green: {
        base: '#14A382',
        light: '#00CDAD',
        dark: '#268068',
    },
    yellow: {
        base: '#F5A623',
        light: '#FFC761',
        dark: '#CC861D',
    },
    red: {
        base: '#EA4545',
        light: '#F16667',
        dark: '#CC3B3B',
    },
};

type ColorHue = { light: string; base: string; dark: string };

export interface ColorsThemeSchema {
    primary: ColorHue;
    secondary: ColorHue;
    accent: ColorHue;

    borders: {
        base: string;
        light: string;
        dark: string;
        error: string;
        success: string;
        info: string;
        warning: string;
    };

    text: {
        base: string;
        light: string;
        label: string;
        link: {
            base: string;
            hover: string;
            focus: string;
            visited: string;
        };
        disabled: string;
        placeholder: string;
    };

    background: {
        base: string;
        light: string;
        content: string;
        error: string;
        success: string;
        info: string;
        warning: string;
    };

    error: string;
    success: string;
    info: string;
    warning: string;
}

export const ColorsTheme: ColorsThemeSchema = {
    primary: colors.purple,
    secondary: colors.green,
    accent: colors.blue,
    borders: {
        // PRAGMATIC
        light: colors.grayscale[700],
        base: colors.grayscale[600],
        dark: colors.grayscale[400],
        // SEMANTIC
        error: transparentize(0.4, colors.red.dark),
        success: transparentize(0.4, colors.green.base),
        info: transparentize(0.4, colors.blue.light),
        warning: transparentize(0.4, colors.yellow.light),
    },
    text: {
        // PRAGMATIC
        base: colors.grayscale[200],
        light: colors.grayscale[300],
        // SEMANTIC
        link: {
            base: colors.blue.dark,
            hover: colors.blue.dark,
            focus: colors.blue.dark,
            visited: colors.blue.dark,
        },
        disabled: colors.grayscale[600],
        placeholder: colors.grayscale[400],
        label: colors.grayscale[400],
    },
    background: {
        // PRAGMATIC
        base: colors.grayscale[800],
        light: colors.grayscale[900],
        content: 'white',
        // SEMANTIC
        error: transparentize(0.75, colors.red.dark),
        success: transparentize(0.75, colors.green.base),
        info: transparentize(0.75, colors.blue.light),
        warning: transparentize(0.75, colors.yellow.light),
    },
    error: colors.red.dark,
    success: colors.green.base,
    info: colors.blue.light,
    warning: colors.yellow.light,
};
