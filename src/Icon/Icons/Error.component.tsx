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
export const Error = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon error', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <path
                    d="M15.797 12.757c.133.23.203.49.203.756 0 .821-.652 1.487-1.457 1.487H1.457c-.271 0-.537-.077-.768-.223a1.504 1.504 0 0 1-.47-2.047L6.921 1.703a1.44 1.44 0 0 1 2.493.027l6.383 11.027z"
                    fill={color}
                />
                <path
                    d="M7.133 9.377V5.5a.5.5 0 0 1 .5-.5h.723a.5.5 0 0 1 .5.5v3.877a.5.5 0 0 1-.5.5h-.723a.5.5 0 0 1-.5-.5zM9 11.451a.983.983 0 0 1-.077.388.902.902 0 0 1-.215.311c-.093.086-.2.155-.323.207a.995.995 0 0 1-.39.078c-.137 0-.265-.024-.385-.073a.92.92 0 0 1-.313-.207 1.095 1.095 0 0 1-.215-.31.958.958 0 0 1-.005-.761.973.973 0 0 1 .528-.528.995.995 0 0 1 .39-.078c.137 0 .267.026.39.077.123.052.23.121.323.208a.958.958 0 0 1 .292.689z"
                    fill="#FFF"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);

export default Error;
