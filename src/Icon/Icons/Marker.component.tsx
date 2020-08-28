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
export const Marker = React.forwardRef(
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
            className={classNames('anchor-icon marker', className)}
            scale={scale}
            $color={color}
            {...props}
        >
            <svg
                width={Scale[scale]}
                height={Scale[scale]}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <defs>
                    <path
                        d="M8 0C4.691 0 2 2.692 2 6c0 4.913 5.334 9.636 5.562 9.835a.664.664 0 0 0 .877 0C8.666 15.636 14 10.913 14 6c0-3.308-2.691-6-6-6m0 4c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2"
                        id="marker-a"
                    />
                </defs>

                <g fill="none" fillRule="evenodd">
                    <path d="M0 0h16v16H0z" />
                    <use fill="currentColor" xlinkHref="#marker-a" />
                </g>
            </svg>
        </StyledIcon>
    )
);
