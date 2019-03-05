// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
// THEME
import { fonts, colors, sizes, variables } from '../theme';

interface BadgeProps {
    count?: string | number;
    className?: string;
    children?: any;
}

export const StyledBadge = styled.div`
    position: relative;
    font-family: ${fonts.fontFamily};
    display: inline-block;

    .badge {
        position: absolute;
        top: -0.5rem;
        right: -0.25rem;
        background-color: ${colors.flashPink.base};
        color: ${colors.white.base};
        font-weight: 700;
        font-size: 0.75rem;
        padding: 1px ${sizes.padding.xs};
        border-radius: ${variables.borderRadius};
    }
`;

const Badge = ({ className, children, count, ...props }: BadgeProps) => (
    <StyledBadge className={classNames(className)} {...props}>
        {children}
        <div className="badge">{count}</div>
    </StyledBadge>
);
export default Badge;
