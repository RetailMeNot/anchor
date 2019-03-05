// REACT
import * as React from 'react';
// COMPONENTS
// VENDOR
import styled from 'styled-components';
// STYLES
// import { sizes, colors } from '../../theme';

export const StyledSiderElement = styled.footer``;

interface SiderProps {
    className?: string;
    children?: any;
}

export const Sider = ({ children }: SiderProps): React.ReactElement<any> => (
    <StyledSiderElement>
        <p>I'm a sider. Neat.</p>
        {children}
    </StyledSiderElement>
);
