// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, {
    css,
    FlattenSimpleInterpolation,
} from '@xstyled/styled-components';
import { th } from '@xstyled/system';

interface BadgeProps {
    backgroundColor?: string;
    borderColor?: string;
    borderColorHover?: string;
    children?: any;
    className?: string;
    count?: number;
    isParentHovered?: boolean;
    overflowCount?: number;
    offsetBottom?: number;
    offsetLeft?: number;
    showZero?: boolean;
    size?: 'dot' | 'small' | 'large';
    standalone?: boolean;
    textColor?: string;
}

interface BadgeStylesGroup {
    [key: string]: FlattenSimpleInterpolation;
}

const BadgeSizeStyles: BadgeStylesGroup = {
    dot: css`
        height: 0.75rem;
        width: 0.75rem;
    `,
    small: css`
        font-size: 0.625rem;
        height: 1.25rem;
        min-width: 1.25rem;
        padding: 0 0.25rem;
    `,
    large: css`
        font-size: 0.75rem;
        height: 1.75rem;
        min-width: 1.75rem;
        padding: 0 0.5rem;
    `,
};

const StyledBadgeContainer = styled('div')`
    position: relative;
    font-family: ${th('typography.fontFamily')};
    display: inline-block;
`;

const StyledBadge = styled('div')<BadgeProps>`
    align-items: center;
    ${({ backgroundColor, textColor: color }) =>
        css({ backgroundColor, color })};
    border: 0.125rem solid ${({
        borderColor,
        borderColorHover,
        isParentHovered,
    }) => th.color(isParentHovered ? borderColorHover : borderColor)};
    box-sizing: border-box;
    font-weight: 700;
    justify-content: center;
    text-align: center;

    /* Border Radius */
    ${({ count = 1, size }) =>
        size === 'small' && count < 10
            ? `border-radius: 0.4rem;`
            : `border-radius: 1rem;`}

    /* Show/Hide */
    ${({ count, showZero }) =>
        !showZero && count === 0 ? `display: none;` : `display: flex;`}

    /* Non-standalone styles */
    ${({ offsetBottom, offsetLeft, standalone }) =>
        standalone
            ? null
            : `
      position: absolute;
      bottom: ${offsetBottom}rem;
      left: ${offsetLeft}rem;
    `}

    /* Sizes */
    ${({ size = 'dot' }) => BadgeSizeStyles[size]}

    &:hover {
        border: 0.125rem solid ${({ borderColorHover }) => borderColorHover};
    }
`;

export const Badge = ({
    backgroundColor = 'error',
    borderColor = 'error',
    borderColorHover = 'error',
    children,
    className,
    count = 0,
    isParentHovered,
    overflowCount = 9,
    offsetBottom,
    offsetLeft,
    size = 'dot',
    showZero = false,
    standalone = false,
    textColor = 'neutrals.white.base',
    ...props
}: BadgeProps): JSX.Element => {
    const getDisplayCount = (
        badgeCount: number,
        badgeOverflowCount: number,
        badgeSize: string
    ) => {
        if (badgeSize === 'dot') {
            return '';
        } else if (badgeCount <= badgeOverflowCount) {
            return badgeCount;
        } else {
            return `${badgeOverflowCount}+`;
        }
    };
    const displayCount = getDisplayCount(count, overflowCount, size);

    return (
        <StyledBadgeContainer
            className={classNames('anchor-badge', className)}
            {...props}
        >
            {children}

            <StyledBadge
                backgroundColor={backgroundColor}
                borderColor={borderColor}
                borderColorHover={borderColorHover}
                className={classNames('anchor-badge-count', className)}
                count={count}
                isParentHovered={isParentHovered}
                offsetBottom={offsetBottom}
                offsetLeft={offsetLeft}
                showZero={showZero}
                size={size}
                standalone={standalone}
                textColor={textColor}
                {...props}
            >
                {displayCount}
            </StyledBadge>
        </StyledBadgeContainer>
    );
};
