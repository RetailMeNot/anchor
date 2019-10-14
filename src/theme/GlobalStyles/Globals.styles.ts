// VENDOR
import { createGlobalStyle } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

export const GlobalCSS = createGlobalStyle`
  html,
  body {
    font-family: base;
    color: text.base;
    font-size: ${th('typography.fontSize')};
    letter-spacing: 0;
    line-height: 1.357142857rem;
  }
`;
