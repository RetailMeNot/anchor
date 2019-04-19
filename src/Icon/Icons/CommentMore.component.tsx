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
export const CommentMore = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon comment-more', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M4.618 6.952a1.048 1.048 0 1 1 0 2.096 1.048 1.048 0 0 1 0-2.096zm3.46 0a1.048 1.048 0 1 1 0 2.096 1.048 1.048 0 0 1 0-2.096zm3.526 0a1.048 1.048 0 1 1 0 2.096 1.048 1.048 0 0 1 0-2.096zM8.11 13.658a6.997 6.997 0 0 1-3.658-1.006.731.731 0 0 0-.824.049c-.468.37-1.005.597-1.484.736a6.46 6.46 0 0 0 .4-2.179.65.65 0 0 0-.116-.368 5.07 5.07 0 0 1-.928-2.899c0-3.124 2.965-5.666 6.61-5.666 3.581 0 6.507 2.454 6.607 5.505-.1 3.229-3.026 5.828-6.607 5.828M8.111 1c-4.419 0-8 3.13-8 6.991 0 1.26.387 2.44 1.054 3.461 0 .053-.024 1.543-.853 2.413 0 0-.448.413 0 .901.448.489 1.781.06 1.781.06s1.413-.466 2.002-.795a8.832 8.832 0 0 0 4.016.952c4.418 0 8-3.13 8-6.992 0-3.861-3.582-6.991-8-6.991"
                    id="comment-more-a"
                />
            </defs>

            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#comment-more-a" />
            </g>
        </svg>
    </StyledIcon>
);

export default CommentMore;
