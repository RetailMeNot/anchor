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
export const Lightning = React.forwardRef(
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
            className={classNames('anchor-icon lightning', className)}
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
                        d="M11.719 8.33a.357.357 0 0 0 .105-.255c0-.19-.142-.344-.317-.344H8.918c-.402 0-.686-.43-.556-.844L9.8 2.292 4.28 7.67a.357.357 0 0 0-.105.255c0 .19.142.344.317.344h2.589c.402 0 .686.43.556.844L6.2 13.708 11.72 8.33zm-.212-1.876c.825 0 1.493.726 1.493 1.62 0 .46-.18.899-.495 1.206l-6.677 6.506a.727.727 0 0 1-1.086-.063.889.889 0 0 1-.156-.826l1.675-5.351H4.493C3.668 9.546 3 8.82 3 7.926c0-.46.18-.899.495-1.206L10.172.214a.727.727 0 0 1 1.086.063c.185.225.245.54.156.826L9.739 6.454h1.768z"
                        id="lightning-a"
                    />
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path d="M0 0h16v16H0z" />
                    <use
                        fill="currentColor"
                        fillRule="nonzero"
                        xlinkHref="#lightning-a"
                    />
                </g>
            </svg>
        </StyledIcon>
    )
);
