import * as React from 'react';
import { Col, Container, Row } from '@retailmenot/anchor';
import styled from '@xstyled/styled-components';
// Components
import { NavLink } from './NavLink.component';

interface StyledHomeTopNavProps {
    contentWidth: number;
}

const StyledHomeTopNav = styled('nav')<StyledHomeTopNavProps>`
    // text-align: right;
    margin: 0 auto;
    width: 100%;
    max-width: ${props => props.contentWidth}px;
`;

const StyledContainer = styled(Container)`
    // max-width: 18.75rem;
    width: 100%;
    display: inline-block;
`;

const StyledNavLink = styled(NavLink)`
    text-align: right;
`;

export const HomeTopNav = ({
    contentWidth,
}: StyledHomeTopNavProps): React.ReactElement => {
    return (
        <StyledHomeTopNav contentWidth={contentWidth}>
            <StyledContainer>
                <Row>
                    <Col offset={{ xs: 3, md: 6, lg: 11 }}>
                        <StyledNavLink to="/overview/">Overview</StyledNavLink>
                    </Col>
                </Row>
            </StyledContainer>
        </StyledHomeTopNav>
    );
};
