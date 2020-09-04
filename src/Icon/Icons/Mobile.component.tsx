import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path
                d="M7.974 12a1 1 0 1 0 .052 2 1 1 0 0 0-.052-2m3.359 2.667H4.666a.333.333 0 0 1-.333-.333v-3h7.333v3a.333.333 0 0 1-.333.333zm-7-13c0-.184.149-.333.333-.333h6.667c.184 0 .333.149.333.333v1H4.333v-1zm0 8.333h7.333V4H4.333v6zm7-10H4.666C3.748 0 3 .748 3 1.667v12.667C3 15.253 3.748 16 4.666 16h6.667c.919 0 1.667-.747 1.667-1.666V1.667A1.67 1.67 0 0 0 11.333 0z"
                id="mobile-a"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill="currentColor" xlinkHref="#mobile-a" />
        </g>
    </>
);

export const Mobile = iconHOC(svgPath, 'mobile');
