// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { colors } from '../../theme';

export interface ItemProps {
    path: string;
    label?: string;
    children?: any;
    className?: string;
    active?: boolean;
    // TODO: do I need this?
    size?: 'small' | 'large';
    // TODO: tag to allow element overrides
    as?: any;
    type?: any;
}

const StyledItem = styled.a`
    cursor: pointer;
    text-align: center;
    color: ${colors.silver.dark};
    text-decoration: none;
    transition: color 250ms;

    // Disable Select
    user-select: none;
    -webkit-touch-callout: none;

    // TODO: this doesn't go here (Law of Demeter)
    /* Icons */
    svg {
        max-width: 8px;
    }
`;

const DefaultProps: ItemProps = {
    path: '/',
    as: 'a',
};

export const Item = ({
    className,
    children,
    label,
    size,
    active,
    ...props
}: ItemProps = DefaultProps): React.ReactElement<any> => (
    <StyledItem
        className={classNames('anchor-menu-item', className, { active })}
        {...props}
    >
        {label ? label : children}
    </StyledItem>
);

Item.defaultProps = DefaultProps;

export default Item;
