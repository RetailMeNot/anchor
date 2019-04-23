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
export const BulletList = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon bullet-list', className)}
        scale={scale}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0-1h16v16H0z" />
                <g fill={color} fillRule="nonzero">
                    <path d="M1 2v1h1V2H1zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5.5 12h10a.5.5 0 1 1 0 1h-10a.5.5 0 1 1 0-1zM5.5 7h10a.5.5 0 1 1 0 1h-10a.5.5 0 0 1 0-1zM5.5 2h10a.5.5 0 1 1 0 1h-10a.5.5 0 0 1 0-1zM1 7v1h1V7H1zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM1 12v1h1v-1H1zm0-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
