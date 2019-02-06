// VARIABLES
import variables from './variables.theme';

const { baseFontSize, fontFamily } = variables;

export default {
  baseFontSize,
  fontFamily,
  paragraph: {
    base: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 'normal',
    },
    informational: {
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      fontWeight: 'normal',
    },
  },
  navigation: {
    base: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '500',
    },
    menu: {
      fontSize: '0.875rem',
      lineHeight: '1rem',
      small: {
        base: {
          fontSize: '0.75rem',
          fontWeight: '500',
        },
        active: {
          fontWeight: '700',
        },
      },
      large: {
        base: {
          fontWeight: '600',
        },
        active: {
          fontWeight: '700',
        },
      },
    },
  },
  heading: {
    h4: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 'normal',
    },
    h3: {
      fontSize: '1.75rem',
      lineHeight: '2rem',
      fontWeight: 'normal',
    },
    h2: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: 'normal',
    },
    h1: {
      fontSize: '2.25rem',
      lineHeight: '2.5rem',
      fontWeight: 'normal',
    },
  },
  typography: {
    caption: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: '500',
    },
    ui: {
      fontSize: '0.875rem',
      lineHeight: '1.125rem',
      fontWeight: 'normal',
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 'normal',
    },
    subHeading: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 'normal',
    },
    subHeadingLarge: {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      fontWeight: 'normal',
    },
    header: {
      small: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: 'normal',
      },
      medium: {
        fontSize: '1.75rem',
        lineHeight: '2rem',
        fontWeight: 'normal',
      },
      large: {
        fontSize: '2rem',
        lineHeight: '2.5rem',
        fontWeight: 'normal',
      },
      extraLarge: {
        fontSize: '2.25rem',
        lineHeight: '2.5rem',
        fontWeight: 'normal',
      },
    },
    display: {
      small: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
        fontWeight: 'normal',
      },
      medium: {
        fontSize: '3rem',
        lineHeight: '3.25rem',
        fontWeight: 'normal',
      },
      large: {
        fontSize: '3.5rem',
        lineHeight: '4rem',
        fontWeight: 'normal',
      },
      extraLarge: {
        fontSize: '4rem',
        lineHeight: '4.5rem',
        fontWeight: 'normal',
      },
    },
  },
};
