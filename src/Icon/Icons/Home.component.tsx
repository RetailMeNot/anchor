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
export const Home = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon home', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill={color} fillRule="nonzero">
                <path d="M3 14.333h10v-4.55L8 5.337 3 9.782v4.551zm-1-5L8 4l6 5.333v5.334a.667.667 0 0 1-.667.666H2.667A.667.667 0 0 1 2 14.667V9.333z" />
                <path d="M7 11v3.333h2V11H7zm2.333-1c.369 0 .667.298.667.667v4a.667.667 0 0 1-.667.666H6.667A.667.667 0 0 1 6 14.667v-4c0-.369.298-.667.667-.667h2.666zM12.875 8.333h1.438L8 2.426 1.687 8.333h1.438L8 4l4.875 4.333zm-.38 1L8 5.338 3.505 9.333H.843A.667.667 0 0 1 .387 8.18l7.157-6.697a.667.667 0 0 1 .911 0l7.158 6.697a.667.667 0 0 1-.456 1.153h-2.662z" />
            </g>
        </svg>
    </StyledIcon>
);

export default Home;
