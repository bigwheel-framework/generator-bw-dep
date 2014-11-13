module.exports = {
<% 

	var out = '';

	for( var route in routes ) {

		if( Array.isArray( routes[ route ] ) ) {

			var sections = routes[ route ];

			out += '	\'' + route + '\': [';

			for( var i = 0, len = sections.length; i < len; i++ ) {

				out += 'require( \'./sections/' + sections[ i ] + '\' ), ';
			}

			out = out.substring( 0, out.length - 2 );

			out += '],\n';
		} else if( typeof routes[ route ] == 'string' ) {

			out += '	\'' + route + '\': require( \'./sections/' + routes[ route ] + '\' ),\n';
		}
	} 

	print( out.substring( 0, out.length - 2 ) );
%>
};