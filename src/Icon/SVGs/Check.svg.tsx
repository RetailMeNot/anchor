// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 10 14"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-1-3h16v16H-1z" />
            <path
                d="M13.627 2.133l-7.637 7.5a1.282 1.282 0 0 1-1.8 0L.372 5.882a1.235 1.235 0 0 1 0-1.768 1.288 1.288 0 0 1 1.799 0L5.09 6.982 11.828.365a1.291 1.291 0 0 1 1.8 0c.496.488.496 1.28 0 1.768"
                fill={color}
            />
        </g>
    </svg>
);
