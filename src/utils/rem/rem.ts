// Converts to string and adds 'rem' to numbers, otherwise returns unchanged
export const rem = (value: any) =>
    typeof value === 'number' && !Number.isNaN(value) && value !== 0
        ? `${value}rem`
        : value;
