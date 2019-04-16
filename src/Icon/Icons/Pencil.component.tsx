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
export const Pencil = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon pencil', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M11.224 6.792L9.208 4.785l1.14-1.134 1.995 2.02-1.119 1.121zM5.37 12.667H3.333v-2.083l4.893-4.853 2.032 2.025-4.888 4.911zm8.43-7.492l-2.987-2.974a.67.67 0 0 0-.957 0L2.192 9.818a.678.678 0 0 0-.192.484v2.973c0 .376.283.725.667.725h2.988a.713.713 0 0 0 .485-.222l7.66-7.63a.69.69 0 0 0 0-.973z"
                    id="pencil-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#pencil-a" />
            </g>
        </svg>
    </StyledIcon>
);

export default Pencil;
