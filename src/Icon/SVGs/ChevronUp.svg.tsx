// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 10 6"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 2.523L7.955 5.04a.77.77 0 0 0 1.058-.001l.014-.014a.721.721 0 0 0-.009-1.052L5.53.96A.767.767 0 0 0 4.481.952L.975 3.982a.719.719 0 0 0-.001 1.043l.015.015a.767.767 0 0 0 1.048.01L5 2.523z"
            fill={color}
            fillRule="nonzero"
        />
    </svg>
);
