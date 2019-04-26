// VENDOR
import { createGlobalStyle, css } from 'styled-components';
// THEME
import { fonts } from '../fonts.theme';
import { colors } from '../colors.theme';

const typography = css`
    a {
        text-decoration: none;
        color: ${colors.savvyCyan.dark};
    }
`;

export const GlobalCSS = createGlobalStyle`
  html,
  body {
    font-family: ${fonts.fontFamily};
    color: ${colors.charcoal.base};
    font-size: ${fonts.baseFontSize}px;
    letter-spacing: 0;
    line-height: 1.357142857rem;
  }
  ${typography}
`;
