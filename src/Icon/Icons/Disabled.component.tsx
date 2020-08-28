import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path
                d="M8 13.667a5.633 5.633 0 0 1-3.503-1.222l7.948-7.948A5.633 5.633 0 0 1 13.667 8 5.674 5.674 0 0 1 8 13.667M2.333 8A5.674 5.674 0 0 1 8 2.333c1.322 0 2.537.459 3.503 1.222l-7.948 7.948A5.633 5.633 0 0 1 2.333 8M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1"
                id="disabled-a"
            />
        </defs>

        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill="currentColor" xlinkHref="#disabled-a" />
        </g>
    </>
);

export const Disabled = iconHOC(svgPath, 'disabled');
