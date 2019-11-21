import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';
import classNames from 'classnames';
import {
    BreakpointType,
    debugColor,
    generateBreakpointCSS,
    GridSetting,
    GridSettings,
    middleCSS,
    GridContext,
} from '../utils';
import { ResponsiveContext, ResponsiveContextProps } from '../ResponsiveProvider';

interface CellProps {
    area?: string;
    center?: boolean;
    children?: any;
    className?: string;
    debug?: boolean;
    height?: GridSetting;
    left?: GridSetting;
    middle?: boolean;
    responsiveCSS?: BreakpointType[];
    top?: GridSetting;
    width?: GridSetting;
}

const StyledCell = styled.div<CellProps>`
    height: 100%;
    min-width: 0;

    // The order in which the media queries are generated is very important, hence breakpoints() is
    // called multiple times as opposed to just once with a single object.
    ${({ responsiveCSS }) => {
        return (
            responsiveCSS &&
            responsiveCSS.map((k: BreakpointType) => {
                return breakpoints(k);
            })
        );
    }}

    ${({ left }) => left && `grid-column-start: ${left}`};
    ${({ width }) => width && `grid-column-end: span ${width}`};
    ${({ top }) => top && `grid-row-start: ${top}`};
    ${({ height }) => height && `grid-row-end: span ${height}`};

    ${({ center }) => center && `text-align: center`};
    ${({ area }) => area && `grid-area: ${area}`};
    ${({ middle, width }) => middle && width && middleCSS}
    ${({ debug }) =>
        debug &&
        css({
            backgroundColor: debugColor,
        })};
`;

interface CellState {
    generalSettings: GridSettings;
    sortedResponsiveCSS: BreakpointType[];
}

export class Cell extends React.PureComponent<CellProps> {
    readonly state: CellState;

    constructor(props: CellProps, context: ResponsiveContextProps) {
        super(props, context);

        // Generates css data for xstyle'd media queries in the constructor so as to only
        // fire a single time and before render.
        const { sortedResponsiveCSS, generalSettings } = generateBreakpointCSS(
            {
                left: props.left,
                height: props.height,
                top: props.top,
                width: props.width,
            },
            context.breakpoints,
            props.middle
        );

        this.state = {
            generalSettings,
            sortedResponsiveCSS,
        };
    }

    render() {
        const {
            center,
            children,
            className,
            debug,
            middle,
        } = this.props;

        const {
            generalSettings,
            sortedResponsiveCSS,
        } = this.state;

        return(
            <GridContext.Consumer>
                {({debug: contextDebug}) => (
                    <StyledCell
                        center={center}
                        className={classNames('anchor-cell', className)}
                        middle={middle}
                        debug={contextDebug || debug}
                        responsiveCSS={sortedResponsiveCSS}
                        left={generalSettings.left || undefined}
                        height={generalSettings.height || undefined}
                        top={generalSettings.top || undefined}
                        width={generalSettings.width || undefined}
                    >
                        {children}
                    </StyledCell>
                )}
            </GridContext.Consumer>
        );
    }
}
Cell.contextType = ResponsiveContext;
