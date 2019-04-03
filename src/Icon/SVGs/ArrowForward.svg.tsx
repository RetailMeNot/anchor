// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 14,
    height = 11,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M15-2H-1v16h16z" />
            <g fill={color} fillRule="nonzero">
                <path d="M1.334 6.25h11.333c.32 0 .583-.262.583-.583a.585.585 0 0 0-.583-.584H1.334a.584.584 0 0 0 0 1.167z" />
                <path d="M7.588 1.062a.25.25 0 0 0 0 .353l4.664 4.664c.227.228.6.228.828 0a.587.587 0 0 0 0-.827L8.415.588a.585.585 0 0 0-.828.827.25.25 0 1 0 0-.353z" />
                <path d="M13.077 6.08a.586.586 0 0 0 0-.826.586.586 0 0 0-.827 0L7.585 9.92a.585.585 0 0 0 .826.827l4.666-4.665z" />
            </g>
        </g>
    </svg>
);
