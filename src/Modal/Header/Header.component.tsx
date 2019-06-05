// REACT
import * as React from 'react';

// ANCHOR
import { Typography } from '../../Typography';
import { sizes } from '../../theme/sizes.theme';
import { colors } from '../../theme/colors.theme';
import { StyledContent } from '../Content/Content.component';

import styled from 'styled-components';
import classnames from 'classnames';

export const StyledHeader = styled.div<ModalHeaderProps>`
    box-sizing: border-box;
    min-height: 4rem;
    padding: 1.25rem 4.75rem 1.25rem 2rem;
    width: 100%;
    border-radius: ${sizes.border.radius.modal} ${
    sizes.border.radius.modal
} 0 0;
    margin-bottom: 1rem;

    display: flex;
    order: -1;

    color: ${({ color = colors.charcoal.light }) => color};
    background: ${({ background }) => background};

    // If the header exists, remove the Content's padding.
    // We're preferring this selector to using Modal :first-child
    // in case there is a close button placed before it, and using a
    // double selector to ensure it takes precedence.
    & ~ ${StyledContent}${StyledContent} {
        padding-top: 0;
    }
`;

export interface ModalHeaderProps {
    children?: any;
    className?: string;
    title?: string;
    color?: string;
    background?: string;
}

export const ModalHeader = ({
    children,
    className,
    title,
    ...props
}: ModalHeaderProps) => (
    <StyledHeader
        className={classnames('anchor-modal-header', className)}
        {...props}
    >
        {title && (
            <Typography scale={20} weight="bold">
                {title}
            </Typography>
        )}
        {children}
    </StyledHeader>
);
