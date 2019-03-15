// STORYBOOK
import { configure, addDecorator } from '@storybook/react';
// ADDONS
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withViewport);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
