// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    height = 10,
    width = 6,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.478 5L.96 2.047A.77.77 0 0 1 .961.989L.975.974a.721.721 0 0 1 1.052.01L5.04 4.47c.28.293.28.765.009 1.048l-3.03 3.507a.719.719 0 0 1-1.043 0l-.015-.015a.767.767 0 0 1-.01-1.047L3.477 5z"
            fill={color}
            fillRule="nonzero"
        />
    </svg>
);
