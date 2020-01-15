// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
// COMPONENTS
import { MenuSizeProps } from '../Menu.component';

export interface ItemProps extends React.HTMLAttributes<HTMLAnchorElement>, SpaceProps {
    path?: string;
    label?: string;
    children?: any;
    className?: string;
    active?: boolean;
    // TODO: do I need this?
    size?: MenuSizeProps;
    // TODO: tag to allow element overrides
    as?: any;
    type?: any;
}

const StyledItem = styled('a')<ItemProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    font-family: base;
    color: text.base;
    text-decoration: none;
    transition: color 250ms;

    // Disable Select
    user-select: none;
    -webkit-touch-callout: none;
    ${spaceStyles}
`;

export const Item: React.FunctionComponent<ItemProps> = ({
    className,
    children,
    label,
    size,
    active,
    ...props
}: ItemProps): React.ReactElement<ItemProps> => (
    <StyledItem
        className={classNames('anchor-menu-item', className, { active })}
        active={active}
        {...props}
    >
        {label ? label : children}
    </StyledItem>
);
