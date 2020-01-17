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
export const Close = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon close', className)}
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
                    <path d="M4.398 4.37l6.852 6.85-.495.495-6.852-6.85c-.292-.292-.354-.75-.073-1.032.283-.284.742-.222 1.035.07l6.85 6.851c.293.292.355.75.111.987l-.04.048c-.28.281-.74.218-1.031-.074l.495-.495c.033.034.055.044.036.078-.02.013-.027-.01-.065-.049L4.371 4.4c-.044-.043-.068-.047-.044-.072.025-.024.029 0 .071.043z" />
                    <path d="M11.468 4.617l.248.248-6.851 6.85c-.292.293-.75.355-1.012.092l-.023-.021c-.281-.281-.218-.74.073-1.032l6.85-6.85c.292-.293.752-.355 1.013-.092l.023.021c.281.281.218.74-.073 1.031l-.248-.247z" />
                </g>
            </g>
        </svg>
    </StyledIcon>
);
