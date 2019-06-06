// REACT
import * as React from 'react';

// ANCHOR
import { Typography } from '../../Typography';
import { colors } from '../../theme/colors.theme';
import { StyledContent } from '../Content/Content.component';
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

import styled from 'styled-components';
import classnames from 'classnames';

export const StyledHeader = styled.div<ModalHeaderProps>`
    box-sizing: border-box;
    min-height: 4rem;
    padding: 1.25rem 4.75rem 1.25rem 2rem;
    width: 100%;
    margin-bottom: 1rem;

    display: flex;
    order: -1;

    ${compose(
        colorStyles,
        backgroundStyles,
        borderRadiusStyles
    )}

    && {
        ${paddingStyles}
    }

    // If the header exists, remove the Content's padding.
    // We're preferring this selector to using Modal :first-child
    // in case there is a close button placed before it, and using a
    // double selector to ensure it takes precedence.
    & ~ ${StyledContent}${StyledContent} {
        padding-top: 0;
    }
`;

export interface ModalHeaderProps
    extends BorderRadiusProps,
        ColorProps,
        BackgroundProps,
        PaddingProps {
    children?: any;
    color?: string;
    className?: string;
    title?: string;
}

export const ModalHeader = ({
    children,
    className,
    title,
    color = colors.charcoal.light,
    borderRadiusTop = 'inherit',
    ...props
}: ModalHeaderProps) => (
    <StyledHeader
        className={classnames('anchor-modal-header', className)}
        borderRadiusTop={borderRadiusTop}
        color={color}
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
