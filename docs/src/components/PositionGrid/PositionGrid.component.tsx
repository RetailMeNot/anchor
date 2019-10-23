/*
    Inspired by https://material-ui.com/components/tooltips/#tooltips

    Renders a diagram using a formatted table to illustrate to the user what our position values
    (top, topStart, bottom, bottemEnd, etc) mean for absolutely positioned elements for components
    like Tooltip and DropDown.
*/

// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import { config } from 'react-awesome-styled-grid';
// ANCHOR & COMPONENTS
import { Tooltip } from '@retailmenot/anchor';
import { breakpoints, COMPONENT_MIN_WIDTH, TEXT_ALIGNMENT } from '../Utils';

const StyledPositionGrid = styled('div')`
    text-align: center;
    padding: 1rem 0;
    overflow-x: scroll;
    ${props => config(props).media[breakpoints.md]`
        overflow-x: initial;
    `}
`;

const StyledTable = styled('table')`
    padding: 1rem;
    background-color: background.base;
    display: inline-block;
    min-width: ${COMPONENT_MIN_WIDTH};
    width: auto;
    margin: 0 auto;
    border-collapse: collapse;

    td {
        width: 10rem;
        padding: 0.75rem 0.25rem;
        font-family: base;
        font-size: 1.25rem;
    }
`;

const SpanHover = styled('span')`
    cursor: pointer;
`;

type Alignment = keyof typeof TEXT_ALIGNMENT;

interface TdProps {
    align?: Alignment;
    shaded?: boolean;
}

const Td = styled('td')<TdProps>`
    ${({ align, shaded }) => `
        text-align: ${align || TEXT_ALIGNMENT.left};
        ${shaded && `background-color: #D3D3D3;`}
    `}
`;

interface EasyTooltipProps {
    children: any;
    vertical?: boolean;
}

const EasyTooltip = ({
    children,
    vertical,
}: EasyTooltipProps): React.ReactElement<any> => (
    <Tooltip
        position={children}
        content={'Example content.'}
        maxWidth={vertical ? '5rem' : '10rem'}
    >
        <SpanHover>{children}</SpanHover>
    </Tooltip>
);

export const PositionGrid = () => (
    <StyledPositionGrid>
        <StyledTable>
            <tbody>
                <tr>
                    <Td />
                    <td>
                        <EasyTooltip>topStart</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>top</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>topEnd</EasyTooltip>
                    </td>
                    <Td align="right" />
                </tr>

                <tr>
                    <Td>
                        <EasyTooltip vertical>leftStart</EasyTooltip>
                    </Td>
                    <Td shaded />
                    <Td shaded />
                    <Td shaded />
                    <Td align="right">
                        <EasyTooltip vertical>rightStart</EasyTooltip>
                    </Td>
                </tr>

                <tr>
                    <Td>
                        <EasyTooltip vertical>left</EasyTooltip>
                    </Td>
                    <Td shaded />
                    <Td shaded />
                    <Td shaded />
                    <Td align="right">
                        <EasyTooltip vertical>right</EasyTooltip>
                    </Td>
                </tr>

                <tr>
                    <Td>
                        <EasyTooltip vertical>leftEnd</EasyTooltip>
                    </Td>
                    <Td shaded />
                    <Td shaded />
                    <Td shaded />
                    <Td align="right">
                        <EasyTooltip vertical>rightEnd</EasyTooltip>
                    </Td>
                </tr>

                <tr>
                    <Td />
                    <td>
                        <EasyTooltip>bottomStart</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>bottom</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>bottomEnd</EasyTooltip>
                    </td>
                    <Td align="right" />
                </tr>
            </tbody>
        </StyledTable>
    </StyledPositionGrid>
);
