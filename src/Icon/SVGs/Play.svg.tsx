// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 16 16"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <path
                d="M14.954 9.302c1.395-.716 1.395-1.889 0-2.604L2.497.3C1.124-.407 0 .18 0 1.601v12.797c0 1.422 1.124 2.008 2.497 1.302l12.457-6.398z"
                id="icon-play"
            />
        </defs>
        <use fill={color} xlinkHref="#icon-play" fillRule="evenodd" />
    </svg>
);
