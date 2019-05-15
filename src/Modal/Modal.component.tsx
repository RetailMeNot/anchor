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
import classnames from 'classnames';
import { opacify } from 'polished';

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
    children?: any;
    className?: string;
}

const ModalContent = ({ children, className }: ModalContentProps) => (
    <StyledContent className={classnames('anchor-modal-content', className)}>
        {children}
    </StyledContent>
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
    children?: any;
    className?: string;
    title?: string;
    color?: string;
    background?: string;
}

const ModalHeader = ({
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
    className?: string;
    background?: string;
}

const ModalFooter = ({ children, className, ...props }: ModalFooterProps) => (
    <StyledFooter
        className={classnames('anchor-modal-footer', className)}
        {...props}
    >
        {children}
    </StyledFooter>
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
    className?: string;
}

const ModalClose = ({
    onClick,
    className,
    color = colors.savvyCyan.base,
    scale = 'lg',
    ...props
}: ModalCloseProps) => (
    <StyledClose
        className={classnames('anchor-modal-close', className)}
        onClick={onClick}
    >
        {/* This may change to an icon-only button, once that component is done */}
        <Close color={color} scale={scale} {...props} />
    </StyledClose>
);

// Modal
// ------------------------------------------------------------------------------------------------------------------

const defaultSize: ModalSize = 'lg';

const StyledModal = StyledReactModal.default.styled`
    position: relative;
    width: ${({ width, size = defaultSize }: ModalProps) =>
        width || `${Sizes[size].width}rem`};
    height: ${({ height = '42.375rem' }: ModalProps) => height};
    margin: ${({ oversized, margin }: ModalProps) =>
        margin || (oversized ? '2rem' : '0')};

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
    box-shadow: ${({
        shadow = '0 0.375rem 0.5rem 0.25rem rgba(0,0,0,0.13)',
    }: ModalProps) => shadow};

    overflow: hidden;

    // The Modal Content component only gets its bottom padding if
    // its the last-child of the modal. Furthermore, if the Modal Header
    // comes before it, then the Content loses its top padding
    // (see Modal Header styles). The goal is that we have full padding
    // in isolation, but lose the top or bottom padding if the Header or
    // Footer (respectively) are also used.
    ${StyledContent} {
        padding: ${({ size = defaultSize }: ModalProps) =>
            `4rem ${Sizes[size].contentPadding}rem 0 ${
                Sizes[size].contentPadding
            }rem`};
        &:last-child {
            padding-bottom: ${({ size = defaultSize }: ModalProps) =>
                `${Sizes[size].contentPadding}rem`};
        }
    }
    ${StyledHeader} {
        padding-left: ${({ size = defaultSize }: ModalProps) =>
            Sizes[size].contentPadding}rem;
    }
    ${StyledFooter} {
        min-height: ${({ size = defaultSize }: ModalProps) =>
            Sizes[size].footerHeight}rem;
    }
`;

interface ModalProps extends StyledReactModal.ModalProps {
    size?: ModalSize;
    background?: string;
    oversized?: boolean;
    color?: string;
    width?: string;
    height?: string;
    margin?: string;
    shadow?: string;
    children?: any;
    className?: string;
}

export const Modal = ({
    children,
    className,
    oversized,
    backgroundProps,
    ...props
}: ModalProps): React.ReactElement<ModalProps> => {
    return (
        <StyledModal
            {...{
                className: classnames('anchor-modal', className),
                oversized,
                backgroundProps: { ...backgroundProps, oversized },
                ...props,
            }}
        >
            {children}
        </StyledModal>
    );
};

Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;

// BaseModalBackground
// ------------------------------------------------------------------------------------------------------------------

interface BaseModalBackgroundProps {
    opacity?: number;
    oversized?: boolean;
}

const CustomModalBackground = styled(StyledReactModal.BaseModalBackground)`
    ${({ oversized }: BaseModalBackgroundProps) =>
        oversized &&
        css`
            align-items: initial;
            overflow-y: scroll;
        `}
    background-color: ${({ opacity = 0.6 }: BaseModalBackgroundProps) =>
        opacify(opacity, 'rgba(0,0,0,0)')};
`;
export const BaseModalBackground = CustomModalBackground;

export class ModalProvider extends StyledReactModal.ModalProvider {
    static defaultProps = { backgroundComponent: BaseModalBackground };
}
