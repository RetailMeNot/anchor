// REACT
import * as React from 'react';
import classNames from 'classnames';
import {
    IconSVGProps,
    Scale,
    StyledIcon,
    DefaultColor,
    DefaultScale,
} from '../utils';

/* tslint:disable max-line-length */
export const MarkerOutline = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon marker-outline', className)}
        scale={scale}
        $color={color}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M8 14.419C6.762 13.211 3.334 9.546 3.334 6A4.672 4.672 0 0 1 8 1.334 4.672 4.672 0 0 1 12.667 6c0 3.546-3.429 7.211-4.667 8.419M8 0C4.691 0 2 2.692 2 6c0 4.913 5.334 9.636 5.562 9.835a.664.664 0 0 0 .877 0C8.666 15.636 14 10.913 14 6c0-3.308-2.691-6-6-6m0 7.333A1.335 1.335 0 0 1 6.667 6c0-.736.599-1.333 1.333-1.333.735 0 1.334.598 1.334 1.333 0 .736-.599 1.333-1.334 1.333m0-4A2.669 2.669 0 0 0 5.334 6 2.668 2.668 0 0 0 8 8.666 2.67 2.67 0 0 0 10.667 6 2.67 2.67 0 0 0 8 3.333"
                    id="marker-outline-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill="currentColor" xlinkHref="#marker-outline-a" />
            </g>
        </svg>
    </StyledIcon>
);
