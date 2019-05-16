// REACT
import * as React from 'react';

// ANCHOR
import { sizes } from '../../theme/sizes.theme';

// VENDOR
import styled from 'styled-components';
import classnames from 'classnames';

export const StyledFooter = styled.div<ModalFooterProps>`
    box-sizing: border-box;
    width: 100%;
    border-radius: 0 0 ${sizes.border.radius.modal} ${sizes.border.radius.modal};
    margin-top: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    order: 1;
    justify-self: flex-end;

    background: ${({ background = 'transparent' }) => background};
`;

export interface ModalFooterProps {
    children?: any;
    className?: string;
    background?: string;
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
