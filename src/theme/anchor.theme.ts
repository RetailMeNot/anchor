// ANCHOR THEME
import { radii } from './sizes.theme';
import { MODAL_THEME_KEY, MODAL_THEME } from '../Modal';

// Copied from Adapter.StandardBreakpoints mins
// todo: dedup- they should use a single source
const breakpoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};

interface AnchorTheme {
    colors?: any;
    breakpoints?: any;
    radii?: any;
    [key: string]: any;
}

export const anchorTheme: AnchorTheme = {
    breakpoints,
    radii,
    [MODAL_THEME_KEY]: MODAL_THEME,
};
