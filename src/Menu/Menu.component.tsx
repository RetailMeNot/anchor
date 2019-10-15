// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
import { lighten } from 'polished';
// ANCHOR
import { get } from '../utils/get/get';
import { ItemProps } from './Item/Item.component';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';

enum MenuSizes {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

export type MenuSizeProps = MenuSizes | 'sm' | 'md' | 'lg';

interface MenuProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    children?:
        | Array<React.ReactElement<ItemProps>>
        | React.ReactElement<ItemProps>;
    className?: string;
    size?: MenuSizeProps;
    // Color
    background?: string;
    color?: string;
    // Configuration
    justify?: 'flex-start' | 'flex-end';
}

const MenuSizeStyles = {
    sm: {
        menu: css``,
        items: css`
            font-size: 0.75rem;
            line-height: 0.75rem;
            font-weight: 500;
            padding: 0.5rem 0.75rem;
        `,
    },
    md: {
        menu: css``,
        items: css`
            border-radius: base;
            font-weight: 600;
            padding: 1rem 0.75rem;
        `,
    },
    lg: {
        menu: css``,
        items: css`
            border-radius: base;
            font-weight: 600;
            padding: 1.5rem 1.25rem;
        `,
    },
};

const sizeVariant = variant({
    key: 'menu.sizes',
    prop: 'size',
    default: 'md',
    variants: MenuSizeStyles,
});

const StyledMenu = styled('nav')<MenuProps>`
    display: flex;
    width: 100%;
    ${spaceStyles};
    min-width: 15.625rem;
    margin: 0;
    padding: 0;

    ${({ background = 'primary.base' }) =>
        css({
            background: th.color(background),
        })};
    font-size: 0.875rem;
    font-family: base;
    border-radius: base;

    .anchor-menu-item {
        line-height: 1.125rem;
        ${({ color = 'white' }) => css({ color })};
        transition: background-color 250ms, color 250ms;
        margin: 0 0.125rem;

        &:hover {
            ${({ color }) =>
                css({
                    color: color ? lighten(20, color) : 'white',
                })};
            background-color: rgba(255, 255, 255, 0.1);
        }

        &:active,
        &.active {
            ${({ color }) =>
                css({
                    color: color ? lighten(20, color) : 'white',
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

        ${props => get(sizeVariant(props), 'items')};
    }

    /* Positioning */
    ${({ justify = 'flex-start' }) =>
        css({
            justifyContent: justify,
        })};

    /* Menu Sizes */
    ${props => get(sizeVariant(props), 'menu')};
`;

export const Menu: React.FunctionComponent<MenuProps> = ({
    className,
    children,
    size = 'md',
    ...props
}: MenuProps): React.ReactElement<MenuProps> => (
    <StyledMenu
        size={size}
        className={classNames('anchor-menu', className)}
        {...props}
    >
        {children}
    </StyledMenu>
);
