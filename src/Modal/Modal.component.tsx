// REACT
import * as React from 'react';

// ANCHOR
import { Typography } from '..';
import { Close } from '../Icon';
import { IconSVGProps } from '../Icon/utils';
import { sizes } from '../theme/sizes.theme';
import { colors } from '../theme/colors.theme';

// VENDOR
import * as StyledReactModal from 'styled-react-modal';
import styled, { css } from 'styled-components';

export type ModalSize = 'lg' | 'sm';

const Sizes = {
    lg: { width: 50, contentPadding: 2.5, footerHeight: 6.5 },
    sm: { width: 25, contentPadding: 2, footerHeight: 5.5 },
};
const borderRadius = sizes.border.radius.modal;

// Modal.Content
// ------------------------------------------------------------------------------------------------------------------

const StyledContent = styled.div<ModalContentProps>`
    box-sizing: border-box;
    width: 100%;

    order: 0;
    flex-grow: 1;
`;

interface ModalContentProps {
    children: any;
}

const ModalContent = ({ children }: ModalContentProps) => (
    <StyledContent>{children}</StyledContent>
);

// Modal.Header
// ------------------------------------------------------------------------------------------------------------------

const StyledHeader = styled.div<ModalHeaderProps>`
    box-sizing: border-box;
    min-height: 4rem;
    padding: 1.25rem 4.75rem 1.25rem 2rem;
    width: 100%;
    border-radius: ${borderRadius} ${borderRadius} 0 0;
    margin-bottom: 1rem;

    display: flex;
    order: -1;

    color: ${({ color = colors.charcoal.light }) => color};
    background: ${({ background = colors.white.base }) => background};

    // If the header exists, remove the Content's padding.
    // We're preferring this selector to using Modal :first-child
    // in case there is a close button placed before it, and using a
    // double selector to ensure it takes precedence.
    & ~ ${StyledContent}${StyledContent} {
        padding-top: 0;
    }
`;

interface ModalHeaderProps {
    children: any;
    title?: string;
    color?: string;
    background?: string;
}

const ModalHeader = ({ children, title, ...props }: ModalHeaderProps) => (
    <StyledHeader {...props}>
        {title && (
            <Typography scale={20} weight="bold">
                {title}
            </Typography>
        )}
        {children}
    </StyledHeader>
);

// Modal.Footer
// ------------------------------------------------------------------------------------------------------------------

const StyledFooter = styled.div<ModalFooterProps>`
    box-sizing: border-box;
    width: 100%;
    border-radius: 0 0 ${borderRadius} ${borderRadius};
    margin-top: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    order: 1;
    justify-self: flex-end;

    background: ${({ background = 'transparent' }) => background};
`;

interface ModalFooterProps {
    children: any;
    background?: string;
}

const ModalFooter = ({ children, ...props }: ModalFooterProps) => (
    <StyledFooter {...props}>{children}</StyledFooter>
);

// Modal.Close
// ------------------------------------------------------------------------------------------------------------------

const StyledClose = styled.div`
    position: absolute;
    height: 3rem;
    width: 3rem;
    margin: 0.5rem;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

interface ModalCloseProps extends IconSVGProps {
    onClick?: any;
}

const ModalClose = ({
    onClick,
    color = colors.savvyCyan.base,
    scale = 'lg',
    ...props
}: ModalCloseProps) => (
    <StyledClose onClick={onClick}>
        {/* This may change to an icon-only button, once that component is done */}
        <Close color={color} scale={scale} {...props} />
    </StyledClose>
);

// Modal
// ------------------------------------------------------------------------------------------------------------------

const StyledModal = StyledReactModal.default.styled`
    position: relative;
    width: ${({ width, size = 'lg' }: ModalProps) =>
        width || `${Sizes[size].width}rem`};
    height: ${({ height = '42.375rem' }: ModalProps) => height};

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    border-radius: ${borderRadius};
    background: ${({ background = colors.white.base }: ModalProps) =>
        background};
    ${({ color }: ModalProps) =>
        css`
            color: ${color};
        `}
    box-shadow: 0 0.375rem 0.5rem 0.25rem rgba(0,0,0,0.13);

    overflow: hidden;

    // The Modal Content component only gets its bottom padding if
    // its the last-child of the modal. Furthermore, if the Modal Header
    // comes before it, then the Content loses its top padding
    // (see Modal Header styles). The goal is that we have full padding
    // in isolation, but lose the top or bottom padding if the Header or
    // Footer (respectively) are also used.
    ${StyledContent} {
        padding: ${({ size = 'lg' }: ModalProps) =>
            `${Sizes[size].contentPadding}rem ${
                Sizes[size].contentPadding
            }rem 0 ${Sizes[size].contentPadding}rem`};
        &:last-child {
            padding-bottom: ${({ size = 'lg' }: ModalProps) =>
                `${Sizes[size].contentPadding}rem`};
        }
    }
    ${StyledHeader} {
        padding-left: ${({ size = 'lg' }: ModalProps) =>
            Sizes[size].contentPadding}rem;
    }
    ${StyledFooter} {
        min-height: ${({ size = 'lg' }: ModalProps) =>
            Sizes[size].footerHeight}rem;
    }
`;

interface ModalProps extends StyledReactModal.ModalProps {
    size?: ModalSize;
    background?: string;
    color?: string;
    width?: string;
    height?: string;
    children?: any;
}

export const Modal = ({
    children,
    ...props
}: ModalProps): React.ReactElement<ModalProps> => (
    <StyledModal {...props}>{children}</StyledModal>
);

Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;

// BaseModalBackground
// ------------------------------------------------------------------------------------------------------------------

const CustomModalBackground = styled(StyledReactModal.BaseModalBackground)`
    background-color: rgba(255, 0, 0, 0.6);
`;
export const BaseModalBackground = CustomModalBackground;
export const ModalProvider = StyledReactModal.ModalProvider;
