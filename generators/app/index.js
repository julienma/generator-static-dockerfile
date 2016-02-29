'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  // note: arguments and options should be defined in the constructor.
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    // This makes `folder` an optional argument.
    this.argument('folder', {
      type: String,
      required: false,
      desc: 'Based on current root, sub-folder you want to serve html from.'
    });
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s serve some ' + chalk.magenta('static content') + '!'
    ));

    var intro = 'This will create a Dockerfile and a .nginx.conf at the root of this folder.\nPushing to your Docker / Dokku remote will create a barebone Nginx server which will serve your static files';

    if (typeof this.folder === 'undefined') {
      this.log(intro + '.\n');
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
        this.folder = this.props.folder;

        done();
      }.bind(this));
    } else {
      this.log(intro + ' from ' + chalk.magenta(this.folder) + '.\n');
      done();
    }
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
      {
        folder: this.folder
      }
    );
  }

});
