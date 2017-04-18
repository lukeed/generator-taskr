# generator-fly 

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

> Official [Yeoman][yeoman] generator for creating Fly plugins. 

## Install

```sh
$ npm i -g generator-fly
```

> **Note:** You need to install [Yeoman][yeoman] to use this package.

## Usage

```sh
$ mkdir fly-cool-plugin
$ cd fly-cool-plugin
$ yo fly
```

> **Note**: This will run in your **current directory**! Please create & enter a new folder before running `yo fly`.

## Features

- Choice of test runners: AVA, Jasmine, Mocha, Tape
- JavaScript Linting via XO
- TravisCI config
- Automatic Git Repo initialization

> :warning: Don't forget to add a [remote origin](https://help.github.com/articles/adding-a-remote/) to your repo!

## Output

```
|-- fly-cool-plugin
|   |-- .editorconfig
|   |-- .gitignore
|   |-- .travis.yml
|   |-- CHANGELOG.md (optional)
|   |-- index.js
|   |-- LICENSE
|   |-- package.json
|   |-- README.md
|   |-- test
|   |   |-- index.js
|   |   |-- fixtures
|   |   |   |-- foo.js
```

## License

MIT © [The Fly Team](https://github.com/flyjs/fly) :heart:


[contributors]: https://github.com/flyjs/generator-fly/graphs/contributors
[releases]:     https://github.com/flyjs/generator-fly/releases
[yeoman]:       http://yeoman.io/
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/generator-fly
[npm-ver-link]: https://img.shields.io/npm/v/generator-fly.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/generator-fly.svg?style=flat-square
[travis-link]:  https://travis-ci.org/flyjs/generator-fly
[travis-badge]: http://img.shields.io/travis/flyjs/generator-fly.svg?style=flat-square
