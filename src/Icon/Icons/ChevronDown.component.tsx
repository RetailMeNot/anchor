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

/* eslint-disable max-len */
export const ChevronDown = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon chevron-down', className)}
        scale={scale}
        $color={color}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 8.478l2.954-2.517a.77.77 0 0 1 1.058 0l.014.015a.721.721 0 0 1-.009 1.052L8.53 10.04a.767.767 0 0 1-1.048.008L3.975 7.02a.719.719 0 0 1-.001-1.042l.015-.015a.767.767 0 0 1 1.048-.01L8 8.477z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    </StyledIcon>
);
