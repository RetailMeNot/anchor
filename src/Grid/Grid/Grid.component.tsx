// REACT
import * as React from 'react';
// VENDOR
import { Grid as StyledGrid, Cell as StyledCell } from 'styled-css-grid';

interface GridProps {
  className?: string;
  columns?: number | string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  height?: string;
  minRowHeight?: string;
  flow?: string;
  rows?: number | string;
  areas?: string[];
  justifyContent?: string;
  alignContent?: string;
  children: any;
}

interface CellProps {
  className?: string;
  width?: number;
  height?: number;
  top?: number | string;
  left?: number | string;
  middle?: boolean;
  center?: boolean;
  area?: string;
  children: any;
}

export const Grid = (props: GridProps) => <StyledGrid {...props} />;
export const Cell = (props: CellProps) => <StyledCell {...props} />;
