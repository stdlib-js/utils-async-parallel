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

/**
* Execute a set of functions in parallel.
*
* @module @stdlib/utils-async-parallel
*
* @example
* var parallel = require( '@stdlib/utils-async-parallel' );
*
* function foo( resolve ) {
*     setTimeout( onTimeout, 300 );
*     function onTimeout() {
*         resolve( null, 'one' );
*     }
* }
*
* function bar( resolve ) {
*     setTimeout( onTimeout, 100 );
*     function onTimeout() {
*         resolve( null, 'two' );
*     }
* }
*
* function done( error, results ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( results );
*     // => [ 'one', 'two' ]
* }
*
* var fcns = [ foo, bar ];
*
* parallel( fcns, done );
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
