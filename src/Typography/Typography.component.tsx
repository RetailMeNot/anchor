// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
// ANCHOR
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
// import { colors, Color } from '../theme';
import { TypographyTags, Scale } from '../theme/typography.theme';
import { rem } from '../utils/rem/rem';

type FontWeights =
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'initial'
    | 'inherit';

type TextTransforms =
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';

type DisplayValues =
    | 'inline'
    | 'block'
    | 'contents'
    | 'flex'
    | 'grid'
    | 'inline-block'
    | 'inline-flex'
    | 'inline-grid'
    | 'inline-table'
    | 'list-item'
    | 'run-in'
    | 'table'
    | 'table-caption'
    | 'table-column-group'
    | 'table-header-group'
    | 'table-footer-group'
    | 'table-row-group'
    | 'table-cell'
    | 'table-column'
    | 'table-row'
    | 'none'
    | 'initial'
    | 'inherit';

export type TextAlign = 'center' | 'left' | 'right' | 'inherit' | 'justify';

export interface TypographyProps extends SpaceProps, React.HTMLAttributes<any> {
    className?: string;
    align?: TextAlign;
    transform?: TextTransforms;
    display?: DisplayValues;
    htmlFor?: string;
    href?: string;
    children?: any;
    tag?: TypographyTags;
    weight?: FontWeights;
    color?: 'inherit' | 'initial' | string;
    scale?: Scale;
    size?: number;
    lineHeight?: number;
}

const StyledTypography = (tag: TypographyTags) => styled(tag)<TypographyProps>`
    box-sizing: border-box;

    // Global Font Properties
    font-family: ${th('typography.fontFamily')};
    font-size: ${th('typography.fontSize')};
    font-weight: ${th('typography.fontWeight')};
    line-height: ${th('typography.lineHeight')};

    // Use a scale to set size & line-height
    ${variant({
        key: 'typography.scale',
        default: 16,
        prop: 'scale',
    })}

    // Apply default styles for element
    ${variant({
        key: 'typography.tag',
        default: 'span',
        prop: 'tag',
    })}

    // Prop overrides
    ${({
        color = 'inherit',
        align = 'inherit',
        display,
        transform = 'none',
        lineHeight,
        size,
        weight,
    }) =>
        css({
            color,
            textAlign: align,
            display,
            textTransform: transform,
            lineHeight: rem(lineHeight),
            fontSize: rem(size),
            fontWeight: weight,
        })};

    // Spacing
    ${spaceStyles}

    small {
        font-size: 87.5%;
    }
`;

export const Typography = ({
    className,
    children,
    tag = 'span',
    ...props
}: TypographyProps): JSX.Element =>
    React.createElement(StyledTypography(tag), {
        children,
        tag,
        className: classNames('anchor-typography', className),
        ...props,
    });
