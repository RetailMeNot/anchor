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
export const BarCode = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon bar-code', className)}
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
                    d="M2.881 10h-.097A.786.786 0 0 1 2 9.215V2.796c0-.433.352-.784.785-.784h.097c.434 0 .785.351.785.784v6.42a.785.785 0 0 1-.785.784zm2.536 0A.417.417 0 0 1 5 9.583V2.428a.417.417 0 0 1 .833 0v7.155c0 .23-.187.417-.417.417zm2.63 0h-.096a.786.786 0 0 1-.785-.785V2.796c0-.433.352-.784.785-.784h.097c.434 0 .785.351.785.784v6.42a.785.785 0 0 1-.785.784zm2.536 0a.417.417 0 0 1-.417-.417V2.428a.417.417 0 0 1 .834 0v7.155c0 .23-.187.417-.417.417zm2.632 0h-.097a.785.785 0 0 1-.785-.785V2.796c0-.433.35-.784.785-.784h.097c.434 0 .785.351.785.784v6.42a.785.785 0 0 1-.785.784zm1.723.673a.267.267 0 0 1-.266.266H1.327a.266.266 0 0 1-.265-.266V1.327c0-.146.118-.265.265-.265h13.345c.147 0 .266.119.266.265v9.346zM14.672 0H1.327C.595 0 0 .596 0 1.327v9.346C0 11.404.595 12 1.327 12h13.345A1.33 1.33 0 0 0 16 10.673V1.327A1.33 1.33 0 0 0 14.672 0z"
                    id="bar-code-a"
                />
            </defs>

            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use
                    fill="currentColor"
                    xlinkHref="#bar-code-a"
                    transform="translate(0 2)"
                />
            </g>
        </svg>
    </StyledIcon>
);
