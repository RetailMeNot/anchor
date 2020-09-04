import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M2 2h12v12H2z" />
        <path
            d="M8 7.724L5.827 9.576a.64.64 0 0 1-.88-.001l-.011-.01a.604.604 0 0 1 .01-.882L7.56 6.425a.637.637 0 0 1 .87-.008l2.632 2.275c.25.239.25.633.001.872l-.012.01a.637.637 0 0 1-.87.011L8 7.725z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </g>
);

export const ChevronUpSmall = iconHOC(svgPath, 'chevron-up-small');
