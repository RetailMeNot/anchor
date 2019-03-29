// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
    color = '#222222',
    width = 16,
    height = 4,
}: IconSVGProps) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox="0 0 16 4"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <g
                id="Gift-card-Variation-2"
                transform="translate(-256.000000, -19.000000)"
                fill={color}
            >
                <g id="Group-2" transform="translate(255.000000, 12.000000)">
                    <g
                        id="Overflow-dots"
                        transform="translate(1.000000, 7.000000)"
                    >
                        <circle
                            id="Oval-4"
                            transform="translate(2.000000, 2.000000) rotate(-450.000000) translate(-2.000000, -2.000000) "
                            cx="2"
                            cy="2"
                            r="2"
                        />
                        <circle
                            id="Oval-4-Copy"
                            transform="translate(8.000000, 2.000000) rotate(-450.000000) translate(-8.000000, -2.000000) "
                            cx="8"
                            cy="2"
                            r="2"
                        />
                        <circle
                            id="Oval-4-Copy-3"
                            transform="translate(14.000000, 2.000000) rotate(-450.000000) translate(-14.000000, -2.000000) "
                            cx="14"
                            cy="2"
                            r="2"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);
