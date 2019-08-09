/*
    This component exists for the badge.mdx documentation.
*/

// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Badge, Cart } from '@retailmenot/anchor';
// THEME
import { colors } from '@retailmenot/anchor';

const { useState } = React;

const StyledBadgeWithParentExample = styled.div`
    padding: 2rem 5rem;
    background-color: ${colors.grapePurchase.base};
    color: ${colors.white.base};
    line-height: 1.5rem;

    &:hover {
        background-color: ${colors.grapePurchase.light};
    }
`;

export const BadgeWithParentExample = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const handleOnMouseEnter = () => {
        setIsHovered(true);
    };
    const handleOnMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <StyledBadgeWithParentExample
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >
            <Badge
                backgroundColor={colors.flashPink.base}
                borderColor={colors.grapePurchase.base}
                borderColorHover={colors.grapePurchase.light}
                count={1}
                isParentHovered={isHovered}
                offsetBottom={1.1}
                offsetLeft={0.6}
                overflowCount={9}
                showZero={false}
                size="small"
                textColor={colors.white.base}
            >
                <Cart scale="lg" />
            </Badge>
        </StyledBadgeWithParentExample>
    );
};
