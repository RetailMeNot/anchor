import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g fill="currentColor" fillRule="nonzero">
            <path d="M7.835 10.288h-.4V5.443c0-.32.225-.615.564-.615.34-.001.566.295.566.615v4.845c0 .319-.225.615-.498.61l-.068.005c-.339 0-.564-.296-.564-.615h.4z" />
            <path d="M10.422 8.43H5.578c-.32 0-.616-.225-.615-.533v-.033c0-.338.296-.564.615-.564h4.844c.32 0 .616.226.615.534v.033c0 .338-.295.563-.614.563v-.4.07H5.577c.082 0 .184-.077.183-.267l.001.033c0-.158-.102-.236-.184-.236h4.844v.4-.4c-.082 0-.184.078-.183.267l-.001-.034c0 .16.102.238.184.237v.33z" />
        </g>
    </g>
);

export const PlusSmall = iconHOC(svgPath, 'plus-small');
