import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.333"
        >
            <path d="M2 3.667h12M2 7.667h12M2 11.667h12" />
        </g>
    </g>
);

export const ListIcon = iconHOC(svgPath, 'list');
