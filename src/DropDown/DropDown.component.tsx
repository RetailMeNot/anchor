// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { fromEvent, Subscription, merge } from 'rxjs';
import { filter } from 'rxjs/operators';
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
    // TODO: make bg and padding composable; remember that the arrow will need to inherit these props
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
        const height = get(dropDown, 'clientHeight', 0);
        const width = get(dropDown, 'clientWidth', 0);
        this.setState({ height, width });
        // Dropdown Instance
        this.rootElement = dropDown ? dropDown.getRootNode() : null;
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
