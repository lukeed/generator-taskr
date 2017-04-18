'use strict'

var path = require('path')
var assert = require('yeoman-generator').assert
var helpers = require('yeoman-generator').test

describe('generator fly plugin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({skipInstall: true})
      .withPrompts({someOption: true})
      .on('end', done)
  })

  it('creates files', function () {
    assert.file([
      'CHANGELOG.md',
      'index.js',
      '.travis.yml',
      '.editorconfig',
      'README.md',
      'package.json',
      'LICENSE',
      '.gitignore',
      'test/index.js',
      'test/fixtures/foo.js'
    ])
  })
})
