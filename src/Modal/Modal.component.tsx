// REACT
import * as React from 'react';

// VENDOR
import * as StyledReactModal from 'styled-react-modal';
import styled, { css } from 'styled-components';
import {
    compose,
    variant,
    borderRadius as borderRadiusStyles,
    BorderRadiusProps,
    margin as marginStyles,
    MarginProps,
    color as colorStyles,
    ColorProps,
    background as backgroundStyles,
    BackgroundProps,
} from '../theme/system';
import classnames from 'classnames';

// SUBCOMPONENTS
import { ModalHeader, StyledHeader } from './Header';
import { ModalContent, StyledContent } from './Content';
import { ModalFooter, StyledFooter } from './Footer';
import { ModalClose } from './Close';

export const MODAL_THEME_KEY = 'modal';
export const MODAL_THEME = {
    size: {
        lg: {
            width: 50,
            contentPadding: 2.5,
            footerHeight: 6.5,
            height: 42.375,
        },
        sm: {
            width: 25,
            contentPadding: 2,
            footerHeight: 5.5,
            height: 42.375,
        },
    },
};

const size = variant({
    themeKey: MODAL_THEME_KEY,
    prop: 'size',
    variants: MODAL_THEME.size,
    defaultValue: 'lg',
});

const StyledModal = StyledReactModal.default.styled`
    position: relative;

    ${compose(
        marginStyles,
        backgroundStyles,
        colorStyles,
        borderRadiusStyles
    )}

    ${size(
        ({ contentPadding, footerHeight, width, height }) => css`
            height: ${({ height: propHeight }: ModalProps) =>
                propHeight || `${height}rem`};
            width: ${({ width: propWidth }: ModalProps) =>
                propWidth || `${width}rem`};

            // The Modal Content component only gets its bottom padding if
            // its the last-child of the modal. Furthermore, if the Modal Header
            // comes before it, then the Content loses its top padding
            // (see Modal Header styles). The goal is that we have full padding
            // in isolation, but lose the top or bottom padding if the Header or
            // Footer (respectively) are also used.
            ${StyledContent} {
                padding: 4rem ${contentPadding}rem 0 ${contentPadding}rem;
                &:last-child {
                    padding-bottom: ${contentPadding}rem;
                }
            }
            ${StyledHeader} {
                padding-left: ${contentPadding}rem;
            }
            ${StyledFooter} {
                padding: 0 ${contentPadding}rem;
                min-height: ${footerHeight}rem;
            }
        `
    )}

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: ${({
        shadow = '0 0.375rem 0.5rem 0.25rem rgba(0,0,0,0.13)',
    }: ModalProps) => shadow};

    overflow: hidden;
`;

interface ModalProps
    extends StyledReactModal.ModalProps,
        MarginProps,
        BorderRadiusProps,
        ColorProps,
        BackgroundProps {
    size?: string;
    width?: string;
    height?: string;
    shadow?: string;
    children?: any;
    className?: string;
}

export const Modal = ({
    children,
    className,
    margin = 'auto',
    background = 'white',
    borderRadius = 'modal',
    ...props
}: ModalProps): React.ReactElement<ModalProps> => (
    <StyledModal
        {...{
            className: classnames('anchor-modal', className),
            margin,
            borderRadius,
            background,
            ...props,
        }}
    >
        {children}
    </StyledModal>
);

Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;

interface BaseModalBackgroundProps {
    opacity?: number;
    oversized?: boolean;
    padding?: string;
}

const CustomModalBackground = styled(StyledReactModal.BaseModalBackground)`
    box-sizing: border-box;
    overflow-y: auto;
    padding: ${({ padding = '2rem 1rem' }: BaseModalBackgroundProps) =>
        padding};
    background-color: ${({ opacity = 0.6 }: BaseModalBackgroundProps) =>
        `rgba(0,0,0,${opacity})`};
`;
export const BaseModalBackground = CustomModalBackground;

export class ModalProvider extends StyledReactModal.ModalProvider {
    static defaultProps = { backgroundComponent: BaseModalBackground };
}
