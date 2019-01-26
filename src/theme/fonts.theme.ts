// VARIABLES
import variables from './variables.theme';

const { baseFontSize, fontFamily } = variables;

export default {
  baseFontSize,
  fontFamily,
  paragraph: {
    base: {
      fontSize: `${baseFontSize}px`,
      lineHeight: `${baseFontSize * 1.5}px`,
      fontWeight: 'normal',
    },
    informational: {
      fontSize: `${baseFontSize *  0.875}px`,
      lineHeight: `${baseFontSize * 1.125}px`,
      fontWeight: 'normal',
    },
  },
  navigation: {
    base: {
      fontSize: `${baseFontSize * .75}px`,
      lineHeight: `${baseFontSize}px`,
      fontWeight: '500',
    },
    menu: {
      fontSize: `${baseFontSize * .875}px`,
      lineHeight: `${baseFontSize}px`,
      small: {
        base: {
          fontSize: `${baseFontSize * 0.75}px`,
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
      fontSize: `${baseFontSize * 1.5}px`,
      lineHeight: `${baseFontSize * 2}px`,
      fontWeight: 'normal',
    },
    h3: {
      fontSize: `${baseFontSize * 1.75}px`,
      lineHeight: `${baseFontSize * 2}px`,
      fontWeight: 'normal',
    },
    h2: {
      fontSize: `${baseFontSize * 2}px`,
      lineHeight: `${baseFontSize * 2.5}px`,
      fontWeight: 'normal',
    },
    h1: {
      fontSize: `${baseFontSize * 2.25}px`,
      lineHeight: `${baseFontSize * 2.5}px`,
      fontWeight: 'normal',
    },
  },
  typography: {
    caption: {
      fontSize: `${baseFontSize * 0.75}px`,
      lineHeight: `${baseFontSize}px`,
      fontWeight: '500',
    },
    ui: {
      fontSize: `${baseFontSize * 0.875}px`,
      lineHeight: `${baseFontSize * 1.125}px`,
      fontWeight: 'normal',
    },
    body: {
      fontSize: `${baseFontSize}px`,
      lineHeight: `${baseFontSize * 1.5}px`,
      fontWeight: 'normal',
    },
    subHeading: {
      fontSize: `${baseFontSize * 1.125}px`,
      lineHeight: `${baseFontSize * 1.5}px`,
      fontWeight: 'normal',
    },
    subHeadingLarge: {
      fontSize: `${baseFontSize * 1.25}px`,
      lineHeight: `${baseFontSize * 1.5}px`,
      fontWeight: 'normal',
    },
    header: {
      small: {
        fontSize: `${baseFontSize * 1.5}px`,
        lineHeight: `${baseFontSize * 2}px`,
        fontWeight: 'normal',
      },
      medium: {
        fontSize: `${baseFontSize * 1.75}px`,
        lineHeight: `${baseFontSize * 2}px`,
        fontWeight: 'normal',
      },
      large: {
        fontSize: `${baseFontSize * 2}px`,
        lineHeight: `${baseFontSize * 2.5}px`,
        fontWeight: 'normal',
      },
      extraLarge: {
        fontSize: `${baseFontSize * 2.25}px`,
        lineHeight: `${baseFontSize * 2.5}px`,
        fontWeight: 'normal',
      },
    },
    display: {
      small: {
        fontSize: `${baseFontSize * 2.5}px`,
        lineHeight: `${baseFontSize * 3}px`,
        fontWeight: 'normal',
      },
      medium: {
        fontSize: `${baseFontSize * 3}px`,
        lineHeight: `${baseFontSize * 3.25}px`,
        fontWeight: 'normal',
      },
      large: {
        fontSize: `${baseFontSize * 3.5}px`,
        lineHeight: `${baseFontSize * 4}px`,
        fontWeight: 'normal',
      },
      extraLarge: {
        fontSize: `${baseFontSize * 4}px`,
        lineHeight: `${baseFontSize * 4.5}px`,
        fontWeight: 'normal',
      },
    },
  },
};
