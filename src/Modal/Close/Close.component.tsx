// REACT
import * as React from 'react';

// ANCHOR
import { Close } from '../../Icon';
import { IconSVGProps } from '../../Icon/utils';
import { colors } from '../../theme/colors.theme';

// VENDOR
import styled from 'styled-components';
import classnames from 'classnames';

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

export interface ModalCloseProps extends IconSVGProps {
    onClick?: any;
    className?: string;
}

export const ModalClose = ({
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
