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
            <g fill={color} fillRule="nonzero">
                <path d="M8 14.333A6.333 6.333 0 1 0 8 1.667a6.333 6.333 0 0 0 0 12.666zm0 1A7.333 7.333 0 1 1 8 .667a7.333 7.333 0 0 1 0 14.666z" />
                <path d="M5.25 14.8a7.359 7.359 0 0 1-3.313-2.673c.306-1.504 1.579-2.665 3.173-2.888.223.335.505.632.837.877.595.44 1.306.684 2.053.684.729 0 1.424-.23 2.01-.649.353-.252.651-.563.885-.916 1.583.214 2.86 1.383 3.168 2.892A7.359 7.359 0 0 1 10.75 14.8H5.249z" />
                <path d="M8 4.667a2.667 2.667 0 0 0-2.667 2.667c0 .88.432 1.654 1.09 2.139C6.864 9.8 7.406 10 8 10a2.65 2.65 0 0 0 1.546-.5 2.66 2.66 0 0 0 1.12-2.166A2.667 2.667 0 0 0 8 4.667z" />
            </g>
        </g>
    </svg>
);
