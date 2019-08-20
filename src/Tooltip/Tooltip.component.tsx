// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

export type Position =
    | 'topStart'
    | 'top'
    | 'topEnd'
    | 'rightStart'
    | 'right'
    | 'rightEnd'
    | 'bottomEnd'
    | 'bottom'
    | 'bottomStart'
    | 'leftEnd'
    | 'left'
    | 'leftStart';

interface TooltipContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    position?: Position;
    maxWidth?: string;
    background?: string;
    color?: string;
    wrap?: boolean;
    display?: string;
}

interface TooltipContainerState {
    width: number;
    height: number;
    toolTipHeight: number;
    toolTipWidth: number;
    hidden: boolean;
}

const ToolTipContainer = styled('div')<TooltipContainerProps>`
    position: relative;
    ${({ display = 'inline-block' }) => css({ display })};
`;

interface TooltipElementProps {
    position: Position;
    height: number;
    width: number;
    toolTipHeight: number;
    toolTipWidth: number;
    wrap?: boolean;
    background?: string;
    color?: string;
    maxWidth?: string;
}

const tooltipMargin = 8;

const positionVariants = (
    position: Position,
    height: number,
    width: number,
    toolTipHeight: number,
    toolTipWidth: number
) => {
    switch (position) {
        case 'topStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(0, -${toolTipHeight +
                    tooltipMargin}px, 0)`,
            });
        case 'top':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width / 2 -
                    toolTipWidth / 2}px, -${toolTipHeight +
                    tooltipMargin}px, 0)`,
            });
        case 'topEnd':
            return css({
                right: 0,
                top: 0,
                transform: `translate3d(0, -${toolTipHeight +
                    tooltipMargin}px, 0)`,
            });
        case 'rightStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width + tooltipMargin}px, 0, 0)`,
            });
        case 'right':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width + tooltipMargin}px, ${height /
                    2 -
                    toolTipHeight / 2}px, 0)`,
            });
        case 'rightEnd':
            return css({
                left: 0,
                bottom: 0,
                transform: `translate3d(${width + tooltipMargin}px, 0, 0)`,
            });
        case 'bottomEnd':
            return css({
                right: 0,
                top: 0,
                transform: `translate3d(0, ${height + tooltipMargin}px, 0)`,
            });
        case 'bottom':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width / 2 -
                    toolTipWidth / 2}px, ${height + tooltipMargin}px, 0)`,
            });
        case 'bottomStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(0, ${height + tooltipMargin}px, 0)`,
            });
        case 'leftEnd':
            return css({
                left: 0,
                bottom: 0,
                transform: `translate3d(-${toolTipWidth +
                    tooltipMargin}px, 0, 0)`,
            });
        case 'left':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(-${toolTipWidth +
                    tooltipMargin}px, ${height / 2 - toolTipHeight / 2}px, 0)`,
            });
        case 'leftStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(-${toolTipWidth +
                    tooltipMargin}px, 0, 0)`,
            });
        default:
            return css({
                right: 0,
                top: 0,
                transform: `translate3d(0, -${height + tooltipMargin}px, 0)`,
            });
    }
};

const TooltipElement = styled('div')<TooltipElementProps>`
    position: absolute;
    box-sizing: border-box;
    ${({ background = 'rgba(0, 0, 0, 0.8)', color = 'white' }) =>
        css({ background, color })};
    border-radius: base;
    font-family: ${th('typography.fontFamily')};
    font-size: 0.8rem;
    padding: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 250ms ease-in-out;

    &.active {
        opacity: 1;
        visibility: visible;
    }

    ${({ wrap = true }) =>
        wrap ? css({ whiteSpace: 'normal' }) : css({ whiteSpace: 'nowrap' })};

    ${({ maxWidth = 'auto' }) => css({ width: maxWidth })};

    ${({ position, height, width, toolTipHeight, toolTipWidth }) =>
        positionVariants(position, height, width, toolTipHeight, toolTipWidth)};
`;

export class Tooltip extends React.Component<
    TooltipContainerProps,
    TooltipContainerState
> {
    public state = {
        width: 0,
        height: 0,
        toolTipHeight: 0,
        toolTipWidth: 0,
        hidden: true,
    };
    private readonly tooltipContainerRef: React.RefObject<
        HTMLDivElement
    > = React.createRef();
    private readonly tooltipRef: React.RefObject<
        HTMLDivElement
    > = React.createRef();

    componentDidMount(): void {
        const { current: toolTipContainer } = this.tooltipContainerRef;
        const { current: toolTip } = this.tooltipRef;
        // TODO: instead of setting state, what about using the render fxn?
        if (toolTipContainer) {
            this.setState({
                height: toolTipContainer.clientHeight,
                width: toolTipContainer.clientWidth,
            });
        }
        if (toolTip) {
            this.setState({
                toolTipHeight: toolTip.clientHeight,
                toolTipWidth: toolTip.clientWidth,
            });
        }
    }

    render(): React.ReactElement<Tooltip> {
        const {
            className,
            children,
            content,
            position,
            wrap,
            background,
            color,
            maxWidth,
            ...props
        } = this.props;
        const { height, width, toolTipHeight, toolTipWidth } = this.state;
        return (
            <ToolTipContainer
                content={content}
                onMouseEnter={() => this.setState({ hidden: false })}
                onMouseLeave={() => this.setState({ hidden: true })}
                ref={this.tooltipContainerRef}
                className={classNames('anchor-tooltip', className)}
                {...props}
            >
                {children}
                <TooltipElement
                    className={classNames('anchor-tooltip-element', {
                        active: !this.state.hidden,
                    })}
                    ref={this.tooltipRef}
                    position={position || 'topEnd'}
                    height={height}
                    width={width}
                    toolTipHeight={toolTipHeight}
                    toolTipWidth={toolTipWidth}
                    children={content}
                    wrap={wrap}
                    background={background}
                    color={color}
                    maxWidth={maxWidth}
                />
            </ToolTipContainer>
        );
    }
}
