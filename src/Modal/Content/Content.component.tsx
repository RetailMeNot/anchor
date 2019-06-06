// REACT
import * as React from 'react';

// ANCHOR
import {
    compose,
    color as colorStyles,
    ColorProps,
    background as backgroundStyles,
    BackgroundProps,
    padding as paddingStyles,
    PaddingProps,
} from '../../theme/system';

// VENDOR
import styled from 'styled-components';
import classnames from 'classnames';

export const StyledContent = styled.div<ModalContentProps>`
    box-sizing: border-box;
    width: 100%;

    ${compose(
        colorStyles,
        backgroundStyles
    )}

    && {
        ${paddingStyles}
    }

    order: 0;
    flex-grow: 1;
`;

export interface ModalContentProps
    extends ColorProps,
        BackgroundProps,
        PaddingProps {
    children?: any;
    color?: string;
    className?: string;
}

export const ModalContent = ({ children, className }: ModalContentProps) => (
    <StyledContent className={classnames('anchor-modal-content', className)}>
        {children}
    </StyledContent>
);
