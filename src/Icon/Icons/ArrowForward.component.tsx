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
export const ArrowForward = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon arrow-forward', className)}
        scale={scale}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M16 0H0v16h16z" />
                <g fill={color} fillRule="nonzero">
                    <path d="M2.334 8.25h11.333c.32 0 .583-.262.583-.583a.585.585 0 0 0-.583-.584H2.334a.584.584 0 0 0 0 1.167z" />
                    <path d="M8.588 3.062a.25.25 0 0 0 0 .353l4.664 4.664c.227.228.6.228.828 0a.587.587 0 0 0 0-.827L9.415 2.588a.585.585 0 0 0-.828.827.25.25 0 1 0 0-.353z" />
                    <path d="M14.077 8.08a.586.586 0 0 0 0-.826.586.586 0 0 0-.827 0L8.585 11.92a.585.585 0 0 0 .826.827l4.666-4.665z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
