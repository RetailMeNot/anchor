/*
    Inspired by https://material-ui.com/components/tooltips/#tooltips

    Renders a diagram using a formatted table to illustrate to the user what our position values
    (top, topStart, bottom, bottemEnd, etc) mean for absolutely positioned elements for components
    like Tooltip and DropDown.
*/

import * as React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { Tooltip } from '@retailmenot/anchor';

const StyledPositionGrid = styled('div')`
    text-align: center;
    padding: 1rem 0;
`;

const StyledTable = styled('table')`
    padding: 1rem;
    background-color: ${th.color('background.base')};
    display: inline-block;
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

const TdLeft = styled('td')`
    text-align: left;
`;

const TdRight = styled('td')`
    text-align: right;
`;

const TdColoredBlock = styled('td')`
    background-color: background.base;
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
                    <TdLeft />
                    <td>
                        <EasyTooltip>topStart</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>top</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>topEnd</EasyTooltip>
                    </td>
                    <TdRight />
                </tr>

                <tr>
                    <TdLeft>
                        <EasyTooltip vertical>leftStart</EasyTooltip>
                    </TdLeft>
                    <TdColoredBlock />
                    <TdColoredBlock />
                    <TdColoredBlock />
                    <TdRight>
                        <EasyTooltip vertical>rightStart</EasyTooltip>
                    </TdRight>
                </tr>

                <tr>
                    <TdLeft>
                        <EasyTooltip vertical>left</EasyTooltip>
                    </TdLeft>
                    <TdColoredBlock />
                    <TdColoredBlock />
                    <TdColoredBlock />
                    <TdRight>
                        <EasyTooltip vertical>right</EasyTooltip>
                    </TdRight>
                </tr>

                <tr>
                    <TdLeft>
                        <EasyTooltip vertical>leftEnd</EasyTooltip>
                    </TdLeft>
                    <TdColoredBlock />
                    <TdColoredBlock />
                    <TdColoredBlock />
                    <TdRight>
                        <EasyTooltip vertical>rightEnd</EasyTooltip>
                    </TdRight>
                </tr>

                <tr>
                    <TdLeft />
                    <td>
                        <EasyTooltip>bottomStart</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>bottom</EasyTooltip>
                    </td>
                    <td>
                        <EasyTooltip>bottomEnd</EasyTooltip>
                    </td>
                    <TdRight />
                </tr>
            </tbody>
        </StyledTable>
    </StyledPositionGrid>
);
