// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';

const StyledSiderElement = styled.section``;

interface SiderProps {
    className?: string;
    children?: any;
}

export const Sider = ({ children }: SiderProps): React.ReactElement<any> => (
    <StyledSiderElement className="anchor-sider">{children}</StyledSiderElement>
);
