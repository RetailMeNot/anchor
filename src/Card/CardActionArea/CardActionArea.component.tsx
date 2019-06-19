// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { fonts, colors } from '../../theme';

export interface CardActionAreaProps {
    className?: string;
    children?: any;
    backgroundColor?: string;
}

const StyledCardActionArea = styled('div')`
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    font-family: ${fonts.fontFamily};
    width: 100%;
    border-top: solid thin ${colors.silver.dark};
    background-color: ${({ backgroundColor = 'white' }: CardActionAreaProps) =>
        backgroundColor};
`;

export const CardActionArea: React.FunctionComponent<CardActionAreaProps> = ({
    className,
    children,
    ...props
}: CardActionAreaProps): JSX.Element => (
    <StyledCardActionArea
        className={classNames('anchor-card-action-area', className)}
        {...props}
    >
        {children}
    </StyledCardActionArea>
);
