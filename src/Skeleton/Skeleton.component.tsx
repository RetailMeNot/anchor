// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, space as spaceStyles, SpaceProps } from '@xstyled/system';

interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
        SpaceProps {
    className?: string;
    loading?: boolean;
    borderRadius?: string;
    display?: string;
    height?: string;
    width?: string;
}

interface StyledSkeletonProps extends SkeletonProps {
    textOnly?: boolean;
}

const StyledSkeleton = styled('div')<StyledSkeletonProps>`
    box-sizing: border-box;

    ${({ display, borderRadius, height, width, textOnly }) =>
        css({
            borderRadius,
            display: display || (textOnly ? 'inherit' : 'inline-block'),
            width,
            height,
        })}
    ${spaceStyles}

    ${({ textOnly }) =>
        textOnly
            ? css`
                  word-break: break-all;

                  color: neutrals.silver.dark;
                  animation: color-change 2s ease-in-out infinite;
              `
            : css`
                  background: ${th.color('neutrals.silver.dark')};
                  pointer-events: none;
                  animation: background-change 2s ease-in-out infinite;

                  // hide all children
                  * {
                      visibility: none;
                      opacity: 0;
                  }
              `}

    @keyframes background-change {
        0% {
            background: ${th.color('neutrals.silver.dark')};
        }
        50% {
            background: ${th.color('neutrals.ash.light')};
        }
        100% {
            background: ${th.color('neutrals.silver.dark')};
        }
    }
    @keyframes color-change {
        0% {
            color: neutrals.silver.dark;
        }
        50% {
            color: neutrals.ash.light;
        }
        100% {
            color: neutrals.silver.dark;
        }
    }
`;

export const Skeleton = ({
    className,
    children,
    loading = true,
    ...props
}: SkeletonProps): React.ReactElement<StyledSkeletonProps> | any => {
    if (!loading) {
        return children;
    }

    // This is the conversion from block width to the average width of
    // a normal distribution of letters. We came up with it by eyeballing it
    // for the Avenir Next font. We should make it configurable via theme/prop
    // or do some more precise math to make it better.
    const blockToAverageCharQuotient = 2.15;

    const onlyChild =
        React.Children.count(children) === 1 &&
        React.Children.toArray(children)[0];

    const onlyText =
        typeof onlyChild === 'string' &&
        Array(Math.ceil(onlyChild.length / blockToAverageCharQuotient)).join(
            '▆'
        );

    return (
        <StyledSkeleton
            className={classNames('anchor-skeleton', className)}
            textOnly={!!onlyText}
            {...props}
        >
            {onlyText || children}
        </StyledSkeleton>
    );
};
