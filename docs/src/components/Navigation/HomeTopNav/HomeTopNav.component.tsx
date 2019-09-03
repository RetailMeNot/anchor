import * as React from 'react';
import { Col, Container, Row } from '@retailmenot/anchor';
import styled from '@xstyled/styled-components';
// Components
import { NavLink } from './NavLink.component';

interface StyledHomeTopNavProps {
    contentWidth: number;
}

const StyledHomeTopNav = styled('nav')<StyledHomeTopNavProps>`
    text-align: right;
    margin: 0 auto;
    width: 100%;
    max-width: ${props => props.contentWidth}px;
`;

const StyledContainer = styled(Container)`
    width: 300rpx;
    display: inline-block;
`;

export const HomeTopNav = ({
    contentWidth,
}: StyledHomeTopNavProps): React.ReactElement => {
    return (
        <StyledHomeTopNav contentWidth={contentWidth}>
            <StyledContainer>
                <Row>
                    <Col>
                        <NavLink to="/overview/">Overview</NavLink>
                    </Col>
                </Row>
            </StyledContainer>
        </StyledHomeTopNav>
    );
};
