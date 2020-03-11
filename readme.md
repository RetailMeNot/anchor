<p align="center">
    <a href="https://anchor.retailmenot.design/">
        <img alt="Anchor Logo" src="https://raw.githubusercontent.com/RetailMeNot/anchor/master/assets/anchor_logo_300px.png" height="140">
    </a>
</p>
<h2 align="center">A React Design System from RetailMeNot</h2>

<a href="https://travis-ci.org/RetailMeNot/anchor">
    <img alt="Build Satus" src="https://api.travis-ci.org/RetailMeNot/anchor.svg?branch=master">
</a>
<a href="https://spectrum.chat/retailmenot">
    <img alt="Spectrum" src="https://img.shields.io/badge/spectrum-online-green.svg">
</a>
<a href="https://www.npmjs.com/package/@retailmenot/anchor">
    <img alt="Downloads" src="https://img.shields.io/npm/dw/@retailmenot/anchor.svg?color=DF8A6C">
</a>
<a href="https://www.npmjs.com/package/@retailmenot/anchor">
    <img alt="Version" src="https://img.shields.io/npm/v/@retailmenot/anchor.svg?color=DF266C">
</a>

----

Anchor is a robust yet lightweight series of UI components, utilities, and styles that form the foundation of great user experiences.

### Get Started

**NPM**

```ssh
npm i --save @retailmenot/anchor styled-components
```

**Yarn**

```ssh
yarn add @retailmenot/anchor styled-components
```

**Usage**

```jsx
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
import { RootTheme, Typography } from '@retailmenot/anchor';

const Root = () => (
    <ThemeProvider theme={RootTheme}>
        <Typography tag="h1">
            Hello World!
        </Typography>
    </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('app'));
```

[View our docs site for more usage guidelines](https://anchor.retailmenot.design/)

### Why Anchor?

* **Isomorphic** - We are an isomorphic-first library which doesn't require a Webpack expert
* **Convention Over Configuration** - Out of the box this library solves common challenges faced by UI engineers without a ton of configuration
* **Composability** - Rather than writing redundant overrides, we provide consistent attributes to easily change the look and feel of our components
* **Community** - We promote people-centric solutions and promote a culture of learners
* **Representational** - We try to use native DOM APIs so the better you know the DOM the easier this library is to use

### Contribute

Check out our [contributing guide](https://github.com/RetailMeNot/anchor/blob/master/CONTRIBUTING.md) until our docs site goes live with that content.
