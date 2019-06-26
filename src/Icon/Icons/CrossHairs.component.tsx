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
export const CrossHairs = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon cross-hairs', className)}
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
                <path
                    d="M2.284 7.617c.025-2.826 2.234-5.15 5-5.273v-1.01a.383.383 0 0 1 .766 0l-.047.96c2.705.166 4.87 2.331 4.987 4.99H14a.383.383 0 1 1 0 .766l-.96-.047c-.167 2.705-2.332 4.87-4.99 4.987V14a.383.383 0 1 1-.767 0l.047-.96c-2.581-.16-4.686-2.144-4.955-4.657H1.333a.383.383 0 0 1 0-.766h.95zm1.716 0a.383.383 0 0 1 0 .766l-.903-.057c.306 2.14 2.074 3.793 4.186 3.996v-.989a.383.383 0 0 1 .767 0l-.054.939c2.287-.162 4.114-1.989 4.326-4.222h-.989a.383.383 0 0 1 0-.767l.939.054C12.11 5.05 10.283 3.223 8.05 3.012V4a.383.383 0 0 1-.767 0l.054-.938A4.617 4.617 0 0 0 3.05 7.617H4zm3.667 2.1a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1z"
                    fill={color}
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
