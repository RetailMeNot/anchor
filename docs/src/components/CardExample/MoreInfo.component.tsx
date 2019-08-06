/**
 * This component is pulled into the CodePreview component and added to its scope. I went this route
 * in order to pull together all the pices in the live code editor rather than just have a bunch
 * of code samples.
 */

import * as React from 'react';
import styled from 'styled-components';
import { colors, InfoOutline } from '@retailmenot/anchor';

const StyledMoreInfo = styled(InfoOutline)`
    position: relative;

    &:hover {
        cursor: pointer;

        &:after {
            content: 'I am an Action';
            display: block;
            padding: 1rem;
            background-color: ${colors.success.dark};
            color: ${colors.white.base};
            position: absolute;
            right: 1.75rem;
            white-space: nowrap;
            top: 0;
            z-index: 1000;
            border-radius: 0.25rem;
        }
    }
`;

export const MoreInfo = () => (
    <StyledMoreInfo color={colors.success.dark} scale="lg" />
);
