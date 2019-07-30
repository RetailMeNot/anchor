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
import Highlight, { defaultProps } from 'prism-react-renderer';
// tslint:disable-next-line: no-submodule-imports
import github from 'prism-react-renderer/themes/github';
import { AutoComplete, Collapse, CollapseGroup } from '@retailmenot/anchor';
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
    margin: 2rem 0;
    display: block;
`;

const StyledLiveEditor = styled(LiveEditor)<LiveEditorProps>`
    background-color: ${colors.charcoal.base};
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
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
    border: solid thin ${colors.silver.dark};
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
`;

interface CodePreviewProps {
    children?: any;
    className?: string;
    live?: boolean;
    title?: string;
}

const scope = {
    ...Anchor,
    Component,
    // Overrides
    AutoComplete,
    Collapse,
    CollapseGroup,
};

/*
    By default, the CodePreview component will render a non-interactive code block. However if the
    live prop is passed, the interactive code editor is used instead.
*/
export const CodePreview = ({
    children,
    className,
    live = false,
    title = 'Live Code Editor',
}: CodePreviewProps): React.ReactElement<any> => {
    const language = className
        ? className.replace(/language-/, '')
        : 'javascript';

    if (live) {
        return (
            <StyledContainerElement>
                <Anchor.Typography tag="h6" pb="3" m="0" weight={600}>
                    {title}
                </Anchor.Typography>

                <LiveProvider code={children} scope={scope}>
                    <StyledLiveEditor wrap="true" />
                    <StyledLivePreview />
                    <StyledErrorElement />
                </LiveProvider>
            </StyledContainerElement>
        );
    }

    // This is code taken from MDX's own documentation on rendering a code block
    // https://mdxjs.com/guides/syntax-highlighting/#build-a-codeblock-component
    return (
        <Highlight
            {...defaultProps}
            code={children}
            language={language}
            theme={github}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={{ ...style, padding: '20px' }}
                >
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};
