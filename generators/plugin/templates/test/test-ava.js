const join = require('path').join;
const Taskr = require('taskr');
const test = require('ava');

const dir = join(__dirname, 'fixtures');
const plugins = [require('fly-clear'), require('../')];

const tmpDir = str => join(__dirname, str);
const create = tasks => new Taskr({ tasks, plugins });

test('attach `<%= pluginSlugName %>` plugin to instance', t => {
	const taskr = create();
	t.ok('<%= pluginSlugName %>' in taskr.plugins);
});

test('attach `<%= pluginSlugName %>` to Task instance', t => {
	create({
		*foo(task) {
			t.ok('<%= pluginSlugName %>' in task);
		}
	}).start('foo');
});

test('example usage test', t => {
	create({
		*foo(task) {
			const tmp = tmpDir('tmp1');
			yield f.source(`${dir}/*.js`).target(tmp);
			const arr = yield f.$.expand(`${tmp}/*.js`);
			t.equal(arr.length, 1, 'copied one file to target tar');
			yield f.clear(tmp); // cleanup
		}
	}).start('foo');
});
