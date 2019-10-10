/**
 * This component is pulled into the CodePreview component and added to its scope. I went this route
 * in order to pull together all the pices in the live code editor rather than just have a bunch
 * of code samples.
 */

import * as React from 'react';
import styled from '@xstyled/styled-components';
import { DropDown, InfoOutline } from '@retailmenot/anchor';

const StyledMessage = styled('div')`
    color: white;
    padding: 0.5rem 1rem;
`;

export const MoreInfo = () => (
    <DropDown
        overlay={<StyledMessage>I am an 'action'.</StyledMessage>}
        trigger="both"
        position="leftStart"
        background="primary.light"
    >
        <InfoOutline scale="lg" color="primary.light" />
    </DropDown>
);
