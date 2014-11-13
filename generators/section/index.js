var yeoman = require('yeoman-generator');
var shouldInit = require( '../../lib/showShouldInit' );
var showError = require( '../../lib/showError' );

var SectionGenerator = yeoman.generators.NamedBase.extend({

	constructor: function() {

		yeoman.generators.NamedBase.apply( this, arguments );

		this.option( 'failSilent', {

			desc: 'if this is passed then bw:section will fail silently',
			type: 'Boolean',
			defaults: false,
			hide: true
		});
	},

	writing: {

		stubSection: function() {

			var s = this.config.get( 'settings' ),
				sectionPath = s.srcFolder + '/sections/' + this.name + '.js';

			if( this.dest.exists( sectionPath ) ) {

				if( !this.options.failSilent )
					showError( 'There is already a section defined by the name: ' + this.name );
			} else if( s ) {

				this.template( 'lib/sections/section.js', sectionPath, { name: this.name } );
			} else {

				shouldInit( 'yo bw:section' );
			}
		}
	}
});

module.exports = SectionGenerator;