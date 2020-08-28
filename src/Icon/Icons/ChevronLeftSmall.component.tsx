import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M2 14h12V2H2z" />
        <path
            d="M9.575 5.828a.64.64 0 0 0 0-.88l-.011-.01a.604.604 0 0 0-.881.009L6.425 7.56a.637.637 0 0 0-.009.87l2.275 2.633c.24.25.634.25.872 0l.012-.012a.637.637 0 0 0 .01-.869L7.724 8l1.851-2.172z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </g>
);

export const ChevronLeftSmall = iconHOC(svgPath, 'chevron-left-small');
