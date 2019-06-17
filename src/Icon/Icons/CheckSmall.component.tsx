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
export const CheckSmall = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon check-small', className)}
        scale={scale}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M2 2h12v12H2z" />
                <path
                    d="M11.966 6.454l-4.364 4.5a.965.965 0 0 1-.693.296.97.97 0 0 1-.694-.297l-2.182-2.25a1.017 1.017 0 0 1 0-1.408.961.961 0 0 1 1.387 0L6.91 8.83l3.67-3.785a.963.963 0 0 1 1.387 0c.379.39.379 1.02 0 1.41l-.179-.175.18.174z"
                    fill={color}
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
