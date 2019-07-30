// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';

const StyledSiderElement = styled('section')<SiderProps>``;

interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: any;
}

export const Sider = ({
    children,
    ...props
}: SiderProps): React.ReactElement<SiderProps> => (
    <StyledSiderElement className="anchor-sider" {...props}>
        {children}
    </StyledSiderElement>
);
