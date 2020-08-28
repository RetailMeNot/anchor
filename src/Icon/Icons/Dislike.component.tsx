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
export const Dislike = React.forwardRef(
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
            className={classNames('anchor-icon dislike', className)}
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
                        d="M14.667 8.148c0 .587-.486 1.185-.963 1.185h-2.577c-.748 0-1.127.378-1.127 1.127v3.197a.966.966 0 0 1-.959 1.01l-1.042-.007c-.041-2.378-.512-5.265-2.501-5.69-.61-.13-.789-.323-.831-.382V2.25c.293-.285 1.148-.917 2.957-.917h6.08c.531 0 .963.432.963.962v5.853zm-13.333.519h2V2h-2v6.667zM13.704 0h-6.08c-1.686 0-2.77.479-3.412.918a1.152 1.152 0 0 0-.717-.251H1.172C.525.667 0 1.192 0 1.837v6.991C0 9.474.525 10 1.172 10h2.323c.218 0 .419-.064.593-.167.27.176.634.336 1.132.442.857.183 1.412 1.897 1.447 4.475C6.677 15.462 7.25 16 8 16h1.041a2.295 2.295 0 0 0 2.293-2.343v-2.99h2.37c1.354 0 2.296-1.329 2.296-2.519V2.295A2.298 2.298 0 0 0 13.704 0z"
                        id="dislike-a"
                    />
                </defs>
                <g fill="none" fillRule="evenodd">
                    <path d="M0 0h16v16H0z" />
                    <use fill="currentColor" xlinkHref="#dislike-a" />
                </g>
            </svg>
        </StyledIcon>
    )
);
