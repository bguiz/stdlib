# Licenses

> Resolve licenses.


<section class="intro">

</section>

<!-- /.intro -->


<section class="usage">

## Usage

``` javascript
var licenses = require( '/path/to/stdlib/tools/licenses/licenses' );
```

#### licenses( \[options\], clbk )

Reads installed package dependencies and extracts license information from `package.json` files. 

``` javascript
licenses( onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

The function accepts the following `options`:

* __dir__: root directory from which to search for packages. Default: current working directory.
* __depth__: search depth. Default: `+infinity` (the entire dependency tree).
* __dev__: `boolean` indicating whether to include dev dependencies. Default: `true`.

By default, the function searches the entire dependency tree. To limit the search depth, set the `depth` option.

``` javascript
var opts = {
    'depth': 0 // search only top-level installed packages
};

licenses( opts, onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

To exclude development dependencies, set the `dev` option to `false`.

``` javascript
var opts = {
    'dev': false
};

licenses( opts, onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( results );
}
```

</section>

<!-- /.usage -->


<section class="examples">

<!-- ## Examples

``` javascript

``` -->

</section>

<!-- /.examples -->


---

<section class="cli">

## CLI

<section class="usage">

### Usage

``` bash
Usage: licenses [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
         --dir dirname               Root directory from which to search.
         --depth level               Search depth.
         --no-dev                    Exclude dev dependencies.
```

</section>

<!-- /.usage -->


<section class="notes">

### Notes

* License results are printed to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

</section>

<!-- /.notes -->


<section class="examples">

### Examples

``` bash
$ DEBUG=* licenses
{"id":"...","parents":["..."],...,"licenses":{...}}
{"id":"...","parents":["..."],...,"licenses":{...}}
...
```


</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

[ndjson]: http://ndjson.org/

</section>

<!-- /.links -->
