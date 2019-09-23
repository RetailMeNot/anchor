// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
import { lighten } from 'polished';
// ANCHOR
import { ItemProps } from './Item/Item.component';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    children?:
        | Array<React.ReactElement<ItemProps>>
        | React.ReactElement<ItemProps>;
    className?: string;
    size?: 'sm' | 'lg';
    // Color
    background?: string;
    color?: string;
    // Configuration
    justify?: 'flex-start' | 'flex-end';
}

const MenuSizes = {
    sm: {
        menu: css``,
        items: css`
            font-size: 0.75rem;
            line-height: 0.75rem;
            font-weight: 500;
            padding: 0.5rem 0.75rem;
        `,
    },
    lg: {
        menu: css``,
        items: css`
            border-radius: base;
            font-weight: 600;
            padding: 1rem 0.75rem;
        `,
    },
};

const sizeVariant = variant({
    key: 'menu.sizes',
    prop: 'size',
    default: 'lg',
    variants: MenuSizes,
});

const StyledMenu = styled('nav')<MenuProps>`
    display: flex;
    width: 100%;
    ${spaceStyles}
    min-width: 15.625rem;
    margin: 0;
    padding: 0;

    ${({ background = 'primary.base' }) =>
        css({
            background: th.color(background),
        })};
    font-size: 0.875rem;
    font-family: ${th('typography.fontFamily')};
    border-radius: base;

    /* TODO: use React.clone to append a run-time class here instead of using a * selector */
    .anchor-menu-item {
        line-height: 1.125rem;
        ${({ color = 'neutrals.white.base' }) => css({ color })};
        transition: background-color 250ms, color 250ms;
        margin: 0 0.125rem;

        &:hover {
            ${({ color }) =>
                css({
                    color: color ? lighten(20, color) : 'neutrals.white.base',
                })};
            background-color: rgba(255, 255, 255, 0.1);
        }

        &:active,
        &.active {
            color: ${({ color }) =>
                css({
                    color: color ? lighten(20, color) : 'neutrals.white.base',
                })};
            background-color: rgba(
                255,
                255,
                255,
                0.1
            ); // TODO: more or less opacity
        }

        &:focus {
            background-color: rgba(255, 255, 255, 0.1);
        }

        &:first-of-type {
            margin-left: 0;
        }
        &:last-of-type {
            margin-right: 0;
        }

        ${props => sizeVariant(props).items}
    }

    /* Positioning */
    ${({ justify = 'flex-start' }) =>
        css({
            justifyContent: justify,
        })};

    /* Menu Sizes */
    ${props => sizeVariant(props).menu}
`;

export const Menu: React.FunctionComponent<MenuProps> = ({
    className,
    children,
    size = 'lg',
    ...props
}: MenuProps): React.ReactElement<MenuProps> => (
    <StyledMenu
        size={size}
        className={classNames('anchor-menu', className)}
        {...props}
    >
        {/* TODO: Need to solve the container issue */}
        {children}
    </StyledMenu>
);
