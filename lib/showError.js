var chalk = require('chalk');

module.exports = function( msg ) {

	console.log( chalk.red.bold( msg ) );
}