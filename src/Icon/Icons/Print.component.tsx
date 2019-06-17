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
export const Print = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon print', className)}
        scale={scale}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 6a1 1 0 1 0 0 2.001 1 1 0 0 0 0-2m11.667 5.666c0 .184-.15.333-.333.333h-1.667v-2h.667a.666.666 0 1 0 0-1.333H2.667a.667.667 0 1 0 0 1.333h.667v2H1.667a.333.333 0 0 1-.333-.333v-6c0-.184.149-.333.333-.333h12.667c.183 0 .333.149.333.333v6zm-10 3h6.667V10H4.667v4.667zm0-10.666h6.667V1.334H4.667v2.667zM14.334 4h-1.667V.667A.667.667 0 0 0 12 0H4a.667.667 0 0 0-.666.667V4H1.667A1.67 1.67 0 0 0 0 5.667v6a1.67 1.67 0 0 0 1.667 1.667h1.667v2c0 .368.298.666.666.666h8a.666.666 0 0 0 .667-.666v-2h1.667c.919 0 1.666-.748 1.666-1.667v-6C16 4.748 15.253 4 14.334 4z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    </StyledIcon>
);
