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
export const News = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon news', className)}
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
                    d="M5.334 12.333h-2a.669.669 0 0 1-.667-.667c0-.366.3-.666.667-.666h2c.366 0 .666.3.666.666 0 .367-.3.667-.666.667zm0-2h-2a.669.669 0 0 1-.667-.667c0-.366.3-.666.667-.666h2C5.7 9 6 9.3 6 9.666c0 .367-.3.667-.666.667zm4.666 2H8a.669.669 0 0 1-.666-.667c0-.366.3-.666.666-.666h2c.367 0 .667.3.667.666 0 .367-.3.667-.667.667zm0-2H8a.669.669 0 0 1-.666-.667C7.334 9.3 7.634 9 8 9h2c.367 0 .667.3.667.666 0 .367-.3.667-.667.667zm0-2.668H8A.668.668 0 0 1 7.334 7c0-.367.3-.667.666-.667h2c.367 0 .667.3.667.667 0 .366-.3.666-.667.666zM10 5H8a.669.669 0 0 1-.666-.667c0-.366.3-.667.666-.667h2a.67.67 0 0 1 .667.667c0 .367-.3.667-.667.667zM4.834 6.131a.2.2 0 0 1-.2.2h-.601a.2.2 0 0 1-.199-.2v-.933a.2.2 0 0 1 .199-.2h.601a.2.2 0 0 1 .2.2v.933zm.5-2.465h-2a.667.667 0 0 0-.667.667V7c0 .368.299.666.667.666h2A.666.666 0 0 0 6 7V4.333a.667.667 0 0 0-.666-.667zm9.333 9.337a.664.664 0 0 1-.664.664h-.669V5.665h.669c.367 0 .664.298.664.664v6.674zm-5.17.664h-7.5a.664.664 0 0 1-.663-.664V2.997c0-.366.297-.664.663-.664h9.339c.367 0 .664.298.664.664v10.006a.664.664 0 0 1-.664.664H9.497zm5.17-9.335h-1.333V2.333C13.334 1.6 12.733 1 12 1H1.334C.601 1 0 1.6 0 2.333v11.334C0 14.4.601 15 1.334 15h13.333C15.4 15 16 14.4 16 13.667V5.665c0-.733-.6-1.333-1.333-1.333z"
                    id="news-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill="currentColor" xlinkHref="#news-a" />
            </g>
        </svg>
    </StyledIcon>
);
