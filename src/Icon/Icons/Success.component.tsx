import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0" id="success-a" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <use fill="currentColor" xlinkHref="#success-a" />
            <path
                d="M11.928 6.383l-4.364 4.363a.926.926 0 0 1-1.311 0L4.07 8.564a.928.928 0 0 1 1.311-1.311L6.91 8.779l3.709-3.708a.928.928 0 0 1 1.31 1.312l-.141-.142.141.142z"
                fill="#FFF"
                fillRule="nonzero"
            />
        </g>
    </>
);

export const Success = iconHOC(svgPath, 'success');
