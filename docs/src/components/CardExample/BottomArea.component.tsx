/**
 * This component is pulled into the CodePreview component and added to its scope. I went this route
 * in order to pull together all the pices in the live code editor rather than just have a bunch
 * of code samples.
 */

import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@retailmenot/anchor';

const StyledBottomArea = styled('div')`
    background-color: background.base;
    color: text.base;
    padding: 1rem;
`;

export const BottomArea = () => (
    <StyledBottomArea>
        <Typography weight="bolder">I am an Action Area.</Typography>
    </StyledBottomArea>
);
