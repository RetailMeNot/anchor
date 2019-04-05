// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 14 16"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M12.502 14.667a1.16 1.16 0 0 1-1.16-1.156 1.16 1.16 0 0 1 2.32 0 1.16 1.16 0 0 1-1.16 1.156m0-13.333c.64 0 1.16.519 1.16 1.156 0 .638-.52 1.156-1.16 1.156-.64 0-1.16-.518-1.16-1.156 0-.637.52-1.156 1.16-1.156m0 9.687c-.697 0-1.327.287-1.78.746L5.91 8.612A2.47 2.47 0 0 0 5.995 8c0-.188-.025-.371-.065-.549l4.841-3.171A2.495 2.495 0 0 0 15 2.49 2.495 2.495 0 0 0 12.502 0a2.495 2.495 0 0 0-2.498 2.49c0 .222.039.434.093.638L5.294 6.277A2.493 2.493 0 0 0 1 8a2.493 2.493 0 0 0 2.497 2.49 2.49 2.49 0 0 0 1.753-.718l4.828 3.164a2.474 2.474 0 0 0-.074.575A2.494 2.494 0 0 0 12.502 16 2.494 2.494 0 0 0 15 13.511a2.495 2.495 0 0 0-2.498-2.49"
                id="icon-share"
            />
        </defs>
        <g transform="translate(-1)" fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill={color} xlinkHref="#icon-share" />
        </g>
    </svg>
);
