// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 12,
    height = 12,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M7.139 8.861c.26.26.26.684 0 .943l-2.862 2.863h.64a.667.667 0 0 1 0 1.333H2.666a.666.666 0 0 1-.256-.052c-.017-.007-.03-.022-.045-.029-.06-.032-.121-.063-.17-.114a.609.609 0 0 1-.114-.17c-.007-.016-.021-.028-.028-.044A.675.675 0 0 1 2 13.334v-2.25a.667.667 0 0 1 1.333 0v.64l2.864-2.863a.668.668 0 0 1 .942 0zm6.809-6.452a.68.68 0 0 1 .053.258v2.25c0 .367-.3.667-.667.667a.669.669 0 0 1-.666-.667v-.641L9.804 7.139a.668.668 0 0 1-.942-.943l2.862-2.862h-.64a.669.669 0 0 1-.666-.667c0-.366.3-.667.666-.667h2.25v.001a.635.635 0 0 1 .258.052c.016.006.027.02.043.028.06.031.12.063.17.114.05.05.083.11.114.17.008.016.022.027.029.044z"
                id="icon-expand"
            />
        </defs>
        <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-expand" />
        </g>
    </svg>
);
