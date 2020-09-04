import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <path
            d="M4.366 3.14a1.267 1.267 0 0 1-1.259 1.127H1.333A.733.733 0 0 0 .6 5v8.667c0 .405.328.733.733.733h13.334a.733.733 0 0 0 .733-.733V5a.733.733 0 0 0-.733-.733h-1.774a1.267 1.267 0 0 1-1.259-1.127l-.099-.888a.733.733 0 0 0-.728-.652H5.193a.733.733 0 0 0-.728.652l-.1.888z"
            stroke="currentColor"
            strokeWidth="1.2"
        />
        <path
            d="M10.133 9A2.137 2.137 0 0 0 8 6.867 2.137 2.137 0 0 0 5.867 9c0 1.175.958 2.133 2.133 2.133A2.137 2.137 0 0 0 10.133 9zm1.2 0A3.337 3.337 0 0 1 8 12.333 3.337 3.337 0 0 1 4.667 9 3.337 3.337 0 0 1 8 5.667 3.337 3.337 0 0 1 11.333 9z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </g>
);

export const Camera = iconHOC(svgPath, 'camera');
