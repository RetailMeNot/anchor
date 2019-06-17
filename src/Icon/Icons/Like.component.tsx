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
export const Like = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon like', className)}
        scale={scale}
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
                    d="M14.667 13.704c0 .53-.432.963-.963.963h-6.08c-1.817 0-2.672-.639-2.957-.915v-6.34c.039-.056.213-.251.831-.383 1.99-.425 2.461-3.315 2.501-5.696H9.041c.371 0 .959.274.959 1.01V5.54c0 .748.379 1.127 1.126 1.127h2.578c.477 0 .963.598.963 1.184v5.853zM1.334 14h2V7.333h-2V14zm12.37-8.667h-2.37v-2.99A2.295 2.295 0 0 0 9.041 0H8c-.75 0-1.324.537-1.333 1.25-.035 2.577-.59 4.292-1.447 4.475-.499.106-.862.265-1.132.442A1.153 1.153 0 0 0 3.495 6H1.172C.525 6 0 6.525 0 7.172v6.99c0 .646.525 1.171 1.172 1.171h2.323c.272 0 .518-.096.717-.251.641.438 1.726.918 3.412.918h6.08A2.299 2.299 0 0 0 16 13.704V7.851c0-1.19-.943-2.518-2.296-2.518z"
                    id="like-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#like-a" />
            </g>
        </svg>
    </StyledIcon>
);
