// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Typography } from '../../Typography';
// THEME
import { colors, sizes, variables } from '../../theme';

export interface ItemProps {
    onMouseOver?: (event: React.MouseEvent) => any;
    onMouseOut?: (event: React.MouseEvent) => any;
    onSelect?: (...props: any) => any;
    active?: boolean;
    value?: string | number;
    children?: any;
    className?: string;
}

const StyledItem = styled.a`
    display: flex;
    border-radius: ${variables.borderRadius};
    padding: ${sizes.padding.sm} ${sizes.padding.md};
    cursor: pointer;
    transition: background-color 500ms;
    background-color: ${colors.white.base};
    &:hover,
    &.active {
        background-color: ${colors.silver.base};
    }
`;

const DefaultProps: ItemProps = {};

export const Item = ({
    className,
    children,
    onSelect = () => null,
    onMouseOver = () => null,
    onMouseOut = () => null,
    active,
    value,
    ...props
}: ItemProps = DefaultProps): React.ReactElement<any> => (
    <StyledItem
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={() => onSelect(value ? value : children)}
        className={classNames('anchor-list-item', className, { active })}
        {...props}
    >
        <Typography color="charcoal">{children ? children : value}</Typography>
    </StyledItem>
);

Item.defaultProps = DefaultProps;

export default Item;
