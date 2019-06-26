// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import classnames from 'classnames';

export const StyledContent = styled.div<ModalContentProps>`
    box-sizing: border-box;
    width: 100%;

    order: 0;
    flex-grow: 1;
`;

export interface ModalContentProps {
    children?: any;
    className?: string;
}

export const ModalContent = ({ children, className }: ModalContentProps) => (
    <StyledContent className={classnames('anchor-modal-content', className)}>
        {children}
    </StyledContent>
);
