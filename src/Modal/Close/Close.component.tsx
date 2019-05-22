// REACT
import * as React from 'react';

// ANCHOR
import { Button, ButtonProps } from '../../Button';
import { Close } from '../../Icon';

// VENDOR
import styled from 'styled-components';
import classnames from 'classnames';

const StyledClose = styled.div`
    position: absolute;
    height: 3rem;
    width: 3rem;
    margin: 0.5rem;
    top: 0;
    ${({ align }: ModalCloseProps) =>
        align === 'left' ? 'left: 0;' : 'right: 0;'}

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

export interface ModalCloseProps extends ButtonProps {
    align?: 'right' | 'left';
}

export const ModalClose = ({
    className,
    align = 'right',
    ...props
}: ModalCloseProps) => (
    <StyledClose
        className={classnames('anchor-modal-close', className)}
        align={align}
    >
        <Button
            icon={Close}
            variant="minimal"
            circular
            outline={false}
            {...props}
        />
    </StyledClose>
);
