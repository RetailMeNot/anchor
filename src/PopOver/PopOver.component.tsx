// VENDOR
import * as React from 'react';
import classNames from 'classnames';

interface PopOverProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const PopOver = ({
    className,
    children,
    ...props
}: PopOverProps): React.ReactElement<PopOverProps> => (
    <div className={classNames('anchor-popover', className)} {...props}>
        {children}
    </div>
);
