'use strict';

// MODULES //

var stdlib = require( './stdlib.js' );
var isObject = require( stdlib+'@stdlib/utils/is-object' ); // TODO: plain object
var isString = require( stdlib+'@stdlib/utils/is-string' ).isPrimitive;


// VALIDATE //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search for test files
* @param {string} [options.global] - global coverage variable
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'coverage': '__coverage__'
* };
*
* var err = validate( opts, options );
* if ( err ) {
*    throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options +
			'`.' );
	}
	if ( options.hasOwnProperty( 'dir' ) ) {
		opts.dir = options.dir;
		if ( !isString( opts.dir ) ) {
			return new TypeError( 'invalid option. `dir` option must be a primitive string. Option: `' + opts.dir + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'global' ) ) {
		opts.global = options.global;
		if ( !isString( opts.global ) ) {
			return new TypeError( 'invalid option. `global` option must be a primitive string. Option: `' + opts.global + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;