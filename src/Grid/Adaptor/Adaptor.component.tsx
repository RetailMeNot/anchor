// REACT
import * as React from 'react';
// VENDOR
import Responsive from 'react-responsive';
// COMPONENTS
import { ResponsiveContext } from '../ResponsiveProvider';

interface AdaptorProps {
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

type BreakpointValues = {
    minWidth?: undefined | number;
    maxWidth?: undefined | number;
};

export const Adaptor = ({ from, to, ...props }: AdaptorProps) => {
    const { breakpoints } = React.useContext(ResponsiveContext);
    const breakpointValues: BreakpointValues = {
        minWidth: undefined,
        maxWidth: undefined,
    };

    if ((from !== undefined || to !== undefined) && !breakpoints.length) {
        // tslint:disable-next-line: no-console
        console.warn(
            `When using the 'from' and/or 'to' props, the ResponsiveProvider must also be used.`
        );
        return null;
    }

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
