// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';

interface Props {
    className?: string;
    [key: string]: any;
}

export const cloneWithProps = (
    element: React.ReactElement<any>,
    props: Props = {}
) => {
    const { className, ...rest } = props;
    return React.cloneElement(element, {
        ...rest,
        ...element.props,
        className: classNames(className, element.props.className),
    });
};
