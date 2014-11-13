'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var BwGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    
    this.composeWith( 'ify', { options: { localServer: true, grunt: true } }, {
      local: require.resolve( 'generator-ify' )
    });
  },

  prompting: function () {
    var done = this.async(),
        s = this.config.get( 'settings' ) || {};

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the astonishing Bw generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'srcFolder',
      message: 'Where would you like your source files to live?',
      default: 'lib'
    }];

    this.prompt(prompts, function (props) {
      s.srcFolder = props.srcFolder;

      this.config.set( 'settings', s );

      done();
    }.bind(this));
  },

  writing: {

    main: function() {

      this.src.copy( 'index.js', 'index.js' );
    },

    lib: function() {

      this.src.copy( 'lib/framework.js', 'lib/framework.js' );
    },

    app: function () {
      this.dest.mkdir('app');
      // this.dest.mkdir('app/templates');

      // this.src.copy('_package.json', 'package.json');
      // this.src.copy('_bower.json', 'bower.json');
    }
  }
});

module.exports = BwGenerator;
