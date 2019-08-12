// REACT
import * as React from 'react';
// VENDOR
import classnames from 'classnames';
import {
    Col as ACol,
    Visible as AVisible,
    Row as ARow,
    Container as AContainer,
    ScreenClass as AScreenClass,
    ScreenBadge as AScreenBadge,
    Hidden as AHidden,
} from 'react-awesome-styled-grid';

export const Col = ({ className, ...props }: any) => (
    <ACol className={classnames('anchor-col', className)} {...props} />
);
export const Visible = ({ className, ...props }: any) => (
    <AVisible className={classnames('anchor-visible', className)} {...props} />
);
export const Row = ({ className, ...props }: any) => (
    <ARow className={classnames('anchor-row')} {...props} />
);
export const Container = ({ className, ...props }: any) => (
    <AContainer
        className={classnames('anchor-container', className)}
        {...props}
    />
);
export const ScreenClass = ({ className, ...props }: any) => (
    <AScreenClass
        className={classnames('anchor-screen-class', className)}
        {...props}
    />
);
export const ScreenBadge = ({ className, ...props }: any) => (
    <AScreenBadge
        className={classnames('anchor-screen-badge', className)}
        {...props}
    />
);
export const Hidden = ({ className, ...props }: any) => (
    <AHidden className={classnames('anchor-hidden', className)} {...props} />
);
