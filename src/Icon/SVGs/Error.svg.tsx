// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 14"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M0-1h16v16H0z" />
            <path
                d="M15.797 11.757c.133.23.203.49.203.756 0 .821-.652 1.487-1.457 1.487H1.457c-.271 0-.537-.077-.768-.223a1.504 1.504 0 0 1-.47-2.047L6.921.703A1.44 1.44 0 0 1 9.414.73l6.383 11.027z"
                fill={color}
            />
            <path
                d="M7.133 8.377V4.5a.5.5 0 0 1 .5-.5h.723a.5.5 0 0 1 .5.5v3.877a.5.5 0 0 1-.5.5h-.723a.5.5 0 0 1-.5-.5zM9 10.451a.983.983 0 0 1-.077.388.902.902 0 0 1-.215.311c-.093.086-.2.155-.323.207a.995.995 0 0 1-.39.078c-.137 0-.265-.024-.385-.073a.92.92 0 0 1-.313-.207 1.095 1.095 0 0 1-.215-.31.958.958 0 0 1-.005-.761.973.973 0 0 1 .528-.528.995.995 0 0 1 .39-.078c.137 0 .267.026.39.077.123.052.23.121.323.208a.958.958 0 0 1 .292.689z"
                fill="white"
                fillRule="nonzero"
            />
        </g>
    </svg>
);
