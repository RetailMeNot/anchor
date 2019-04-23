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
export const Upload = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon upload', className)} scale={scale}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M12.333 5.334C13.252 5.334 14 6.081 14 7v7.334c0 .92-.748 1.666-1.667 1.666H3.666A1.667 1.667 0 0 1 2 14.334V7c0-.919.747-1.666 1.666-1.666h1.667a.667.667 0 1 1 0 1.333H3.666A.333.333 0 0 0 3.333 7v7.334c0 .184.149.333.333.333h8.667a.333.333 0 0 0 .333-.333V7a.333.333 0 0 0-.333-.333h-1.667a.667.667 0 0 1 0-1.333h1.667zM5.804 3.805a.666.666 0 1 1-.943-.942L7.528.196a.666.666 0 0 1 .943 0l2.666 2.667a.665.665 0 0 1 0 .942.665.665 0 0 1-.942 0L8.666 2.277v7.057a.666.666 0 1 1-1.333 0V2.277L5.804 3.805z"
                    id="upload-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#upload-a" />
            </g>
        </svg>
    </StyledIcon>
);
