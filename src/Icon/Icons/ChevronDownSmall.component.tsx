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
export const ChevronDownSmall = React.forwardRef(
    (
        {
            color = DefaultColor,
            scale = DefaultScale,
            className,
            ...props
        }: IconSVGProps,
        ref: React.RefObject<any>
    ) => (
        <StyledIcon
            ref={ref}
            className={classNames('anchor-icon chevron-down-small', className)}
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
                    d="M8 8.276l2.172-1.852a.64.64 0 0 1 .88.001l.011.01c.25.24.25.634-.01.882L8.44 9.575a.637.637 0 0 1-.87.008L4.938 7.308a.602.602 0 0 1-.001-.872l.012-.01a.637.637 0 0 1 .87-.011L8 8.275z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </svg>
        </StyledIcon>
    )
);
