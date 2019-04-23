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
export const Search = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon search', className)} scale={scale}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1.925 7.125c0 2.868 2.332 5.2 5.2 5.2 2.868 0 5.2-2.332 5.2-5.2 0-2.868-2.332-5.2-5.2-5.2a5.205 5.205 0 0 0-5.2 5.2zm9.893 4.004l3.09 3.09a.488.488 0 0 1-.69.688l-3.054-3.12a6.136 6.136 0 0 1-4.04 1.513A6.175 6.175 0 1 1 13.3 7.125a6.135 6.135 0 0 1-1.482 4.004z"
                fill={color}
                fillRule="nonzero"
            />
        </svg>
    </StyledIcon>
);
