// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 16,
    height = 15,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill={color} fillRule="nonzero">
            <path d="M3 13.333h10v-4.55L8 4.337 3 8.782v4.551zm-1-5L8 3l6 5.333v5.334a.667.667 0 0 1-.667.666H2.667A.667.667 0 0 1 2 13.667V8.333z" />
            <path d="M7 10v3.333h2V10H7zm2.333-1c.369 0 .667.298.667.667v4a.667.667 0 0 1-.667.666H6.667A.667.667 0 0 1 6 13.667v-4C6 9.298 6.298 9 6.667 9h2.666zM12.875 7.333h1.438L8 1.426 1.687 7.333h1.438L8 3l4.875 4.333zm-.38 1L8 4.338 3.505 8.333H.843A.667.667 0 0 1 .387 7.18L7.544.483a.667.667 0 0 1 .911 0l7.158 6.697a.667.667 0 0 1-.456 1.153h-2.662z" />
        </g>
    </svg>
);
