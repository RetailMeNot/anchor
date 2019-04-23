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
export const Cart = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon cart', className)} scale={scale}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <g fill={color} fillRule="nonzero">
                    <path d="M6.889 13.976a.42.42 0 1 0 0-.84.42.42 0 0 0 0 .84zm0 .74a1.161 1.161 0 1 1 0-2.322 1.161 1.161 0 0 1 0 2.323zM11.161 13.976a.42.42 0 1 0 0-.84.42.42 0 0 0 0 .84zm0 .74a1.161 1.161 0 1 1 0-2.322 1.161 1.161 0 0 1 0 2.323zM4.144 2.765h9.782a.79.79 0 0 1 .772.962l-1.154 5.185a.79.79 0 0 1-.772.62l-7.596-.058.179 1.439h7.46a.42.42 0 0 1 0 .84H5.037a.42.42 0 0 1-.415-.356L3.238 2.124H1.704a.42.42 0 1 1 0-.84h1.852a.42.42 0 0 1 .415.356l.173 1.125zm8.58 5.965l1.202-5.124-9.66-.058.791 5.143 7.667.039z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
