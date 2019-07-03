export type Color =
    | 'charcoal'
    | 'ash'
    | 'silver'
    | 'lavenderWhispers'
    | 'white'
    | 'grapePurchase'
    | 'savvyCyan'
    | 'tealBreaker'
    | 'dealEnvy'
    | 'flashPink'
    | 'cyberMango'
    | 'goldMine'
    | 'fireSale'
    | 'error'
    | 'success';

export const colors = {
    charcoal: {
        base: '#323232',
        light: '#595959',
        dark: '#000000',
    },
    ash: {
        base: '#A6A6A6',
        light: '#D3D3D3',
        dark: '#808080',
    },
    silver: {
        base: '#F1F1F1',
        light: '#FAFAFA',
        dark: '#E7E7E7',
    },
    lavenderWhispers: {
        base: '#F7F5FC',
        light: '#FBFAFF',
        dark: '#F1EEFA',
    },
    white: {
        base: '#FFFFFF',
        light: '#FFFFFF',
        dark: '#FFFFFF',
    },
    grapePurchase: {
        base: '#602D6C',
        light: '#91609C',
        dark: '#4B2354',
    },
    savvyCyan: {
        base: '#0998D6',
        light: '#66CCFF',
        dark: '#0074A6',
    },
    tealBreaker: {
        base: '#00CCCD',
        light: '#00E0D1',
        dark: '#00BDBD',
    },
    dealEnvy: {
        base: '#14A382',
        light: '#00CDAD',
        dark: '#268068',
    },
    flashPink: {
        base: '#DF206C',
        light: '#E665A1',
        dark: '#B81D5B',
    },
    cyberMango: {
        base: '#EB663D',
        light: '#FA9F5A',
        dark: '#C74E30',
    },
    goldMine: {
        base: '#F5A623',
        light: '#FFC761',
        dark: '#CC861D',
    },
    fireSale: {
        base: '#EA4545',
        light: '#F16667',
        dark: '#CC3B3B',
    },
    error: {
        base: '#CC3B3B',
        light: '#CC3B3B',
        dark: '#CC3B3B',
    },
    success: {
        base: '#268068',
        light: '#268068',
        dark: '#268068',
    },
};

type ColorHue = { light: string; base: string; dark: string };
type Neutrals = 'white' | 'ash' | 'silver' | 'charcoal';

export interface ColorsThemeSchema {
    primary: ColorHue;
    secondary: ColorHue;
    accent: ColorHue;
    neutrals: { [K in Neutrals]: ColorHue };

    borders: {
        base: string;
        light: string;
        dark: string;
        error: string;
        success: string;
    };

    text: {
        body: string;
        link: {
            base: string;
            hover: string;
            focus: string;
            visited: string;
        };
        disabled: string;
        placeholder: string;
    };

    error: string;
    success: string;
}

export const ColorsTheme: ColorsThemeSchema = {
    primary: colors.grapePurchase,
    accent: colors.savvyCyan,
    secondary: colors.dealEnvy,
    neutrals: {
        white: colors.white,
        ash: colors.ash,
        silver: colors.silver,
        charcoal: colors.charcoal,
    },
    borders: {
        // PRAGMATIC
        light: colors.silver.base,
        base: colors.ash.light,
        dark: colors.ash.dark,
        // SEMANTIC
        error: colors.ash.dark,
        success: colors.ash.dark,
    },
    text: {
        body: colors.charcoal.base,
        link: {
            base: colors.savvyCyan.dark,
            hover: colors.savvyCyan.dark,
            focus: colors.savvyCyan.dark,
            visited: colors.savvyCyan.dark,
        },
        disabled: colors.ash.light,
        placeholder: colors.ash.dark,
    },
    error: colors.fireSale.dark,
    success: colors.dealEnvy.dark,
};
