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
export const Sliders = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon sliders', className)}
        scale={scale}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0-1h16v16H0z" />
                <g fill={color} fillRule="nonzero">
                    <path d="M6.95 2h8.416c.35 0 .634.224.634.5s-.284.5-.634.5H6.95A2.504 2.504 0 0 1 4.5 5a2.504 2.504 0 0 1-2.45-2H.634C.284 3 0 2.776 0 2.5S.284 2 .634 2H2.05C2.283.86 3.293 0 4.5 0s2.217.86 2.45 2zM3 2.5C3 3.327 3.673 4 4.5 4S6 3.327 6 2.5 5.327 1 4.5 1 3 1.673 3 2.5zM6.95 12h8.416c.35 0 .634.224.634.5s-.284.5-.634.5H6.95a2.504 2.504 0 0 1-2.45 2 2.504 2.504 0 0 1-2.45-2H.634C.284 13 0 12.776 0 12.5s.284-.5.634-.5H2.05c.233-1.14 1.243-2 2.45-2s2.217.86 2.45 2zM3 12.5c0 .827.673 1.5 1.5 1.5S6 13.327 6 12.5 5.327 11 4.5 11 3 11.673 3 12.5zM9.05 7H.634C.284 7 0 7.224 0 7.5s.284.5.634.5H9.05c.232 1.14 1.243 2 2.45 2s2.218-.86 2.45-2h1.416c.35 0 .634-.224.634-.5s-.284-.5-.634-.5H13.95a2.504 2.504 0 0 0-2.45-2c-1.207 0-2.217.86-2.45 2zm3.95.5c0 .827-.673 1.5-1.5 1.5S10 8.327 10 7.5 10.673 6 11.5 6s1.5.673 1.5 1.5z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
