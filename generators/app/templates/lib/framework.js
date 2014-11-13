var bw = require( 'bigwheel' );

module.exports = bw( function( done ) {

	// You can do something fancy here.
	// Once your fancy pants stuff is finished
	// make sure to call the code below to return
	// the routes to the framework

	done( require( './routes' ) );
});