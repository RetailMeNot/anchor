interface Sizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}

const standardSizes: Sizes = {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem',
};

export const sizes = {
    padding: { ...standardSizes },
    margin: { ...standardSizes },
    border: {
        radius: {
            base: '3px',
        },
        width: {
            base: '1px',
        },
        style: {
            base: 'solid',
        },
    },
};
