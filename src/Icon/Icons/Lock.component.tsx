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
export const Lock = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon lock', className)}
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
                <path d="M0 0h16v16H0z" />
                <g transform="translate(1 .333)" fill={color}>
                    <path
                        d="M10.4 6.367V4A2.4 2.4 0 0 0 8 1.6H6A2.4 2.4 0 0 0 3.6 4v2.367h6.8zM6 .4h2A3.6 3.6 0 0 1 11.6 4v3.567H2.4V4A3.6 3.6 0 0 1 6 .4z"
                        fillRule="nonzero"
                    />
                    <path
                        d="M2.333 7.6a.733.733 0 0 0-.733.733v5.334c0 .405.328.733.733.733h9.334a.733.733 0 0 0 .733-.733V8.333a.733.733 0 0 0-.733-.733H2.333zm0-1.2h9.334c1.067 0 1.933.866 1.933 1.933v5.334a1.933 1.933 0 0 1-1.933 1.933H2.333A1.933 1.933 0 0 1 .4 13.667V8.333C.4 7.266 1.266 6.4 2.333 6.4z"
                        fillRule="nonzero"
                    />
                    <circle cx="7" cy="10.333" r="1.333" />
                    <rect x="6.333" y="11" width="1.333" height="2" rx=".667" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
