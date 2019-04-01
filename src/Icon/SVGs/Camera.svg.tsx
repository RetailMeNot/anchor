// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 16,
    height = 14,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M0-1h16v16H0z" />
            <path
                d="M4.366 2.14a1.267 1.267 0 0 1-1.259 1.127H1.333A.733.733 0 0 0 .6 4v8.667c0 .405.328.733.733.733h13.334a.733.733 0 0 0 .733-.733V4a.733.733 0 0 0-.733-.733h-1.774a1.267 1.267 0 0 1-1.259-1.127l-.099-.888A.733.733 0 0 0 10.807.6H5.193a.733.733 0 0 0-.728.652l-.1.888z"
                stroke={color}
                strokeWidth="1.2"
            />
            <path
                d="M10.133 8A2.137 2.137 0 0 0 8 5.867 2.137 2.137 0 0 0 5.867 8c0 1.175.958 2.133 2.133 2.133A2.137 2.137 0 0 0 10.133 8zm1.2 0A3.337 3.337 0 0 1 8 11.333 3.337 3.337 0 0 1 4.667 8 3.337 3.337 0 0 1 8 4.667 3.337 3.337 0 0 1 11.333 8z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
