// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
// COMPONENTS
import {
    ResponsiveContext,
    Typography
} from '@retailmenot/anchor';

const StyledResponsiveContextExample = styled('div')`
    padding: 1rem;
    border: base;
`;

export const ResponsiveContextExample = () => {
    const { breakpoints, current, innerWidth  } = React.useContext(ResponsiveContext);
    const breakpointKeys = breakpoints
        .map((breakpoint: object) => Object.keys(breakpoint)[0])
        .join(', ');

    return (
        <StyledResponsiveContextExample>
            <Typography tag="p" pb="2" weight={600}>breakpointKeys: {breakpointKeys}</Typography>
            <Typography tag="p" pb="2" weight={600}>current: {current}</Typography>
            <Typography tag="p" pb="2" weight={600}>innerWidth: {innerWidth}</Typography>
        </StyledResponsiveContextExample>
    );
};
