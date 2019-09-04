// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR
import { positionVariants, Position } from '../utils/position/position';
export { Position } from '../utils/position/position';

interface TooltipContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    position?: Position;
    maxWidth?: string;
    background?: string;
    color?: string;
    wrap?: boolean;
    display?: string;
    delay?: string;
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
    delay?: string;
}

const TooltipElement = styled('div')<TooltipElementProps>`
    position: absolute;
    box-sizing: border-box;
    ${({ background = 'rgba(0, 0, 0, 0.8)', color = 'white' }) =>
        css({
            background: th.color(background),
            color,
        })};
    border-radius: base;
    font-family: ${th('typography.fontFamily')};
    font-size: 0.8rem;
    padding: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity 250ms ease-in-out;

    &.active {
        ${({ delay }) =>
            css({
                transitionDelay: delay,
            })}
        opacity: 1;
        visibility: visible;
    }

    ${({ wrap = true }) => css({ whiteSpace: wrap ? 'normal' : 'nowrap' })};
    ${({ maxWidth = 'auto' }) => css({ width: maxWidth })};
    ${({ position, height, width, toolTipHeight, toolTipWidth }) =>
        positionVariants(
            position,
            height,
            width,
            toolTipHeight,
            toolTipWidth,
            8
        )};
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
            position = 'topEnd',
            wrap,
            background,
            color,
            maxWidth,
            delay,
            ...props
        } = this.props;
        const {
            height,
            width,
            hidden,
            toolTipHeight,
            toolTipWidth,
        } = this.state;
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
                        active: !hidden,
                    })}
                    delay={delay}
                    ref={this.tooltipRef}
                    position={position}
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
