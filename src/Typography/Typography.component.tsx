// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
// ANCHOR
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
import { colors, Color } from '../theme';
import { TypographyTags, Scale } from '../theme/typography.theme';
import { rem } from '../utils/rem/rem';

// export type TypographyTags =
//     | 'a'
//     | 'p'
//     | 'span'
//     | 'h1'
//     | 'h2'
//     | 'h3'
//     | 'h4'
//     | 'h5'
//     | 'h6'
//     | 'blockquote'
//     | 'address'
//     | 'code'
//     | 'label'
//     | 'pre';

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

// type Scale = 62 | 52 | 44 | 36 | 32 | 28 | 24 | 20 | 18 | 16 | 14 | 12;

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
    color?: 'inherit' | 'initial' | Color | string;
    hue?: 'light' | 'base' | 'dark';
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

    // CSS Overrides
    ${({ align = 'inherit', display, transform = 'none' }) =>
        css({
            textAlign: align,
            display: display,
            textTransform: transform,
        })};

    // Override Size & Line Height
    ${({ lineHeight, size, weight }) =>
        css({
            lineHeight: rem(lineHeight),
            fontSize: rem(size),
            fontWeight: weight,
        })};

    // Spacing
    ${spaceStyles}

    // TODO: colors when theme colors are defined
    ${({ color = 'inherit', hue = 'base' }) =>
        css({ color: colors[color] ? colors[color][hue] : color })};

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
