'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var normalizeUrl = require('normalize-url');

module.exports = yeoman.generators.Base.extend({
  init: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.blue(' generator-fly')
    ));

    this.prompt([{
      name: 'githubUserName',
      message: 'What is your GitHub user name?',
      store: true,
      validate: function (value) {
        return value.length > 0 ? true : 'github needed';
      }

    }, {
      name: 'website',
      message: 'What is your website URL',
      store: true,
      validate: function (value) {
        return value.length > 0 ? true : 'website needed';
      }

    }, {
      name: 'pluginName',
      message: 'What is your plugin name?',
      default: 'fly-awesome-plugin'

    }, {
      name: 'description',
      message: 'Add description of your plugin',
      default: 'Create some awesome stuffs'

    }, {
      type: 'confirm',
      name: 'changelog',
      message: 'Do you need a CHANGELOG file?',
      store: true,
      default: true
    }], function (props) {
      this.props = props;
      this.pluginName = this.props.pluginName;
      this.description = this.props.description;
      this.githubUserName = this.props.githubUserName;
      this.name = this.user.git.name();
      this.email = this.user.git.email();
      this.website = normalizeUrl(this.props.website);

      this.directory('test');
      this.template('_travis.yml', '.travis.yml');
      this.template('eslintrc', '.eslintrc');
      this.template('editorconfig', '.editorconfig');
      this.template('index.js');
      this.template('README.md');
      this.template('LICENSE');
      this.template('_package.json', 'package.json');
      this.template('gitignore', '.gitignore');

      if (this.props.changelog) {
        this.template('CHANGELOG.md');
      }

      done();

    }.bind(this));
  },

  install: function () {
    this.installDependencies({ bower: false });
  }

});
