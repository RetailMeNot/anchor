// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 17 12"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill={color} fillRule="evenodd">
            <path d="M1.345 2.402h14.2c.496 0 .9-.537.9-1.2 0-.663-.404-1.2-.9-1.2h-14.2c-.497 0-.9.537-.9 1.2 0 .663.403 1.2.9 1.2M1.345 7.202h14.2c.496 0 .9-.537.9-1.2 0-.663-.404-1.2-.9-1.2h-14.2c-.497 0-.9.537-.9 1.2 0 .663.403 1.2.9 1.2M1.345 12.002h14.2c.496 0 .9-.537.9-1.2 0-.663-.404-1.2-.9-1.2h-14.2c-.497 0-.9.537-.9 1.2 0 .663.403 1.2.9 1.2" />
        </g>
    </svg>
);
