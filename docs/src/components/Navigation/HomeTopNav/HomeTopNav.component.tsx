import * as React from 'react';
import { Cell, Grid } from '@retailmenot/anchor';
import styled from '@xstyled/styled-components';
// Components
import { NavLink } from './NavLink.component';

interface StyledHomeTopNavProps {
    contentWidth: number;
}

const StyledHomeTopNav = styled('nav')<StyledHomeTopNavProps>`
    margin: 0 auto;
    width: 100%;
    max-width: ${props => props.contentWidth}px;
`;

const StyledContainer = styled('div')`
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
                <Grid gap="0rem" debug>
                    <Cell width={{xs: 2}} left={{xs: 11}}>
                        <StyledNavLink to="/overview/">Overview</StyledNavLink>
                    </Cell>
                </Grid>
            </StyledContainer>
        </StyledHomeTopNav>
    );
};
