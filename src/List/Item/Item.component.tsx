// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// COMPONENTS
import { Typography } from '../../Typography';

export interface ItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    onMouseOver?: (event: React.MouseEvent) => any;
    onMouseOut?: (event: React.MouseEvent) => any;
    onSelect?: (...props: any) => any;
    active?: boolean;
    value?: any;
    children?: any;
    className?: string;
    href?: string;
    prefix?: any;
    suffix?: any;
    size?: 'sm' | 'lg';
    background?: string;
}

const StyledItem = styled('a')<ItemProps>`
    box-sizing: border-box;
    display: flex;
    border-radius: base;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background 500ms;
    ${({ background = 'white' }) =>
        css({
            background: th.color(background),
        })}
    text-decoration: none;
    height: 2.75rem;

    &:hover {
        background: ${th.color('neutrals.silver.light')};
    }

    &.active {
        background: ${th.color('neutrals.silver.base')};
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
        font-weight: 400;
    }
    &.sm {
        font-size: 0.875rem;
        font-weight: 500;
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
            color="neutrals.charcoal.light"
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
