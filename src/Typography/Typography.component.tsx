// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
// ANCHOR
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
import { TypographyTags, Scale } from '../theme/typography.theme';
import { rem } from '../utils/rem/rem';

export type FontWeights =
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

export type TextTransforms =
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

export type TextAlign =
    | 'center'
    | 'left'
    | 'right'
    | 'inherit'
    | 'justify'
    | 'start'
    | 'end';

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
    size?: number | string;
    lineHeight?: number | string;
}

export interface StyledTypographyProps extends TypographyProps {
    $color?: 'inherit' | 'initial' | string;
}

const StyledTypography = (tag: TypographyTags) => styled(tag)<
    StyledTypographyProps
>`
    box-sizing: border-box;
    margin: 0;

    // Variant styles
    ${props =>
        css({
            fontFamily: 'base',
            fontSize: th('typography.fontSize'),
            lineHeight: th('typography.lineHeight'),
            fontWeight: th('typography.fontWeight'),
            textAlign: 'inherit',
            color: 'inherit',
            ...variant({
                key: 'typography.tag',
                default: 'none',
                prop: 'tag',
            })(props),
            ...variant({
                key: 'typography.scale',
                default: 'none',
                prop: 'scale',
            })(props),
        })}

    // Prop overrides. We don't have any defaults here because then they
    // would always override the variants above.
    ${({ $color, align, display, transform, lineHeight, size, weight }) =>
        css({
            color: $color,
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
    color,
    ...props
}: TypographyProps): JSX.Element =>
    React.createElement(StyledTypography(tag), {
        children,
        tag,
        $color: color,
        className: classNames('anchor-typography', className),
        ...props,
    });
