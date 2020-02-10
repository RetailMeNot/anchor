/*
    This component is polymorphic. It can be either a static code block, or it can be an interactive
    code editor. This is an example of it being used as a static code block.

    ```jsx
        const x = 0;
    ```

    And this is an example of it being used as an interactive code editor. Note that only components
    can be used in the editor and only Anchor components at that.

    ```tsx live
        <AddEvent />
    ```

    A default title of "Inline Code Editor" or "Example" is displayed by default depending on if the
    'live' prop is passed. To hide it, pass the hideTitle prop.

    ```tsx hideTitle
        <AddEvent />
    ```
*/

// REACT
import * as React from 'react';
// VENDOR
import { withPrefix } from 'gatsby';
import styled, { css } from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';
import {
    LiveEditor,
    LiveProvider,
    LivePreview,
    LiveEditorProps,
    PreProps,
    LiveError,
} from 'react-live';
import Component from '@reach/component-component';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
// tslint:disable-next-line: no-submodule-imports
import github from 'prism-react-renderer/themes/github';
import {
    Adaptor,
    AutoComplete,
    Button,
    Collapse,
    CollapseGroup,
    Grid,
    Input,
    RootTheme,
    Typography,
} from '@retailmenot/anchor';
// COMPONENTS
import * as Anchor from '@retailmenot/anchor';
// EXAMPLE COMPONENTS <-
import { BottomArea, MoreInfo } from '../CardExample';
import { MouseOverMe, MyList } from '../DropDownExample';
import { CustomResults } from '../AutoCompleteExample';
import { ExampleHeader, ExampleLink } from '../TemplateExample';
import { ThemeExplorer } from '../ThemeExplorer';
import { COMPONENT_MIN_WIDTH } from '../Utils/constants';
// TODO: ApiTable is throwing an error when used in the live editor, have to look into it
// import { ApiTable } from '../Utils/ApiTable';
import { ColorBlurb } from '../Utils/ColorBlurb';
import { ComponentInfo } from '../Utils/ComponentInfo';
import { FormatTypes } from '../Utils/FormatTypes';

// TODO: add CDN Inconsolata font

const CodePreviewForcedStyles = css`
    font-family: Inconsolata, monospace !important;
    font-size: 0.875rem !important;
`;

const StyledErrorElement = styled(LiveError)`
    ${CodePreviewForcedStyles};
`;

interface StyledContainerElementProps {
    // Hiding the title will reduce the amount of top padding, allowing for another title to be
    // placed closer to the code block.
    hideTitle?: boolean;
}

const StyledContainerElement = styled('div')<StyledContainerElementProps>`
    margin: ${props => (props.hideTitle ? '0 0 3rem 0' : '2.3rem 0 3rem')};
    display: block;
    overflow-x: scroll;
    ${breakpoints({
        md: css`
            overflow-x: initial;
        `,
    })}

    .prism-code {
        min-width: ${COMPONENT_MIN_WIDTH};
    }
`;

const StyledLiveEditor = styled(LiveEditor)<LiveEditorProps>`
    background-color: text.base;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    min-width: ${COMPONENT_MIN_WIDTH};
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
    min-width: ${COMPONENT_MIN_WIDTH};
    box-sizing: border-box;
    padding: 1rem;
    border: base;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
`;

const StyledCodeBlock = styled('pre')`
    padding: 1.25rem;
    background-color: background.code;
`;

interface CodePreviewProps {
    children?: any;
    className?: string;
    live?: boolean;
    hideTitle?: boolean;
}

const scope = {
    css,
    withPrefix,
    ...Anchor,
    Component,
    // OVERRIDES
    Adaptor,
    AutoComplete,
    Button,
    Collapse,
    CollapseGroup,
    Grid,
    Input,
    RootTheme,

    // EXAMPLE COMPONENTS <-
    // Card
    BottomArea,
    MoreInfo,
    // DropDown
    MouseOverMe,
    MyList,
    // AutoComplete
    CustomResults,
    // TemplateExample
    ExampleHeader,
    ExampleLink,

    // DOCUMENTATION COMPONENTS
    ColorBlurb,
    ComponentInfo,
    FormatTypes,
    ThemeExplorer,
};

/*
    By default, the CodePreview component will render a non-interactive code block. However if the
    live prop is passed, the interactive code editor is used instead.
*/
export const CodePreview = ({
    children,
    className,
    live = false,
    hideTitle = false,
    ...props
}: CodePreviewProps): React.ReactElement<any> => {
    const language: Language | any = className
        ? className.replace(/language-/, '')
        : 'javascript';
    const title = live ? 'Live Code Editor' : 'Example';

    if (live) {
        return (
            <StyledContainerElement hideTitle={hideTitle}>
                {!hideTitle && (
                    <Typography as="h6" pb="3" m="0" weight={600}>
                        {title}
                    </Typography>
                )}

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
        <StyledContainerElement hideTitle={hideTitle}>
            {!hideTitle && (
                <Typography as="h6" pb="0" m="0" weight={600}>
                    {title}
                </Typography>
            )}

            <Highlight
                {...defaultProps}
                code={children}
                language={language}
                theme={github}
            >
                {({
                    className: subClassName,
                    tokens,
                    getLineProps,
                    getTokenProps,
                }) => (
                    <StyledCodeBlock className={subClassName}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({
                                            token,
                                            key,
                                        })}
                                    />
                                ))}
                            </div>
                        ))}
                    </StyledCodeBlock>
                )}
            </Highlight>
        </StyledContainerElement>
    );
};
