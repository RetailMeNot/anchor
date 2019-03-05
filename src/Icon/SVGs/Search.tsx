// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', width, height }: IconSVGProps) => (
    <svg
        width={width ? `${width}px` : '24px'}
        height={height ? `${height}px` : '24px'}
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M10.4998359,19.4996953 C5.53641349,19.4996953 1.49997656,15.4632584 1.49997656,10.4998359 C1.49997656,5.53641349 5.53641349,1.49997656 10.4998359,1.49997656 C15.4632584,1.49997656 19.4996953,5.53641349 19.4996953,10.4998359 C19.4996953,15.4632584 15.4632584,19.4996953 10.4998359,19.4996953 M23.7806284,22.720145 L18.4287121,17.3682286 C20.0276871,15.5277574 20.9996719,13.1292949 20.9996719,10.4998359 C20.9996719,4.70092655 16.2987453,0 10.4998359,0 C4.70092655,0 0,4.70092655 0,10.4998359 C0,16.2987453 4.70092655,20.9996719 10.4998359,20.9996719 C13.1292949,20.9996719 15.5277574,20.0276871 17.3682286,18.4287121 L22.720145,23.7806284 C23.0126404,24.0731239 23.489633,24.0731239 23.7806284,23.7806284 C24.0731239,23.489633 24.0731239,23.0126404 23.7806284,22.720145"
                id="search-icon-path"
            />
        </defs>
        <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <mask id="mask-2" fill="white">
                <use xlinkHref="#search-icon-path" />
            </mask>
            <use id="Fill-1" fill={color} xlinkHref="#search-icon-path" />
        </g>
    </svg>
);
