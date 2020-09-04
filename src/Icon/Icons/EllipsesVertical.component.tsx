import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path
                d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                id="ellipses-vertical-a"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use
                fill="currentColor"
                xlinkHref="#ellipses-vertical-a"
                transform="rotate(90 3.5 5.5)"
            />
        </g>
    </>
);

export const EllipsesVertical = iconHOC(svgPath, 'ellipses-vertical');
