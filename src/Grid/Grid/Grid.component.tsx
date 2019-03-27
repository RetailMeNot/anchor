// REACT
import * as React from 'react';
// VENDOR
import { Grid as StyledGrid, Cell as StyledCell } from 'styled-css-grid';

type JustifyContent =
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
type AlignContent =
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit';

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
    justifyContent?: JustifyContent;
    alignContent?: AlignContent;
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
