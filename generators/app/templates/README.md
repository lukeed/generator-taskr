<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

# <%= pluginName %>

> [<%= pluginTitleName %>](https://github.com/<%= githubUserName %>/<%= pluginName %>) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Install

```a
npm install --save-dev <%= pluginName %>
```

## Usage

> Check out the [documentation](PLUGIN_DOCUMENTATION) to see the available options.

```js
export default function* () {
  yield ...
}
```

## License

[MIT][mit] © [<%= name %>][author]


[mit]:          http://opensource.org/licenses/MIT
[author]:       <%= website %>
[releases]:     https://github.com/<%= githubUserName %>/<%= pluginName %>/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/<%= pluginName %>
[npm-ver-link]: https://img.shields.io/npm/v/<%= pluginName %>.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/<%= pluginName %>.svg?style=flat-square
[travis-link]:  https://travis-ci.org/<%= githubUserName %>/<%= pluginName %>
[travis-badge]: http://img.shields.io/travis/<%= githubUserName %>/<%= pluginName %>.svg?style=flat-square
