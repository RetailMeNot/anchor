// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 16,
    height = 16,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill={color} fillRule="nonzero">
            <path d="M1 1.353V12.67l4.785 2.316 4.255-2.374a1.898 1.898 0 0 1 1.66-.093l3.3 1.385V2.717L10.685 1.01l-4.14 1.803c-.445.194-.948.21-1.405.044L1 1.353zm-1-.145A.898.898 0 0 1 1.205.364l4.277 1.552a.898.898 0 0 0 .665-.021l4.177-1.82a.898.898 0 0 1 .69-.011l4.418 1.75a.898.898 0 0 1 .568.834v11.41a.898.898 0 0 1-1.246.828l-3.442-1.445a.898.898 0 0 0-.785.044l-4.3 2.4a.898.898 0 0 1-.83.024l-4.89-2.366A.898.898 0 0 1 0 12.734V1.208z" />
            <path d="M5 3a.5.5 0 0 1 1 0v12a.5.5 0 1 1-1 0V3zM10 1a.5.5 0 1 1 1 0v11.5a.5.5 0 1 1-1 0V1z" />
        </g>
    </svg>
);