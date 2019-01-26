// VENDOR
import { createGlobalStyle, css } from 'styled-components';
// THEME
import { colors, fonts } from '..';

const headingRules = (hLevel: string): string => `
  ${hLevel} {
    font-weight: ${fonts.heading[`${hLevel}`].fontWeight};
    line-height: ${fonts.heading[`${hLevel}`].lineHeight};
    font-size: ${fonts.heading[`${hLevel}`].fontSize};
  }
`;

const typography = css`
  ${[...Object.keys(fonts.heading)].map(headingRules)}

  p {
    font-family: ${fonts.fontFamily};
    font-size: ${fonts.paragraph.base.fontSize};
    line-height: ${fonts.paragraph.base.lineHeight};
    font-weight: ${fonts.paragraph.base.fontWeight};
  }

  a {
    text-decoration: none;
    color: ${colors.accent.savvyCyan.dark};
  }
`;

export const GlobalCSS = createGlobalStyle`
  html {
    color: ${colors.neutrals.charcoal.base};
    font-size: ${fonts.baseFontSize}px;
    letter-spacing: 0;
    line-height: 1.357142857rem;
  }

  body {
    font-family: Avenir Next, Segoe UI, Helvetica, Roboto, sans-serif;
    height: 100vh;
  }

  ${typography}
`;
