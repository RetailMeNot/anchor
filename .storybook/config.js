/* tslint:disable */
// STORYBOOK
import { configure, addDecorator } from '@storybook/react';
// ADDONS
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withViewport } from '@storybook/addon-viewport';
import { addReadme } from 'storybook-readme';

addDecorator(withInfo({
  source:false,
}));
addDecorator(addReadme);
addDecorator(withA11y);
addDecorator(withKnobs);
// addDecorator(withViewport);

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
