// REACT
import * as React from 'react';

// VENDOR
import * as StyledReactModal from 'styled-react-modal';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

// ANCHOR
import { sizes } from '../theme/sizes.theme';
import { colors } from '../theme/colors.theme';

// SUBCOMPONENTS
import { ModalHeader, StyledHeader } from './Header';
import { ModalContent, StyledContent } from './Content';
import { ModalFooter, StyledFooter } from './Footer';
import { ModalClose } from './Close';

export type ModalSize = 'lg' | 'sm';

const Sizes = {
    lg: { width: 50, contentPadding: 2.5, footerHeight: 6.5 },
    sm: { width: 25, contentPadding: 2, footerHeight: 5.5 },
};

const defaultSize: ModalSize = 'lg';

const StyledModal = StyledReactModal.default.styled`
    position: relative;
    width: ${({ width, size = defaultSize }: ModalProps) =>
        width || `${Sizes[size].width}rem`};
    height: ${({ height = '42.375rem' }: ModalProps) => height};
    margin: ${({ margin = 'auto' }: ModalProps) => margin};

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    border-radius: ${sizes.border.radius.modal};
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
            `4rem ${Sizes[size].contentPadding}rem 0 ${Sizes[size].contentPadding}rem`};
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
        padding: ${({ size = defaultSize }: ModalProps) =>
            `0 ${Sizes[size].contentPadding}rem`};
        min-height: ${({ size = defaultSize }: ModalProps) =>
            Sizes[size].footerHeight}rem;
    }
`;

interface ModalProps extends StyledReactModal.ModalProps {
    size?: ModalSize;
    background?: string;
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
    ...props
}: ModalProps): React.ReactElement<ModalProps> => (
    <StyledModal
        {...{
            className: classnames('anchor-modal', className),
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
