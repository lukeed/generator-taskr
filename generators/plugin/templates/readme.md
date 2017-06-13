# <%= pluginName %>

> <%= pluginTitleName %> plugin for [Taskr](https://github.com/lukeed/taskr).

[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]

## Install

```sh
npm install --save-dev <%= pluginName %>
```

## Usage


```js
exports.default = function * (task) {
  yield task.source('src/*.js').<%= pluginSlugName %>().target('dist')
}
```

## API

### .<%= pluginSlugName %>(input, options)

> Check out the [documentation](PLUGIN_DOCUMENTATION) to see the available options.

#### input

Type: `string`<br>
Default: 'foobar'

This is a description.

#### options.foo

Type: `boolean`<br>
Default: `false`

This is a description.


## License

MIT © [<%= name %>](<%= website %>)

[releases]:     https://github.com/<%= githubUserName %>/<%= pluginName %>/releases
[npm-pkg-link]: https://www.npmjs.org/package/<%= pluginName %>
[npm-ver-link]: https://img.shields.io/npm/v/<%= pluginName %>.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/<%= pluginName %>.svg?style=flat-square
[travis-link]:  https://travis-ci.org/<%= githubUserName %>/<%= pluginName %>
[travis-badge]: http://img.shields.io/travis/<%= githubUserName %>/<%= pluginName %>.svg?style=flat-square
