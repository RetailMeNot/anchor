// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 14,
    height = 16,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-1 0h16v16H-1z" />
            <g transform="translate(0 .333)" fill={color}>
                <path
                    d="M10.4 6.367V4A2.4 2.4 0 0 0 8 1.6H6A2.4 2.4 0 0 0 3.6 4v2.367h6.8zM6 .4h2A3.6 3.6 0 0 1 11.6 4v3.567H2.4V4A3.6 3.6 0 0 1 6 .4z"
                    fillRule="nonzero"
                />
                <path
                    d="M2.333 7.6a.733.733 0 0 0-.733.733v5.334c0 .405.328.733.733.733h9.334a.733.733 0 0 0 .733-.733V8.333a.733.733 0 0 0-.733-.733H2.333zm0-1.2h9.334c1.067 0 1.933.866 1.933 1.933v5.334a1.933 1.933 0 0 1-1.933 1.933H2.333A1.933 1.933 0 0 1 .4 13.667V8.333C.4 7.266 1.266 6.4 2.333 6.4z"
                    fillRule="nonzero"
                />
                <circle cx="7" cy="10.333" r="1.333" />
                <rect x="6.333" y="11" width="1.333" height="2" rx=".667" />
            </g>
        </g>
    </svg>
);
