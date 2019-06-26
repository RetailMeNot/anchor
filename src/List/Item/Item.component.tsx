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
}

const StyledItem = styled('a')`
    display: flex;
    border-radius: base;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 500ms;
    background-color: neutrals.white.base;
    &:hover {
        background-color: neutrals.silver.light;
    }

    &.active {
        background-color: neutrals.silver.base;
    }

    p {
        margin-bottom: 0;
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
    ...props
}: ItemProps): React.ReactElement<any> => (
    <StyledItem
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onMouseDown={() => onSelect(value)}
        className={classNames('anchor-list-item', className, { active })}
        {...props}
    >
        <Typography tag="p" color="charcoal" hue="light">
            {children}
        </Typography>
    </StyledItem>
);
