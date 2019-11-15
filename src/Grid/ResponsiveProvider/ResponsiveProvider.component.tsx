// Vendor
import * as React from 'react';
import styled, { withTheme } from '@xstyled/styled-components';
import { debounce } from 'ts-debounce';
// COMPONENTS
import { RootTheme } from '../../theme';
// UTILS
import { BreakpointType, getBreakpointKey, sortBreakpoints } from '../utils';

const StyledDebug = styled('div')`
    padding: 1rem 2rem;
    z-index: 1000000;
    background: black;
    color: white;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    font-family: mono;
`;
StyledDebug.displayName = 'StyledDebug';

interface ResponsiveContextProps {
    breakpoints: BreakpointType[];
    current: string;
    innerWidth: number;
}

export const ResponsiveContext = React.createContext<ResponsiveContextProps>({
    breakpoints: [],
    current: '',
    innerWidth: 0,
});

interface ResponsiveProviderProps {
    breakpoints?: BreakpointType;
    children?: any;
    debug?: boolean;
    theme?: object;
    windowDep?: boolean; // Solely for testing. Forces the component to not recognize the window.
}

class BasicResponsiveProvider extends React.PureComponent<
    ResponsiveProviderProps
> {
    state: ResponsiveContextProps;

    hasWindow: boolean;

    constructor(props: any) {
        super(props);

        const hasWindow =
            props.windowDep === false ? false : typeof window !== 'undefined';
        let breakpoints;

        // Priority is props > ThemeProvider > RootTheme
        if (props.breakpoints !== undefined) {
            breakpoints = props.breakpoints;
        } else if (props.theme !== undefined) {
            breakpoints = props.theme.breakpoints;
        } else {
            breakpoints = RootTheme.breakpoints;
        }

        const sortedBreakpoints = sortBreakpoints(breakpoints);
        const innerWidth = hasWindow ? window.innerWidth : 0;

        this.state = {
            breakpoints: sortedBreakpoints,
            current: getBreakpointKey(innerWidth, sortedBreakpoints),
            innerWidth,
        };
        this.handleResize = debounce(this.handleResize.bind(this), 100);
        this.hasWindow = hasWindow;
    }

    handleResize() {
        if (this.hasWindow) {
            this.setState({
                current: getBreakpointKey(
                    window.innerWidth,
                    this.state.breakpoints
                ),
                innerWidth: window.innerWidth,
            });
        }
    }

    componentDidMount() {
        if (this.hasWindow) {
            window.addEventListener('resize', this.handleResize);
        }
    }

    componentWillUnmount() {
        if (this.hasWindow) {
            window.removeEventListener('resize', this.handleResize);
        }
    }

    render() {
        const { breakpoints, current, innerWidth } = this.state;
        const { debug } = this.props;

        return (
            <ResponsiveContext.Provider
                value={{ breakpoints, current, innerWidth }}
            >
                {debug && (
                    <StyledDebug>
                        {current} | w:
                        {innerWidth}px
                    </StyledDebug>
                )}

                {this.props.children}
            </ResponsiveContext.Provider>
        );
    }
}

export const ResponsiveProvider = withTheme(BasicResponsiveProvider);
