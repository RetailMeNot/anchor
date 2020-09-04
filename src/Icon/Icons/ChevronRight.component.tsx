import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <path
        d="M8.478 8L5.96 5.047a.77.77 0 0 1 .001-1.058l.014-.015a.721.721 0 0 1 1.052.01L10.04 7.47c.28.293.28.765.009 1.048l-3.03 3.507a.719.719 0 0 1-1.043 0l-.015-.015a.767.767 0 0 1-.01-1.047L8.477 8z"
        fill="currentColor"
        fillRule="nonzero"
    />
);

export const ChevronRight = iconHOC(svgPath, 'chevron-right');
