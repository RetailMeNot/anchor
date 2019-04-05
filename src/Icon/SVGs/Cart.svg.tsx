// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 14 14"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-1-1h16v16H-1z" />
            <g fill={color} fillRule="nonzero">
                <path d="M5.889 12.976a.42.42 0 1 0 0-.84.42.42 0 0 0 0 .84zm0 .74a1.161 1.161 0 1 1 0-2.322 1.161 1.161 0 0 1 0 2.323zM10.161 12.976a.42.42 0 1 0 0-.84.42.42 0 0 0 0 .84zm0 .74a1.161 1.161 0 1 1 0-2.322 1.161 1.161 0 0 1 0 2.323zM3.144 1.765h9.782a.79.79 0 0 1 .772.962l-1.154 5.185a.79.79 0 0 1-.772.62l-7.596-.058.179 1.439h7.46a.42.42 0 0 1 0 .84H4.037a.42.42 0 0 1-.415-.356L2.238 1.124H.704a.42.42 0 1 1 0-.84h1.852A.42.42 0 0 1 2.97.64l.173 1.125zm8.58 5.965l1.202-5.124-9.66-.058.791 5.143 7.667.039z" />
            </g>
        </g>
    </svg>
);
