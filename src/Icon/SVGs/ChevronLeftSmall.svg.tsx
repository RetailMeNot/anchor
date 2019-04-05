// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 4 8"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-4 10H8V-2H-4z" />
            <path
                d="M3.575 1.828a.64.64 0 0 0 0-.88l-.011-.01a.604.604 0 0 0-.881.009L.425 3.56a.637.637 0 0 0-.009.87l2.275 2.633c.24.25.634.25.872 0l.012-.012a.637.637 0 0 0 .01-.869L1.724 4l1.851-2.172z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
