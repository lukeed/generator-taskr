const normalizeUrl = require("normalize-url")
const yeoman = require("yeoman-generator")
const clor = require("clor")
const yo = require("yosay")

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.log(yo("Welcome to the " + clor.cyan("Fly Plugin Generator")))
  },

  prompting: function() {
    const done = this.async()

    this.prompt([{
      name: "githubUserName",
      message: "What is your GitHub user name?",
      store: true,
      validate: function(value) {
        return value.length > 0 ? true : "github needed"
      }
    }, {
      name: "website",
      message: "What is your website URL",
      store: true,
      default: function(props) {
        return "http://github.com/" + props.githubUserName
      }
    }, {
      name: "pluginName",
      message: "What is your plugin name?",
      default: require("path").basename(process.cwd())
    }, {
      name: "description",
      message: "Add a description",
      default: function(props) {
        return properCase(getSlugName(props.pluginName)) + " plugin for Fly."
      }
    }, {
      type: "list",
      name: "language",
      message: "Select your plugin base language",
      choices: ["ES6", "ES5"],
      default: "ES6"
    }, {
      type: "confirm",
      name: "changelog",
      message: "Do you need a CHANGELOG file?",
      store: true,
      default: true
    }, {
      type: "confirm",
      name: "gitinit",
      message: "Initialize a Git repository?",
      store: true,
      default: true
    }], function(props) {
      this.props = props
      done()
    }.bind(this))
  },

  writing: function() {
    this.pluginName = this.props.pluginName
    this.pluginSlugName = getSlugName(this.props.pluginName)
    this.pluginTitleName = properCase(this.pluginSlugName)
    this.description = this.props.description
    this.language = this.props.language
    this.githubUserName = this.props.githubUserName
    this.name = this.user.git.name()
    this.email = this.user.git.email()
    this.website = normalizeUrl(this.props.website)

    this.directory("test")
    this.template("_travis.yml", ".travis.yml")
    this.template("eslintrc", ".eslintrc")
    this.template("editorconfig", ".editorconfig")

    if (this.language === "ES6") {
      this.template("index.es6.js", "index.js")
    } else {
      this.template("index.es5.js", "index.js")
    }

    this.template("README.md")
    this.template("LICENSE")
    this.template("_package.json", "package.json")
    this.template("gitignore", ".gitignore")

    if (this.props.changelog) {
      this.template("CHANGELOG.md")
    }
  },

  install: function() {
    this.installDependencies({bower: false})
  },

  end: function() {
    if (this.props.gitinit) {
      const self = this
      console.log('\n')
      this.spawnCommand("git", ["init"]).on("close", function() {
        self.spawnCommand("git", ["add", "--all"]).on("close", function() {
          self.spawnCommand('git', ["commit", "-m", "initial commit, via generator-fly 🚀"]).on("close", function() {
            console.log('\n')
          })
        })
      })
    }
  }
})

function getSlugName(pluginName) {
  return pluginName.split("-").pop()
}

function properCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}
