import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M2 14h12V2H2z" />
        <path
            d="M8.276 8l-1.851 2.172a.64.64 0 0 0 0 .88l.011.01c.24.25.634.25.881-.009L9.575 8.44a.637.637 0 0 0 .009-.87L7.309 4.937a.602.602 0 0 0-.872 0l-.011.011a.637.637 0 0 0-.01.87L8.275 8z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </g>
);

export const ChevronRightSmall = iconHOC(svgPath, 'chevron-right-small');
