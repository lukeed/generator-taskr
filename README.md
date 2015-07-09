
<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>


[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

> This is the official plugin generator for Fly. You need to install [Yeoman][yeoman] to use this package.


## Install

```
$ npm i -g generator-fly
```

## Usage

```
$ yo fly
```

## Features

The project template includes:

+ `index.js` Template for a transformer plugin. To create more advanced plugins such as `linters`, `testers` and async transformers see the [documentation](https://github.com/flyjs/fly/blob/master/docs/README.md).

+ `README.md` Customized template.

+ `LICENSE`

+ `package.json` Includes the necessary developer dependencies and ships with the following [scripts](https://docs.npmjs.com/cli/run-script):

  + `lint` Lint your code via [ESLint](https://github.com/eslint/eslint).
  + `setup` Install dependencies and run lint/tests.
  + `test` Lint and test your code.
  + `deploy` Test, push to origin master and publish the package.
  + `test-ci` Used in `.travis.yml` to run your tests.


+ `.travis.yml`

+ `.editorconfig`

+ `.eslintrc`

+ `.gitignore`

+ _Optional_: `CHANGELOG.md`

> _Note_: Make sure to [add a remote](https://help.github.com/articles/adding-a-remote/) origin using
`git remote add origin URL` and have an [`npm`](https://www.npmjs.com/signup) account to register a plugin.

## License

MIT © [The Fly Team](https://www.github.com/flyjs/fly) :heart:


[mit]:          http://opensource.org/licenses/MIT
[contributors]: https://github.com/flyjs/generator-fly/graphs/contributors
[releases]:     https://github.com/flyjs/generator-fly/releases
[yeoman]:       http://yeoman.io/
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/generator-fly
[npm-ver-link]: https://img.shields.io/npm/v/generator-fly.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/generator-fly.svg?style=flat-square
[travis-link]:  https://travis-ci.org/flyjs/generator-fly
[travis-badge]: http://img.shields.io/travis/flyjs/generator-fly.svg?style=flat-square
