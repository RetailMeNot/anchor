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
                d="M2.276 4L.425 6.172a.64.64 0 0 0 0 .88l.011.01c.24.25.634.25.881-.009L3.575 4.44a.637.637 0 0 0 .009-.87L1.309.937a.602.602 0 0 0-.872 0L.426.947a.637.637 0 0 0-.01.87L2.275 4z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
