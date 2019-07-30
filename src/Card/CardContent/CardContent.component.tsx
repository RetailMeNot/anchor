// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// COMPONENTS
import { Gutters } from '../Card.component';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    gutter?: Gutters;
    children?: any;
}

const gutterSizes = {
    none: '',
    small: '0.75rem',
    medium: '1rem',
    large: '1.5rem',
};

const StyledCard = styled('div')<CardContentProps>`
    box-sizing: border-box;
    position: relative;
    display: block;
    padding: ${({ gutter = 'medium' }: CardContentProps) =>
        gutterSizes[gutter]};
    font-family: ${th('typography.fontFamily')};
`;

export const CardContent: React.FunctionComponent<CardContentProps> = ({
    className,
    children,
    ...props
}: CardContentProps): React.ReactElement<CardContentProps> => (
    <StyledCard
        className={classNames('anchor-card-content', className)}
        {...props}
    >
        {children}
    </StyledCard>
);
