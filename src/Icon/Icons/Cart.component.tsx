import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g fill="currentColor" fillRule="nonzero">
            <path d="M6.889 14.667a1.111 1.111 0 1 1 0-2.223 1.111 1.111 0 0 1 0 2.223zM11.331 14.667a1.111 1.111 0 1 1 0-2.223 1.111 1.111 0 0 1 0 2.223zM4.216 2.681h9.71a.874.874 0 0 1 .853 1.064L13.626 8.93a.874.874 0 0 1-.854.685h-7.49l.187 1.215h7.346a.504.504 0 1 1 0 1.007H5.037a.504.504 0 0 1-.498-.427L3.123 2.207h-1.42a.504.504 0 1 1 0-1.007h1.853c.248 0 .46.181.497.427l.163 1.054zm.913 5.926h7.537l1.093-4.918H4.372l.757 4.918z" />
        </g>
    </g>
);

export const Cart = iconHOC(svgPath, 'cart');
