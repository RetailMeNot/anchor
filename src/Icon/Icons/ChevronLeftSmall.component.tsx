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
export const ChevronLeftSmall = React.forwardRef(
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
            className={classNames('anchor-icon chevron-left-small', className)}
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
                    <path d="M2 14h12V2H2z" />
                    <path
                        d="M9.575 5.828a.64.64 0 0 0 0-.88l-.011-.01a.604.604 0 0 0-.881.009L6.425 7.56a.637.637 0 0 0-.009.87l2.275 2.633c.24.25.634.25.872 0l.012-.012a.637.637 0 0 0 .01-.869L7.724 8l1.851-2.172z"
                        fill="currentColor"
                        fillRule="nonzero"
                    />
                </g>
            </svg>
        </StyledIcon>
    )
);
