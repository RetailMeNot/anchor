// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { fromEvent, Subscription, merge } from 'rxjs';
import { filter, mapTo, distinctUntilChanged } from 'rxjs/operators';
// COMPONENTS
import { get } from '../utils/get/get';
import { renderArrow } from './Arrow/Arrow.component';

export type Position = 'top' | 'bottom' | 'left' | 'right';

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
    background?: string;
    // TODO: v2 considerations:
    // offset?: string;
}

interface DropDownState {
    showDropdown: boolean;
    hovered: boolean;
    clicked: boolean;
    height?: number;
    width?: number;
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

    ${({ position, showArrow }) => {
        const CSS: any = {};
        const offset = showArrow ? '0.75rem' : 0;
        switch (position) {
            case 'bottom':
                CSS.paddingBottom = offset;
                CSS.marginBottom = `-${offset}`;
                break;
            case 'right':
                CSS.paddingRight = offset;
                CSS.marginRight = `-${offset}`;
                break;
            case 'left':
                CSS.paddingLeft = offset;
                CSS.marginLeft = `-${offset}`;
                break;
            case 'top':
                CSS.paddingTop = offset;
                CSS.marginTop = `-${offset}`;
                break;
            default:
                break;
        }
        return css(CSS);
    }};
`;

interface DropDownContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    height: number;
    width: number;
    position: Position;
    showArrow?: boolean;
    shadow?: string;
    background?: string;
    hidden?: boolean;
    children?: any;
    className?: string;
    offset?: string;
}
const DropDownContainer = (props: DropDownContainerProps) => <div {...props} />;

const StyledDropDownContainer = styled(DropDownContainer)<DropDownContainerProps>`
    min-width: 10rem;
    position: absolute;
    padding: 0.25rem auto;
    // TODO: make bg and padding composable; remember that the arrow will need to inherit these props
    z-index: 1;
    ${({ shadow, background }) => css({
        background: th.color(background),
        boxShadow: shadow,
    })};
    border-radius: base;
    border: thin solid ${th.color('neutrals.silver.dark')};

    /* Defined Position */
    ${({ position, height, width, offset = '0.5rem', showArrow }) => {
        const CSS: any = {};
        switch (position) {
            case 'bottom':
                CSS.top = `${height}px`;
                CSS.left = 0;
                break;
            case 'right':
                CSS.left = `${width}px`;
                CSS.top = '-0.75rem';
                break;
            case 'left':
                CSS.right = `${width}px`;
                CSS.top = '-0.75rem';
                break;
            case 'top':
                CSS.bottom = `${height}px`;
                CSS.left = 0;
                break;
            default:
                break;
        }
        return css(CSS);
    }};
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
    private rootElement: any;
    // Observables
    // private mouseOver$: Subscription;
    // private mouseOut$: Subscription;
    // private escapeKey$: Subscription;
    // private domClick$: Subscription;
    private hovered$: Subscription;
    private unclicked$: Subscription;

    componentDidMount(): void {
        const { current: dropDown }: { current: any } = this.dropDownReference;
        const height = get(dropDown, 'clientHeight', 0);
        const width = get(dropDown, 'clientWidth', 0);
        this.setState({ height, width });
        // Dropdown Instance
        this.rootElement = dropDown ? dropDown.getRootNode() : null;
        const domClick$ = merge(
            fromEvent(this.rootElement, 'click'),
            fromEvent(this.rootElement, 'touchstart')
        )
            .pipe(
                filter(() => this.state.clicked),
                filter(({ target }) => !dropDown.contains(target)),
                mapTo(false),
            );

        // Subscribe to keyboard escape
        const escapeKey$ = fromEvent(this.rootElement, 'keyup')
            .pipe(
                filter(() => this.state.clicked || this.state.hovered),
                filter((keyEvent: KeyboardEvent) => keyEvent.key === 'Escape'),
                mapTo(false),
            );

        const mouseEnter$ = fromEvent(dropDown, 'mouseenter').pipe(mapTo(true));
        const mouseLeave$ = fromEvent(dropDown, 'mouseleave').pipe(mapTo(false));
        const unclick$ = merge(domClick$, escapeKey$);

        this.unclicked$ = unclick$
            .subscribe((clicked) => {
                console.log('unclicked$', clicked)
                this.setState({ clicked })
            });

        this.hovered$ = merge(mouseEnter$, mouseLeave$, unclick$)
            .pipe(distinctUntilChanged())
            .subscribe((hovered) => {
                console.log('hovered$', hovered)
                this.setState({ hovered })
            });
    }

    componentWillUnmount(): void {
        this.hovered$.unsubscribe();
        this.unclicked$.unsubscribe();
    }

    render(): React.ReactElement<DropDown> {
        const {
            children,
            className,
            overlay,
            showArrow = true,
            position = 'bottom',
            shadow = '0 0 0.5rem 0 rgba(0,0,0,0.2)',
            background = 'white',
            trigger,
            ...props
        } = this.props;

        const { clicked, hovered } = this.state;
        const showDropdown = clicked || (trigger === "hover" && hovered);

        return (
            <StyledDropDown
                ref={this.dropDownReference}
                className={classNames('anchor-drop-down', className)}
                showArrow={showArrow}
                shadow={shadow}
                position={position}
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
                    shadow={shadow}
                    background={background}
                    className="anchor-down-down-container"
                    position={position}
                    hidden={!showDropdown}
                    height={this.state.height || 0}
                    width={this.state.width || 0}
                >
                    {showArrow && renderArrow(position, true)}
                    {overlay}
                </StyledDropDownContainer>
            </StyledDropDown>
        );
    }
}
