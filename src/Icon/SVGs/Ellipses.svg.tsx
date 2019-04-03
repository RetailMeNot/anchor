// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 12,
    height = 3,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M3.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                id="icon-ellipses"
            />
        </defs>
        <g transform="translate(-2 -7)" fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-ellipses" />
        </g>
    </svg>
);
