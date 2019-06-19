// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Gutters } from '../Card.component';
// THEME
import { fonts } from '../../theme';

export interface CardContentProps {
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

const StyledCard = styled('div')`
    box-sizing: border-box;
    position: relative;
    display: block;
    padding: ${({ gutter = 'medium' }: CardContentProps) =>
        gutterSizes[gutter]};
    font-family: ${fonts.fontFamily};
`;

export const CardContent: React.FunctionComponent<CardContentProps> = ({
    className,
    children,
    ...props
}: CardContentProps): JSX.Element => (
    <StyledCard
        className={classNames('anchor-card-content', className)}
        {...props}
    >
        {children}
    </StyledCard>
);
