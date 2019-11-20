// VENDOR
import * as React from 'react';
// import classNames from 'classnames';
// COMPONENTS
import { Position } from '../utils/position/position';
import { PositionContainer } from '../utils/PositionContainer';

interface PopOverContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    arrowIndent?: string;
    arrowSize?: string;
    background?: string;
    color?: string;
    content: any;
    delay?: string;
    debug?: boolean;
    display?: string;
    spacing?: number;
    maxWidth?: string;
    position?: Position;
    showArrow?: boolean;
    wrapContent?: boolean;
    active: boolean;
}

interface PopOverContainerState {
    width: number;
    height: number;
    popOverHeight: number;
    popOverWidth: number;
}

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
        // TODO: instead of setting state, what about using the render fxn?
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
            // className,
            color,
            content,
            delay,
            debug,
            spacing,
            maxWidth,
            position = 'bottom',
            showArrow,
            wrapContent,
            active,
        } = this.props;
        
        const {
            height,
            popOverHeight,
            popOverWidth,
            width,
        } = this.state;
        return (
            <div ref={this.popOverContainerRef}>
                {children}
                <PositionContainer
                    active={active}
                    arrowIndent={arrowIndent}
                    arrowSize={arrowSize}
                    background={background}
                    children={content}
                    className="anchor-pop-over-element"
                    color={color}
                    containerHeight={popOverHeight}
                    containerWidth={popOverWidth}
                    delay={delay}
                    debug={debug}
                    height={height}
                    spacing={spacing}
                    maxWidth={maxWidth}
                    position={position}
                    ref={this.popOverRef}
                    showArrow={showArrow}
                    width={width}
                    wrapContent={wrapContent}
                />
            </div>
        )
    }
} 
