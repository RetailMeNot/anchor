// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import {
    variant as createVariant,
    margin as marginStyles,
    MarginProps,
    width as widthStyles,
    WidthProps,
    height as heightStyles,
    HeightProps,
    maxWidth as maxWidthStyles,
    MaxWidthProps,
    minWidth as minWidthStyles,
    MinWidthProps,
    padding as paddingStyles,
    PaddingProps,
    textAlign as textAlignStyles,
    TextAlignProps,
    fontSize as fontSizeStyles,
    FontSizeProps,
    fontWeight as fontWeightStyles,
    FontWeightProps,
    color as colorStyles,
} from '@xstyled/system';

interface SizeTheme {
    [K: string]: {
        cell?: any;
        row?: any;
        header?: any;

        td?: any;
        th?: any;
    };
}

const TableSizes: SizeTheme = {
    sm: {
        th: { padding: '0.25rem 0.75rem' },
        td: { padding: '0.25rem 0.75rem' },
    },
    md: {
        th: { padding: '0.5rem 1.25rem 0.25rem' },
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
        MarginProps,
        WidthProps,
        MaxWidthProps,
        MinWidthProps {
    borderRadius?: string;
    size?: string;
}

const StyledTable = styled('table')<TableProps>`
    border: base;
    border-spacing: 0;

    overflow: hidden;

    color: text.light;
    font-weight: 500;

    ${sizeVariantStyles}
    ${marginStyles}
    ${widthStyles}
    ${maxWidthStyles}
    ${minWidthStyles}
    ${({ borderRadius = 'base' }) =>
        css({
            borderRadius,
        })}

    tbody tr:nth-child(odd) {
        background-color: background.base;
    }
    tr {
        border: dark;
    }

    th {
        white-space: nowrap;
    }
`;

StyledTable.defaultProps = { borderRadius: 'base' };

export const Table = ({
    className,
    children,
    ...props
}: TableProps): React.ReactElement<TableProps> => (
    <StyledTable className={classNames('anchor-table', className)} {...props}>
        {children}
    </StyledTable>
);

// Table.Row
// ----------------------------------------------------------------------------------

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export const TableRow = ({
    className,
    children,
    ...props
}: TableRowProps): React.ReactElement<TableRowProps> => (
    <tr className={classNames('anchor-table-row', className)} {...props}>
        {children}
    </tr>
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
        WidthProps,
        MaxWidthProps,
        MinWidthProps,
        PaddingProps,
        HeightProps {
    align?: 'center' | 'left' | 'right';
}

const StyledTd = styled('td')<TableCellProps>`
    ${heightStyles}
    ${widthStyles}
    ${maxWidthStyles}
    ${minWidthStyles}
    ${paddingStyles}
    ${fontSizeStyles}
    ${fontWeightStyles}
    ${colorStyles}
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
        PaddingProps,
        HeightProps {
    align?: 'center' | 'left' | 'right';
    scope?: string;
}

const StyledTh = styled('th')<TableHeaderCellProps>`
    ${heightStyles}
    ${widthStyles}
    ${maxWidthStyles}
    ${minWidthStyles}
    ${paddingStyles}
    ${fontSizeStyles}
    ${fontWeightStyles}
    ${colorStyles}
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
