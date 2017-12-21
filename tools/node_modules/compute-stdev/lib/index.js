/**
*
*	COMPUTE: stdev
*
*
*	DESCRIPTION:
*		- Computes the sample standard deviation over an array of values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: stdev( arr )
	*	Computes the sample standard deviation over an array of values.
	*
	* @param {Array} arr - array of values
	* @returns {Number} sample standard deviation
	*/
	function stdev( arr ) {
		if ( !Array.isArray( arr ) ) {
			throw new TypeError( 'stdev()::invalid input argument. Must provide an array.' );
		}
		var len = arr.length,
			N = 0,
			mean = 0,
			M2 = 0,
			delta = 0;

		if ( len < 2 ) {
			return 0;
		}
		for ( var i = 0; i < len; i++ ) {
			N += 1;
			delta = arr[ i ] - mean;
			mean += delta / N;
			M2 += delta * ( arr[i] - mean );
		}
		return Math.sqrt( M2 / ( N-1 ) );
	} // end FUNCTION stdev()


	// EXPORTS //

	module.exports = stdev;

})();