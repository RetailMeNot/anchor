// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({ color = '#222222', scale }: IconSVGProps) => (
    <svg
        viewBox="0 0 9 9"
        width={scale}
        height={scale}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="M-3-3h16v16H-3z" />
            <g fill={color} fillRule="nonzero">
                <path d="M1.398 1.37L8.25 8.22l-.495.495-6.852-6.85C.611 1.573.55 1.115.83.833c.283-.284.742-.222 1.035.07l6.85 6.851c.293.292.355.75.111.987l-.04.048c-.28.281-.74.218-1.031-.074l.495-.495c.033.034.055.044.036.078-.02.013-.027-.01-.065-.049L1.371 1.4c-.044-.043-.068-.047-.044-.072.025-.024.029 0 .071.043z" />
                <path d="M8.468 1.617l.248.248-6.851 6.85c-.292.293-.75.355-1.012.092L.83 8.786c-.281-.281-.218-.74.073-1.032l6.85-6.85C8.046.61 8.506.549 8.767.812l.023.021c.281.281.218.74-.073 1.031l-.248-.247z" />
            </g>
        </g>
    </svg>
);
