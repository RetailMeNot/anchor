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
export const ChevronLeft = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon chevron-left', className)}
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
                d="M7.522 8l2.518 2.953a.77.77 0 0 1 0 1.058l-.015.015a.721.721 0 0 1-1.052-.01L5.96 8.53a.767.767 0 0 1-.009-1.048l3.03-3.507a.719.719 0 0 1 1.043 0l.016.015c.28.293.28.765.01 1.047L7.522 8z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    </StyledIcon>
);
