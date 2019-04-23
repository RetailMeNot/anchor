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
export const TagAdd = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon tag-add', className)}
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
                    d="M15.375 12.875a.625.625 0 1 1 0 1.25h-1.25v1.25a.625.625 0 1 1-1.25 0v-1.25h-1.25a.625.625 0 1 1 0-1.25h1.25v-1.25a.625.625 0 1 1 1.25 0v1.25h1.25zM11.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm2.25 3.657a.344.344 0 0 1-.1.24L6.896 13.65a.347.347 0 0 1-.48 0L1.349 8.584a.34.34 0 0 1 0-.481L8.102 1.35c.064-.064.15-.1.24-.1h5.068a.34.34 0 0 1 .34.34v5.067zm1.25 0V1.59C15 .714 14.287 0 13.41 0H8.343c-.425 0-.824.165-1.124.466L.464 7.219a1.594 1.594 0 0 0 0 2.248l5.068 5.067c.3.301.7.466 1.124.466a1.58 1.58 0 0 0 1.125-.466l6.755-6.754c.299-.3.464-.699.464-1.123z"
                    id="tag-add-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#tag-add-a" />
            </g>
        </svg>
    </StyledIcon>
);
