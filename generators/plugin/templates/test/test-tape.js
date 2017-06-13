const join = require('path').join;
const Taskr = require('taskr');
const test = require('tape');

const dir = join(__dirname, 'fixtures');
const plugins = [require('fly-clear'), require('../')];

const tmpDir = str => join(__dirname, str);
const create = tasks => new Taskr({ tasks, plugins });

test('taskr-<%= pluginSlugName %>', t => {
	t.plan(2);
	const taskr = create({
		*foo(task) {
			t.true('<%= pluginSlugName %>' in task, 'attach `<%= pluginSlugName %>` to Task instance');
			t.true('<%= pluginSlugName %>' in taskr.plugins, 'attach `<%= pluginSlugName %>` plugin to instance');
		}
	});
	taskr.start('foo');
});
