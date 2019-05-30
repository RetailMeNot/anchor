// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';

// This function clones an element and gives it props.
// If the element has a prop already defined, then it'll use
// that instead of overriding. It also ensures that a given
// className prop will add onto existing classNames instead of
// overriding them

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
