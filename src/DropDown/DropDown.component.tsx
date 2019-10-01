// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { fromEvent, Subscription, merge } from 'rxjs';
import { filter, map, mapTo, distinctUntilChanged } from 'rxjs/operators';
// ANCHOR
import { get } from '../utils/get/get';
import { Arrow } from './Arrow/Arrow.component';
import { positionVariants, Position } from '../utils/position/position';

export type Trigger = 'hover' | 'click' | 'both';

interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
    overlay?: React.ReactElement<any> | Array<React.ReactElement<any>>;
    trigger?: Trigger;
    className?: string;
    children?: any;
    // Configuration
    ref?: any;
    position?: Position;
    shadow?: string;
    showArrow?: boolean;
    border?: string;
    borderRadius?: string;
    background?: string;
    spacing?: string;
    arrowIndent?: string;
    arrowSize?: string;
    onTriggered?: (state: boolean) => void;
}

interface DropDownState {
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
                    // this won't work for a negative spacing values. if we fix
                    // these we could allow negative values
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
    borderRadius?: string;
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

    ${({ border, borderRadius, shadow, active }) =>
        css({
            border,
            borderRadius,
            boxShadow: shadow,
            visibility: active ? 'visible' : 'hidden',
        })};

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
    width: 100%;
    z-index: 2;

    ${({ background }) =>
        css({
            background: th.color(background),
        })};
`;

export class DropDown extends React.Component<DropDownProps> {
    // State
    state: DropDownState = {
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
    // Observable Subscriptions
    private hoveredSub$: Subscription;
    private clickedSub$: Subscription;

    componentDidMount(): void {
        const { current: dropDown }: { current: any } = this.dropDownReference;
        const {
            current: container,
        }: { current: any } = this.containerReference;

        this.setState({
            height: get(dropDown, 'clientHeight', 0),
            width: get(dropDown, 'clientWidth', 0),
            containerHeight: get(container, 'clientHeight', 0),
            containerWidth: get(container, 'clientWidth', 0),
        });

        // Dropdown Instance
        this.rootElement = dropDown ? dropDown.getRootNode() : null;
        const outsideClick$ = merge(
            fromEvent(this.rootElement, 'click'),
            fromEvent(this.rootElement, 'touchstart')
        ).pipe(
            filter(() => this.state.clicked),
            filter(({ target }) => !dropDown.contains(target))
        );
        const dropDownClick$ = merge(
            fromEvent(dropDown, 'click'),
            fromEvent(dropDown, 'touchstart')
        );
        const escapeKey$ = fromEvent(this.rootElement, 'keyup').pipe(
            filter(() => this.state.clicked || this.state.hovered),
            filter((keyEvent: KeyboardEvent) => keyEvent.key === 'Escape')
        );
        const mouseEnter$ = fromEvent(dropDown, 'mouseenter');
        const mouseLeave$ = fromEvent(dropDown, 'mouseleave');

        this.clickedSub$ = merge(
            outsideClick$.pipe(mapTo(false)),
            escapeKey$.pipe(mapTo(false)),
            dropDownClick$.pipe(map(() => !this.state.clicked))
        ).subscribe(clicked => {
            this.setState({ clicked });
            if (this.props.onTriggered) {
                this.props.onTriggered(clicked);
            }
        });

        this.hoveredSub$ = merge(
            mouseEnter$.pipe(mapTo(true)),
            mouseLeave$.pipe(mapTo(false)),
            escapeKey$.pipe(mapTo(false)),
            dropDownClick$.pipe(mapTo(false))
        )
            .pipe(
                filter(
                    () =>
                        this.props.trigger === 'hover' ||
                        this.props.trigger === 'both'
                ),
                distinctUntilChanged()
            )
            .subscribe(hovered => {
                this.setState({ hovered });
                if (this.props.onTriggered) {
                    this.props.onTriggered(hovered);
                }
            });
    }

    componentWillUnmount(): void {
        this.hoveredSub$.unsubscribe();
        this.clickedSub$.unsubscribe();
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
            arrowSize,
            trigger = 'both',
            arrowIndent = '0.75rem',
            showArrow = true,
            position = 'bottom',
            shadow = '0 0 0.5rem 0 rgba(0,0,0,0.2)',
            border = 'light',
            borderRadius = 'base',
            background = 'white',
            onTriggered = () => null,
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

        const showDropdown =
            (trigger === 'click' && clicked) ||
            (trigger === 'hover' && hovered) ||
            (trigger === 'both' && (hovered || clicked));

        // if they don't specify a spacing then we'll default
        // based on whether the arrow is there or not
        const spacingWithDefault =
            typeof spacing === 'undefined'
                ? showArrow
                    ? '0.75rem'
                    : '0'
                : spacing;

        return (
            <StyledDropDown
                ref={this.dropDownReference}
                className={classNames('anchor-drop-down', className)}
                showArrow={showArrow}
                shadow={shadow}
                position={position}
                spacing={spacingWithDefault}
                {...props}
            >
                {children}
                <StyledDropDownContainer
                    className="anchor-drop-down-container"
                    ref={this.containerReference}
                    shadow={shadow}
                    border={border}
                    borderRadius={borderRadius}
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
