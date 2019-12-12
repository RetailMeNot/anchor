// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import classNames from 'classnames';
// COMPONENTS
import { Position } from '../utils/position/position';
import { PositionContainer } from '../utils/PositionContainer';
// UTILS
import { get } from '../utils/get/get';

interface PopOverContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    arrowIndent?: string;
    arrowSize?: string;
    background?: string;
    border?: string;
    borderRadius?: string;
    color?: string;
    content: string | React.ReactChild;
    delay?: string;
    debug?: boolean;
    shadow?: string;
    spacing?: number;
    maxWidth?: string;
    position?: Position;
    showArrow?: boolean;
    active: boolean;
}

interface PopOverContainerState {
    height: number;
    width: number;
    containerHeight: number;
    containerWidth: number;
}

const StyledPopOver = styled('div')`
    position: relative;
`;

export class PopOver extends React.PureComponent<
    PopOverContainerProps,
    PopOverContainerState
> {
    public state = {
        width: 0,
        height: 0,
        containerHeight: 0,
        containerWidth: 0,
    };
    private readonly popOverContainerRef: React.RefObject<
        HTMLDivElement
    > = React.createRef();
    private readonly popOverRef: React.RefObject<
        HTMLDivElement
    > = React.createRef();
    // TODO: why the fuck not just use the code in the dropdown/abstract that out and inject it into two instances?
    componentDidMount(): void {
        const { current: popOver } = this.popOverRef;
        const { current: popOverContainer } = this.popOverContainerRef;
        this.setState({
            height: get(popOver, 'clientHeight', 0),
            width: get(popOver, 'clientWidth', 0),
            containerHeight: get(popOverContainer, 'clientHeight', 0),
            containerWidth: get(popOverContainer, 'clientWidth', 0),
        });
    }

    componentDidUpdate(prevProps: PopOverContainerProps) {
        const {
            showArrow: prevShowArrow,
            position: prevPosition,
            spacing: prevSpacing,
        } = prevProps;
        const { showArrow, position, spacing } = this.props;

        if (
            showArrow !== prevShowArrow ||
            position !== prevPosition ||
            spacing !== prevSpacing
        ) {
            const {
                current: dropDown,
            }: { current: any } = this.popOverRef;
            const {
                current: container,
            }: { current: any } = this.popOverContainerRef;

            if (container) {
                this.setState({
                    height: get(dropDown, 'clientHeight', 0),
                    width: get(dropDown, 'clientWidth', 0),
                    containerHeight: get(container, 'clientHeight', 0),
                    containerWidth: get(container, 'clientWidth', 0),
                });
            }
        }
    }

    render() {
        const {
            arrowIndent,
            arrowSize,
            background = '#000000',
            children,
            className,
            border,
            borderRadius,
            color = '#ffffff',
            content,
            delay,
            debug,
            shadow,
            spacing = 8,
            maxWidth,
            position = 'bottom',
            showArrow,
            active,
            ...props
        } = this.props;
        const { height, containerHeight, containerWidth, width } = this.state;
        return (
            <StyledPopOver
                className={classNames('anchor-pop-over', className)}
                {...props}
                ref={this.popOverRef}
            >
                {children}
                <PositionContainer
                    ref={this.popOverContainerRef}
                    active={active}
                    arrowIndent={arrowIndent}
                    arrowSize={arrowSize}
                    background={background}
                    border={border}
                    borderRadius={borderRadius}
                    children={content}
                    className="anchor-pop-over-element"
                    color={color}
                    containerHeight={containerHeight}
                    containerWidth={containerWidth}
                    height={height}
                    width={width}
                    delay={delay}
                    debug={debug}
                    shadow={shadow}
                    spacing={spacing}
                    maxWidth={maxWidth}
                    position={position}
                    showArrow={showArrow}
                />
            </StyledPopOver>
        );
    }
}
