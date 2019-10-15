// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';

export const StyledFooterElement = styled.footer`
    padding: 2rem;
    background-color: background.base;
    border-top: light;
    height: 6rem;
    width: 100%;
`;

interface FooterProps {
    className?: string;
    children?: any;
}

export const Footer = ({
    children,
    className,
}: FooterProps): React.ReactElement<any> => (
    <StyledFooterElement className={classNames(className)}>
        I'm the footer. Neat.
    </StyledFooterElement>
);
