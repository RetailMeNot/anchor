/**
 * This component is pulled into the CodePreview component and added to its scope. I went this route
 * in order to pull together all the pices in the live code editor rather than just have a bunch
 * of code samples.
 */

import * as React from 'react';
import styled from '@xstyled/styled-components';
import { colors } from '@retailmenot/anchor';

const StyledMyList = styled('ul')`
    width: 100%;
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin: 0;
        padding: 0.5rem 2rem;
        border-bottom: solid ${colors.savvyCyan.base} 1px;

        &:last-child {
            border-bottom-style: none;
        }
    }
`;

export const MyList = () => (
    <StyledMyList>
        <li>Not Actually A Link,</li>
        <li>But An Example of Possibilities,</li>
        <li>Because Anything Could be Here...</li>
    </StyledMyList>
);
