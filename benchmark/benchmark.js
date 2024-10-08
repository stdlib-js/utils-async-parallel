/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var pkg = require( './../package.json' ).name;
var parallel = require( './../lib' );


// FUNCTIONS //

/**
* Returns a function which runs asynchronously.
*
* @private
* @param {*} value - return value
* @returns {Function} function which runs asynchronously
*/
function fcn( value ) {
	return f;

	function f( clbk ) {
		setTimeout( onTimeout, 0 );

		function onTimeout() {
			clbk( null, value );
		}
	}
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var i;

	arr = [
		fcn( 'one' ),
		fcn( 'two' ),
		fcn( 'three' ),
		fcn( 'four' )
	];

	i = 0;
	b.tic();

	return next();

	function next( error ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return parallel( arr, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});

bench( pkg+':limit=3', function benchmark( b ) {
	var opts;
	var arr;
	var i;

	arr = [
		fcn( 'one' ),
		fcn( 'two' ),
		fcn( 'three' ),
		fcn( 'four' )
	];

	opts = {
		'limit': 3
	};

	i = 0;
	b.tic();

	return next();

	function next( error ) {
		i += 1;
		if ( error ) {
			b.fail( 'should not return an error' );
		}
		if ( i <= b.iterations ) {
			return parallel( arr, opts, next );
		}
		b.toc();
		b.pass( 'benchmark finished' );
		b.end();
	}
});
