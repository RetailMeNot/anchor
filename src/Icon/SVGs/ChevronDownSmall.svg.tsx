// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', height = 4, width = 8 }: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M10 8H-2V-4h12z" />
            <path
                d="M4 2.276L6.173.424a.64.64 0 0 1 .88.001l.011.01c.25.24.25.634-.01.882L4.44 3.575a.637.637 0 0 1-.87.008L.938 1.308A.602.602 0 0 1 .937.436l.012-.01a.637.637 0 0 1 .87-.011L4 2.275z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
