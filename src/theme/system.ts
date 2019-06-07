// ANCHOR
import { radii } from './sizes.theme';

// VENDOR
import {
    get,
    system,
    TLengthStyledSystem,
    ResponsiveValue,
} from 'styled-system';
import * as CSS from 'csstype';

export {
    compose,
    color,
    ColorProps,
    background,
    BackgroundProps,
    padding,
    PaddingProps,
    margin,
    MarginProps,
} from 'styled-system';

export const variant = <T extends {}>({
    themeKey,
    variants: defaultVariants,
    prop,
    defaultValue,
}: {
    themeKey: string;
    prop: string;
    variants?: { [key: string]: T };
    defaultValue: string;
}) => (styleFn: (obj: T) => any) => (props: any) => {
    const themeVariants = get(get(props.theme, themeKey), prop);
    const variants = { ...defaultVariants, ...themeVariants };
    const currentValue = props[prop] !== undefined ? props[prop] : defaultValue;
    const variantObj = variants[currentValue];
    return variantObj && styleFn(variantObj);
};

// define our own default
export interface BorderRadiusProps<TLength = TLengthStyledSystem> {
    borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
    borderRadiusTop?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
    borderRadiusBottom?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
    borderRadiusLeft?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
    borderRadiusRight?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
}

export const borderRadius = system({
    borderRadius: {
        property: 'borderRadius',
        scale: 'radii',
        defaultScale: radii,
    },
    borderRadiusTop: {
        properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
        scale: 'radii',
        defaultScale: radii,
    },
    borderRadiusBottom: {
        properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
        scale: 'radii',
        defaultScale: radii,
    },
    borderRadiusLeft: {
        properties: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
        scale: 'radii',
        defaultScale: radii,
    },
    borderRadiusRight: {
        properties: ['borderBottomRightRadius', 'borderTopRightRadius'],
        scale: 'radii',
        defaultScale: radii,
    },
});
