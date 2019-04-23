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
export const Mobile = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon mobile', className)}
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
                    d="M7.974 12a1 1 0 1 0 .052 2 1 1 0 0 0-.052-2m3.359 2.667H4.666a.333.333 0 0 1-.333-.333v-3h7.333v3a.333.333 0 0 1-.333.333zm-7-13c0-.184.149-.333.333-.333h6.667c.184 0 .333.149.333.333v1H4.333v-1zm0 8.333h7.333V4H4.333v6zm7-10H4.666C3.748 0 3 .748 3 1.667v12.667C3 15.253 3.748 16 4.666 16h6.667c.919 0 1.667-.747 1.667-1.666V1.667A1.67 1.67 0 0 0 11.333 0z"
                    id="mobile-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#mobile-a" />
            </g>
        </svg>
    </StyledIcon>
);
