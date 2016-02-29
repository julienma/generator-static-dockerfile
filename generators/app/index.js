'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s serve some ' + chalk.red('static content') + '!'
    ));

    this.log('This will create a Dockerfile and a .nginx.conf at the root of this folder.\nPushing to your Docker / Dokku remote will create a barebone Nginx server which will serve your static files.\n');

    this.log('Based on current root, which sub-folder do you want to serve html from?');

    var prompts = [{
      type: 'input',
      name: 'folder',
      message: 'Folder with your static files (e.g. "dist" or "app/build"). Leave blank for current root.',
      default: ''
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function () {
    // Copy Dockerfile as is
    this.fs.copy(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile')
    );
    // Copy .nginx.conf and inject the value of <folder>
    this.fs.copyTpl(
      this.templatePath('.nginx.conf'),
      this.destinationPath('.nginx.conf'),
      { folder: this.props.folder }
    );
  }

});
