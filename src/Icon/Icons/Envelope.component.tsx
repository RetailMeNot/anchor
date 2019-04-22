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
export const Envelope = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon envelope', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <g fill={color} fillRule="nonzero">
                    <path d="M3.333 3.933a.733.733 0 0 0-.733.734v6.666c0 .405.328.734.733.734h9.334a.733.733 0 0 0 .733-.734V4.667a.733.733 0 0 0-.733-.734H3.333zm0-1.2h9.334c1.067 0 1.933.866 1.933 1.934v6.666a1.933 1.933 0 0 1-1.933 1.934H3.333A1.933 1.933 0 0 1 1.4 11.333V4.667c0-1.068.866-1.934 1.933-1.934z" />
                    <path d="M2.242 5.09a.6.6 0 1 1 .849-.848l4.39 4.39a.733.733 0 0 0 1.038 0l4.39-4.39a.6.6 0 1 1 .849.849l-4.39 4.39a1.933 1.933 0 0 1-2.735 0l-4.39-4.39z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
