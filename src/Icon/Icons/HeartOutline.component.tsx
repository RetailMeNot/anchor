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

/* eslint-disable max-len */
export const HeartOutline = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon heart-outline', className)}
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
                    d="M13.737 7.796l-5.28 5.479c-.094.099-.34.354-.46.39-.112-.035-.35-.282-.453-.39L2.267 7.798a3.195 3.195 0 0 1-.002-4.513 3.224 3.224 0 0 1 2.3-.952c.852 0 1.65.323 2.258.911l1.174 1.42L9.109 3.32c.657-.646 1.46-.987 2.329-.987.87 0 1.687.338 2.299.952a3.198 3.198 0 0 1 0 4.511m.944-5.454A4.551 4.551 0 0 0 11.438 1c-1.23 0-2.392.488-3.316 1.421l-.124.15-.19-.229A4.55 4.55 0 0 0 4.565 1c-1.228 0-2.38.477-3.244 1.342-1.758 1.763-1.76 4.628-.014 6.382l5.275 5.474c.305.319.767.802 1.415.802.652 0 1.134-.501 1.422-.8l5.262-5.463a4.535 4.535 0 0 0 0-6.395"
                    id="heart-outline-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill="currentColor" xlinkHref="#heart-outline-a" />
            </g>
        </svg>
    </StyledIcon>
);
