const path = require('path');
const yo = require('yeoman-generator');
const normlize = require('normalize-url');
const mkdirp = require('mkdirp');
const colors = require('clor');
const say = require('yosay');

const getSlugName = pluginName => pluginName.split('-').pop();
const properCase = word => word.charAt(0).toUpperCase() + word.slice(1);
const createDir = dir => new Promise((resolve, reject) => {
	mkdirp(dir, err => err ? reject(err) : resolve());
});

const testCommands = {
	tape: 'tape test/*.js | tap-spec',
	jasmine: 'jasmine test',
	mocha: 'mocha test',
	ava: 'ava test'
};

module.exports = yo.generators.Base.extend({
	initializing() {
		this.log(say('Welcome to the ' + colors.cyan('Taskr Plugin Generator')));
	},

	prompting() {
		const done = this.async();

		this.prompt([{
			store: true,
			name: 'githubUserName',
			message: 'What is your GitHub username?',
			validate: val => val.length > 0 ? true : 'github needed'
		}, {
			store: true,
			name: 'website',
			message: 'What is your website URL',
			default: props => `https://github.com/${props.githubUserName}`
		}, {
			name: 'pluginName',
			message: 'What is your plugin name?',
			default: path.basename(process.cwd())
		}, {
			name: 'description',
			message: 'Add a description',
			default: props => properCase(getSlugName(props.pluginName)) + ' plugin for Taskr.'
		}, {
			type: 'list',
			name: 'testTool',
			message: 'What testing tool would you like to use?',
			choices: ['tape', 'mocha', 'jasmine', 'ava'],
			default: 'tape'
		}, {
			type: 'confirm',
			name: 'gitinit',
			message: 'Initialize a Git repository?',
			store: true,
			default: true
		}], props => {
			this.props = props;
			done();
		});
	},

	writing() {
		this.pluginName = this.props.pluginName;
		this.pluginSlugName = getSlugName(this.props.pluginName);
		this.pluginTitleName = properCase(this.pluginSlugName);
		this.description = this.props.description;
		this.testTool = this.props.testTool;
		this.githubUserName = this.props.githubUserName;
		this.name = this.user.git.name();
		this.email = this.user.git.email();
		this.website = normlize(this.props.website);

		const testDir = path.join(this.env.cwd, 'test');
		const fixDir = path.join(testDir, 'fixtures');

		createDir(testDir).then(() => {
			this.copy(
				path.join('test', 'test-' + this.testTool + '.js'),
				path.join('test', 'index.js')
			);
		}).catch(err => this.log.error('Error while creating directory, error: ' + JSON.stringify(err)));

		createDir(fixDir).then(() => {
			this.copy(
				path.join('fixtures', 'foo.js'),
				path.join(fixDir, 'foo.js')
			);
		}).catch(err => this.log.error('Error while creating directory, error: ' + JSON.stringify(err)));

		this.testCommand = testCommands[this.testTool];

		this.template('_travis.yml', '.travis.yml');
		this.template('editorconfig', '.editorconfig');

		this.template('readme.md');
		this.template('index.js');
		this.template('license');
		this.template('_package.json', 'package.json');
		this.template('gitignore', '.gitignore');
	},

	install() {
		this.installDependencies({ bower:false });
	},

	end() {
		if (this.props.gitinit) {
			console.log('\n');
			this.spawnCommand('git', ['init']).on('close', () => {
				this.spawnCommand('git', ['add', '--all']).on('close', () => {
					this.spawnCommand('git', ['commit', '-m', 'initial commit (via generator-taskr)']).on('close', () => console.log('\n'));
				});
			});
		}
	}
});
