// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 14 10"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-1-3h16v16H-1z" />
            <g
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.333"
            >
                <path d="M1 .667h12M1 4.667h12M1 8.667h12" />
            </g>
        </g>
    </svg>
);
