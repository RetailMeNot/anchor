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
export const EnvelopeOpen = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon envelope-open', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <g fill={color} fillRule="nonzero">
                    <path d="M8.414 2.715a.73.73 0 0 0-.828 0L2.6 6.149v7.184c0 .405.328.734.733.734h9.334a.733.733 0 0 0 .733-.734V6.15L8.414 2.715zM14.6 6.096v7.237a1.933 1.933 0 0 1-1.933 1.934H3.333A1.933 1.933 0 0 1 1.4 13.333V6.096c0-.362.178-.7.476-.906l5.03-3.463a1.93 1.93 0 0 1 2.189 0l5.029 3.463a1.1 1.1 0 0 1 .476.906z" />
                    <path d="M6.295 10.4h3.048a.733.733 0 0 0 .582-.286L12.858 6.3a.6.6 0 0 1 .95.731l-2.932 3.813a1.933 1.933 0 0 1-1.533.755H6a.6.6 0 0 1-.476-.234L2.191 7.032a.6.6 0 0 1 .951-.731L6.295 10.4z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);

export default EnvelopeOpen;
