// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { CardActionArea } from './CardActionArea';
import { CardAction } from './CardAction';
import { CardContent } from './CardContent';
// THEME
import { fonts, colors } from '../theme';

export interface CardProps {
    className?: string;
    children?: any;
    action?: any;
    actionArea?: any;
    gutter?: 'none' | 'small' | 'medium' | 'large';
}

const gutterSizes = {
    none: '',
    small: '0.75rem',
    medium: '1rem',
    large: '1.5rem',
};

const StyledCard = styled.div`
    position: relative;
    display: inline-block;
    font-family: ${fonts.fontFamily};
    box-sizing: border-box;
    padding: ${({ gutter = 'medium' }: CardProps) => gutterSizes[gutter]};
    border-radius: 0.125rem;
    border: solid thin ${colors.silver.dark};
`;

export const Card: React.FunctionComponent<CardProps> = ({
    className,
    children,
    action,
    actionArea,
    gutter,
    ...props
}: CardProps): JSX.Element => (
    <StyledCard className={classNames('card', className)} {...props}>
        {action && <CardAction>{action}</CardAction>}
        <CardContent children={children} />
        {actionArea && <CardActionArea>{actionArea}</CardActionArea>}
    </StyledCard>
);

export default Card;

/*
Gutter
Padding
Actions
*/
