// ANCHOR
import { radii } from './sizes.theme';

// VENDOR
import { get, system } from 'styled-system';

export const variant = <T extends {}>({
    themeKey,
    variants: defaultVariants,
    prop,
    defaultValue,
}: {
    themeKey: string;
    prop: string;
    variants: { [key: string]: T };
    defaultValue: string;
}) => (styleFn: (obj: T) => any) => (props: any) => {
    const subTheme = get(props.theme, themeKey);
    const variants = get(subTheme, prop, defaultVariants);

    const currentValue = props[prop];
    const variantObj = variants[currentValue || defaultValue];

    return styleFn(variantObj);
};

// define our own default
export { BorderRadiusProps } from 'styled-system';
export const borderRadius = system({
    borderRadius: {
        property: 'borderRadius',
        scale: 'radii',
        defaultScale: radii,
    },
});
