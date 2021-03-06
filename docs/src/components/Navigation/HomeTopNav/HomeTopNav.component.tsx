import * as React from 'react';
import { Grid } from '@retailmenot/anchor';
import styled from '@xstyled/styled-components';
// Components
import { NavLink } from './NavLink.component';

const { Cell } = Grid;

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
    display: block;
`;

export const HomeTopNav = ({
    contentWidth,
}: StyledHomeTopNavProps): React.ReactElement => {
    return (
        <StyledHomeTopNav contentWidth={contentWidth}>
            <StyledContainer>
                <Grid gap="0rem">
                    <Cell width={{ xs: 4, md: 2 }} left={{ xs: 8, md: 11 }}>
                        <StyledNavLink to="/overview/">Overview</StyledNavLink>
                    </Cell>
                </Grid>
            </StyledContainer>
        </StyledHomeTopNav>
    );
};
