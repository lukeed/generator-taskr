module.exports = function () {
  this.filter("<%= pluginSlugName %>", (source, options) => {
    try {
      return source
     } catch (e) { throw e }
  })
}
