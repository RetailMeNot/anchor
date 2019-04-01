// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 12,
    height = 10,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-2-3h16v16H-2z" />
            <g fill={color}>
                <circle opacity=".9" cx="2.75" cy="1.25" r="1.25" />
                <circle opacity=".9" cx="9.25" cy="1.25" r="1.25" />
                <path
                    d="M11.5 9.264c0 .407-.344.736-.769.736-.424 0-.769-.33-.769-.736C9.962 7.17 8.188 5.472 6 5.472S2.038 7.17 2.038 9.264c0 .407-.345.736-.77.736C.845 10 .5 9.67.5 9.264.5 6.357 2.962 4 6 4s5.5 2.357 5.5 5.264z"
                    fillRule="nonzero"
                />
            </g>
        </g>
    </svg>
);
