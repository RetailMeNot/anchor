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
import styled from 'styled-components';

const Sizes = {
    lg: { width: 50 },
    sm: { width: 25 },
};
const contentPadding = '2rem';
const borderRadius = sizes.border.radius.modal;

// Modal.Content
// ------------------------------------------------------------------------------------------------------------------

const StyledContent = styled.div<ModalContentProps>`
    box-sizing: border-box;
    width: 100%;

    // This component only gets its bottom padding if its the
    // last-child of the modal (see Modal styles). Furthermore,
    // if the Modal Header comes before it, then this component
    // loses its top padding (see Modal Header styles). The goal
    // is that we have full padding in isolation, but lose the
    // top or bottom padding if the Header or Footer (respectively)
    // are also used.
    padding: ${contentPadding} ${contentPadding} 0 ${contentPadding};

    display: flex;

    order: 0;
    flex-grow: 1;
`;

interface ModalContentProps {
    children: any;
}

const ModalContent = ({ children }: ModalContentProps) => (
    <StyledContent>{children}</StyledContent>
);

// Modal
// ------------------------------------------------------------------------------------------------------------------

const StyledModal = StyledReactModal.default.styled`
    position: relative;
    width: ${({ width, size = 'lg' }: ModalProps) =>
        width || `${Sizes[size].width}rem`};
    height: 42.375rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    border-radius: ${borderRadius};
    background: ${({ background = colors.white.base }: ModalProps) =>
        background};
    box-shadow: 0 0.375rem 0.5rem 0.25rem rgba(0,0,0,0.13);

    overflow: hidden;

    // if the Content component is the last-child of the modal, give it some bottom padding
    ${StyledContent}:last-child {
        padding-bottom: ${contentPadding};
    }
`;

interface ModalProps extends StyledReactModal.ModalProps {
    closeButton?: boolean;
    size?: 'lg' | 'sm';
    background?: string;
    width?: string;
    children?: any;
}

export const Modal = ({
    children,
    ...props
}: ModalProps): React.ReactElement<ModalProps> => (
    <StyledModal {...props}>{children}</StyledModal>
);

Modal.Content = ModalContent;

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
    // in case there is a close button placed before it.
    & ~ ${StyledContent} {
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

Modal.Header = ModalHeader;

// Modal.Footer
// ------------------------------------------------------------------------------------------------------------------

const StyledFooter = styled.div<ModalFooterProps>`
    box-sizing: border-box;
    min-height: 6.5rem;
    width: 100%;
    border-radius: 0 0 ${borderRadius} ${borderRadius};
    margin-top: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    order: 1;
    justify-self: flex-end;

    // color: ${({ color = colors.charcoal.light }) => color};
    background: ${({ background = colors.silver.base }) => background};

    & ~ ${StyledContent} {
        padding-bottom: 0;
        background: rgba(255,0,0,0.5);
    }
`;

interface ModalFooterProps {
    children: any;
    background?: string;
}

const ModalFooter = ({ children }: ModalFooterProps) => (
    <StyledFooter>{children}</StyledFooter>
);

Modal.Footer = ModalFooter;

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

Modal.Close = ModalClose;

// BaseModalBackground
// ------------------------------------------------------------------------------------------------------------------

const CustomModalBackground = styled(StyledReactModal.BaseModalBackground)`
    background-color: rgba(255, 0, 0, 0.6);
`;
export const BaseModalBackground = CustomModalBackground;
export const ModalProvider = StyledReactModal.ModalProvider;
