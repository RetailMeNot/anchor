// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
import classNames from 'classnames';
// COMPONENTS & UTILS
import { debugColor, FLOW, GridContext } from '../utils';
import { Cell } from '../Cell';

type Flow = keyof typeof FLOW;

// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
type Justifycontent =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'right'
    | 'safe center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unsafe center'
    | 'unset';

// https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
type AlignContent =
    | 'center'
    | 'baseline'
    | 'end'
    | 'first baseline'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'last baseline'
    | 'normal'
    | 'safe center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unsafe center'
    | 'unset';

interface GridProps extends SpaceProps {
    alignContent?: AlignContent;
    areas?: string[];
    children?: any;
    className?: string;
    columnGap?: string;
    columns?: number | string;
    debug?: boolean;
    flow?: Flow;
    gap?: string;
    height?: string;
    justifyContent?: Justifycontent;
    minRowHeight?: string;
    rowGap?: string;
    rows?: number | string;
}

const frGetter = (value: number | string) =>
    typeof value === 'number' ? `repeat(${value}, 1fr)` : value;

const formatAreas = (areas: string[]) =>
    areas.map(area => `'${area}'`).join(' ');

const StyledGrid = styled('div')<GridProps>`
    display: grid;
    ${({
        alignContent,
        areas,
        columnGap,
        columns = 12,
        debug,
        flow = FLOW.row,
        gap = '0.5rem',
        height = 'auto',
        justifyContent,
        minRowHeight = '1.25rem',
        rowGap,
        rows,
    }) => css`
        height: ${height};
        grid-auto-flow: ${flow};
        grid-auto-rows: minmax(${minRowHeight}, auto);
        ${rows && `grid-template-rows: ${frGetter(rows)}`};
        grid-template-columns: ${frGetter(columns)};
        grid-gap: ${gap};
        ${columnGap && `column-gap: ${columnGap}`};
        ${rowGap && `row-gap: ${rowGap}`};
        ${areas && `grid-template-areas: ${formatAreas(areas)}`};
        ${justifyContent && `justify-content: ${justifyContent}`};
        ${alignContent && `align-content: ${alignContent}`};
        ${debug && `background-color: ${debugColor}`};
    `}

    ${spaceStyles}
`;

export const Grid = ({
    alignContent,
    areas,
    children,
    className,
    columns,
    debug = false,
    flow,
    gap,
    rowGap,
    columnGap,
    justifyContent,
    rows,
    ...props
}: GridProps) => (
    <StyledGrid
        areas={areas}
        className={classNames('anchor-grid', className)}
        columns={columns}
        debug={debug}
        flow={flow}
        gap={gap}
        rowGap={rowGap}
        columnGap={columnGap}
        justifyContent={justifyContent}
        rows={rows}
        {...props}
    >
        <GridContext.Provider value={{ debug }}>
            {children}
        </GridContext.Provider>
    </StyledGrid>
);

Grid.Cell = Cell;
