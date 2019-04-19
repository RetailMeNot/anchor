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

const StyledTitle = styled.a``;

const DefaultProps: TitleProps = {};

export const Title = ({
    className,
    children,
    label,
    ...props
}: TitleProps = DefaultProps): React.ReactElement<any> => (
    <StyledTitle
        className={classNames('anchor-list-title', className)}
        {...props}
    >
        <Typography weight={600} scale={12} color="charcoal">{children ? children : label}</Typography>
    </StyledTitle>
);

Title.defaultProps = DefaultProps;

export default Title;
