const join = require('path').join;
const test = require('tape');
const Fly = require('fly');

const dir = join(__dirname, 'fixtures');
const plugins = [require('fly-clear'), require('../')];

const tmpDir = str => join(__dirname, str);
const create = tasks => new Fly({tasks, plugins});

test('fly-<%= pluginSlugName %>', t => {
	t.plan(2);
	const fly = create({
		*foo(f) {
			t.true('<%= pluginSlugName %>' in f, 'attach `<%= pluginSlugName %>` to Task instance');
			t.true('<%= pluginSlugName %>' in fly.plugins, 'attach `<%= pluginSlugName %>` plugin to instance');
		}
	});
	fly.start('foo');
});
