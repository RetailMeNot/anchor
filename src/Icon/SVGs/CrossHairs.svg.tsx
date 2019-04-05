// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 14 15"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-1 0h16v16H-1z" />
            <path
                d="M1.284 7.617c.025-2.826 2.234-5.15 5-5.273v-1.01a.383.383 0 0 1 .766 0l-.047.96c2.705.166 4.87 2.331 4.987 4.99H13a.383.383 0 1 1 0 .766l-.96-.047c-.167 2.705-2.332 4.87-4.99 4.987V14a.383.383 0 1 1-.767 0l.047-.96c-2.581-.16-4.686-2.144-4.955-4.657H.333a.383.383 0 0 1 0-.766h.95zm1.716 0a.383.383 0 0 1 0 .766l-.903-.057c.306 2.14 2.074 3.793 4.186 3.996v-.989a.383.383 0 0 1 .767 0l-.054.939c2.287-.162 4.114-1.989 4.326-4.222h-.989a.383.383 0 0 1 0-.767l.939.054C11.11 5.05 9.283 3.223 7.05 3.012V4a.383.383 0 0 1-.767 0l.054-.938A4.617 4.617 0 0 0 2.05 7.617H3zm3.667 2.1a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
