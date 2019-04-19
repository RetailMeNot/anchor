// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Typography } from '../../Typography';

export interface TitleProps {
    children?: any;
    className?: string;
    label?: string;
}

const StyledTitle = styled.div`
    box-sizing: border-box;
    padding: .75rem 1rem;
`;

const DefaultProps: TitleProps = {};

export const Title = ({
    className,
    children,
}: TitleProps = DefaultProps): React.ReactElement<any> => (
    <StyledTitle
        className={classNames('anchor-list-title', className)}
    >
        <Typography weight={600} scale={12} color="ash" hue="dark">{children}</Typography>
    </StyledTitle>
);

Title.defaultProps = DefaultProps;

export default Title;
