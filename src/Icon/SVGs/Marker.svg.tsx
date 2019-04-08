// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 12 16"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M8 0C4.691 0 2 2.692 2 6c0 4.913 5.334 9.636 5.562 9.835a.664.664 0 0 0 .877 0C8.666 15.636 14 10.913 14 6c0-3.308-2.691-6-6-6m0 4c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2"
                id="icon-marker"
            />
        </defs>
        <g transform="translate(-2)" fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-marker" />
        </g>
    </svg>
);
