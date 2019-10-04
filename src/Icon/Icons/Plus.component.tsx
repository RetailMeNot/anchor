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
export const Plus = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon plus', className)}
        scale={scale}
        $color={color}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <g fill="currentColor" fillRule="nonzero">
                    <path d="M13.035 7.13c.413 0 .781.28.781.677 0 .402-.368.682-.781.683H3.346c-.412 0-.781-.28-.776-.62l-.006-.062c0-.398.37-.678.782-.678h9.689z" />
                    <path d="M7.51 12.654V2.965c0-.413.28-.78.651-.78l.032-.001c.397 0 .677.369.677.781v9.688c0 .413-.28.783-.65.78l-.032.002c-.398 0-.676-.368-.677-.78z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
