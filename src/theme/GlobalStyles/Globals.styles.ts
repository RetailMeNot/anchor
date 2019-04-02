// VENDOR
import { createGlobalStyle, css } from 'styled-components';
// THEME
import fonts from '../fonts.theme';
import colors from '../colors.theme';

const headingRules = (hLevel: string): string => `
  ${hLevel} {
    font-weight: ${fonts.heading[`${hLevel}`].fontWeight};
    line-height: ${fonts.heading[`${hLevel}`].lineHeight};
    font-size: ${fonts.heading[`${hLevel}`].fontSize};
  }
`;

const typography = css`
    ${[...Object.keys(fonts.heading)].map(headingRules)} p {
        font-family: ${fonts.fontFamily};
        font-size: ${fonts.paragraph.base.fontSize};
        line-height: ${fonts.paragraph.base.lineHeight};
        font-weight: ${fonts.paragraph.base.fontWeight};
    }

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
    overflow-y: hidden;
    overflow-x: hidden;
    height: 100vh;
    background-color: #710a32;
  }
  ${typography}
`;
