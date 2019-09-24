/*
    The Link component from Gatsby doesn't have styles that match Anchor. This component is designed
    to fill that gap. Currently it applies a few styles to the Link component and has logic to
    use some default text for the link if none is supplied.

    TODO: It would be good to further expand this to use the Typography component and extend its
    props. HOC perhaps?
*/

import * as React from 'react';
import { Link } from 'gatsby';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';

interface SiteLinkProps {
    children?: any;
    to: string;
}

const StyledSiteLink = styled(Link)`
    color: #007ecd;
    font-family: ${th('typography.fontFamily')};
    text-decoration: none;
    font-weight: 600;
`;

export const SiteLink = ({
    children,
    to,
}: SiteLinkProps): React.ReactElement<any> => (
    <StyledSiteLink to={to}>
        {children ? children : <span>View &raquo;</span>}
    </StyledSiteLink>
);
