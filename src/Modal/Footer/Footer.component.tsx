// REACT
import * as React from 'react';

// ANCHOR
import {
    compose,
    color as colorStyles,
    ColorProps,
    background as backgroundStyles,
    BackgroundProps,
    borderRadius as borderRadiusStyles,
    BorderRadiusProps,
    padding as paddingStyles,
    PaddingProps,
} from '../../theme/system';

// VENDOR
import styled from 'styled-components';
import classnames from 'classnames';

export const StyledFooter = styled.div<ModalFooterProps>`
    box-sizing: border-box;
    width: 100%;
    margin-top: auto;

    ${compose(
        colorStyles,
        backgroundStyles,
        borderRadiusStyles
    )}

    && {
        ${paddingStyles}
    }

    display: flex;
    justify-content: center;
    align-items: center;

    order: 1;
    justify-self: flex-end;
`;

export interface ModalFooterProps
    extends ColorProps,
        BackgroundProps,
        BorderRadiusProps,
        PaddingProps {
    children?: any;
    className?: string;
    color?: string;
}

export const ModalFooter = ({
    children,
    className,
    borderRadiusBottom = 'inherit',
    ...props
}: ModalFooterProps) => (
    <StyledFooter
        className={classnames('anchor-modal-footer', className)}
        borderRadiusBottom={borderRadiusBottom}
        {...props}
    >
        {children}
    </StyledFooter>
);
