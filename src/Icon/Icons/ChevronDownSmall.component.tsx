import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <path
        d="M8 8.276l2.172-1.852a.64.64 0 0 1 .88.001l.011.01c.25.24.25.634-.01.882L8.44 9.575a.637.637 0 0 1-.87.008L4.938 7.308a.602.602 0 0 1-.001-.872l.012-.01a.637.637 0 0 1 .87-.011L8 8.275z"
        fill="currentColor"
        fillRule="nonzero"
    />
);

export const ChevronDownSmall = iconHOC(svgPath, 'chevron-down-small');
