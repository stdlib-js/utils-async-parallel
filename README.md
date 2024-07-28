<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# parallel

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Execute functions in parallel and pass the results of all functions to a provided callback.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
parallel = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-parallel@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var parallel = require( 'path/to/vendor/umd/utils-async-parallel/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-parallel@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.parallel;
})();
</script>
```

#### parallel( fcns, \[options,] done )

Executes a set of functions in parallel and passes the results of all functions to a provided callback.

```javascript
function a( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 2 );
    }
}

function b( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4 );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => [ 2, 4 ]
}

var fcns = [ a, b ];

parallel( fcns, done );
```

The function accepts the following `options`:

-   **limit**: maximum number of functions to execute concurrently. Default: `infinity`.
-   **thisArg**: execution context for each function.

To limit the maximum number of functions executing in parallel, set the `limit` option.

```javascript
function a( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 2 );
    }
}

function b( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4 );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => [ 2, 4 ]
}

var fcns = [ a, b ];

var opts = {
    'limit': 1
};

parallel( fcns, opts, done );
```

To set the `this` context for **all** `functions` in the provided function array, set the `thisArg` option.

```javascript
function a( clbk ) {
    this.idx += 1;
    clbk( null, 2 );
}

function b( clbk ) {
    this.idx += 1;
    clbk( null, 4 );
}

var fcns = [ a, b ];
var ctx = {
    'idx': 0
};
var opts = {
    'thisArg': ctx
};

parallel( fcns, opts, done );

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( ctx.idx );
    // => 2
}
```

#### parallel.factory( fcns, \[options] )

Returns a reusable function which executes a set of functions in parallel.

```javascript
function a( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 2 );
    }
}

function b( clbk ) {
    setTimeout( onTimeout, 0 );
    function onTimeout() {
        clbk( null, 4 );
    }
}

function done( error, out ) {
    if ( error ) {
        throw error;
    }
    console.log( out );
    // => [ 2, 4 ]
}

var fcns = [ a, b ];

var run = parallel.factory( fcns );

run( done );
run( done );
run( done );
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The order of the results provided to the `done` callback corresponds to the order of the provided functions.
-   When executed, each provided function is invoked with a single callback argument. The callback should be invoked upon function completion. The first argument is reserved as an `error` argument (which can be `null`). The second argument is reserved for any results which should be passed to the `done` callback upon completion of all provided functions.
-   If any function fails to invoke the callback argument, the `done` callback will never be invoked.
-   This implementation is intended to start asynchronous tasks so that execution of each task runs concurrently. If provided a function which does not perform asynchronous tasks, the function will execute synchronously. Hence, this implementation does **not** guarantee that execution is asynchronous. To do so, wrap the `done` callback in a `function` which either executes at the end of the current stack (e.g., `nextTick`) or during a subsequent turn of the event loop (e.g., `setImmediate`, `setTimeout`).
-   The function executes provided functions in the same thread. Accordingly, the function does **not** spawn new threads.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/utils-async-parallel@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function foo( clbk ) {
    setTimeout( onTimeout, 300 );
    function onTimeout() {
        clbk( null, 'one' );
    }
}

function bar( clbk ) {
    setTimeout( onTimeout, 100 );
    function onTimeout() {
        clbk( null, 'two' );
    }
}

function done( error, results ) {
    if ( error ) {
        throw error;
    }
    console.log( results );
    // => [ 'one', 'two' ]
}

var fcns = [ foo, bar ];

parallel( fcns, done );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-async-parallel.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-async-parallel

[test-image]: https://github.com/stdlib-js/utils-async-parallel/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/utils-async-parallel/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-async-parallel/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-async-parallel?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-async-parallel.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-async-parallel/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-async-parallel/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-async-parallel/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-async-parallel/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-async-parallel/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-async-parallel/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-async-parallel/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-async-parallel/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-async-parallel/main/LICENSE

</section>

<!-- /.links -->
