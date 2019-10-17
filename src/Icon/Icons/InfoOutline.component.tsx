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
export const InfoOutline = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon info-outline', className)}
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
            <g fill="currentColor" fillRule="nonzero">
                <path d="M8 14.7A6.7 6.7 0 1 0 8 1.3a6.7 6.7 0 0 0 0 13.4zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                <path d="M9 4.964a.913.913 0 0 1-.08.38.98.98 0 0 1-.213.305A1.03 1.03 0 0 1 8 5.927a.974.974 0 0 1-.713-.283.922.922 0 0 1-.287-.68c0-.129.025-.252.074-.37.05-.117.121-.22.213-.305a1.15 1.15 0 0 1 .32-.209 1.03 1.03 0 0 1 1.101.198.98.98 0 0 1 .212.306c.053.117.08.244.08.38zM7.128 11.5V7.167a.5.5 0 0 1 .5-.5h.744a.5.5 0 0 1 .5.5V11.5a.5.5 0 0 1-.5.5h-.744a.5.5 0 0 1-.5-.5z" />
            </g>
        </svg>
    </StyledIcon>
);
