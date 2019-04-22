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
export const Heart = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon heart', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M14.68 2.343A4.55 4.55 0 0 0 11.439 1c-1.23 0-2.393.489-3.317 1.422l-.123.15-.19-.229A4.55 4.55 0 0 0 4.564 1 4.55 4.55 0 0 0 1.32 2.343c-1.758 1.762-1.76 4.628-.014 6.381l5.275 5.475c.306.319.767.801 1.415.801.652 0 1.134-.5 1.422-.799l5.262-5.463a4.535 4.535 0 0 0 0-6.395"
                    id="heart-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#heart-a" />
            </g>
        </svg>
    </StyledIcon>
);
