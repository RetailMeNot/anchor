// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR
import { positionVariants, Position } from '../utils/position/position';
import { Arrow } from '../DropDown/Arrow/Arrow.component';

interface TooltipContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    background?: string;
    border?: string;
    color?: string;
    content: string | React.ReactChild;
    delay?: string;
    display?: string;
    maxWidth?: string;
    position?: Position;
    show?: boolean;
    shadow?: string;
    wrapContent?: boolean;
    // Arrow props
    arrowIndent?: string;
    arrowSize?: string;
    showArrow?: boolean;
}

interface TooltipContainerState {
    height: number;
    hidden: boolean;
    toolTipHeight: number;
    toolTipWidth: number;
    width: number;
}

const ToolTipContainer = styled('div')<TooltipContainerProps>`
    position: relative;
    ${({ display = 'inline-block' }) => css({ display })};
`;

interface TooltipElementProps {
    background?: string;
    border?: string;
    color?: string;
    delay?: string;
    height: number;
    maxWidth?: string;
    position: Position;
    shadow?: string;
    toolTipHeight: number;
    toolTipWidth: number;
    width: number;
    wrapContent?: boolean;
}

const TooltipElement = styled('div')<TooltipElementProps>`
    position: absolute;
    box-sizing: border-box;
    ${({ background, border, color = 'white', shadow }) =>
        css({
            background: th.color(background),
            border,
            boxShadow: shadow,
            color,
        })};
    border-radius: base;
    font-family: base;
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

    ${({ wrapContent = true }) =>
        css({ whiteSpace: wrapContent ? 'normal' : 'nowrap' })};
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

interface BackgroundProps {
    background?: string;
}

const Background = styled('div')<BackgroundProps>`
    ${({ background }) =>
        css({
            background: th.color(background),
        })}
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
    border-radius: inherit;
`;

const StyledContent = styled('div')`
    z-index: 2;
    position: relative;
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
            arrowIndent,
            arrowSize,
            background = 'rgba(0, 0, 0, 0.8)',
            border,
            children,
            className,
            color,
            content,
            delay,
            show: propShow,
            maxWidth,
            position = 'topEnd',
            shadow,
            showArrow,
            wrapContent,
            ...props
        } = this.props;
        const {
            height,
            width,
            hidden: stateHidden,
            toolTipHeight,
            toolTipWidth,
        } = this.state;
        // If the dev passes show as a prop then Tooltip's behavior changes, and whether or not it
        // is visible is controlled by that prop and not by state.
        const hiddenOveride = propShow !== undefined;

        return (
            <ToolTipContainer
                content={content}
                onMouseEnter={
                    hiddenOveride
                        ? () => null
                        : () => this.setState({ hidden: false })
                }
                onMouseLeave={
                    hiddenOveride
                        ? () => null
                        : () => this.setState({ hidden: true })
                }
                ref={this.tooltipContainerRef}
                className={classNames('anchor-tooltip', className)}
                {...props}
            >
                {children}
                <TooltipElement
                    border={border}
                    className={classNames('anchor-tooltip-element', {
                        active: hiddenOveride ? propShow : !stateHidden,
                    })}
                    delay={delay}
                    ref={this.tooltipRef}
                    position={position}
                    height={height}
                    width={width}
                    toolTipHeight={toolTipHeight}
                    toolTipWidth={toolTipWidth}
                    wrapContent={wrapContent}
                    color={color}
                    maxWidth={maxWidth}
                    shadow={shadow}
                >
                    <Background background={background} />

                    <StyledContent>{content}</StyledContent>

                    {showArrow && (
                        <Arrow
                            background={background}
                            border={border}
                            indent={arrowIndent}
                            position={position}
                            shadow={shadow}
                            size={arrowSize}
                        />
                    )}
                </TooltipElement>
            </ToolTipContainer>
        );
    }
}
