/*
    This component exists for the badge.mdx documentation.
*/

// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Badge, Cart } from '@retailmenot/anchor';

const { useState } = React;

const StyledBadgeWithParentExample = styled.div`
    padding: 2rem 5rem;
    background-color: accent.dark;
    color: white;
    line-height: 1.5rem;

    &:hover {
        background-color: accent.base;
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
                backgroundColor="primary.base"
                borderColor="accent.dark"
                borderColorHover="accent.base"
                count={1}
                isParentHovered={isHovered}
                offsetBottom={1.1}
                offsetLeft={0.6}
                overflowCount={9}
                showZero={false}
                size="small"
                textColor="white"
            >
                <Cart scale="lg" />
            </Badge>
        </StyledBadgeWithParentExample>
    );
};
