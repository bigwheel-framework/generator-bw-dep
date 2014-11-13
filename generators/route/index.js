var yeoman = require('yeoman-generator');
var shouldInit = require( '../../lib/showShouldInit' );

var RouteGenerator = yeoman.generators.NamedBase.extend({

	constructor: function() {

		yeoman.generators.NamedBase.apply( this, arguments );

		this.argument( 'sections', {

			desc: 'You must pass in one more section names associated with this route',
			required: true,
			type: Array
		});
	},

	configuring: {

		setupRoutes: function() {

			var routes = this.config.get( 'routes' ) || {};

			if( this.name.charAt( 0 ) != '/' )
				this.name = '/' + this.name;

			if( this.sections.length == 1 ) {

				routes[ this.name ] = this.sections[ 0 ];
			} else {

				routes[ this.name ] = this.sections;
			}

			this.config.set( 'routes', routes );
		}
	},

	writing: {

		updateRoutes: function() {

			var routes = this.config.get( 'routes' ),
				s = this.config.get( 'settings' );

			if( s !== undefined )
				this.template( 'lib/routes.js', s.srcFolder + '/routes.js', { routes: routes } );
			else
				shouldInit( 'yo bw:route' );
		},

		createSections: function() {

			for( var i = 0, len = this.sections.length; i < len; i++ ) {

				this.composeWith( 'bw:section', { options: { failSilent: true }, args: this.sections[ i ] }, {

					local: require.resolve( '../section/' )
				});
			}
		}
	}
});

module.exports = RouteGenerator;