// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 14 15"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-1-1h16v16H-1z" />
            <g fill={color} fillRule="nonzero">
                <path d="M7.414 1.715a.73.73 0 0 0-.828 0L1.6 5.149v7.184c0 .405.328.734.733.734h9.334a.733.733 0 0 0 .733-.734V5.15L7.414 1.715zM13.6 5.096v7.237a1.933 1.933 0 0 1-1.933 1.934H2.333A1.933 1.933 0 0 1 .4 12.333V5.096c0-.362.178-.7.476-.906L5.906.727a1.93 1.93 0 0 1 2.189 0l5.029 3.463a1.1 1.1 0 0 1 .476.906z" />
                <path d="M5.295 9.4h3.048a.733.733 0 0 0 .582-.286L11.858 5.3a.6.6 0 0 1 .95.731L9.877 9.845a1.933 1.933 0 0 1-1.533.755H5a.6.6 0 0 1-.476-.234L1.191 6.032a.6.6 0 0 1 .951-.731L5.295 9.4z" />
            </g>
        </g>
    </svg>
);
