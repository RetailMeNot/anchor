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
export const Check = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon check', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <path
                    d="M14.627 5.133l-7.637 7.5a1.282 1.282 0 0 1-1.8 0l-3.817-3.75a1.235 1.235 0 0 1 0-1.768 1.288 1.288 0 0 1 1.799 0L6.09 9.982l6.737-6.617a1.291 1.291 0 0 1 1.8 0c.496.488.496 1.28 0 1.768"
                    fill={color}
                />
            </g>
        </svg>
    </StyledIcon>
);

export default Check;
