import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';
import {
    BreakpointType,
    debugColor,
    // generateBreakpointCSS,
    // generateBreakpointCSS2,
    // GridContext,
    GridSetting,
    middleCSS,
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

export const ops = {
    // If width is 0, don't show the cell. If middle is true, add in the middle CSS.
    width: (width: any, middle: boolean | undefined) =>
        width > 0
            ? middle
                ? `grid-column-end: span ${width}; ${middleCSS}`
                : `grid-column-end: span ${width}; display: block;`
            : 'display:none;',
    height: (height: any) => `grid-row-end: span ${height};`,
    left: (left: any) => `grid-column-start: ${left};`,
    top: (top: any) => `grid-row-start: ${top};`,
};

function createCSS(settingName: string, settings: GridSetting, middle: boolean | undefined = false) {
    console.time();
    if (typeof settings === 'object') {
        const generatedCSS = {};
        for (const key in settings) {
            if (settings[key]) { // Typescript requires an 'if' check when using forin
                generatedCSS[key] = ops[settingName](settings[key], middle);
            }
        }
        console.timeEnd();
        console.log('---', settingName);
        return generatedCSS;
    }
    console.timeEnd();
    console.log('---', settingName);
    return {[settingName]: settings};
}

interface CellState {
    responsiveLeft?: any;
    responsiveHeight?: any;
    responsiveTop?: any;
    responsiveWidth?: any;
}

export class TestCell extends React.PureComponent<CellProps> {
    readonly state: CellState;

    constructor(props: CellProps, context: ResponsiveContextProps) {
        super(props, context);
        let responsiveArray = [
            createCSS('left', props.left),
            createCSS('height', props.height),
            createCSS('top', props.top),
            createCSS('width', props.width),
        ];
        const generalSettings = responsiveArray
            .filter((setting: any) => typeof Object.values(setting)[0] !== 'string')
            .reduce((acc: object, next: []) => {
                for (const key in next) {
                    if (next[key]) {
                        acc[key] = next[key];
                    }
                }
                return acc;
             }, {});
        responsiveArray = responsiveArray
            .filter((setting: any) =>  typeof Object.values(setting)[0] === 'string');
        console.log('responsiveArray', responsiveArray);
        console.log('generalSettings', generalSettings);
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <StyledCell
                // center={center}
                // middle={middle}
                // debug={contextDebug || debug}
                // responsiveCSS={sortedResponsiveCSS}
                // left={generalSettings.left || undefined}
                // height={generalSettings.height || undefined}
                // top={generalSettings.top || undefined}
                // width={generalSettings.width || undefined}
            >
                {children}
            </StyledCell>
        );
    }
}
TestCell.contextType = ResponsiveContext;

// export const Cell = ({
//     center,
//     children,
//     className,
//     debug = false,
//     height,
//     left,
//     middle,
//     top,
//     width = 1,
// }: CellProps) => {
//     const { debug: contextDebug } = React.useContext(GridContext);
//     const { breakpoints: sortedBreakpoints } = React.useContext(
//         ResponsiveContext
//         );

//     const { sortedResponsiveCSS, generalSettings } = generateBreakpointCSS(
//         {
//             left,
//             height,
//             top,
//             width,
//         },
//         sortedBreakpoints,
//         middle
//     );

//     generateBreakpointCSS2(
//         {
//             left,
//             height,
//             top,
//             width,
//         },
//         sortedBreakpoints,
//         middle
//     );

//     return (
//         <StyledCell
//             center={center}
//             middle={middle}
//             debug={contextDebug || debug}
//             responsiveCSS={sortedResponsiveCSS}
//             left={generalSettings.left || undefined}
//             height={generalSettings.height || undefined}
//             top={generalSettings.top || undefined}
//             width={generalSettings.width || undefined}
//         >
//             {children}
//         </StyledCell>
//     );
// };
