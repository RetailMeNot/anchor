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
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M11.333 3.334a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666M14.667 7.1a.368.368 0 0 1-.106.256L7.357 14.56a.37.37 0 0 1-.513 0L1.438 9.156a.366.366 0 0 1 0-.513L8.642 1.44a.36.36 0 0 1 .257-.107h5.406c.199 0 .362.163.362.363v5.405zm-.362-7.1H8.899c-.453 0-.878.175-1.2.496L.496 7.701a1.698 1.698 0 0 0 0 2.397L5.9 15.503c.32.322.746.497 1.2.497.452 0 .879-.175 1.199-.496L15.504 8.3c.32-.32.496-.747.496-1.199V1.697C16 .76 15.239 0 14.305 0z"
                id="icon-tag"
            />
        </defs>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-tag" />
        </g>
    </svg>
);
