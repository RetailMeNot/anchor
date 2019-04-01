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
    >
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <path
                d="M4.398 15.508a1.15 1.15 0 0 1-1.646-1.196l.577-3.996L.673 7.33a1.15 1.15 0 0 1 .676-1.9l3.754-.603 1.865-3.789a1.15 1.15 0 0 1 2.064 0l1.865 3.789 3.754.603a1.15 1.15 0 0 1 .676 1.9l-2.653 2.982.623 3.987a1.15 1.15 0 0 1-1.638 1.212l-3.657-1.776-3.604 1.773z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
