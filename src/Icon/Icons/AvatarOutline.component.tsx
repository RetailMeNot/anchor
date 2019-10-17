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
export const AvatarOutline = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon avatar-outline', className)}
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
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <g fill="currentColor" fillRule="nonzero">
                    <path d="M8 14.333A6.333 6.333 0 1 0 8 1.667a6.333 6.333 0 0 0 0 12.666zm0 1A7.333 7.333 0 1 1 8 .667a7.333 7.333 0 0 1 0 14.666z" />
                    <path d="M2.667 13.033a7.364 7.364 0 0 1-.882-1.138C2.22 10.223 3.797 9 5.671 9h.82l.238.143a2.451 2.451 0 0 0 2.548 0L9.515 9h.855c1.846 0 3.411 1.227 3.845 2.895-.257.408-.552.79-.882 1.138v-.204c0-1.56-1.329-2.829-2.963-2.829h-.578a3.451 3.451 0 0 1-3.579 0h-.542c-1.675 0-3.004 1.27-3.004 2.829v.204zM5.807 15h4.385A7.33 7.33 0 0 1 8 15.333 7.33 7.33 0 0 1 5.808 15z" />
                    <path d="M8 4.5A2.5 2.5 0 0 0 5.5 7c0 .8.383 1.533 1.022 2.005.434.32.943.495 1.478.495a2.48 2.48 0 0 0 1.448-.47A2.492 2.492 0 0 0 10.5 7 2.5 2.5 0 0 0 8 4.5zm0-1A3.5 3.5 0 0 1 11.5 7a3.492 3.492 0 0 1-1.47 2.844A3.48 3.48 0 0 1 8 10.5c-.753 0-1.47-.246-2.072-.69A3.486 3.486 0 0 1 4.5 7 3.5 3.5 0 0 1 8 3.5z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
