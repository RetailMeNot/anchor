// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 16"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0" id="icon-success" />
        </defs>
        <g fill="none" fillRule="evenodd">
            <use fill={color} xlinkHref="#icon-success" />
            <path
                d="M11.928 6.383l-4.364 4.363a.926.926 0 0 1-1.311 0L4.07 8.564a.928.928 0 0 1 1.311-1.311L6.91 8.779l3.709-3.708a.928.928 0 0 1 1.31 1.312l-.141-.142.141.142z"
                fill="white"
                fillRule="nonzero"
            />
        </g>
    </svg>
);
