import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path
                d="M14.954 9.302c1.395-.716 1.395-1.889 0-2.604L2.497.3C1.124-.407 0 .18 0 1.601v12.797c0 1.422 1.124 2.008 2.497 1.302l12.457-6.398z"
                id="play-a"
            />
        </defs>
        <use fill="currentColor" xlinkHref="#play-a" fillRule="evenodd" />
    </>
);

export const Play = iconHOC(svgPath, 'play');
