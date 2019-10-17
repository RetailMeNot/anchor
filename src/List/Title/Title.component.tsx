// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Typography } from '../../Typography';

export interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
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
