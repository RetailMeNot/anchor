// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { fromEvent, Subscription } from 'rxjs';
import { rgba } from 'polished';
import { get } from '../utils/get/get';
// THEME
import { colors, variables, fonts, sizes } from '../theme';

interface DropDownPosition {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}

interface DropDownProps {
    overlay: React.ReactElement<any> | Array<React.ReactElement<any>>;
    trigger?: 'hover' | 'click'; // TODO: 'contextMenu';
    className?: string;
    children?: any;
    // Configuration
    ref?: any;
    position?: DropDownPosition;
}

interface DropDownState {
    isHidden: boolean;
    height?: number;
    width?: number;
}

const StyledDropDown = styled('div')`
    font-family: ${fonts.fontFamily};
    position: relative;
    cursor: pointer;
    line-height: 1rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-height: 1rem;
    min-width: 1rem;
    /* Position from Reference */
    .down-down-container {
        top: ${(props: any) =>
            `${get(props, 'forwardedRef.current.clientHeight', 16)}px`}
`;

interface DropDownContainerProps {
    hidden?: boolean;
    children?: any;
    className?: string;
    position?: DropDownPosition;
}
const DropDownContainer = (props: DropDownContainerProps) => <div {...props} />;

const StyledDropDownContainer = styled(DropDownContainer)`
    min-width: 10rem;
    position: absolute;
    padding: ${sizes.padding.xs} 0;
    z-index: 1;
    background-color: ${colors.white.base};
    box-shadow: 0 0.5rem 0.5rem 0 ${rgba(colors.charcoal.dark, 0.12)};
    border-radius: ${variables.borderRadius};
    border: thin solid ${colors.silver.dark};
    /* Defined Position */
    top: ${({ position: { top } = {} }: DropDownContainerProps) =>
        top ? `${top}px !important` : 'inherit'};
    left: ${({ position: { left } = {} }: DropDownContainerProps) =>
        left ? `${left}px !important` : '0'};
    right: ${({ position: { right } = {} }: DropDownContainerProps) =>
        right ? `${right}px !important` : 'inherit'};
    bottom: ${({ position: { bottom } = {} }: DropDownContainerProps) =>
        bottom ? `${bottom}px !important` : 'inherit'};
`;

const ArrowUp = styled('div')`
    position: absolute;
    top: -0.4rem;
    left: 1rem;
    width: 0;
    height: 0;
    border-left: 0.75rem solid transparent;
    border-right: 0.75rem solid transparent;
    border-bottom: 0.5rem solid white;
`;

export class DropDown extends React.Component<DropDownProps> {
    static defaultProps = {
        trigger: 'hover',
    };
    // State
    state: DropDownState = { isHidden: true };
    // Instance Reference
    private readonly dropDownReference: React.RefObject<DropDown>;
    // Observables
    // private escapeKey$: Subscription;
    // private windowClick$: Subscription;
    // private elementClick$: Subscription;
    private mouseOver$: Subscription;
    private mouseOut$: Subscription;

    constructor(props: DropDownProps) {
        super(props);
        this.dropDownReference = React.createRef();
    }

    componentDidMount(): void {
        const { current: dropDown }: { current: any } = this.dropDownReference;
        const { clientHeight: height, clientWidth: width } = dropDown;
        this.setState({ ...this.state, height, width });
        /* Events */
        /*
    // Subscribe to all window clicks
    this.windowClick$ = fromEvent(window, 'click')
      .pipe(
        takeWhile(() => {
          return !this.state.isHidden;
        })
      );
    // Subscribe to keyboard escape
    this.escapeKey$ = fromEvent(document, 'keyup')
      .pipe(
        takeWhile(() => !this.state.isHidden),
        filter((keyEvent: KeyboardEvent) => keyEvent.key === 'Escape')
      );
    // Subscribe to element click/tap
    this.elementClick$ = fromEvent(dropDown, 'click');
    */

        // If hover is the trigger:
        // Subscribe to element mouseenter
        this.mouseOver$ = fromEvent(dropDown, 'mouseenter').subscribe(
            (a: any) => {
                this.setState({ isHidden: false });
            }
        );
        // Subscribe to element mouseleave
        this.mouseOut$ = fromEvent(dropDown, 'mouseleave').subscribe(
            (a: any) => {
                this.setState({ isHidden: true });
            }
        );

        /* Subs */
        // this.windowClick$.subscribe((a: any) => {
        //   console.log(1, a, this.dropDownReference);
        //   // this.setState({ isHidden: true });
        // });
        // this.elementClick$.subscribe((a: any) => {
        //   console.log(2, a, this.dropDownReference);
        //   // this.setState({ isHidden: true });
        // });

        // const clickEvents$ = zip(this.windowClick$, this.elementClick$)
        //   .subscribe((...a) => {
        //     console.log(6, a);
        //   });

        // this.escapeKey$.subscribe((a: any) => {
        //   this.setState({ isHidden: true });
        // });
    }

    // componentDidUpdate(prevProps: Readonly<DropDownProps>, prevState: Readonly<{}>, snapshot?: any): void {
    //
    // }

    componentWillUnmount(): void {
        this.mouseOver$.unsubscribe();
        this.mouseOut$.unsubscribe();
    }

    render(): React.ReactElement<DropDown> {
        const { children, className, overlay, position, ...props } = this.props;
        return (
            <StyledDropDown
                ref={this.dropDownReference}
                className={classNames('anchor-drop-down', className)}
                {...props}
            >
                {children}
                <StyledDropDownContainer
                    className="down-down-container"
                    position={position}
                    hidden={this.state.isHidden}
                >
                    <ArrowUp />
                    {overlay}
                </StyledDropDownContainer>
            </StyledDropDown>
        );
    }
}
