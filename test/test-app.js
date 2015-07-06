"use strict"

var path = require("path")
var assert = require("yeoman-generator").assert
var helpers = require("yeoman-generator").test
var os = require("os")

describe("generator fly plugin:app", function () {
  before(function (done) {
    helpers.run(path.join(__dirname, "../generators/app"))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on("end", done)
  })

  it("creates files", function () {
    assert.file([
      "CHANGELOG.md",
      ".travis.yml",
      ".editorconfig",
      "README.md",
      "package.json",
      ".editorconfig",
      ".eslintrc",
      "LICENSE",
      ".gitignore",
      "test/test.js"
    ])
  })
})
