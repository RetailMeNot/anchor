// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { fonts } from '../../theme';

export interface CardContentProps {
    className?: string;
    children?: any;
}

const StyledCard = styled.div`
    position: relative;
    display: block;
    font-family: ${fonts.fontFamily};
`;

export const CardContent: React.FunctionComponent<CardContentProps> = ({
    className,
    children,
    ...props
}: CardContentProps): JSX.Element => (
    <StyledCard className={classNames(className)} {...props}>
        {children}
    </StyledCard>
);

export default CardContent;
