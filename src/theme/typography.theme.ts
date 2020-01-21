// VENDOR
import { FlattenSimpleInterpolation } from '@xstyled/styled-components';

export type TypographyTags =
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
    | 'pre'
    | 'strong'
    | 'label';

export type Scale = 62 | 52 | 44 | 36 | 32 | 28 | 24 | 20 | 18 | 16 | 14 | 12;

export interface TypographyTheme {
    // GLOBAL FONT PROPERTIES
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    // FONT TREATMENTS
    scale: { [T in Scale | 'none']: FlattenSimpleInterpolation | {} };
    as: { [K in TypographyTags | 'none']: FlattenSimpleInterpolation | {} };
}

export const typography: TypographyTheme = {
    fontSize: `16px`,
    fontWeight: 'normal',
    lineHeight: '1.5rem',
    scale: {
        62: {
            fontSize: '3.875rem',
            lineHeight: '4.5rem',
        },
        52: {
            fontSize: '3.25rem',
            lineHeight: '4rem',
        },
        44: {
            fontSize: '2.75rem',
            lineHeight: '3rem',
        },
        36: {
            fontSize: '2.25rem',
            lineHeight: '2.5rem',
        },
        32: {
            fontSize: '2rem',
            lineHeight: '2.5rem',
        },
        28: {
            fontSize: '1.75rem',
            lineHeight: '2rem',
        },
        24: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
        },
        20: {
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
        },
        18: {
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
        },
        16: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        14: {
            fontSize: '0.875rem',
            lineHeight: '1.125rem',
        },
        12: {
            fontSize: '0.75rem',
            lineHeight: '1rem',
            fontWeight: 500,
        },
        none: {},
    },
    as: {
        a: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
            textDecoration: 'none',
            transition: 'color 250ms',
            color: 'text.link.base',
            cursor: 'pointer',
            '&:hover': {
                textDecoration: 'underline',
                color: 'text.link.hover',
            },
            '&:focus': {
                color: 'text.link.focus',
            },
            '&:visited': {
                color: 'text.link.visited',
            },
        },
        p: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        span: {
            // TODO
        },
        h1: {
            fontSize: '1.75rem',
            lineHeight: '2rem',
        },
        h2: {
            fontSize: '1.5rem',
            lineHeight: '2rem',
        },
        h3: {
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
        },
        h4: {
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
        },
        h5: {
            fontSize: '1rem',
            lineHeight: '1.5rem',
        },
        h6: {
            fontSize: '0.875rem',
            lineHeight: '1.125rem',
        },
        blockquote: {
            margin: '1rem 0',
            padding: '0.5rem 0 0.5rem 1rem',
            borderLeft: 'light',
            borderLeftWidth: '0.25rem',
            fontStyle: 'italic',
            lineHeight: '1.5rem',
        },
        address: {
            margin: 0,
            padding: 0,
        },
        code: {
            fontFamily: 'mono',
            backgroundColor: 'text.base',
            display: 'block',
            padding: '1rem',
            borderRadius: 'base',
            margin: '2rem 0',
            color: 'white',
            fontSize: '0.875rem',
        },
        pre: {
            fontFamily: 'mono',
        },
        label: {
            lineHeight: '1.5rem',
        },
        strong: {
            fontWeight: 'bold',
        },
        none: {},
    },
};
