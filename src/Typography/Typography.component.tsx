// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
// THEME
import { colors, Color } from '../theme';

type TextElements =
    | 'a'
    | 'p'
    | 'span'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'blockquote'
    | 'address'
    | 'code'
    | 'label'
    | 'pre';

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

type Scale = 62 | 52 | 44 | 36 | 32 | 28 | 24 | 20 | 18 | 16 | 14 | 12;

export interface TypographyProps {
    className?: string;
    align?: TextAlign;
    transform?: TextTransforms;
    display?: DisplayValues;
    htmlFor?: string;
    href?: string;
    children?: any;
    tag?: TextElements;
    weight?: FontWeights;
    color?: 'inherit' | 'initial' | Color;
    hue?: 'light' | 'base' | 'dark';
    scale?: Scale;
    size?: number;
    lineHeight?: number;
}

const StyledTypography = (tag: TextElements) => styled[tag]`
    box-sizing: border-box;
    // Global Font Properties
    font-family: ${th('typography.fontFamily')};
    font-size: ${th('typography.fontSize')};
    font-weight: ${th('typography.fontWeight')};
    line-height: ${th('typography.lineHeight')};
    // Spacing
    margin: 0;
    padding: 0;
    // TODO: colors when theme colors are defined
    ${({ color = 'inherit', hue = 'base' }: any) =>
        css({ color: colors[color] ? colors[color][hue] : color })};

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
    ${({ align = 'inherit' }: any) => css({ textAlign: align })};
    ${({ display }: any) =>
        display ? css({ display: display || null }) : null};
    ${({ transform = 'none' }: any) => css({ textTransform: transform })};

    // Override Size & Line Height
    ${({ weight }: any) => css({ fontWeight: weight ? weight : null })};

    // Throw a warning that says you really shouldn't do this
    ${({ size }: any) => {
        if (size) {
            /* tslint:disable no-console */
            console.warn(
                'Overriding the size property is almost always a bad idea.'
            );
            /* tslint:enable no-console */
            return css({ fontSize: `${size}rem` });
        } else {
            return null;
        }
    }};
    ${({ lineHeight }: any) => {
        if (lineHeight) {
            /* tslint:disable no-console */
            console.warn(
                'Overriding the lineHeight property is almost always a bad idea.'
            );
            /* tslint:enable no-console */
            return css({ lineHeight: `${lineHeight}rem` });
        } else {
            return null;
        }
    }};

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
