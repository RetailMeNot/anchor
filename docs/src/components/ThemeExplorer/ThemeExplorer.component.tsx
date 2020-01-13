/*
    Serves as the starting point for the visual recursion of the RootTheme.

    The component has two modes: a full tree representation of the RootTheme with button controls
    to collapse it and make it sticky (default), and a fully open view of a single branch of the
    object. Using the 'openTo' prop enables the second mode.

    The real logic occurs in the ExpandBlock component also in this directory.
*/

import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { Button, RootTheme } from '@retailmenot/anchor';
import { ExpandBlock } from './ExpandBlock';

interface StyledThemeExplorerProps {
    collapse?: boolean;
    openTo?: string;
    sticky?: boolean;
    theme?: object;
    top?: string;
}

const StyledThemeExplorer = styled('section')<StyledThemeExplorerProps>`
    background-color: white;
    vertical-align: top;
    border: dark;
    border-radius: base;
    padding: 0.75rem;
    margin-bottom: 1rem;
    top: 0;
    ${({ sticky, top = '5.5rem' }) =>
        sticky &&
        css({
            boxShadow: '0.5rem 0.5rem 0.5rem rgba(0,0,0,0.10)',
            backgroundColor: 'rgba(255,255,255,0.95)',
            position: 'sticky',
            top,
            zIndex: 1000,
        })}
    ${({ openTo }) =>
        openTo &&
        css({
            borderStyle: 'none',
            padding: 0,
        })}
`;

const ExpandBlockContainer = styled('div')<StyledThemeExplorerProps>`
    ${({ collapse }) =>
        css({
            display: collapse ? 'none' : 'block',
        })}
`;

const Buttons = styled('section')<StyledThemeExplorerProps>`
    text-align: right;
    ${({ openTo }) =>
        openTo &&
        css({
            display: 'none',
        })}
`;

export const ThemeExplorer = ({
    openTo,
    top,
    theme = RootTheme,
}: StyledThemeExplorerProps) => {
    const [sticky, setSticky] = React.useState(false);
    const [collapse, setCollapse] = React.useState(false);
    const rootKeys = Object.keys(theme);

    return (
        <StyledThemeExplorer sticky={sticky} openTo={openTo} top={top}>
            <Buttons openTo={openTo}>
                <Button size="xs" onClick={() => setSticky(!sticky)}>
                    {sticky ? 'Unstick' : 'Sticky'}
                </Button>
                <Button size="xs" onClick={() => setCollapse(!collapse)}>
                    {collapse ? 'Expand' : 'Collapse'}
                </Button>
            </Buttons>

            <ExpandBlockContainer collapse={collapse}>
                {rootKeys.map((rootKey: string) => (
                    <ExpandBlock
                        data={theme[rootKey]}
                        key={rootKey}
                        level={0}
                        open={openTo ? openTo === rootKey : undefined}
                    >
                        {rootKey}
                    </ExpandBlock>
                ))}
            </ExpandBlockContainer>
        </StyledThemeExplorer>
    );
};
