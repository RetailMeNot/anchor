// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

export interface CardActionProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: any;
}

const StyledCard = styled('div')<CardActionProps>`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${th('typography.fontFamily')};
    top: 0;
    right: 0;
    width: 2.5rem;
    height: 2.5rem;
    background-color: neutrals.white.base;
    z-index: 1;
`;

export const CardAction: React.FunctionComponent<CardActionProps> = ({
    className,
    children,
    ...props
}: CardActionProps): React.ReactElement<CardActionProps> => (
    <StyledCard
        className={classNames('anchor-card-action', className)}
        {...props}
    >
        {children}
    </StyledCard>
);
