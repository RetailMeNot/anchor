// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

export interface ItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
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

const StyledItem = styled('a')<ItemProps>`
    cursor: pointer;
    text-align: center;
    font-family: ${th('typography.fontFamily')};
    color: text.body;
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
        {...props}
    >
        {label ? label : children}
    </StyledItem>
);
