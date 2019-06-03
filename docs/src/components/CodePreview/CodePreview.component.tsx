// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from 'styled-components';
import {
    LiveEditor,
    LiveProvider,
    LivePreview,
    LiveEditorProps,
    PreProps,
    LiveError,
} from 'react-live';
import Component from '@reach/component-component';
import { AutoComplete } from '@retailmenot/anchor';
// COMPONENTS
import * as Anchor from '../../../../src';
// THEME
// import { TableCSS } from '../Layout/Page/Page.component';
import { colors } from '../../../../src/theme';

// TODO: add CDN Inconsolata font

const CodePreviewForcedStyles = css`
    font-family: Inconsolata, monospace !important;
    font-size: 0.875rem !important;
`;

const StyledErrorElement = styled(LiveError)`
    ${CodePreviewForcedStyles};
`;

const StyledContainerElement = styled.div`
    margin: 1rem 0;
    display: block;
`;

const StyledLiveEditor = styled(LiveEditor)<LiveEditorProps>`
    background-color: ${colors.charcoal.base};
    border-bottom-left-radius: .25rem;
    border-bottom-right-radius: .25rem;
    ${CodePreviewForcedStyles};
    // This library uses element-based colors to set some of its colors, which necessitates the '!important' below
    .token-line {
        .token {
            //&.plain {
            //    color: #d3d0c8;
            //}
            //&.keyword {
            //    color: #99cc99 !important;
            //}
            //&.function {
            //    color: #f2777a;
            //}
            &.punctuation {
                color: rgba(211,208,200, 0.7);
            }
            //&.operator {
            //    color: #f99157 !important;
            //}
            &.tag {
                color: #f2777a !important;
            }
            &.tag.script {
                color: #99cc99 !important;
            }
            &.tag.script.punctuation {
                color: #f99157 !important;
            }
            &.tag.script.string {
                color: #99cc99 !important;
            }
            &.tag.script.script-punctuation {
                color: rgba(211, 208, 200, 0.7) !important;
            }
            &.tag.attr-name {
                color: #f99157 !important;
                font-style: italic;
            }
            //&.number {
            //    color: #cc99cc !important;
            //}
            //&.boolean {
            //    color: inherit;
            //}
        }
    }
    }
    textarea {
        caret-color: white;
    }
`;

const StyledLivePreview = styled(LivePreview)<PreProps>`
    ${CodePreviewForcedStyles};
    padding: 1rem;
    border: solid thin ${colors.silver.base};
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
`;

interface CodePreviewProps {
    children?: any;
}

const scope = {
    ...Anchor,
    Component,
    // Overrides
    AutoComplete,
};

export const CodePreview = ({
    children,
}: CodePreviewProps): React.ReactElement<any> => (
    <StyledContainerElement>
        <LiveProvider code={children} scope={scope}>
            <StyledLivePreview />
            <StyledLiveEditor wrap="true" />
            <StyledErrorElement />
        </LiveProvider>
    </StyledContainerElement>
);
