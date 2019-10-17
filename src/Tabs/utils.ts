import { css } from '@xstyled/styled-components';
import { th, variant as createVariant } from '@xstyled/system';
export type Position = 'left' | 'right' | 'bottom' | 'top';

export type Variant = 'tabular' | 'regular';

const TabVariants: {
    [K in Variant]: {
        base?: any;
        header?: any;
        tab?: {
            activeBorder?: string;
            activeBorderColor?: string;
            spacing?: string;
            styles?: any;
        };
        pane?: any;
    };
} = {
    tabular: {
        base: css({}),
        header: ({ position }: any) =>
            css({
                position: 'relative',
                right: position === 'left' ? '-1px' : undefined,
                left: position === 'right' ? '-1px' : undefined,
                bottom: position === 'top' ? '-1px' : undefined,
                top: position === 'bottom' ? '-1px' : undefined,
            }),
        tab: {
            activeBorderColor: 'transparent',
            spacing: '0.25rem',
            styles: ({ active }: any) =>
                css({
                    border: 'light',
                    padding: '0.75rem 1rem',
                    background: active ? 'white' : th.color('background.base'),
                    fontWeight: active ? 500 : undefined,
                }),
        },
        pane: css({}),
    },
    regular: {
        base: css({
            border: 'light',
        }),
        header: ({ position }: any) =>
            css({
                padding: ['left', 'right'].includes(position)
                    ? '1rem 0'
                    : '0 1rem',
                background: th.color('white'),
            }),
        tab: {
            activeBorderColor: 'primary.base',
            spacing: '2rem',
            styles: ({ position, active }: any) =>
                css({
                    border: 'solid transparent',
                    padding: ['left', 'right'].includes(position)
                        ? '0.625rem'
                        : '0.625rem 0',
                    borderWidth: ['left', 'right'].includes(position)
                        ? '0 3px'
                        : '3px 0',
                    fontWeight: active ? 600 : undefined,
                    color: active ? undefined : 'text.label',
                }),
        },
        pane: css({}),
    },
};

export const variantStyles = createVariant({
    key: 'tabs.variants',
    prop: 'variant',
    default: 'regular',
    variants: TabVariants,
});
