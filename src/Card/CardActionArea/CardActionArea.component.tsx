// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';

export interface CardActionAreaProps
    extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: any;
    backgroundColor?: string;
}

const StyledCardActionArea = styled('div')<CardActionAreaProps>`
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    font-family: base;
    width: 100%;
    border-top: light;
    ${({ backgroundColor = 'white' }: CardActionAreaProps) =>
        css({ backgroundColor })};
`;

export const CardActionArea: React.FunctionComponent<CardActionAreaProps> = ({
    className,
    children,
    ...props
}: CardActionAreaProps): React.ReactElement<CardActionAreaProps> => (
    <StyledCardActionArea
        className={classNames('anchor-card-action-area', className)}
        {...props}
    >
        {children}
    </StyledCardActionArea>
);
