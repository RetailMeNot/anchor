// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { fromEvent, Subscription, merge } from 'rxjs';
import { filter } from 'rxjs/operators';

type Position = 'top' | 'bottom' | 'left' | 'right';

interface DropDownProps extends React.HTMLAttributes<HTMLDivElement> {
    overlay?: React.ReactElement<any> | Array<React.ReactElement<any>>;
    trigger?: 'hover' | 'click';
    className?: string;
    children?: any;
    // Configuration
    ref?: any;
    position?: Position;
    // TODO: v2 considerations:
    // offset?: string;
}

interface DropDownState {
    showDropdown: boolean;
    height?: number;
    width?: number;
}

const StyledDropDown = styled('div')<DropDownProps>`
    box-sizing: border-box;
    font-family: ${th('typography.fontFamily')};
    position: relative;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 1rem;
    min-width: 1rem;

    ${({ position }) => {
        const CSS: any = {};
        const offset = '0.75rem';
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
    hidden?: boolean;
    children?: any;
    className?: string;
    offset?: string;
}
const DropDownContainer = (props: DropDownContainerProps) => <div {...props} />;

const StyledDropDownContainer = styled(DropDownContainer)<
    DropDownContainerProps
>`
    min-width: 10rem;
    position: absolute;
    padding: 0.25rem auto;
    z-index: 1;
    background-color: ${th.color('neutrals.white.base')};
    box-shadow: 0 0 0.5rem 0 ${th.color('neutrals.ash.base')};
    border-radius: base;
    border: thin solid ${th.color('neutrals.silver.dark')};

    /* Defined Position */
    ${({ position, height, width, offset = '0.5rem' }) => {
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

const ArrowBase = css`
    position: absolute;
    width: 0;
    height: 0;
`;

const CaretHeight = '0.4rem';
const CaretIndent = '0.75rem';
const CaretSize = '0.5rem';

const ArrowUp = styled('div')`
    ${ArrowBase};
    top: -${CaretHeight};
    left: ${CaretIndent};
    border-left: ${CaretSize} solid transparent;
    border-right: ${CaretSize} solid transparent;
    border-bottom: ${CaretSize} solid white;
`;

const ArrowDown = styled('div')`
    ${ArrowBase};
    bottom: -${CaretHeight};
    left: ${CaretIndent};
    border-left: ${CaretSize} solid transparent;
    border-right: ${CaretSize} solid transparent;
    border-top: ${CaretSize} solid white;
`;
const ArrowRight = styled('div')`
    ${ArrowBase};
    top: ${CaretIndent};
    right: -${CaretHeight};
    border-top: ${CaretSize} solid transparent;
    border-bottom: ${CaretSize} solid transparent;
    border-left: ${CaretSize} solid white;
`;

const ArrowLeft = styled('div')`
    ${ArrowBase};
    top: ${CaretIndent};
    left: -${CaretHeight};
    border-top: ${CaretSize} solid transparent;
    border-bottom: ${CaretSize} solid transparent;
    border-right: ${CaretSize} solid white;
`;

const renderArrow = (position: Position, isShown?: boolean) => {
    let arrowElement;
    if (isShown) {
        switch (position) {
            case 'bottom':
                arrowElement = <ArrowUp />;
                break;
            case 'top':
                arrowElement = <ArrowDown />;
                break;
            case 'right':
                arrowElement = <ArrowLeft />;
                break;
            case 'left':
                arrowElement = <ArrowRight />;
                break;
            default:
                break;
        }
    }
    return arrowElement;
};

export class DropDown extends React.Component<DropDownProps> {
    static defaultProps = {
        trigger: 'hover',
    };
    // State
    state: DropDownState = { showDropdown: false };
    // Instance Reference
    private readonly dropDownReference: React.RefObject<DropDown>;
    private rootElement: any;
    // Observables
    private mouseOver$: Subscription;
    private mouseOut$: Subscription;
    private escapeKey$: Subscription;
    private domClick$: Subscription;

    constructor(props: DropDownProps) {
        super(props);
        this.dropDownReference = React.createRef();
    }

    componentDidMount(): void {
        const { current: dropDown }: { current: any } = this.dropDownReference;
        const { clientHeight: height, clientWidth: width } = dropDown;
        this.setState({ height, width });
        // Dropdown Instance
        this.rootElement = dropDown.getRootNode();
        this.domClick$ = merge(
            fromEvent(this.rootElement, 'click'),
            fromEvent(this.rootElement, 'touchstart')
        )
            .pipe(filter(() => this.state.showDropdown))
            .subscribe(({ target }: MouseEvent | TouchEvent) => {
                if (!dropDown.contains(target)) {
                    this.setState({ showDropdown: false });
                }
            });
        // Subscribe to keyboard escape
        this.escapeKey$ = fromEvent(this.rootElement, 'keyup')
            .pipe(
                filter(() => this.state.showDropdown),
                filter((keyEvent: KeyboardEvent) => keyEvent.key === 'Escape')
            )
            .subscribe(() => this.setState({ showDropdown: false }));

        // Subscribe to element mouseenter
        this.mouseOver$ = fromEvent(dropDown, 'mouseenter')
            .pipe(
                filter(() => this.props.trigger === 'hover'),
                filter(() => !this.state.showDropdown)
            )
            .subscribe(() => this.setState({ showDropdown: true }));
        // Subscribe to element mouseleave
        this.mouseOut$ = fromEvent(dropDown, 'mouseleave')
            .pipe(
                filter(() => this.props.trigger === 'hover'),
                filter(() => this.state.showDropdown)
            )
            .subscribe(() => this.setState({ showDropdown: false }));
    }

    componentWillUnmount(): void {
        this.mouseOver$.unsubscribe();
        this.mouseOut$.unsubscribe();
        this.domClick$.unsubscribe();
        this.escapeKey$.unsubscribe();
    }

    render(): React.ReactElement<DropDown> {
        const { children, className, overlay, position, ...props } = this.props;

        return (
            <StyledDropDown
                ref={this.dropDownReference}
                className={classNames('anchor-drop-down', className)}
                position={position || 'bottom'}
                onClick={() =>
                    this.setState({
                        showDropdown: !this.state.showDropdown,
                    })
                }
                {...props}
            >
                {children}
                <StyledDropDownContainer
                    className="anchor-down-down-container"
                    position={position || 'bottom'}
                    hidden={!this.state.showDropdown}
                    height={this.state.height || 0}
                    width={this.state.width || 0}
                >
                    {renderArrow(position || 'bottom', true)}
                    {overlay}
                </StyledDropDownContainer>
            </StyledDropDown>
        );
    }
}
