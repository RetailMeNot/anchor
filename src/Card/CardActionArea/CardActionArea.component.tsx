// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { fonts } from '../../theme';

export interface CardActionAreaProps {
    className?: string;
    children?: any;
}

const StyledCard = styled.div`
    position: relative;
    display: inline-block;
    font-family: ${fonts.fontFamily};
`;

export const CardActionArea: React.FunctionComponent<CardActionAreaProps> = ({
    className,
    children,
    ...props
}: CardActionAreaProps): JSX.Element => (
    <StyledCard className={classNames(className)} {...props}>
        {children}
        CardActionArea!
    </StyledCard>
);

export default CardActionArea;
