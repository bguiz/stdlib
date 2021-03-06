# Whitelist

> Reporter which excludes from license results packages which have a license in a provided whitelist.


<section class="intro">

</section>

<!-- /.intro -->


<section class="usage">

## Usage

``` javascript
var reporter = require( '/path/to/stdlib/tools/licenses/reporters/whitelist' );
```

#### reporter( results, exclude )

Excludes licenses results for packages having a license matching an SPDX identifier in a provided `exclude` list.

``` javascript
var licenses = require( '/path/to/stdlib/tools/licenses/licenses' );

var whitelist = [
    'Apache-2.0',
    'Artistic-2.0',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'BSL-1.0',
    'CC0-1.0',
    'ISC',
    'MIT',
    'MPL-2.0',
    'Unlicense',
    'WTFPL'
];

licenses( onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( reporter( results, exclude ) );
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
Usage: licenses-whitelist [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
         --exclude spdx1,spdx2,...   List of SPDX license identifiers (whitelist).
```

</section>

<!-- /.usage -->


<section class="notes">

### Notes

* Use as part of a standard stream pipeline.

</section>

<!-- /.notes -->


<section class="examples">

### Examples

To pretty print license results,

``` bash
$ licenses | licenses-whitelist --exclude 'BSD-3-Clause,BSD-2-Clause'
```

Example output:

``` text

Package license information:

fs.realpath@1.0.0
├── path: /path/to/node_modules/fs.realpath
├── repo: https://github.com/isaacs/fs.realpath
├── package.json: ISC
├── license: ISC
└── license: MIT

spdx-correct@1.0.2
├── path: /path/to/node_modules/spdx-correct
├── repo: https://github.com/kemitchell/spdx-correct.js
├── package.json: Apache-2.0
├── license: Apache-2.0
└── readme: MIT

spdx-expression-parse@1.0.3
├── path: /path/to/node_modules/spdx-expression-parse
├── repo: https://github.com/kemitchell/spdx-expression-parse.js
├── package.json: (MIT AND CC-BY-3.0)
├── readme: MIT
└── license: MIT
```

To use as part of a pipeline,

``` bash
$ licenses | licenses-whitelist --exclude 'BSD-3-Clause,BSD-2-Clause' | cat
{"id":"...","parents":["..."],...,"licenses":{...}}
{"id":"...","parents":["..."],...,"licenses":{...}}
...
```


</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
