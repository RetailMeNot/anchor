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
export const Camera = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon camera', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <path
                    d="M4.366 3.14a1.267 1.267 0 0 1-1.259 1.127H1.333A.733.733 0 0 0 .6 5v8.667c0 .405.328.733.733.733h13.334a.733.733 0 0 0 .733-.733V5a.733.733 0 0 0-.733-.733h-1.774a1.267 1.267 0 0 1-1.259-1.127l-.099-.888a.733.733 0 0 0-.728-.652H5.193a.733.733 0 0 0-.728.652l-.1.888z"
                    stroke={color}
                    strokeWidth="1.2"
                />
                <path
                    d="M10.133 9A2.137 2.137 0 0 0 8 6.867 2.137 2.137 0 0 0 5.867 9c0 1.175.958 2.133 2.133 2.133A2.137 2.137 0 0 0 10.133 9zm1.2 0A3.337 3.337 0 0 1 8 12.333 3.337 3.337 0 0 1 4.667 9 3.337 3.337 0 0 1 8 5.667 3.337 3.337 0 0 1 11.333 9z"
                    fill={color}
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
