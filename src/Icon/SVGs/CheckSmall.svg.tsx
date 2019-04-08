// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 8 10"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-1-2h12v12H-1z" />
            <path
                d="M8.966 2.454l-4.364 4.5a.965.965 0 0 1-.693.296.97.97 0 0 1-.694-.297l-2.182-2.25a1.017 1.017 0 0 1 0-1.408.961.961 0 0 1 1.387 0L3.91 4.83l3.67-3.785a.963.963 0 0 1 1.387 0c.379.39.379 1.02 0 1.41l-.179-.175.18.174z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
