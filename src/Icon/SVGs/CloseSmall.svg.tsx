// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', width = 6, height = 6 }: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path
                d="M4.501 4.734L1.075 1.309c-.083-.084-.1-.205-.036-.269l.001-.001c.064-.064.185-.047.269.036l3.425 3.426c.084.084.1.205.037.268l-.001.002c-.064.064-.185.047-.269-.037"
                stroke={color}
                strokeWidth=".8"
                fill="#FFF"
            />
            <path
                d="M5.017 1.591L1.59 5.017c-.225.226-.594.276-.81.057l-.025-.022c-.24-.24-.189-.608.037-.834L4.218.793c.225-.226.595-.277.811-.058l.025.023c.24.24.188.607-.037.833l-.283-.282.05.05-3.426 3.425c.058-.058.076-.185-.06-.319l.025.023c-.112-.112-.24-.095-.297-.037L4.45 1.026l.283.283-.283-.283c-.058.058-.075.185.06.318l-.025-.023c.112.113.24.095.298.037l.233.233z"
                fill={color}
                fillRule="nonzero"
            />
        </g>
    </svg>
);
