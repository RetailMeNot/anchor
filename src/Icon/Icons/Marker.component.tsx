import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path
                d="M8 0C4.691 0 2 2.692 2 6c0 4.913 5.334 9.636 5.562 9.835a.664.664 0 0 0 .877 0C8.666 15.636 14 10.913 14 6c0-3.308-2.691-6-6-6m0 4c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2"
                id="marker-a"
            />
        </defs>

        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill="currentColor" xlinkHref="#marker-a" />
        </g>
    </>
);

export const Marker = iconHOC(svgPath, 'marker');
