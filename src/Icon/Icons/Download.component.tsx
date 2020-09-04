import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <>
        <defs>
            <path
                d="M10.395 11.85a.727.727 0 1 1 1.028 1.028l-2.908 2.91A.724.724 0 0 1 8 16a.724.724 0 0 1-.514-.212l-2.91-2.91a.727.727 0 1 1 1.029-1.028l1.668 1.668v-7.7a.726.726 0 1 1 1.455 0v7.7l1.667-1.668zM12.182 0A1.82 1.82 0 0 1 14 1.818v6.573a1.82 1.82 0 0 1-1.818 1.818h-2.121V8.754h2.121c.2 0 .363-.163.363-.363V1.818c0-.2-.163-.363-.363-.363H3.818c-.2 0-.364.163-.364.363v6.573c0 .2.164.363.364.363H5.94v1.455H3.818A1.82 1.82 0 0 1 2 8.391V1.818A1.82 1.82 0 0 1 3.818 0h8.364z"
                id="download-a"
            />
        </defs>

        <g fill="none" fillRule="evenodd">
            <path d="M0 0h16v16H0z" />
            <use fill="currentColor" xlinkHref="#download-a" />
        </g>
    </>
);

export const Download = iconHOC(svgPath, 'download');
