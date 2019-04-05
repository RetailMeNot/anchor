// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 12 12"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-2-2h16v16H-2z" />
            <g fill={color} fillRule="nonzero">
                <path d="M11.035 5.13c.413 0 .781.28.781.677 0 .402-.368.682-.781.683H1.346c-.412 0-.781-.28-.776-.62l-.006-.062c0-.398.37-.678.782-.678h9.689z" />
                <path d="M5.51 10.654V.965c0-.413.28-.78.651-.78l.032-.001c.397 0 .677.369.677.781v9.688c0 .413-.28.783-.65.78l-.032.002c-.398 0-.676-.368-.677-.78z" />
            </g>
        </g>
    </svg>
);
