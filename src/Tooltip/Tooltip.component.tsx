// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';

// ANCHOR
import { Position } from '../utils/position/position';
import { PositionContainer } from '../utils/PositionContainer';

interface TooltipContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    arrowIndent?: string;
    arrowSize?: string;
    background?: string;
    color?: string;
    content: string;
    delay?: string;
    display?: string;
    initialDistance?: number;
    maxWidth?: string;
    position?: Position;
    showArrow?: boolean;
    wrapContent?: boolean;
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
            background,
            children,
            className,
            color = 'white',
            content,
            delay,
            initialDistance = 8,
            maxWidth,
            position = 'topEnd',
            showArrow,
            wrapContent,
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
                <PositionContainer
                    active={!hidden}
                    arrowIndent={arrowIndent}
                    arrowSize={arrowSize}
                    background={background}
                    children={content}
                    className="anchor-tooltip-element"
                    color={color}
                    containerHeight={toolTipHeight}
                    containerWidth={toolTipWidth}
                    delay={delay}
                    height={height}
                    initialDistance={initialDistance}
                    maxWidth={maxWidth}
                    position={position}
                    ref={this.tooltipRef}
                    showArrow={showArrow}
                    width={width}
                    wrapContent={wrapContent}
                />
            </ToolTipContainer>
        );
    }
}
