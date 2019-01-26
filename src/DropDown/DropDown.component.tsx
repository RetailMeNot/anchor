// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { fromEvent, Subscription } from 'rxjs';
import { rgba } from 'polished';
import { get } from 'lodash';
// COMPONENTS
// THEME
import { colors, variables, fonts, sizes } from '../theme';

interface DropDownProps {
  overlay: React.ReactElement<any> | Array<React.ReactElement<any>> | React.SFC | React.SFC[];
  trigger?: 'hover' | 'click'; // TODO: 'contextMenu';
  className?: string;
  children?: any;
  // Configuration
  ref?: any;
}

interface DropDownState {
  isHidden: boolean;
  height?: number;
  width?: number;
}

export const StyledDropDown = styled.div`
  font-family: ${fonts.fontFamily};
  position: relative;
  cursor: pointer;
  line-height: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  .drop-down-container {
    min-width: 10rem;
    position: absolute;
    left: 0;
    top: ${(props: any) => `${get(props, 'forwardedRef.current.clientHeight', 16)}px`};
    padding: ${sizes.padding.xs} 0;
    z-index: 1;
    background-color: ${colors.neutrals.white.base};
    box-shadow: 0 .5rem .5rem 0 ${rgba(colors.neutrals.charcoal.dark, 0.12)};
    border-radius: ${variables.borderRadius};
    border: 1px solid ${colors.neutrals.silver.dark};
  }

  .arrow-up {
    position: absolute;
    top: -.4rem;
    left: 1rem;
    width: 0;
    height: 0;
    border-left: .75rem solid transparent;
    border-right: .75rem solid transparent;
    border-bottom: .5rem solid white;
  }
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
    this.mouseOver$ = fromEvent(dropDown, 'mouseenter')
      .subscribe((a: any) => {
        this.setState({ isHidden: false });
      });
    // Subscribe to element mouseleave
    this.mouseOut$ = fromEvent(dropDown, 'mouseleave')
      .subscribe((a: any) => {
        this.setState({ isHidden: true });
      });

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
    const { children, className, overlay, ...props } = this.props;
    return (
      <StyledDropDown ref={this.dropDownReference} className={classNames(className)} {...props}>
        {children}
        <div hidden={this.state.isHidden} className={classNames('drop-down-container')}>
          <div className="arrow-up" />
          {overlay}
        </div>
      </StyledDropDown>
    );
  }
}

export default DropDown;
