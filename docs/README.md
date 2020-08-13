# Anchor documentation site

https://anchor.retailmenot.design

## Setup

The doc site is evergreen with the Anchor library, and as such its usage of of the `@retailment/anchor` repo actually points to an untracked local build folder rather than the the npm repository.

*Be sure to have [Gatsby's CLI](https://www.gatsbyjs.org/docs/quick-start/) installed befor continuing.*

To start the repo for the first time, be sure you are in the root of the Anchor repository, **NOT** the `/docs` folder.

```
~/anchor $ yarn
~/anchor $ yarn build
~/anchor $ cd docs
~/anchor/docs $ yarn
~/anchor/docs $ yarn develop
```

## Updating

If a component in the Anchor library changes, then the easiset way to update the doc site is to delete the `anchor/docs/node_modules` folder and follow the above steps again. However if you feel that's too heavy handed, you can always delete just the `@retailmenot/anchor` folder in `anchor/docs/node_modules` and then perform the initial setup steps again.