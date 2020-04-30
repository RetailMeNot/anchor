// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, {
    css,
    keyframes,
    ThemeContext,
} from '@xstyled/styled-components';
import {
    space as spaceStyles,
    SpaceProps,
    layout as layoutStyles,
    LayoutProps,
    borderRadius as borderRadiusStyles,
    BorderRadiusProps,
    variant as createVariant,
    fontSize as fontSizeStyles,
    FontSizeProps,
    lineHeight as lineHeightStyles,
    LineHeightProps,
    th,
} from '@xstyled/system';

interface SkeletonProps
    extends React.HTMLAttributes<HTMLDivElement>,
        SpaceProps,
        LayoutProps,
        BorderRadiusProps,
        FontSizeProps,
        LineHeightProps {
    className?: string;
    loading?: boolean;
    textLength?: number;
    textChar?: string;
    blockRatio?: number;
    colorStart?: string;
    colorEnd?: string;
    variant?: string;
}

interface StyledSkeletonProps extends SkeletonProps {
    textOnly?: boolean;

    // making nonnullable
    colorStart: string;
    colorEnd: string;
}

export const SKELETON_KEY = 'skeleton';
export const SKELETON_THEME = {
    variants: {
        base: {
            colorStart: '#E7E7E7',
            colorEnd: '#D3D3D3',
        },
    },
};

const colorVariant = createVariant({
    key: `${SKELETON_KEY}.variants`,
    prop: 'variant',
    default: 'base',
    variants: SKELETON_THEME.variants,
});

const colorKeyframe = (start: string, end: string) => keyframes`
    0% { color: ${start}; }
    50% { color: ${end}; }
    100% { color: ${start}; }
`;
const bgKeyframe = (start: string, end: string) => keyframes`
    0% { background: ${start}; }
    50% { background: ${end}; }
    100% { background: ${start}; }
`;

const StyledSkeleton = styled('span')<StyledSkeletonProps>`
    box-sizing: border-box;
    ${borderRadiusStyles}
    ${spaceStyles}
    ${layoutStyles}
    ${fontSizeStyles}
    ${lineHeightStyles}

    ${({ textOnly, colorStart, colorEnd }) =>
        textOnly
            ? css`
                  // its all one word technically, so we want to make sure
                  // it can be broken up into multiple lines
                  word-break: break-all;
                  white-space: normal;

                  // smoothing can make it appear as though theres
                  // a gap between the block characters
                  -webkit-font-smoothing: none;
                  -moz-osx-font-smoothing: auto;

                  color: ${colorStart};
                  animation: ${colorKeyframe(colorStart, colorEnd)} 2s
                      ease-in-out infinite;
              `
            : css`
                  pointer-events: none;
                  background: ${colorStart};
                  animation: ${bgKeyframe(colorStart, colorEnd)} 2s ease-in-out
                      infinite;

                  // hide all children
                  && * {
                      visibility: hidden;
                      opacity: 0;
                  }
              `}
`;

export const Skeleton = ({
    className,
    children,
    display,
    textLength,
    // This is the unicode block character that put together looks like one
    // long bar. There are shorter and taller characters that could be used
    // or a fatter or thinner bar.
    textChar = '▆',
    // This is the conversion from block width to the average width of
    // a normal distribution of letters. We came up with it by eyeballing it
    // for the Avenir Next font. We should probably make it themeable in the future.
    blockRatio = 1 / 2.15,
    loading = true,
    colorStart,
    colorEnd,
    ...props
}: SkeletonProps): React.ReactElement<StyledSkeletonProps> | any => {
    if (!loading) {
        return typeof children === 'undefined' ? null : children;
    }

    const theme = React.useContext(ThemeContext);
    const { colorStart: themeStart, colorEnd: themeEnd } = colorVariant({
        ...props,
        theme,
    });

    // Keyframes don't play nice with prop functions, so we're manually
    // calculating the raw color value from the theme before plugging it in
    const startValue = th.color(colorStart || themeStart)({ theme });
    const endValue = th.color(colorEnd || themeEnd)({ theme });

    const onlyChild =
        React.Children.count(children) === 1 &&
        React.Children.toArray(children)[0];

    // We're removing duplicate white space because they don't show up in html
    const childText =
        typeof onlyChild === 'string' && onlyChild.replace(/\s\s+/g, ' ');

    const length = textLength || (childText && childText.length);
    const blockText =
        length && Array(Math.ceil(length * blockRatio) + 1).join(textChar);
    const textOnly = !!blockText;

    return (
        <StyledSkeleton
            className={classNames('anchor-skeleton', className)}
            display={display || (textOnly ? 'inherit' : 'inline-block')}
            textOnly={textOnly}
            colorStart={startValue}
            colorEnd={endValue}
            {...props}
        >
            {blockText || children}
        </StyledSkeleton>
    );
};
