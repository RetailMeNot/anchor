// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 8 4"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-2-4h12V8H-2z" />
            <path
                d="M4 1.724L1.827 3.576a.64.64 0 0 1-.88-.001l-.011-.01a.604.604 0 0 1 .01-.882L3.56.425a.637.637 0 0 1 .87-.008l2.632 2.275c.25.239.25.633.001.872l-.012.01a.637.637 0 0 1-.87.011L4 1.725z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
