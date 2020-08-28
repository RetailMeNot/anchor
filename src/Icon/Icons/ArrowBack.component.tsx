import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g fill="currentColor" fillRule="nonzero">
            <path d="M13.666 8.25H2.333a.585.585 0 0 1-.583-.583c0-.322.262-.584.583-.584h11.333a.584.584 0 0 1 0 1.167z" />
            <path d="M7.412 3.062a.25.25 0 0 1 0 .353L2.748 8.08a.587.587 0 0 1-.828 0 .587.587 0 0 1 0-.827l4.664-4.664a.585.585 0 0 1 .828.827.25.25 0 1 1 0-.353z" />
            <path d="M1.923 8.08a.586.586 0 0 1 0-.826.586.586 0 0 1 .827 0l4.665 4.665a.585.585 0 0 1-.826.827L1.922 8.081z" />
        </g>
    </g>
);

export const ArrowBack = iconHOC(svgPath, 'arrow-back');
