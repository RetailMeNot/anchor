// REACT
import * as React from 'react';

// VENDOR
import classnames from 'classnames';

interface ModalProps {
    children?: any;
    className?: string;
}

export const Modal = ({
    className,
    children,
    ...props
}: ModalProps): React.ReactElement<ModalProps> => (
    <div className={classnames('anchor-modal', className)}>{children}</div>
);
