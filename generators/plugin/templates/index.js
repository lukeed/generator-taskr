const foo = require('foo');

/**
 * Documentation: Writing Plugins
 * @see https://github.com/lukeed/taskr#plugin
 * @see https://github.com/lukeed/taskr#external-plugins
 */
module.exports = function (task, utils) {
	// promisify before running else repeats per execution
	const render = utils.promisify(foo.bar);

	// Option #1
	task.plugin('<%= pluginSlugName %>', {/*every: true, files: true*/}, function * (file, opts) {
		console.log('a single file object', file); //=> { base, dir, data }
		console.log('user-provided config', opts); //=> null || {}
		yield render(opts);
	});

	// Option #2
	/*
		task.plugin({
			name: '<%= pluginSlugName %>',
			every: true,
			files: true,
			*func(file, opts) {
				// ...same
			}
		});
	 */
};
