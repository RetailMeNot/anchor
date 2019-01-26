import { configure, addDecorator } from '@storybook/react';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const viewports = {
  ...INITIAL_VIEWPORTS,
};

addDecorator(withInfo());
addDecorator(withKnobs);

configureViewport({ viewports });

configure(loadStories, module);
