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
export const Clock = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon clock', className)}
        scale={scale}
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
                    d="M8 13.667A5.673 5.673 0 0 1 2.333 8 5.673 5.673 0 0 1 8 2.334 5.673 5.673 0 0 1 13.667 8 5.673 5.673 0 0 1 8 13.667M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8z"
                    id="clock-a"
                />
            </defs>

            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#clock-a" />
                <path
                    d="M10.328 8.667h-2v-3c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v3.667c0 .366.3.666.666.666h2.667c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667z"
                    fill={color}
                />
            </g>
        </svg>
    </StyledIcon>
);
