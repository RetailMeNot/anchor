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
    maxHeight?: string;
    maxWidth?: string;
    minHeight?: string;
    minWidth?: string;
    textLength?: number;
    colorStart?: string;
    colorEnd?: string;
}

interface StyledSkeletonProps extends SkeletonProps {
    textOnly?: boolean;
}

const StyledSkeleton = styled('div')<StyledSkeletonProps>`
    box-sizing: border-box;

    ${({
        display,
        borderRadius,
        height,
        width,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        textOnly,
    }) =>
        css({
            borderRadius,
            display: display || (textOnly ? 'inherit' : 'inline-block'),
            width,
            height,
            maxWidth,
            maxHeight,
            minHeight,
            minWidth,
        })}
    ${spaceStyles}

    ${({ textOnly, colorStart }) =>
        textOnly
            ? css`
                  word-break: break-all;

                  color: ${colorStart};
                  animation: color-change 2s ease-in-out infinite;
              `
            : css`
                  pointer-events: none;
                  background: ${th.color(colorStart)};
                  animation: background-change 2s ease-in-out infinite;

                  // hide all children
                  && * {
                      visibility: hidden;
                      opacity: 0;
                  }
              `}

    ${({ colorStart, colorEnd }) => css`
        @keyframes background-change {
            0% {
                background: ${th.color(colorStart)};
            }
            50% {
                background: ${th.color(colorEnd)};
            }
            100% {
                background: ${th.color(colorStart)};
            }
        }
        @keyframes color-change {
            0% {
                color: ${colorStart};
            }
            50% {
                color: ${colorEnd};
            }
            100% {
                color: ${colorStart};
            }
        }
    `}
`;

export const Skeleton = ({
    className,
    children,
    textLength,
    loading = true,
    colorStart = th('skeleton.colorStart'),
    colorEnd = th('skeleton.colorEnd'),
    ...props
}: SkeletonProps): React.ReactElement<StyledSkeletonProps> | any => {
    if (!loading) {
        return typeof children === 'undefined' ? null : children;
    }

    // This is the conversion from block width to the average width of
    // a normal distribution of letters. We came up with it by eyeballing it
    // for the Avenir Next font. We should make it configurable via theme/prop
    // or make further calculations to improve it.
    const blockToAverageCharQuotient = 2.15;

    // This is the unicode block character that put together looks like one
    // long bar. There are shorter and taller characters that could be used
    // or a fatter or thinner bar. Therefore the bar thickness chould be made
    // a prop in the future, mapping to different block characters.
    const blockChar = '▆';

    const onlyChild =
        React.Children.count(children) === 1 &&
        React.Children.toArray(children)[0];

    // We're removing duplicate white space because they don't show up in html
    const childText =
        typeof onlyChild === 'string' && onlyChild.replace(/\s\s+/g, ' ');

    const length = textLength || (childText && childText.length);
    const blockText =
        length &&
        Array(Math.ceil(length / blockToAverageCharQuotient) + 1).join(
            blockChar
        );

    return (
        <StyledSkeleton
            className={classNames('anchor-skeleton', className)}
            textOnly={!!blockText}
            colorStart={colorStart}
            colorEnd={colorEnd}
            {...props}
        >
            {blockText || children}
        </StyledSkeleton>
    );
};
