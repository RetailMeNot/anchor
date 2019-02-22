// REACT
import * as React from 'react';
// COMPONENTS
import { IconSVGProps } from '../Icon.component';

/* tslint:disable max-line-length */
export default ({
  color = '#222222',
  height = 10,
  width = 10,
}: IconSVGProps) => (
    <svg
      height={height}
      width={width}
      fill={color}
      viewBox="0 0 16 16"
    >
      <g>
        <path d="M14.18 0H1.82A1.82 1.82 0 0 0 0 1.82v12.36A1.82 1.82 0 0 0 1.82 16h12.36A1.82 1.82 0 0 0 16 14.18V1.82A1.82 1.82 0 0 0 14.18 0zm.36 14.18a.36.36 0 0 1-.36.36H1.82a.36.36 0 0 1-.36-.36V1.82a.36.36 0 0 1 .36-.36h12.36a.36.36 0 0 1 .36.36z" />
        <path d="M11.12 5.3L7.27 9.15 5.6 7.5a.73.73 0 0 0-1 1l2.16 2.2a.73.73 0 0 0 1 0l4.36-4.36a.73.73 0 0 0-1-1z" />
      </g>
  </svg>
);
