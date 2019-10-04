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
export const Info = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon info', className)}
        scale={scale}
        $color={color}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <circle fill="currentColor" cx="8" cy="8" r="8" />
                <path
                    d="M7.292 7.5h1.416a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5H7.292a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5zM6.75 5.255a1.259 1.259 0 0 1 .371-.883c.115-.113.25-.204.403-.27a1.21 1.21 0 0 1 .962 0c.147.066.278.157.393.27.115.114.205.247.272.4.066.152.099.313.099.483a1.228 1.228 0 0 1-.764 1.15 1.267 1.267 0 0 1-.962 0 1.3 1.3 0 0 1-.403-.261 1.228 1.228 0 0 1-.371-.888z"
                    fill="#FFF"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
