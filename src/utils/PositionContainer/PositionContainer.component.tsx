// VENDOR
import * as React from 'react';
import { forwardRef } from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import classNames from 'classnames';
// COMPONENTS
import { positionVariants, Position } from '../position/position';
import { Arrow } from '../Arrow/Arrow.component';

interface PositionContainerProps  extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    arrowIndent?: string;
    arrowSize?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    children?: any;
    className?: string;
    color?: string;
    containerHeight: number;
    containerWidth: number;
    delay?: string;
    height: number;
    spacing?: number;
    maxWidth?: string;
    offset?: string;
    padding?: string;
    position: Position;
    shadow?: string;
    showArrow?: boolean;
    width: number;
    wrapContent?: boolean;
}

const StyledPositionContainer = styled('div')<PositionContainerProps>`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    z-index: 1;
    min-width: 10rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 250ms ease-in-out;
    font-family: base;

    ${({
        border,
        borderRadius,
        color,
        delay,
        padding,
        shadow,
    }) => css({
        border,
        color,
        padding,
        borderRadius,
        boxShadow: shadow,
        transitionDelay: delay,
    })};

    ${({
        containerHeight,
        containerWidth,
        height,
        spacing,
        position,
        width,
    }) =>
        positionVariants(
            position,
            height,
            width,
            containerHeight,
            containerWidth,
            spacing // This is the distance of the item from the target in px
        )};

    &.active {
        opacity: 1;
        visibility: visible;
    }

    ${({ wrapContent = true }) =>
        css({ whiteSpace: wrapContent ? 'normal' : 'nowrap' })};

    ${({ maxWidth = 'auto' }) => css({ width: maxWidth })};
`;

interface BackgroundProps {
    background?: string;
}

const Background = styled('div')<BackgroundProps>`
    position: absolute;
    box-sizing: border-box;
    border-radius: inherit;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    ${({ background }) =>
        css({
            background: th.color(background),
        })};
`;

const StyledOverlay = styled('div')`
    position: relative;
    z-index: 1;
`;

export const PositionContainer = forwardRef(
    (
        {
            active,
            arrowIndent,
            arrowSize,
            background = 'black',
            border,
            borderRadius = 'base',
            children,
            className,
            color,
            containerHeight,
            containerWidth,
            delay,
            height,
            spacing = 0,
            padding = '0.5rem',
            position = 'bottom',
            shadow,
            showArrow,
            width,
        }: PositionContainerProps,
        ref: React.RefObject<any>
    ) => (
        <StyledPositionContainer
            border={border}
            borderRadius={borderRadius}
            className={classNames(className || 'anchor-position-container', active && 'active')}
            color={color}
            containerHeight={containerHeight}
            containerWidth={containerWidth}
            delay={delay}
            height={height}
            spacing={spacing}
            padding={padding}
            position={position}
            ref={ref}
            shadow={shadow}
            width={width}
        >
            <Background background={background} />

            <StyledOverlay>
                {children}
            </StyledOverlay>

            {showArrow && (
                <Arrow
                    position={position}
                    size={arrowSize}
                    indent={arrowIndent}
                    background={background}
                    shadow={shadow}
                    border={border}
                />
            )}
        </StyledPositionContainer>
    )
);
