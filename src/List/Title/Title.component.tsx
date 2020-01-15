// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
// COMPONENTS
import { Typography } from '../../Typography';

export interface TitleProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    children?: any;
    className?: string;
    label?: string;
}

const StyledTitle = styled('div')`
    box-sizing: border-box;
    display: flex;
    padding: 0 1rem 0;
    align-items: center;
    height: 2rem;
    margin-top: 0.75rem;
    ${spaceStyles}
`;

export const Title = ({
    className,
    children,
}: TitleProps): React.ReactElement<any> => (
    <StyledTitle className={classNames('anchor-list-title', className)}>
        <Typography weight={700} scale={12} color="text.label">
            {children}
        </Typography>
    </StyledTitle>
);
