// REACT
import * as React from 'react';
// VENDOR
import Responsive from 'react-responsive';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';

interface CustomAdaptorProps {
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

interface BreakpointSchema {
    min?: number;
    max?: number;
}

export const CustomAdaptor = ({ ...props }: CustomAdaptorProps) => (
    <Responsive {...props} />
);

/* =========================================== LEGACY START ========================================================= */
interface LegacyBreakpointsSchema {
    desktop: BreakpointSchema;
    tablet: BreakpointSchema;
    phone: BreakpointSchema;
}

export const LegacyBreakpoints: LegacyBreakpointsSchema = {
    desktop: {
        min: 1000,
    },
    tablet: {
        min: 899,
        max: 999,
    },
    phone: {
        max: 898,
    },
};

export const LegacyDesktop = ({ ...props }: FixedAdaptor) => (
    <Responsive {...props} minWidth={LegacyBreakpoints.desktop.min} />
);
export const LegacyTablet = ({ ...props }: FixedAdaptor) => (
    <Responsive
        {...props}
        minWidth={LegacyBreakpoints.tablet.min}
        maxWidth={LegacyBreakpoints.tablet.max}
    />
);
export const LegacyPhone = ({ ...props }: FixedAdaptor) => (
    <Responsive {...props} maxWidth={LegacyBreakpoints.phone.max} />
);

/* =========================================== LEGACY END =========================================================== */

/* =========================================== STANDARD START ======================================================= */
interface StandardBreakpointsSchema {
    xs: BreakpointSchema;
    sm: BreakpointSchema;
    md: BreakpointSchema;
    lg: BreakpointSchema;
    xl: BreakpointSchema;
    xxl: BreakpointSchema;
}
export const StandardBreakpoints: StandardBreakpointsSchema = {
    xs: {
        max: 575,
    },
    sm: {
        min: 576,
        max: 767,
    },
    md: {
        min: 768,
        max: 991,
    },
    lg: {
        min: 992,
        max: 1199,
    },
    xl: {
        min: 1200,
        max: 1599,
    },
    xxl: {
        min: 1600,
    },
};

export const XS = ({ ...props }: FixedAdaptor) => (
    <Responsive {...props} maxWidth={StandardBreakpoints.xs.max} />
);
export const SM = ({ ...props }: FixedAdaptor) => (
    <Responsive
        {...props}
        minWidth={StandardBreakpoints.sm.min}
        maxWidth={StandardBreakpoints.sm.max}
    />
);
export const MD = ({ ...props }: FixedAdaptor) => (
    <Responsive
        {...props}
        minWidth={StandardBreakpoints.md.min}
        maxWidth={StandardBreakpoints.md.max}
    />
);
export const LG = ({ ...props }: FixedAdaptor) => (
    <Responsive
        {...props}
        minWidth={StandardBreakpoints.lg.min}
        maxWidth={StandardBreakpoints.lg.max}
    />
);
export const XL = ({ ...props }: FixedAdaptor) => (
    <Responsive
        {...props}
        minWidth={StandardBreakpoints.xl.min}
        maxWidth={StandardBreakpoints.xl.max}
    />
);
export const XXL = ({ ...props }: FixedAdaptor) => (
    <Responsive {...props} minWidth={StandardBreakpoints.xxl.min} />
);

export const CenteredCell = styled(Cell)`
    display: flex;
    align-items: center;
    justify-content: center;
`;
/* =========================================== STANDARD END ========================================================= */

export const Adaptor = {
    // Legacy Breakpoints
    LegacyDesktop,
    LegacyTablet,
    LegacyPhone,
    // Custom
    CustomAdaptor,
    CenteredCell,
    // Standard Breakpoints
    XS,
    SM,
    MD,
    LG,
    XL,
    XXL,
};
