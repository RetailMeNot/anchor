// REACT
import * as React from 'react';
// VENDOR
import Responsive from 'react-responsive';
// COMPONENTS
import { ResponsiveContext } from '../ResponsiveProvider';
import { getMinMax } from '../utils';

interface CustomAdaptorProps {
    // The from & to props provide a layer of abstraction that allows the user to provid their
    // named breakpoints instead of a hard number from minWidth and maxWidth, respectively.
    from?: string;
    to?: string;
    children?: any;
    query?: string;
    minHeight?: number | string;
    maxHeight?: number | string;
    minDeviceHeight?: number | string;
    maxDeviceHeight?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    minDeviceWidth?: number | string;
    maxDeviceWidth?: number | string;
    minResolution?: number | string;
    maxResolution?: number | string;
    onBeforeChange?: (matches: boolean) => void;
    onChange?: (matches: boolean) => void;
}
interface FixedAdaptor extends CustomAdaptorProps {
    maxWidth?: never;
    minWidth?: never;
    minDeviceWidth?: never;
    maxDeviceWidth?: never;
}

type BreakpointValues = {
    minWidth?: undefined | number;
    maxWidth?: undefined | number;
};

export const CustomAdaptor = ({ from, to, ...props }: CustomAdaptorProps) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const breakpointValues: BreakpointValues = {
        minWidth: undefined,
        maxWidth: undefined,
    };

    if (from === undefined && to !== undefined) {
        // tslint:disable-next-line: no-console
        console.warn(
            `Although the 'from' prop can be used by itself, the 'to' prop requires 'from' to also exist`
        );
        return null;
    }

    if (from) {
        const min = breakpoints.find(bp => Object.keys(bp)[0] === from);
        breakpointValues.minWidth =
            typeof min === 'object' ? Object.values(min)[0] : undefined;
    }

    if (from && to) {
        const max = breakpoints.find(bp => Object.keys(bp)[0] === to);
        breakpointValues.maxWidth =
            typeof max === 'object' ? Object.values(max)[0] : undefined;
    }

    return (
        <Responsive
            className="anchor-adaptor"
            {...breakpointValues}
            {...props}
        />
    );
};

export const XS = ({ ...props }: FixedAdaptor) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const { max } = getMinMax(0, breakpoints);

    return max !== 0 ? (
        <Responsive className="anchor-adaptor" {...props} maxWidth={max} />
    ) : null;
};

export const SM = ({ ...props }: FixedAdaptor) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const { min, max } = getMinMax(1, breakpoints);

    return min !== 0 && max !== 0 ? (
        <Responsive
            className="anchor-adaptor"
            {...props}
            minWidth={min}
            maxWidth={max}
        />
    ) : null;
};

export const MD = ({ ...props }: FixedAdaptor) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const { min, max } = getMinMax(2, breakpoints);

    return min !== 0 && max !== 0 ? (
        <Responsive
            className="anchor-adaptor"
            {...props}
            minWidth={min}
            maxWidth={max}
        />
    ) : null;
};

export const LG = ({ ...props }: FixedAdaptor) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const { min, max } = getMinMax(3, breakpoints);

    return min !== 0 && max !== 0 ? (
        <Responsive
            className="anchor-adaptor"
            {...props}
            minWidth={min}
            maxWidth={max}
        />
    ) : null;
};

export const XL = ({ ...props }: FixedAdaptor) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const { min, max } = getMinMax(4, breakpoints);

    return min !== 0 && max !== 0 ? (
        <Responsive
            className="anchor-adaptor"
            {...props}
            minWidth={min}
            maxWidth={max}
        />
    ) : null;
};

export const XXL = ({ ...props }: FixedAdaptor) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const { min } = getMinMax(5, breakpoints);

    return min !== 0 ? (
        <Responsive className="anchor-adaptor" {...props} minWidth={min} />
    ) : null;
};
