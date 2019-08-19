# Contributing

Below is a handful of instructions on how to generally navigate, understand, and contribute to this app.

## Environment

### Git 2.0+

There are several ways to install Git on a Mac. The easiest is probably to install the Xcode Command Line Tools. On
Mavericks (10.9) or above you can do this simply by trying to run git from the Terminal the very first time.

```sh
$ git --version
```

If you don’t have it installed already, it will prompt you to install it.

If you want a more up to date version, you can also install it via a binary installer. A macOS Git installer is
maintained and available for download at the Git website, at http://git-scm.com/download/mac.

### Node 10.0.0+

You can download and install Node easily fom their [website](https://nodejs.org/en/), but it's recommended that you
install it using [Node Version Manager](https://github.com/creationix/nvm)

#### NVM

```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Then install Node

```sh
$ nvm install node
```

### Yarn 1.6.0+ (optional)

First you will need Homebrew

```sh
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then install Yarn via Homebrew:

```sh
$ brew install yarn --ignore-dependencies
```

## Clone the Repo

Clone the repo:

```sh
$ git clone git@github.com:RetailMeNot/anchor.git
```

## Install the Dependencies

```sh
$ yarn
```

or

```sh
$ npm i
```

## Run the app

```sh
$ yarn storybook
```

or

```sh
$ npm run storybook
```

This will run the app in development mode.

## Test the app

```sh
$ yarn test:dev
```

or

```sh
$ npm run test:dev
```

This will run the entire Jest test suite in development (watch) mode.

## Fixing local file watcher:

```sh
brew install watchman
```

## Folder Structure

New components should be placed in the `src` directory. Each new component should (at a minimum) have the following files:

```
	src/
		<COMPONENT_NAME>/
			<COMPONENT_NAME>.tsx
			<COMPONENT_NAME>.spec.tsx
			<COMPONENT_NAME>.stories.tsx
			index.tsx
```

Nested components can recursively follow this pattern (see the `Avatar` component for reference).

## Available Scripts

In the project directory, you can run the following:

**Note:** You can use `npm run x` as a facsimile for most of these commands, but why not use yarn?

If you use homebrew and nvm:

```bash
brew install yarn --ignore-dependencies
```

### `yarn storybook`

`npm run storybook`

Runs the library's storybook locally (ideal for local development).

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits to anything.

### `yarn build`

Runs the production build for the app.

### `yarn test`

Runs jest.

For more on testing check out [testing](#testing-components).

### `yarn test:dev`

Runs jest in watch mode.

### `yarn lint`

Runs eslint over the entire codebase.

It will fail on any lint error.

### `yarn pretty`

Runs prettier over the entire project to make all the code uniform.

There's also a pre-commit hook if you're committing from the command line.


## Testing

In order to have any PR merged into this project, there must be specs (at least stubs as we're in alpha) and the specs must be passing.

#### Snapshots failing?

If the snapshots are failing and the changes to the snapshots represents desired changes, the following command can update the snapshots.

```ssh
npm run test -- -u
```

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.

## Supported Language Features and Polyfills

This project uses [Babel](https://babeljs.io) which gives us the ability to support a superset of the latest JavaScript standard.
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are
including the appropriate polyfills manually, or that the browsers you are targeting already support them.

Also note that using some newer syntax features like `for...of` or `[...nonArrayValue]` causes Babel to emit code that
depends on ES6 runtime features and might not work without a polyfill. When in doubt, use
[Babel REPL](https://babeljs.io/repl/) to see what any specific syntax compiles down to.

## Syntax Highlighting in the Editor

To configure the syntax highlighting in your favorite text editor, head to the
[relevant Babel documentation page](https://babeljs.io/docs/editors) and follow the instructions. Some of the most
popular editors are covered.


## Formatting Code Automatically

Prettier is an opinionated code formatter with support for JavaScript, CSS and JSON. With Prettier you can format the
code you write automatically to ensure a code style within your project. See the
[Prettier's GitHub page](https://github.com/prettier/prettier) for more information, and look at this
[page to see it in action](https://prettier.github.io/prettier/).

Whenever you make a commit from the command line, Prettier will format the changed files automatically. You can also
run `yarn pretty` to format your entire project.

If you want to integrate Prettier in your favorite editor, read the section on
[Editor Integration](https://prettier.io/docs/en/editors.html) on the Prettier GitHub page.

## Importing a Component

This project setup supports ES6 modules thanks to Babel.

You should always use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html).

For example:

### `Button.js`

```tsx
import * as React, { Component } from 'react';

export const Button = () => (
  // JSX here
);

```
### `DangerButton.js`


```js
import * as React, { Component } from 'react';
import { Button } from './Button'; // Ideally import from an index.ts

export const DangerButton = () => (
  <Button color='red' />
);

```

Be aware of the [difference between default and named exports](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281). It is a common source of mistakes.

Stick to using default imports and exports when a module only exports a single thing (for example, a component).
That’s what you get when you use `export default Button` and `import Button from './Button'`.

Named exports are useful for utility modules that export several functions. A module may have at most one default export
and as many named exports as you like.

Learn more about ES6 modules:

* [When to use the curly braces?](http://stackoverflow.com/questions/36795819/react-native-es-6-when-should-i-use-curly-braces-for-import/36796281#36796281)
* [Exploring ES6: Modules](http://exploringjs.com/es6/ch_modules.html)
* [Understanding ES6: Modules](https://leanpub.com/understandinges6/read#leanpub-auto-encapsulating-code-with-modules)


## Adding Images, Fonts, and Files

With NextJS, using static assets like images and fonts is pretty simple. Add all static content to the `static`
directory. From there, it can be referenced as `<img src='static/x.jpg />'`.

### Changing the HTML

The `pages/_document.js` file contains the equivalent of an index.html file so you can tweak it, for example, to
[set the page title](#changing-the-page-title). The `<script>` tag with the compiled code will be added to it
automatically during the build process.

### Adding Assets Outside of the Module System

You can also add other assets to the `static` folder.

## Using Global Variables

When you include a script in the HTML file that defines global variables and try to use one of these variables in the code, the linter will complain because it cannot see the definition of the variable.

You can avoid this by reading the global variable explicitly from the `window` object, for example:

```js
const $ = window.$;
```

This makes it obvious you are using a global variable intentionally rather than because of a typo.

Alternatively, you can force the linter to ignore any line by adding `// eslint-disable-line` after it.

**Do this with extreme caution**

## Adding Custom Environment Variables

Your project can consume variables declared in your environment as if they were declared locally in your JS files. By
default you will have `NODE_ENV` defined for you.

**The environment variables are embedded during the build time**. To read them at runtime, you would need to load HTML
into memory on the server and replace placeholders in runtime, just like
[described here](#injecting-data-from-the-server-into-the-page). Alternatively you can rebuild the app on the
server anytime you change them.

These environment variables will be defined for you on `process.env`. For example, having an environment
variable named `REACT_APP_SECRET_CODE` will be exposed in your JS as `process.env.REACT_APP_SECRET_CODE`.

These environment variables can be useful for displaying information conditionally based on where the project is
deployed or consuming sensitive data that lives outside of version control.

## Proxying API Requests in Development

> More on this later as this project matures. We do have an API gateway project for this (rx-saver-gw) that runs on port
3006 and the render server is already configured to use that for API proxies.

## Running Tests

We use [Jest](https://facebook.github.io/jest/) as a test runner via `yarn test`.

Jest is a Node-based runner. This means that the tests always run in a Node environment and not in a real browser. This
lets us enable fast iteration speed and prevent flakiness.

While Jest provides browser globals such as `window` thanks to [jsdom](https://github.com/tmpvar/jsdom), they are only
approximations of the real browser behavior. Jest is intended to be used for unit tests of your logic and your
components rather than the DOM quirks.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.spec.tsx` suffix.

### Command Line Interface

When you run `yarn test:dev`, Jest will launch in the watch mode. Every time you save a file, it will re-run the tests,
just like `yarn build` compiles code.

The watcher includes an interactive command-line interface with the ability to run all tests, or focus on a search
pattern. It is designed this way so that you can keep it open and enjoy fast re-runs. You can learn the commands
from the "Watch Usage" note that the watcher prints after every run:

![Jest watch mode](http://facebook.github.io/jest/img/blog/15-watch.gif)

### Version Control Integration

By default, when you run `yarn test`, Jest will only run the tests related to files changed since the last commit.
This is an optimization designed to make your tests run fast regardless of how many tests you have. However, it assumes
that you don’t often commit the code that doesn’t pass the tests.

Jest will always explicitly mention that it only ran tests related to the files changed since the last commit. You can
also press `a` in the watch mode to force Jest to run all tests.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them
in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```tsx
import { sum } from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](https://facebook.github.io/jest/docs/en/expect.html#content).
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](https://facebook.github.io/jest/docs/en/expect.html#tohavebeencalled) to create “spies” or mock functions.

> Webstorm/Code both support Jest and Enzyme's syntax, but you will likely have to install plugins that support those libraries.

### Testing Components

There is a broad spectrum of component testing techniques. They range from a "smoke test" verifying that a component
renders without throwing, to shallow rendering and testing some of the output, to full rendering and testing component
lifecycle and state changes.

Different projects choose different testing trade-offs based on how often components change, and how much logic they
contain. If you haven’t decided on a testing strategy yet, you should start with creating simple smoke tests for your
components:

```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';

describe('Component: App', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      expect(div).toBeDefined();
    });
});
```

This test mounts a component and makes sure that it didn’t throw during rendering. Tests like this provide a lot of
value with very little effort so they are great as a starting point.

When you encounter bugs caused by changing components, you will gain a deeper insight into which parts of them are
worth testing in your application. This might be a good time to introduce more specific tests asserting specific
expected output or behavior.

If you’d like to test components in isolation from the child components they render, the [`shallow()` and `mount()` rendering APIs](http://airbnb.io/enzyme/docs/api/shallow.html)
from [Enzyme](http://airbnb.io/enzyme/) is installed and configured.

You can write a smoke test with it:

```tsx
import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('Component: App', () => {
    it('renders without crashing', () => {
      shallow(<App />);
    });
});
```

Unlike the previous smoke test using `ReactDOM.render()`, this test only renders `<App>` and doesn’t go deeper.
For example, even if `<App>` itself renders a `<Button>` that throws, this test will pass. Shallow rendering is great
for isolated unit tests, but you may still want to create some full rendering tests to ensure the components integrate
correctly. Enzyme supports [full rendering with `mount()`](http://airbnb.io/enzyme/docs/api/mount.html), and you can
also use it for testing state changes and component lifecycle.

You can read the [Enzyme documentation](http://airbnb.io/enzyme/) for more testing techniques. Enzyme documentation
uses Chai and Sinon for assertions but you don’t have to use them because Jest provides built-in `expect()` and
`jest.fn()` for spies.

Here is an example from Enzyme documentation that asserts specific output, rewritten to use Jest matchers:

```tsx
import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
```

All Jest matchers are [extensively documented here](http://facebook.github.io/jest/docs/en/expect.html).

Additionally, you might find [jest-enzyme](https://github.com/blainekasten/enzyme-matchers) helpful to simplify your
tests with readable matchers. The above `contains` code can be written more simply with jest-enzyme.

```js
expect(wrapper).toContainReact(welcome)
```

### Snapshot Testing

Snapshot testing is a feature of Jest that automatically generates text snapshots of your components and saves them on the disk so if the UI output changes, you get notified without manually writing any assertions on the component output. [Read more about snapshot testing.](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)

### Editor Integration

If you use [Visual Studio Code](https://code.visualstudio.com), there is a [Jest extension](https://github.com/orta/vscode-jest)
which works out of the box. This provides a lot of IDE-like features while using a text editor: showing the status of a
test run with potential fail messages inline, starting and stopping the watcher automatically, and offering one-click
snapshot updates.

![VS Code Jest Preview](https://cloud.githubusercontent.com/assets/49038/20795349/a032308a-b7c8-11e6-9b34-7eeac781003f.png)

## git Process

When contributing to this repo, there are a few guidelines to follow. This repo will adopt the [feature-branch workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)
which should be extremely familiar to open source developers.

### Types of Branches

Different types of branches correspond to different types of work. The following is a list of the different types of work captured on Jira:

1. Feature Implemented
	* Without a Feature Flag/Not a Test (`feature`)
		- Brownfield
		- Greenfield
	* With Feature Flag (`flag`)
	* As A Test (`test`)
		- A/B
		- Multi-variant
1. Bug Fix (`bug`)
	* Design
	* Functionality
	* Compatibility
	* Localization
	* Usability
1. Developer Chore (`chore`)
	* Refactor
	* Dependency Updates
	* Hygiene
	* Testing
	* Performance
	* Security
	* Documentation

### Branch Names

Each branch name should be descriptive, contain the Jira ticket number that corresponds to the feature being worked on, and the
type of work being performed (see above list).

New Feature: Adding a new color palette

```sh
$ git checkout -b feature/new-color-palette
$ git add .
$ git commit -m "New Color Palette: Added new color palette SCSS vars."
$ git push origin feature/new-color-palette
```

#### Refactoring code or updating docs.

```sh
$ git checkout -b chore/(what-is-being-done)
```

#### Bug fixes

```sh
$ git checkout -b bug/color-bug
```

### Commit Messages

> TODO

### Pull Requests

> TODO
