
<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>


[![][yo-gen]][yeoman]
[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

> This is the official plugin generator for Fly. In order to use this package you will need to install [Yeoman][yeoman] in your system.


## Install

```
$ npm i -g generator-fly
```

## Usage

```
$ yo fly
```

## Features

> Using this generator you help us maintain consistency across the plugin ecosystem and simplify your workflow.

The project template includes:

+ `index.js` Basic template for a transformer  plugin. For help on how to create more advanced plugins such as `linters`, `testers` and async transformers see the [documentation](https://github.com/flyjs/fly/docs/README.md#plugins).

+ `README.md`
  Consistent readme template automatically customized for your plugin.

+ `LICENSE`

+ `.package.json` This package includes the necessary developer dependencies and includes the following `npm` scripts to increase your productivity:

  > Run any of these scripts with `npm run <SCRIPT NAME>`

  + `lint` Lint your code with [ESLint]().
  + `tape` Test your code with [Tape]().
  + `test` Lint and test your code.
  + `build` Write your own if you need a build script.
  + `deploy` Test, push to origin master and publish the package.


+ `test-ci` Used in `.travis.yml` to run your tests.

+ `.travis.yml`

+ `.editorconfig`

+ `.eslintrc`

+ `.gitignore`

+ _Optional_: `CHANGELOG.md`

> _Note_: You must set a remote origin using
`git remote add origin URL` and have an `npm` account to register the plugin.

## License

MIT © [The Fly Team](https://www.github.com/flyjs/fly) :heart:


[mit]:          http://opensource.org/licenses/MIT

[contributors]: https://github.com/flyjs/generator-fly/graphs/contributors
[releases]:     https://github.com/flyjs/generator-fly/releases
[yo-gen]:       https://img.shields.io/badge/yo-yeoman-E60000.svg?style=flat-square
[yeoman]:       http://yeoman.io/
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/generator-fly
[npm-ver-link]: https://img.shields.io/npm/v/generator-fly.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/generator-fly.svg?style=flat-square
[travis-link]:  https://travis-ci.org/flyjs/generator-fly
[travis-badge]: http://img.shields.io/travis/flyjs/generator-fly.svg?style=flat-square
