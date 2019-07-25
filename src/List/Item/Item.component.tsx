// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../../Typography';

export interface ItemProps {
    onMouseOver?: (event: React.MouseEvent) => any;
    onMouseOut?: (event: React.MouseEvent) => any;
    onSelect?: (...props: any) => any;
    active?: boolean;
    value?: any;
    children?: any;
    className?: string;
    href?: string;
    prefix?: React.ReactElement<any>;
    suffix?: React.ReactElement<any>;
    size?: 'sm' | 'lg';
}

const StyledItem = styled('a')<ItemProps>`
    box-sizing: border-box;
    display: flex;
    border-radius: base;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 500ms;
    background-color: neutrals.white.base;
    text-decoration: none;
    height: 2.75rem;
    margin-bottom: 0.25rem;

    &:hover {
        background-color: neutrals.silver.light;
    }

    &.active {
        background-color: neutrals.silver.base;
    }
`;

const StyledTypography = styled(Typography)`
    display: flex;
    align-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;

    .item-prefix {
        display: flex;
        align-items: center;
        flex: 0 0 0;
    }
    .item-main {
        display: flex;
        align-items: center;
        flex: 4 1 auto;
    }
    .item-suffix {
        display: flex;
        align-items: center;
        flex: 0 0 0;
        text-align: right;
        justify-content: flex-end;
    }
    &.lg {
        font-size: 1rem;
    }
    &.sm {
        font-size: 0.875rem;
    }
`;

export const Item = ({
    className,
    children,
    onSelect = () => null,
    onMouseOver = () => null,
    onMouseOut = () => null,
    value,
    active,
    href,
    prefix,
    suffix,
    size = 'lg',
    ...props
}: ItemProps): React.ReactElement<any> => (
    <StyledItem
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={() => onSelect(value)}
        className={classNames('anchor-list-item', className, { active })}
        href={href}
        {...props}
    >
        <StyledTypography
            tag="span"
            color="charcoal"
            hue="light"
            className={size}
        >
            {prefix && React.cloneElement(prefix, { className: 'item-prefix' })}
            {prefix || suffix ? (
                <span className="item-main">{children}</span>
            ) : (
                children
            )}
            {suffix && React.cloneElement(suffix, { className: 'item-suffix' })}
        </StyledTypography>
    </StyledItem>
);
