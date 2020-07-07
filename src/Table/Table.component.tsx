// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import {
    th,
    variant as createVariant,
    width as widthStyles,
    WidthProps,
    height as heightStyles,
    HeightProps,
    maxWidth as maxWidthStyles,
    MaxWidthProps,
    minWidth as minWidthStyles,
    MinWidthProps,
    textAlign as textAlignStyles,
    TextAlignProps,
    fontSize as fontSizeStyles,
    FontSizeProps,
    fontWeight as fontWeightStyles,
    FontWeightProps,
    color as colorStyles,
    BorderRadiusProps,
    borderRadius as borderRadiusStyles,
    BorderProps,
    border as borderStyles,
    space as spaceStyles,
    SpaceProps,
} from '@xstyled/system';

interface SizeTheme {
    [K: string]: any;
}

const TableSizes: SizeTheme = {
    sm: {
        th: { padding: '0.25rem 0.75rem' },
        td: { padding: '0.25rem 0.75rem' },
    },
    md: {
        th: { padding: '0.5rem 1.25rem' },
        td: { padding: '0.5rem 1.25rem' },
    },
};

export const sizeVariantStyles = createVariant({
    key: 'table.sizes',
    prop: 'size',
    default: 'md',
    variants: TableSizes,
});

// Table
// ----------------------------------------------------------------------------------

interface TableProps
    extends React.HTMLAttributes<HTMLTableElement>,
        FontSizeProps,
        FontWeightProps,
        BorderRadiusProps,
        BorderProps,
        MaxWidthProps,
        MinWidthProps,
        SpaceProps {
    borderRadius?: string;
    background?: string;
    altBackground?: string;
    width?: any;
    height?: any;
    size?: string;
}

const StyledTable = styled('table')<TableProps>`
    border-spacing: 0;
    overflow: hidden;

    ${sizeVariantStyles}
    ${borderStyles}
    ${widthStyles}
    ${maxWidthStyles}
    ${minWidthStyles}
    ${borderRadiusStyles}
    ${colorStyles}
    ${fontWeightStyles}
    ${fontSizeStyles}
    ${spaceStyles}
    ${({ background }) => css({ background: th.color(background) })}

    tbody tr:nth-child(odd) {
        ${({ altBackground }) => css({ background: th.color(altBackground) })}
    }

    th {
        white-space: nowrap;
    }
`;

export const Table = ({
    className,
    children,
    ...props
}: TableProps): React.ReactElement<TableProps> => (
    <StyledTable className={classNames('anchor-table', className)} {...props}>
        {children}
    </StyledTable>
);

Table.defaultProps = {
    color: 'text.light',
    fontWeight: 500,
    border: 'base',
    borderRadius: 'base',
    background: 'white',
    altBackground: 'background.base',
};

// Table.Row
// ----------------------------------------------------------------------------------

interface TableRowProps
    extends React.HTMLAttributes<HTMLTableRowElement>,
        HeightProps,
        SpaceProps {
    background?: string;
}

const StyledRow = styled('tr')<TableRowProps>`
    ${heightStyles}
    ${colorStyles}
    ${spaceStyles}
    ${({ background }) => css({ background: th.color(background) })}
`;

export const TableRow = ({
    className,
    children,
    ...props
}: TableRowProps): React.ReactElement<TableRowProps> => (
    <StyledRow className={classNames('anchor-table-row', className)} {...props}>
        {children}
    </StyledRow>
);

Table.Row = TableRow;

// Table.Body
// ----------------------------------------------------------------------------------

interface TableBodyProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody = ({
    className,
    children,
    ...props
}: TableBodyProps): React.ReactElement<TableBodyProps> => (
    <tbody className={classNames('anchor-table-body', className)} {...props}>
        {children}
    </tbody>
);

Table.Body = TableBody;

// Table.Head
// ----------------------------------------------------------------------------------

interface TableHeadProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHead = ({
    className,
    children,
    ...props
}: TableHeadProps): React.ReactElement<TableHeadProps> => (
    <thead className={classNames('anchor-table-head', className)} {...props}>
        {children}
    </thead>
);

Table.Head = TableHead;

// Table.Footer
// ----------------------------------------------------------------------------------

interface TableFooterProps
    extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableFooter = ({
    className,
    children,
    ...props
}: TableFooterProps): React.ReactElement<TableFooterProps> => (
    <tfoot className={classNames('anchor-table-footer', className)} {...props}>
        {children}
    </tfoot>
);

Table.Footer = TableFooter;

// Table.Cell
// ----------------------------------------------------------------------------------

interface TableCellProps
    extends React.HTMLAttributes<HTMLTableCellElement>,
        FontSizeProps,
        FontWeightProps,
        TextAlignProps,
        MaxWidthProps,
        MinWidthProps,
        SpaceProps {
    align?: 'center' | 'left' | 'right';
    height?: any;
    width?: any;
}

const StyledTd = styled('td')<TableCellProps>`
    ${heightStyles}
    ${widthStyles}
    ${maxWidthStyles}
    ${minWidthStyles}
    ${fontSizeStyles}
    ${fontWeightStyles}
    ${colorStyles}
    ${spaceStyles}
    ${({ align }) => textAlignStyles({ textAlign: align })}
`;

export const TableCell = ({
    className,
    children,
    ...props
}: TableCellProps): React.ReactElement<TableCellProps> => (
    <StyledTd className={classNames('anchor-table-cell', className)} {...props}>
        {children}
    </StyledTd>
);

Table.Cell = TableCell;

// Table.HeaderCell
// ----------------------------------------------------------------------------------

interface TableHeaderCellProps
    extends React.HTMLAttributes<HTMLTableHeaderCellElement>,
        FontSizeProps,
        FontWeightProps,
        TextAlignProps,
        WidthProps,
        MaxWidthProps,
        MinWidthProps,
        HeightProps,
        SpaceProps {
    align?: 'center' | 'left' | 'right';
    scope?: string;
}

const StyledTh = styled('th')<TableHeaderCellProps>`
    ${heightStyles}
    ${widthStyles}
    ${maxWidthStyles}
    ${minWidthStyles}
    ${fontSizeStyles}
    ${fontWeightStyles}
    ${colorStyles}
    ${spaceStyles}
    ${({ align }) => textAlignStyles({ textAlign: align })}
`;

export const TableHeaderCell = ({
    className,
    children,
    ...props
}: TableHeaderCellProps): React.ReactElement<TableHeaderCellProps> => (
    <StyledTh
        className={classNames('anchor-table-header-cell', className)}
        {...props}
    >
        {children}
    </StyledTh>
);

Table.HeaderCell = TableHeaderCell;
