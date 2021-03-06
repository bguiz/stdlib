# Reporter

> Reporter which groups license results by license type.


<section class="intro">

</section>

<!-- /.intro -->


<section class="usage">

## Usage

``` javascript
var reporter = require( '/path/to/stdlib/tools/licenses/reporters/group' );
```

#### reporter( results )

Groups license results by license type.

``` javascript
var licenses = require( '/path/to/stdlib/tools/licenses/licenses' );

licenses( onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( reporter( results ) );
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
Usage: licenses-group [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
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

``` bash
$ licenses | licenses-group
```

Example output:

``` text

Package licenses:

Unlicense:
└── spdx-license-ids@1.2.2

(MIT AND CC-BY-3.0):
└── spdx-expression-parse@1.0.3

AFLv2.1:
└── json-schema@0.2.2

UNKNOWN:
├── single-line-log@0.4.1
├── domelementtype@1.3.0
├── domhandler@2.3.0
├── domutils@1.5.1
├── domelementtype@1.1.3
├── indexof@0.0.1
├── merge@1.0.0
├── taffydb@2.6.2
├── base64-js@0.0.2
├── uglify-js@2.2.5
└── path-platform@0.0.1

(BSD-2-Clause OR MIT OR Apache-2.0):
└── rc@1.1.6

WTFPL:
├── Base64@0.2.1
├── path-is-inside@1.0.2
├── jju@1.3.0
├── xml-name-validator@2.0.1
├── path-is-inside@1.0.1
├── opener@1.4.1
└── sorted-object@2.0.0

```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->


<section class="links">

</section>

<!-- /.links -->
