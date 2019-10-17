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
    config as aConfig,
    VisibleProps,
    ColProps,
} from 'react-awesome-styled-grid';

export enum responsiveValues {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg',
    xl = 'xl',
}

type ResponsiveArrayValues = keyof typeof responsiveValues;

export const responsiveQuery = (
    props: object,
    responsiveValue: ResponsiveArrayValues
) => {
    return aConfig(props).media[responsiveValue];
};

export const Col = ({
    className,
    offset,
    reverse,
    debug,
    noGutter,
    ...props
}: ColProps) => (
    <ACol className={classnames('anchor-col', className)} {...props} />
);

export const Visible = ({
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    debug,
    ...props
}: VisibleProps) => (
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

export const Hidden = ({
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    debug,
    ...props
}: VisibleProps) => (
    <AHidden className={classnames('anchor-hidden', className)} {...props} />
);
