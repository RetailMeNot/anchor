// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 16"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M12.15 6.332l-4.364 4.364a.725.725 0 0 1-1.027 0L4.575 8.514a.728.728 0 0 1 1.03-1.029l1.667 1.668 3.85-3.849a.727.727 0 1 1 1.027 1.028M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 14.667A6.675 6.675 0 0 1 1.333 8 6.675 6.675 0 0 1 8 1.333 6.675 6.675 0 0 1 14.667 8 6.675 6.675 0 0 1 8 14.667"
                id="icon-success-outline"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-success-outline" />
        </g>
    </svg>
);
