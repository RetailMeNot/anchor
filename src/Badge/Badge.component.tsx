// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// THEME
import { fonts, colors, sizes, variables } from '../theme';

export interface BadgeProps {
    count?: string | number;
    className?: string;
    children?: any;
}

const StyledBadgeContainer = styled.div`
    position: relative;
    font-family: ${fonts.fontFamily};
    display: inline-block;
`;

const StyledBadge = styled.div`
    position: absolute;
    top: -0.5rem;
    right: -0.25rem;
    background-color: ${colors.flashPink.base};
    color: ${colors.white.base};
    font-weight: 700;
    font-size: 0.75rem;
    padding: 1px ${sizes.padding.xs};
    border-radius: ${variables.borderRadius};
`;

export const Badge = ({
    className,
    children,
    count,
    ...props
}: BadgeProps): JSX.Element => (
    <StyledBadgeContainer className={classNames(className)} {...props}>
        {children}
        <StyledBadge>{count}</StyledBadge>
    </StyledBadgeContainer>
);

export default Badge;
