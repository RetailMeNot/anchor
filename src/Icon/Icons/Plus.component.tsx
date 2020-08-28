import * as React from 'react';

import { iconHOC } from '../utils';

/* eslint-disable max-len */
const svgPath = (
    <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z" />
        <g fill="currentColor" fillRule="nonzero">
            <path d="M13.035 7.13c.413 0 .781.28.781.677 0 .402-.368.682-.781.683H3.346c-.412 0-.781-.28-.776-.62l-.006-.062c0-.398.37-.678.782-.678h9.689z" />
            <path d="M7.51 12.654V2.965c0-.413.28-.78.651-.78l.032-.001c.397 0 .677.369.677.781v9.688c0 .413-.28.783-.65.78l-.032.002c-.398 0-.676-.368-.677-.78z" />
        </g>
    </g>
);

export const Plus = iconHOC(svgPath, 'plus');
