// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
import classnames from 'classnames';

export const StyledFooter = styled('div')<ModalFooterProps>`
    box-sizing: border-box;
    width: 100%;
    border-radius: 0 0 modal modal;
    margin-top: auto;
    ${({ padding }) =>
        padding &&
        css`
            && {
                padding: ${padding};
            }
        `};

    display: flex;
    justify-content: center;
    align-items: center;

    order: 1;
    justify-self: flex-end;

    background: ${({ background = 'transparent' }) => background};

    ${spaceStyles}
`;

export interface ModalFooterProps extends SpaceProps {
    children?: any;
    className?: string;
    background?: string;
    padding?: string;
}

export const ModalFooter = ({
    children,
    className,
    ...props
}: ModalFooterProps) => (
    <StyledFooter
        className={classnames('anchor-modal-footer', className)}
        {...props}
    >
        {children}
    </StyledFooter>
);
