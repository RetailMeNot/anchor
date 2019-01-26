// VARIABLES
import variables from './variables.theme';

const { baseFontSize: base } = variables;

interface Sizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const sizes: Sizes = {
  xs: `${base / 4}px`,
  sm: `${base / 2}px`,
  md: `${base * 1}px`,
  lg: `${base * 2}px`,
  xl: `${base * 3}px`,
};

export default {
  padding: { ...sizes },
  margin: { ...sizes },
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
