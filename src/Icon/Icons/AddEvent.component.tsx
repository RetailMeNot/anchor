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
export const AddEvent = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon add-event', className)} scale={scale}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.333 12.667H14v-1.333c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v1.333h-1.334c-.366 0-.666.3-.666.667 0 .366.3.666.666.666h1.334v1.334c0 .366.3.666.666.666.367 0 .667-.3.667-.666V14h1.333c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667m-.666-7.333H1.333v-2c0-.368.299-.667.668-.667h1.332v.667c0 .366.3.666.667.666a.67.67 0 0 0 .667-.666v-.667h7.212v.667c0 .366.3.666.666.666.367 0 .667-.3.667-.666v-.667h.787c.369 0 .668.299.668.667v2zm0 3.333c0 .367.3.667.666.667.367 0 .667-.3.667-.667V2a.667.667 0 0 0-.667-.666h-2.121V.667A.67.67 0 0 0 12.545 0a.67.67 0 0 0-.666.667v.667H4.667V.667A.67.67 0 0 0 4 0a.67.67 0 0 0-.667.667v.667H.667A.666.666 0 0 0 0 2v13.334c0 .368.298.666.667.666h8c.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667H2.001A.668.668 0 0 1 1.333 14V6.667h13.334v2z"
                fill={color}
                fillRule="evenodd"
            />
        </svg>
    </StyledIcon>
);
