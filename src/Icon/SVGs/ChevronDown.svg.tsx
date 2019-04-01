// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    height = 6,
    width = 10,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 3.478L7.955.961a.77.77 0 0 1 1.058 0l.014.015a.721.721 0 0 1-.009 1.052L5.53 5.04a.767.767 0 0 1-1.048.008L.975 2.02A.719.719 0 0 1 .974.977L.989.962a.767.767 0 0 1 1.048-.01L5 3.477z"
            fill={color}
            fillRule="nonzero"
        />
    </svg>
);
