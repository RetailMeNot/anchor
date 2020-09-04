import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M16 0H0v16h16z" />
        <g fill="currentColor" fillRule="nonzero">
            <path d="M2.334 8.25h11.333c.32 0 .583-.262.583-.583a.585.585 0 0 0-.583-.584H2.334a.584.584 0 0 0 0 1.167z" />
            <path d="M8.588 3.062a.25.25 0 0 0 0 .353l4.664 4.664c.227.228.6.228.828 0a.587.587 0 0 0 0-.827L9.415 2.588a.585.585 0 0 0-.828.827.25.25 0 1 0 0-.353z" />
            <path d="M14.077 8.08a.586.586 0 0 0 0-.826.586.586 0 0 0-.827 0L8.585 11.92a.585.585 0 0 0 .826.827l4.666-4.665z" />
        </g>
    </g>
);

export const ArrowForward = iconHOC(svgPath, 'arrow-forward');
