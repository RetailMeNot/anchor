// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../../Typography';

export interface TitleProps {
    children?: any;
    className?: string;
    label?: string;
}

const StyledTitle = styled('div')`
    box-sizing: border-box;
    padding: 0.75rem 1rem;
`;

export const Title = ({
    className,
    children,
}: TitleProps): React.ReactElement<any> => (
    <StyledTitle className={classNames('anchor-list-title', className)}>
        <Typography weight={700} scale={12} color="ash" hue="dark">
            {children}
        </Typography>
    </StyledTitle>
);
