var showError = require( './showError' );

module.exports = function( command ) {

	showError( 'You must call `yo bw` before you can do `' + command + '`' );
};