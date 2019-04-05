// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 14"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <path
                d="M14.68 2.343A4.55 4.55 0 0 0 11.439 1c-1.23 0-2.393.489-3.317 1.422l-.123.15-.19-.229A4.55 4.55 0 0 0 4.564 1 4.55 4.55 0 0 0 1.32 2.343c-1.758 1.762-1.76 4.628-.014 6.381l5.275 5.475c.306.319.767.801 1.415.801.652 0 1.134-.5 1.422-.799l5.262-5.463a4.535 4.535 0 0 0 0-6.395"
                id="icon-heart"
            />
        </defs>
        <g transform="translate(0 -1)" fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-heart" />
        </g>
    </svg>
);
