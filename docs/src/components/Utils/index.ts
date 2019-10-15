import { css } from '@xstyled/styled-components';

export { ApiTable } from './ApiTable';
export { ColorBlurb } from './ColorBlurb';
export { ComponentInfo } from './ComponentInfo';
export { FormatTypes } from './FormatTypes';
import { BreakpointsType } from './Responsive';
export { AddBreakpoints, breakpoints, responsiveCSS } from './Responsive';
export type BreakpointsType = BreakpointsType;

export { SiteLink } from './SiteLink';

export * from './constants';
export { getLink } from './getLink';
export { sections } from './sections';

// Defining this in one location so that it can be used both in the table styles for the pre tag,
// and for the StyledInlineCode component fed to MDX's custom Components.
export const InlineCodeStyle = css`
    display: inline;
    background-color: rgba(27, 31, 35, 0.05);
    font-family: mono;
    border-radius: base;
    padding: 0.2em 0.4em;
    font-size: 0.85rem;
`;
