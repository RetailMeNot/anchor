// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Typography } from '../../Typography';
// THEME
import { colors, sizes, variables } from '../../theme';

export interface DividerProps {
    onMouseOver?: (event: React.MouseEvent) => any;
    onMouseOut?: (event: React.MouseEvent) => any;
    onSelect?: (...props: any) => any;
    active?: boolean;
    value?: string | number;
    children?: any;
    className?: string;
}

const StyledDivider = styled.a`
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

const DefaultProps: DividerProps = {};

export const Divider = ({
    className,
    children,
    onSelect = () => null,
    onMouseOver = () => null,
    onMouseOut = () => null,
    active,
    value,
    ...props
}: DividerProps = DefaultProps): React.ReactElement<any> => (
    <StyledDivider
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={() => onSelect(value ? value : children)}
        className={classNames('anchor-list-item', className, { active })}
        {...props}
    >
        <Typography color="charcoal">{children ? children : value}</Typography>
    </StyledDivider>
);

Divider.defaultProps = DefaultProps;

export default Divider;
