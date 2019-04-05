// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 6 10"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M2.522 5L5.04 7.953a.77.77 0 0 1 0 1.058l-.015.015a.721.721 0 0 1-1.052-.01L.96 5.53A.767.767 0 0 1 .951 4.48L3.981.974a.719.719 0 0 1 1.043 0l.016.015c.28.293.28.765.01 1.047L2.522 5z"
            fill={color}
            fillRule="nonzero"
        />
    </svg>
);
