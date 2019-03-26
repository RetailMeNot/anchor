// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { LiveEditor, LiveProvider, LivePreview } from 'react-live';
import Component from '@reach/component-component';
// COMPONENTS
import * as Anchor from '../../../../src';
// THEME
import { colors, sizes } from '../../../../src/theme';

const PrismStyleOverrides = css`
    .prism-code {
        padding: ${sizes.padding.lg};
        background-color: ${colors.silver.light};
        color: ${colors.charcoal.light};
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        font-family: monospace !important;

        .token {
            &.tag {
                color: ${colors.savvyCyan.dark};
            }
            &.attr-name {
                color: ${colors.tealBreaker.base};
            }
            &.string {
                color: ${colors.fireSale.base};
            }
            &.number {
                color: ${colors.dealEnvy.base};
            }
            &.operator {
                color: ${colors.cyberMango.base};
            }
            &.punctuation {
                color: ${colors.cyberMango.base};
            }
            &.keyword {
                color: ${colors.savvyCyan.dark};
            }
            &.class-name {
                color: ${colors.tealBreaker.base};
            }
            &.function {
                color: ${colors.savvyCyan.light};
            }
            &.template-string {
                color: ${colors.fireSale.base};
            }
        }
    }
`;

export const StyledCodePreviewElement = styled.pre`
    .react-live-preview {
        padding: ${sizes.padding.lg};
        border: solid thin ${colors.silver.dark};
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }

    ${PrismStyleOverrides}
`;

interface CodePreviewProps {
    className?: string;
    children?: any;
}

const scope = {
    ...Anchor,
    Component,
};

export const CodePreview = ({
    children,
    className,
}: CodePreviewProps): React.ReactElement<any> => (
    <StyledCodePreviewElement className={classNames(className)}>
        <LiveProvider code={children} scope={scope}>
            <LivePreview />
            <LiveEditor wrap="true" />
            {/*<LiveError />*/}
        </LiveProvider>
    </StyledCodePreviewElement>
);
