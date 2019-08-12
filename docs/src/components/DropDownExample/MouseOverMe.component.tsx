/**
 * This component is pulled into the CodePreview component and added to its scope. I went this route
 * in order to pull together all the pices in the live code editor rather than just have a bunch
 * of code samples.
 */

import * as React from 'react';
import styled from '@xstyled/styled-components';
import { colors, Typography } from '@retailmenot/anchor';

export const MouseOverMe = styled(Typography)`
    background-color: ${colors.savvyCyan.base};
    width: 20rem;
    padding: 0.5rem 1rem;
`;
