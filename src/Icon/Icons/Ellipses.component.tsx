import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path
                d="M3.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                id="ellipsis-a"
            />
        </defs>

        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill="currentColor" xlinkHref="#ellipsis-a" />
        </g>
    </>
);

export const Ellipses = iconHOC(svgPath, 'ellipses');
