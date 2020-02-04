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
export const ChevronUp = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon chevron-up', className)}
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
                d="M8 7.523l2.954 2.518a.77.77 0 0 0 1.058-.001l.014-.014a.721.721 0 0 0-.009-1.052L8.53 5.96a.767.767 0 0 0-1.048-.009l-3.506 3.03a.719.719 0 0 0-.001 1.043l.015.015a.767.767 0 0 0 1.048.01L8 7.523z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    </StyledIcon>
);
