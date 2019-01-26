// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { Box, BoxProps } from '@rebass/grid';
import { fromEvent, Subscription } from 'rxjs';
// import { debounceTime } from 'rxjs/operators';
import { get } from 'lodash';

type BreakpointSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';

interface ContainerProps extends BoxProps {
  children?: any;
  className?: string;
  breakpoint?: BreakpointSize;

  whenBreakpoint?: (breakpoint: BreakpointSize) => void;
}

export const StyledContainer = styled(Box)`
  max-width: 1140px;
`;

interface ContainerState {
  currentBreakpoint: BreakpointSize;
}

export class Container extends React.Component<ContainerProps> {
  static defaultProps = {
    breakpoint: 'small',
  };
  readonly state: ContainerState = {
    currentBreakpoint: 'small',
  };
  private windowResize$: Subscription;

  componentDidMount(): void {
    this.windowResize$ = fromEvent(window, 'resize')
      // .pipe(debounceTime(150))
      .subscribe(() => this.assignBreakpoint());
    this.assignBreakpoint();
  }

  componentWillUnmount(): void {
    this.windowResize$.unsubscribe();
  }

  assignBreakpoint(): void {
    const innerWidth: number = get(window || {}, 'innerWidth', 480);
    let currentBreakpoint: BreakpointSize = 'small';
    if (innerWidth <= 480) {
      currentBreakpoint = 'xsmall';
    } else if (innerWidth <= 576) {
      currentBreakpoint = 'small';
    } else if (innerWidth <= 768) {
      currentBreakpoint = 'medium';
    } else if (innerWidth <= 992) {
      currentBreakpoint = 'large';
    } else if (innerWidth <= 1200) {
      currentBreakpoint = 'xlarge';
    } else {
      currentBreakpoint = 'xxlarge';
    }

    if (this.state.currentBreakpoint !== currentBreakpoint) {
      this.setState({ ...this.state, currentBreakpoint });
      if (this.props.whenBreakpoint) {
        this.props.whenBreakpoint(currentBreakpoint);
      }
    }
  }

  render(): React.ReactElement<Container>  {
    const { className, ...props } = this.props;
    return (
      <StyledContainer
        mx="auto"
        className={classNames(className)}
        {...props}
      />
    );
  }
}
export default Container;
