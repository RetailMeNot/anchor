import * as React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const StyledExampleLink = styled('a')`
    color: neutrals.white.base;
    border-radius: 0.25rem;
    padding: 0 1rem;
    font-weight: bold;
    font-size: 1.25rem;
    text-decoration: none;
    font-family: base;
`;

export const ExampleLink = (props: any): React.ReactElement<any> => (
    <StyledExampleLink target="_blank" {...props}>
        {props.children}
    </StyledExampleLink>
);
