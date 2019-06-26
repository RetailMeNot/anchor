// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

export interface CardActionAreaProps {
    className?: string;
    children?: any;
    backgroundColor?: string;
}

const StyledCardActionArea = styled('div')`
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    font-family: ${th('typography.fontFamily')};
    width: 100%;
    border-top: solid thin ${th.color('neutrals.silver.dark')};
    ${({ backgroundColor = 'neutrals.white.base' }: CardActionAreaProps) =>
        css({ backgroundColor })};
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
