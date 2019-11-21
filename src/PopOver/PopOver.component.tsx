// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import classNames from 'classnames';
// COMPONENTS
import { Position } from '../utils/position/position';
import { PositionContainer } from '../utils/PositionContainer';

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
    width: number;
    height: number;
    popOverHeight: number;
    popOverWidth: number;
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
        popOverHeight: 0,
        popOverWidth: 0,
    };
    private readonly popOverContainerRef: React.RefObject<
        HTMLDivElement
    > = React.createRef();
    private readonly popOverRef: React.RefObject<
        HTMLDivElement
    > = React.createRef();

    componentDidMount(): void {
        const { current: popOverContainer } = this.popOverContainerRef;
        const { current: popOver } = this.popOverRef;

        if (popOverContainer) {
            this.setState({
                height: popOverContainer.clientHeight,
                width: popOverContainer.clientWidth,
            });
        }
        if (popOver) {
            this.setState({
                popOverHeight: popOver.clientHeight,
                popOverWidth: popOver.clientWidth,
            });
        }
    }

    render() {
        const {
            arrowIndent,
            arrowSize,
            background,
            children,
            className,
            border,
            borderRadius,
            color,
            content,
            delay,
            debug,
            shadow,
            spacing = 8,
            maxWidth,
            position = 'bottomStart',
            showArrow,
            active,
        } = this.props;

        const { height, popOverHeight, popOverWidth, width } = this.state;
        return (
            <StyledPopOver
                className={classNames('anchor-pop-over', className)}
                ref={this.popOverContainerRef}
            >
                {children}
                <PositionContainer
                    active={active}
                    arrowIndent={arrowIndent}
                    arrowSize={arrowSize}
                    background={background}
                    border={border}
                    borderRadius={borderRadius}
                    children={content}
                    className="anchor-pop-over-element"
                    color={color}
                    containerHeight={popOverHeight}
                    containerWidth={popOverWidth}
                    delay={delay}
                    debug={debug}
                    height={height}
                    shadow={shadow}
                    spacing={spacing}
                    maxWidth={maxWidth}
                    position={position}
                    ref={this.popOverRef}
                    showArrow={showArrow}
                    width={width}
                />
            </StyledPopOver>
        );
    }
}
