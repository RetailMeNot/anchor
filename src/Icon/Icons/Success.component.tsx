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
export const Success = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon success', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0" id="success-a" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <use fill={color} xlinkHref="#success-a" />
                <path
                    d="M11.928 6.383l-4.364 4.363a.926.926 0 0 1-1.311 0L4.07 8.564a.928.928 0 0 1 1.311-1.311L6.91 8.779l3.709-3.708a.928.928 0 0 1 1.31 1.312l-.141-.142.141.142z"
                    fill="#FFF"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
