// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from 'styled-components';
// THEME
import { fonts, colors } from '../theme';

type Elements =
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
    | 'pre';

type Colors =
    | 'charcoal'
    | 'ash'
    | 'silver'
    | 'lavenderWhispers'
    | 'white'
    | 'grapePurchase'
    | 'savvyCyan'
    | 'tealBreaker'
    | 'dealEnvy'
    | 'flashPink'
    | 'cyberMango'
    | 'goldMine'
    | 'fireSale'
    | 'error'
    | 'success';

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

type Scale = 62 | 52 | 44 | 36 | 32 | 28 | 24 | 20 | 18 | 16 | 14 | 12;

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

export interface TypographyProps {
    className?: string;
    as?: Elements;
    children?: any;
    weight?: FontWeights;
    color?: Colors;
    hue?: 'light' | 'base' | 'dark';
    size?: number;
    lineHeight?: number;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
    transform?: TextTransforms;
    scale?: Scale;
    display?: DisplayValues;
}

const DefaultCSS = {
    p: css`
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;
    `,
    span: css`
        // TODO
    `,
    h1: css`
        font-weight: normal;
        font-size: 1.75rem;
        line-height: 2rem;
    `,
    h2: css`
        font-weight: normal;
        font-size: 1.5rem;
        line-height: 2rem;
    `,
    h3: css`
        font-weight: normal;
        font-size: 1.25rem;
        line-height: 1.5rem;
    `,
    h4: css`
        font-weight: normal;
        font-size: 1.125rem;
        line-height: 1.5rem;
    `,
    h5: css`
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;
    `,
    h6: css`
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 1.125rem;
    `,
    blockquote: css`
        margin: 0;
        padding: 0;
        font-style: italic;
    `,
    address: css`
        margin: 0;
        padding: 0;
    `,
    code: css`
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
            'Courier New', monospace;
    `,
    pre: css`
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
            'Courier New', monospace;
    `,
};

const ScaleTreatments = {
    62: css`
        font-size: 3.875rem;
        line-height: 4.5rem;
    `,
    52: css`
        font-size: 3.25rem;
        line-height: 4rem;
    `,
    44: css`
        font-size: 2.75rem;
        line-height: 3rem;
    `,
    36: css`
        font-size: 2.25rem;
        line-height: 2.5rem;
    `,
    32: css`
        font-size: 2rem;
        line-height: 2.5rem;
    `,
    28: css`
        font-size: 1.75rem;
        line-height: 2rem;
    `,
    24: css`
        font-size: 1.5rem;
        line-height: 2rem;
    `,
    20: css`
        font-size: 1.25rem;
        line-height: 1.5rem;
    `,
    18: css`
        font-size: 1.125rem;
        line-height: 1.5rem;
    `,
    16: css`
        font-size: 1rem;
        line-height: 1.5rem;
    `,
    14: css`
        font-size: 0.875rem;
        line-height: 1.125rem;
    `,
    12: css`
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 500;
    `,
};

const StyledTypography = (as: Elements) => styled[as]`
    font-family: ${fonts.fontFamily};
    box-sizing: border-box;
    // Apply default styles for element
    ${DefaultCSS[as]};
    // CSS Overrides
    text-align: ${({ align = 'inherit' }: any) => align};
    display: ${({ display }: any) => (display ? display : null)};
    text-transform: ${({ transform = 'none' }: any) => transform};
    color: ${({ color = 'charcoal', hue = 'base' }: any) => colors[color][hue]};
    // Use a scale to set size & line-height
    ${({ scale }: any) => (scale ? ScaleTreatments[scale] : null)};
    // Override Size & Line Height
    font-weight: ${({ weight }: any) => (weight ? weight : null)};
    // Throw a warning that says you really shouldn't do this
    font-size: ${({ size }: any) => {
        if (size) {
            /* tslint:disable no-console */
            console.warn(
                'Overriding the size property is almost always a bad idea.'
            );
            return `${size}rem`;
        } else {
            return null;
        }
    }};
    line-height: ${({ lineHeight }: any) => {
        if (lineHeight) {
            /* tslint:disable no-console */
            console.warn(
                'Overriding the lineHeight property is almost always a bad idea.'
            );
            return `${lineHeight}rem`;
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
    as = 'span',
    ...props
}: TypographyProps): JSX.Element =>
    React.createElement(StyledTypography(as), {
        children,
        className: classNames('anchor-typography', className),
        ...props,
    });

export default Typography;
