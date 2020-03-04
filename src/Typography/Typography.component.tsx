// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
// ANCHOR
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
import { Scale } from '../theme/typography.theme';
import { rem } from '../utils/rem/rem';

const { isArray } = Array;

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
    weight?: FontWeights;
    color?: 'inherit' | 'initial' | string;
    scale?: Scale;
    size?: number | string;
    lineHeight?: number | string;
}

export interface StyledTypographyProps extends TypographyProps {
    $color?: 'inherit' | 'initial' | string;
    asVariant?: any;
    scaleVariant?: any;
}

export const Typography = styled('span').attrs<TypographyProps>(props => ({
    $color: props.color,
    color: undefined,
    className: 'anchor-typography',
    asVariant: variant({
        key: 'typography.as',
        default: 'none',
        prop: 'as',
    })(props),
    scaleVariant: variant({
        key: 'typography.scale',
        default: 'none',
        prop: 'scale',
    })(props),
}))<StyledTypographyProps>`

    box-sizing: border-box;
    margin: 0;

    // Variant styles
    ${({ asVariant, scaleVariant }) =>
        css({
            fontFamily: 'base',
            fontSize: th('typography.fontSize'),
            lineHeight: th('typography.lineHeight'),
            fontWeight: th('typography.fontWeight'),
            textAlign: 'inherit',
            color: 'inherit',
            // Don't include variants that are css-blocks
            ...(!isArray(asVariant) ? asVariant : {}),
            ...(!isArray(asVariant) && !isArray(scaleVariant)
                ? scaleVariant
                : {}),
        })}

    // If the "asVariant" is a css block, then we aren't spreading it above and must
    // include it here. We also include the scale variant so that it's still defined
    // "after" the as variant, and takes precedence.
    ${({ asVariant }) => isArray(asVariant) && asVariant}
    ${({ scaleVariant, asVariant }) =>
        (isArray(asVariant) || isArray(scaleVariant)) && scaleVariant}

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
