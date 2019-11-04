// VENDOR
import * as React from 'react';
import { Grid as AGrid } from 'styled-css-grid';
import styled, { css, ThemeContext } from '@xstyled/styled-components';
import { debounce } from 'ts-debounce';
import classNames from 'classnames';
// COMPONENTS & UTILS
import { FLOW, GridContext, sortBreakpoints } from '../utils';

const DEBOUNCE_DELAY = 100;

type Flow = keyof typeof FLOW;

// https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
type Justifycontent =
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'left'
    | 'normal'
    | 'right'
    | 'safe center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unsafe center'
    | 'unset';

// https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
type AlignContent =
    | 'center'
    | 'baseline'
    | 'end'
    | 'first baseline'
    | 'flex-end'
    | 'flex-start'
    | 'inherit'
    | 'initial'
    | 'last baseline'
    | 'normal'
    | 'safe center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'start'
    | 'stretch'
    | 'unsafe center'
    | 'unset';

interface GridProps {
    alignContent?: AlignContent;
    areas?: [string];
    children?: any;
    className?: string;
    columns?: number | string;
    debug?: boolean;
    flow?: Flow;
    gap?: string;
    justifyContent?: Justifycontent;
    rows?: string;
}

const StyledGrid = styled(AGrid)<GridProps>`
    ${({ debug }) =>
        debug
            ? css`
                  background-color: rgba(255, 0, 0, 0.4);
              `
            : null}
`;

export const Grid = ({
    alignContent,
    areas,
    children,
    className,
    columns = 12,
    debug = false,
    flow = FLOW.row,
    gap = '0.5rem',
    justifyContent,
    rows,
    ...props
}: GridProps) => {
    const [innerWidth, setInnerWidth] = React.useState<number>(
        window ? window.innerWidth : 0
    );
    const hasWindow = window && window.innerWidth;
    const { breakpoints: unsortedBreakpoints } = React.useContext(ThemeContext);

    React.useEffect(() => {
        const handleResize = debounce(() => {
            setInnerWidth(hasWindow ? window.innerWidth : 0);
        }, DEBOUNCE_DELAY);

        if (hasWindow) {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledGrid
            areas={areas}
            className={classNames('anchor-grid', className)}
            columns={columns}
            debug={debug}
            flow={flow}
            gap={gap}
            justifyContent={justifyContent}
            rows={rows}
            {...props}
        >
            <GridContext.Provider
                value={{
                    innerWidth,
                    debug,
                    breakpoints: sortBreakpoints(unsortedBreakpoints),
                }}
            >
                {children}
            </GridContext.Provider>
        </StyledGrid>
    );
};
