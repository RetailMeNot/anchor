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
            <path d="M-1-2h16v16H-1z" />
            <g fill={color} fillRule="nonzero">
                <path d="M12.666 6.25H1.333a.585.585 0 0 1-.583-.583c0-.322.262-.584.583-.584h11.333a.584.584 0 0 1 0 1.167z" />
                <path d="M6.412 1.062a.25.25 0 0 1 0 .353L1.748 6.08a.587.587 0 0 1-.828 0 .587.587 0 0 1 0-.827L5.585.588a.585.585 0 0 1 .828.827.25.25 0 1 1 0-.353z" />
                <path d="M.923 6.08a.586.586 0 0 1 0-.826.586.586 0 0 1 .827 0L6.415 9.92a.585.585 0 0 1-.826.827L.922 6.081z" />
            </g>
        </g>
    </svg>
);
