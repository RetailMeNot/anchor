// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 16,
    height = 13,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M0-2h16v16H0z" />
            <g fill={color} fillRule="nonzero">
                <path d="M1 1v1h1V1H1zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM5.5 11h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1zM5.5 6h10a.5.5 0 1 1 0 1h-10a.5.5 0 0 1 0-1zM5.5 1h10a.5.5 0 1 1 0 1h-10a.5.5 0 0 1 0-1zM1 6v1h1V6H1zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM1 11v1h1v-1H1zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
            </g>
        </g>
    </svg>
);
