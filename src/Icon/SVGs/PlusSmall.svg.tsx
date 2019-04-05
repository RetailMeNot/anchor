// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 8 7"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-4-4h16v16H-4z" />
            <g fill={color} fillRule="nonzero">
                <path d="M3.835 6.288h-.4V1.443c0-.32.225-.615.564-.615.34-.001.566.295.566.615v4.845c0 .319-.225.615-.498.61l-.068.005c-.339 0-.564-.296-.564-.615h.4z" />
                <path d="M6.422 4.43H1.578c-.32 0-.616-.225-.615-.533v-.033c0-.338.296-.564.615-.564h4.844c.32 0 .616.226.615.534v.033c0 .338-.295.563-.614.563v-.4.07H1.577c.082 0 .184-.077.183-.267l.001.033c0-.158-.102-.236-.184-.236h4.844v.4-.4c-.082 0-.184.078-.183.267l-.001-.034c0 .16.102.238.184.237v.33z" />
            </g>
        </g>
    </svg>
);
