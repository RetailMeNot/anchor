// Accepts a unit in pixels and converts it to rem. Adds the string, 'rem', to the return if
// showUnit is true.
export const rem = (val: number | undefined, showUnit?: boolean): number | string => {
    const remValue = (val && typeof val === "number")
        ? Math.floor(val / 16)
        : 0;

    return showUnit ? remValue + 'rem' : remValue;
};
