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
export const Question = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon question', className)}
        scale={scale}
        {...props}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <circle fill={color} cx="8" cy="8" r="8" />
                <path
                    d="M8.022 12c-.19 0-.366-.034-.53-.102a1.442 1.442 0 0 1-.43-.274 1.217 1.217 0 0 1-.29-.409 1.272 1.272 0 0 1-.103-.516 1.275 1.275 0 0 1 .393-.92 1.389 1.389 0 0 1 1.92 0 1.275 1.275 0 0 1 0 1.845 1.442 1.442 0 0 1-.431.274c-.164.068-.34.102-.53.102zM9.57 8.301c-.153.093-.256.183-.311.269a.495.495 0 0 0-.082.269.28.28 0 0 1-.28.28H7.253a.398.398 0 0 1-.397-.399c0-.215.027-.403.081-.564.055-.161.13-.307.224-.436.095-.129.207-.249.338-.36.131-.11.273-.22.426-.328l.185-.129c.116-.079.206-.156.267-.231a.375.375 0 0 0 .093-.242c0-.15-.045-.256-.136-.317a.564.564 0 0 0-.322-.091c-.24 0-.411.084-.513.252a1.11 1.11 0 0 0-.153.586L5 6.56c.044-.46.158-.852.344-1.178.185-.326.418-.592.698-.796.28-.204.593-.353.938-.446.345-.093.704-.14 1.075-.14.334 0 .676.038 1.025.113.35.075.665.2.95.376.283.176.515.409.697.7.182.29.273.646.273 1.07 0 .25-.033.472-.098.666-.066.193-.16.37-.284.532-.123.161-.274.31-.453.446a6.048 6.048 0 0 1-.594.398z"
                    fill="#FFF"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
