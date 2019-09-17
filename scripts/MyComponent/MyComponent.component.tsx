// VENDOR
import * as React from 'react';
import classNames from 'classnames';

interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const MyComponent = ({
    className,
    children,
    ...props
}: MyComponentProps): React.ReactElement<MyComponentProps> => (
    <div className={classNames('anchor-mycomponent', className)} {...props}>
        {children}
    </div>
);
