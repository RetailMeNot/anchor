// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { fromEvent, Subscription, merge } from 'rxjs';
import { filter, mapTo, distinctUntilChanged } from 'rxjs/operators';
// ANCHOR
import { get } from '../utils/get/get';
import { Arrow } from './Arrow/Arrow.component';
import { positionVariants, Position } from '../utils/position/position';
export { Position } from '../utils/position/position';

interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
    overlay?: React.ReactElement<any> | Array<React.ReactElement<any>>;
    trigger?: 'hover' | 'click';
    className?: string;
    children?: any;
    // Configuration
    ref?: any;
    position?: Position;
    shadow?: string;
    showArrow?: boolean;
    border?: string;
    background?: string;
    spacing?: number;
    arrowIndent?: string;
    arrowSize?: string;
}

interface DropDownState {
    showDropdown: boolean;
    hovered: boolean;
    clicked: boolean;
    height?: number;
    width?: number;
    containerHeight?: number;
    containerWidth?: number;
}

interface StyledDropDownProps extends DropDownProps {
    // make nonnullable
    position: Position;
}

const StyledDropDown = styled('div')<StyledDropDownProps>`
    box-sizing: border-box;
    font-family: ${th('typography.fontFamily')};
    position: relative;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 1rem;
    min-width: 1rem;

    ${({ position, spacing }) => {
        if (!spacing) {
            return null;
        }
        switch (position) {
            case 'bottom':
            case 'bottomStart':
            case 'bottomEnd':
                return css({
                    paddingBottom: spacing,
                    marginBottom: `-${spacing}`,
                });
            case 'right':
            case 'rightStart':
            case 'rightEnd':
                return css({
                    paddingRight: spacing,
                    marginRight: `-${spacing}`,
                });
            case 'left':
            case 'leftStart':
            case 'leftEnd':
                return css({
                    paddingLeft: spacing,
                    marginLeft: `-${spacing}`,
                });
            case 'top':
            case 'topStart':
            case 'topEnd':
                return css({
                    paddingTop: spacing,
                    marginTop: `-${spacing}`,
                });
        }
        return null;
    }};
`;

interface DropDownContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: any;
    height: number;
    width: number;
    containerHeight: number;
    containerWidth: number;
    position: Position;
    showArrow?: boolean;
    shadow?: string;
    border?: string;
    background?: string;
    active?: boolean;
    children?: any;
    className?: string;
    offset?: string;
}

const StyledDropDownContainer = styled('div')<DropDownContainerProps>`
    position: absolute;
    box-sizing: border-box;
    display: flex;
    z-index: 1;
    min-width: 10rem;

    ${({ border, shadow, active }) =>
        css({
            border,
            boxShadow: shadow,
            visibility: active ? 'visible' : 'hidden',
        })};
    border-radius: base;

    ${({ position, height, width, containerHeight, containerWidth }) =>
        positionVariants(
            position,
            height,
            width,
            containerHeight,
            containerWidth
        )};
`;

interface BackgroundProps {
    background?: string;
}

const Background = styled('div')<BackgroundProps>`
    box-sizing: border-box;
    border-radius: inherit;
    width: 100%
    z-index: 2;

    ${({ background }) =>
        css({
            background: th.color(background),
        })};
`;

export class DropDown extends React.Component<DropDownProps> {
    static defaultProps = {
        trigger: 'hover',
    };
    // State
    state: DropDownState = {
        showDropdown: false,
        hovered: false,
        clicked: false,
    };
    // Instance Reference
    private readonly dropDownReference: React.RefObject<
        DropDown
    > = React.createRef();
    private readonly containerReference: React.RefObject<
        DropDown
    > = React.createRef();
    private rootElement: any;
    // Observables
    private hovered$: Subscription;
    private unclicked$: Subscription;

    componentDidMount(): void {
        const { current: dropDown }: { current: any } = this.dropDownReference;
        const {
            current: container,
        }: { current: any } = this.containerReference;

        // TODO: instead of setting state, what about using the render fxn?
        if (container) {
            this.setState({
                containerHeight: get(container, 'clientHeight', 0),
                containerWidth: get(container, 'clientWidth', 0),
            });
        }
        const height = get(dropDown, 'clientHeight', 0);
        const width = get(dropDown, 'clientWidth', 0);
        this.setState({ height, width });

        // Dropdown Instance
        this.rootElement = dropDown ? dropDown.getRootNode() : null;
        const domClick$ = merge(
            fromEvent(this.rootElement, 'click'),
            fromEvent(this.rootElement, 'touchstart')
        ).pipe(
            filter(() => this.state.clicked),
            filter(({ target }) => !dropDown.contains(target)),
            mapTo(false)
        );

        // Subscribe to keyboard escape
        const escapeKey$ = fromEvent(this.rootElement, 'keyup').pipe(
            filter(() => this.state.clicked || this.state.hovered),
            filter((keyEvent: KeyboardEvent) => keyEvent.key === 'Escape'),
            mapTo(false)
        );

        const mouseEnter$ = fromEvent(dropDown, 'mouseenter').pipe(mapTo(true));
        const mouseLeave$ = fromEvent(dropDown, 'mouseleave').pipe(
            mapTo(false)
        );
        const unclick$ = merge(domClick$, escapeKey$);

        this.unclicked$ = unclick$.subscribe(clicked => {
            this.setState({ clicked });
        });

        this.hovered$ = merge(mouseEnter$, mouseLeave$, unclick$)
            .pipe(distinctUntilChanged())
            .subscribe(hovered => {
                this.setState({ hovered });
            });
    }

    componentWillUnmount(): void {
        this.hovered$.unsubscribe();
        this.unclicked$.unsubscribe();
    }

    componentDidUpdate(prevProps: DropDownProps) {
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
            }: { current: any } = this.dropDownReference;
            const {
                current: container,
            }: { current: any } = this.containerReference;

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

    render(): React.ReactElement<DropDown> {
        const {
            children,
            className,
            overlay,
            spacing,
            arrowIndent = '0.75rem',
            arrowSize,
            showArrow = true,
            position = 'bottom',
            shadow = '0 0 0.5rem 0 rgba(0,0,0,0.2)',
            border = 'light',
            background = 'white',
            trigger,
            ...props
        } = this.props;
        const {
            clicked,
            hovered,
            height = 0,
            width = 0,
            containerHeight = 0,
            containerWidth = 0,
        } = this.state;

        const showDropdown = clicked || (trigger === 'hover' && hovered);

        // if they don't specify a spacing then we'll default
        // based on whether the arrow is there or not
        const spacingWithDefault =
            typeof spacing === 'undefined' ? (showArrow ? 12 : 0) : spacing;

        return (
            <StyledDropDown
                ref={this.dropDownReference}
                className={classNames('anchor-drop-down', className)}
                showArrow={showArrow}
                shadow={shadow}
                position={position}
                spacing={spacingWithDefault}
                onClick={() =>
                    this.setState({
                        clicked: !clicked,
                        hovered: clicked ? false : hovered,
                    })
                }
                {...props}
            >
                {children}
                <StyledDropDownContainer
                    className="anchor-drop-down-container"
                    ref={this.containerReference}
                    shadow={shadow}
                    border={border}
                    position={position}
                    active={showDropdown}
                    height={height}
                    width={width}
                    containerHeight={containerHeight}
                    containerWidth={containerWidth}
                >
                    <Background background={background}>{overlay}</Background>
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
                </StyledDropDownContainer>
            </StyledDropDown>
        );
    }
}
