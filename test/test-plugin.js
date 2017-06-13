'use strict';

const join = require('path').join;
const yo = require('yeoman-generator');

const plugin = join(__dirname, '../generators/plugin');

describe('generator-taskr plugin', () => {
	before(done => yo.test.run(plugin).withOptions({ skipInstall:true }).on('end', done));

	it('creates files', () => {
		yo.assert.file([
			'.travis.yml',
			'.editorconfig',
			'.gitignore',
			'index.js',
			'license',
			'package.json',
			'readme.md',
			'test/index.js',
			'test/fixtures/foo.js'
		]);
	});
});
