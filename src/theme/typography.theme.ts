// VENDOR
import { css, FlattenSimpleInterpolation } from '@xstyled/styled-components';
// import { th } from '@xstyled/system';
// THEME
import { colors } from './colors.theme';
import { fonts } from './fonts.theme';

type TypographyTags =
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

export interface TypographyTheme {
    // GLOBAL FONT PROPERTIES
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    // FONT TREATMENTS
    scale: {
        [key: number]: FlattenSimpleInterpolation;
    };
    tag: { [K in TypographyTags]: FlattenSimpleInterpolation };
}

export const typography: TypographyTheme = {
    fontFamily: fonts.fontFamily,
    fontSize: `${fonts.baseFontSize}px`,
    fontWeight: 'normal',
    lineHeight: '1.5rem',
    scale: {
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
    },
    tag: {
        a: css`
            font-weight: normal;
            font-size: 1rem;
            line-height: 1.5rem;
            text-decoration: none;
            transition: color 250ms;
            color: text.link.base;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
                color: text.link.hover;
            }
            &:focus {
                color: text.link.focus;
            }
            &:visited {
                color: text.link.visited;
            }
        `,
        p: css`
            font-weight: normal;
            font-size: 1rem;
            line-height: 1.5rem;
            margin-bottom: 1rem;
        `,
        span: css`
            // TODO
        `,
        h1: css`
            font-weight: normal;
            font-size: 1.75rem;
            line-height: 2rem;
            margin: 1rem 0;
        `,
        h2: css`
            margin: 1rem 0;
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
            margin: 1rem 0;
            padding: 0.5rem 0 0.5rem 1rem;
            border-left: 0.5rem solid ${colors.ash.base};
            color: ${colors.charcoal.base};
            font-style: italic;
            line-height: 1.5rem;
        `,
        address: css`
            margin: 0;
            padding: 0;
        `,
        code: css`
            font-family: SFMono-Regular, Menlo, Monaco, Consolas,
                'Liberation Mono', 'Courier New', monospace;
            background: ${colors.charcoal.base};
            display: block;
            padding: 1rem;
            border-radius: 0.25rem;
            margin: 2rem 0;
            color: ${colors.white.base};
            font-size: 0.875rem;
        `,
        pre: css`
            font-family: SFMono-Regular, Menlo, Monaco, Consolas,
                'Liberation Mono', 'Courier New', monospace;
        `,
        label: css`
            font-weight: normal;
            line-height: 1.5rem;
        `,
        strong: css`
            font-weight: bold;
        `,
    },
};
