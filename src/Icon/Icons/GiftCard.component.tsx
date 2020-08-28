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
export const GiftCard = React.forwardRef(
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
            className={classNames('anchor-icon gift-card', className)}
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
                        <path d="M4.649 5.2H1.6a.4.4 0 0 0-.4.4v7.8c0 .22.18.4.4.4h12.8a.4.4 0 0 0 .4-.4V5.6a.4.4 0 0 0-.4-.4h-3.105c.402-.317.718-.727.909-1.2H14.4A1.6 1.6 0 0 1 16 5.6v7.8a1.6 1.6 0 0 1-1.6 1.6H1.6A1.6 1.6 0 0 1 0 13.4V5.6A1.6 1.6 0 0 1 1.6 4h2.189c.182.473.482.884.86 1.2z" />
                        <path d="M10.406 10.85h2.988a.556.556 0 1 1 0 1.113h-2.988a.556.556 0 1 1 0-1.113zM15.25 7.25v1.313H.75V7.25zM9.276 4.688c.962 0 1.758-.629 1.904-1.447l.009-.05c.077-.437-.263-.88-.815-.964a1.16 1.16 0 0 0-.177-.014c-.79 0-1.397.566-1.397 1.22v1.255h.476zm.921-3.675c.12 0 .24.01.36.028 1.2.185 2.012 1.241 1.813 2.36l-.009.05c-.25 1.406-1.555 2.437-3.085 2.437H7.6V3.433c0-1.336 1.163-2.42 2.597-2.42z" />
                        <path d="M7.2 3.612c0-.772-.626-1.399-1.399-1.399h-.123a.875.875 0 0 0-.861 1.028 1.754 1.754 0 0 0 1.727 1.447H7.2V3.612zM5.678 1.013h.123a2.599 2.599 0 0 1 2.599 2.6v2.275H6.544a2.954 2.954 0 0 1-2.908-2.437 2.075 2.075 0 0 1 2.042-2.438z" />
                        <path d="M8.65 4.813v9.5h-1.3v-9.5z" />
                    </g>
                </g>
            </svg>
        </StyledIcon>
    )
);
