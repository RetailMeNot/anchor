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
export const CloseSmall = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
    ...props
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon close-small', className)}
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
                <path d="M0 0h16v16H0z" />
                <path
                    d="M9.501 9.734L6.075 6.309c-.083-.084-.1-.205-.036-.269l.001-.001c.064-.064.185-.047.269.036l3.425 3.426c.084.084.1.205.037.268l-.001.002c-.064.064-.185.047-.269-.037"
                    stroke={color}
                    strokeWidth=".8"
                    fill="#FFF"
                />
                <path
                    d="M10.017 6.591L6.59 10.017c-.225.226-.594.276-.81.057l-.025-.022c-.24-.24-.189-.608.037-.834l3.425-3.425c.225-.226.595-.277.811-.058l.025.023c.24.24.188.607-.037.833l-.283-.282.05.05-3.426 3.425c.058-.058.076-.185-.06-.319l.025.023c-.112-.112-.24-.095-.297-.037L9.45 6.026l.283.283-.283-.283c-.058.058-.075.185.06.318l-.025-.023c.112.113.24.095.298.037l.233.233z"
                    fill={color}
                    fillRule="nonzero"
                />
            </g>
        </svg>
    </StyledIcon>
);
