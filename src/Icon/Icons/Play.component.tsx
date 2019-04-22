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
export const Play = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon play', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M14.954 9.302c1.395-.716 1.395-1.889 0-2.604L2.497.3C1.124-.407 0 .18 0 1.601v12.797c0 1.422 1.124 2.008 2.497 1.302l12.457-6.398z"
                    id="play-a"
                />
            </defs>
            <use fill={color} xlinkHref="#play-a" fillRule="evenodd" />
        </svg>
    </StyledIcon>
);
