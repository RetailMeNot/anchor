// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 16,
    height = 16,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                id="icon-ellipses-vertical"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use
                fill={color}
                xlinkHref="#icon-ellipses-vertical"
                transform="rotate(90 3.5 5.5)"
            />
        </g>
    </svg>
);
