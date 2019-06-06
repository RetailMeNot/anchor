// When re-exporting an interface its type must be explicitly defined
import { Color } from './colors.theme';
export type Color = Color;

export { colors } from './colors.theme';
export { fonts } from './fonts.theme';
export { sizes } from './sizes.theme';
export { variables } from './variables.theme';

export { NormalizeCSS, GlobalCSS } from './GlobalStyles';
