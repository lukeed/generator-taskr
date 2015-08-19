module.exports = function () {
  this.filter("<%= pluginSlugName %>", (data, options) => {
  /**
    @overview A filter plugin returns an object { code, map, ext }
    which is the result of transforming the incomding data source:

      return { code, map, ext }

    @example Sync filter `j` that transforms a given string into an
    object, i.e, {code, map} where code is the result data and map
    a sourcemap if `options.sourceMap === true`.

      const j = require("my-js-transformer")
      const assign = require("object-assign")

      module.exports = function () {
        return this.filter("j", (data, options) => {
          return assign({ ext: ".js"}, j.render(data.toString(), options))
        })
      }

    @example Async filter `s` that transforms a given string and invokes
    a callback function with an object, i.e, {css, map}.

    const s = require("my-style-trasformer")
    const assign = require("object-assign")

    module.exports = function () {
      return this.defer(s.render)(data.toString(), options).then((result) =>
        assign({ ext: ".css"}, result))
    }
   */
  })
}
