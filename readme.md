# Anchor
A React design system library.

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

### Node 8.0.0+

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
$ brew install yarn --without-node
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
$ yarn dev
```

or

```sh
$ npm run dev
```

This will run the app in development mode.

## Test the app

```sh
$ yarn test
```

or 

```sh
$ npm run test
```

This will run the entire Jest test suite in development (watch) mode.

## Contributing

See our contributing guide.


## Fixing local file watcher:

```sh
brew install watchman
```

https://github.com/facebook/jest/issues/1767#issuecomment-248883102
