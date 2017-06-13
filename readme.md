# generator-taskr [![Build Status](https://travis-ci.org/lukeed/generator-taskr.svg?branch=master)](https://travis-ci.org/lukeed/generator-taskr)

> Official [Yeoman](http://yeoman.io/) generator for creating Fly plugins. 

## Install

```sh
$ npm i -g generator-taskr
```

> **Note:** You need to install [Yeoman](http://yeoman.io/) to use this package.

## Usage

```sh
$ mkdir taskr-cool-plugin
$ cd taskr-cool-plugin
$ yo taskr plugin
```

> **Note**: This will run in your **current directory**! Please create & enter a new folder before running `yo taskr plugin`.

## Features

- Choice of test runners: AVA, Jasmine, Mocha, Tape
- Automatic Git Repo initialization
- JavaScript Linting via XO
- TravisCI config

> :warning: Don't forget to add a [remote origin](https://help.github.com/articles/adding-a-remote/) to your repo!

## Output

```
|-- taskr-cool-plugin
|   |-- .editorconfig
|   |-- .gitignore
|   |-- .travis.yml
|   |-- index.js
|   |-- license
|   |-- package.json
|   |-- readme.md
|   |-- test
|   |   |-- index.js
|   |   |-- fixtures
|   |   |   |-- foo.js
```

## License

MIT © [Luke Edwards](https://lukeed.com) and [Oleh Kuchuk](https://github.com/hzlmn)
