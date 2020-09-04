import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <path
        d="M8 7.523l2.954 2.518a.77.77 0 0 0 1.058-.001l.014-.014a.721.721 0 0 0-.009-1.052L8.53 5.96a.767.767 0 0 0-1.048-.009l-3.506 3.03a.719.719 0 0 0-.001 1.043l.015.015a.767.767 0 0 0 1.048.01L8 7.523z"
        fill="currentColor"
        fillRule="nonzero"
    />
);

export const ChevronUp = iconHOC(svgPath, 'chevron-up');
