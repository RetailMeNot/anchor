import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { breakpoints, space as spaceStyles, SpaceProps } from '@xstyled/system';
import classNames from 'classnames';
import {
    BreakpointType,
    debugColor,
    generateBreakpointCSS,
    GridSetting,
    GridSettings,
    GridContext,
} from '../utils';
import { ResponsiveContext } from '../ResponsiveProvider';
import { ResponsiveContextProps } from '../ResponsiveProvider/ResponsiveProvider.component';

interface CellProps extends SpaceProps {
    align?: string;
    area?: string;
    children?: any;
    className?: string;
    debug?: boolean;
    height?: GridSetting;
    left?: GridSetting;
    responsiveCSS?: BreakpointType[];
    top?: GridSetting;
    valign?: string;
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

    ${({ area }) => area && `grid-area: ${area}`};
    ${({ debug }) =>
        debug &&
        css({
            backgroundColor: debugColor,
        })};
`;

interface BoxProps extends SpaceProps {
    align?: string;
    valign?: string;
}

type BoxStyles = {
    display?: string;
    height?: string;
    justifyContent?: string;
    alignItems?: string;
};

/* Used these flex styles rather than xstyled 'flexboxes' system prop to limit the props the user
would have to use for the same effect. May rethink this if users ask for even more flex control. */
const Box = styled('div')<BoxProps>`
    box-sizing: border-box;

    ${spaceStyles}

    ${({align, valign}) => {
        const styles: BoxStyles = {};

        if (align || valign) {
            styles.display = 'flex';

            if (valign) {
                styles.height = '100%';
            }
        }

        switch (align) {
            case 'left':
                styles.justifyContent = 'flex-start'; break;
            case 'center':
                styles.justifyContent = 'center'; break;
            case 'right':
                styles.justifyContent = 'flex-end'; break;
        }

        switch (valign) {
            case 'top':
                styles.alignItems = 'flex-start'; break;
            case 'middle':
                styles.alignItems = 'center'; break;
            case 'bottom':
                styles.alignItems = 'flex-end'; break;
        }
        return css(styles);
    }}
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
        // fire a single time and before render. Width and height have a default of 1.
        const { sortedResponsiveCSS, generalSettings } = generateBreakpointCSS(
            {
                left: props.left,
                height: props.height || 1,
                top: props.top,
                width: props.width || 1,
            },
            context.breakpoints
        );

        this.state = {
            generalSettings,
            sortedResponsiveCSS,
        };
    }

    render() {
        const { align, children, className, debug, valign } = this.props;
        const { generalSettings, sortedResponsiveCSS } = this.state;

        return (
            <GridContext.Consumer>
                {({ debug: contextDebug }) => (
                    <StyledCell
                        className={classNames('anchor-cell', className)}
                        debug={contextDebug || debug}
                        responsiveCSS={sortedResponsiveCSS}
                        left={generalSettings.left || undefined}
                        height={generalSettings.height || undefined}
                        top={generalSettings.top || undefined}
                        width={generalSettings.width || undefined}
                    >
                        {/* The spread ensures the spaceStyles get applied to Box */}
                        <Box {...this.props} align={align} valign={valign}>
                            {children}
                        </Box>
                    </StyledCell>
                )}
            </GridContext.Consumer>
        );
    }
}
Cell.contextType = ResponsiveContext;
