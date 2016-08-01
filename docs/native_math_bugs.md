# Bugs

> Bugs in the native (built-in) `Math` namespace.

* [Sine and cosine in V8][1]
* [Trigonometric functions in V8][2]
* [V8 not IEEE 754-2008 compliant][3]
* [Mozilla discussion on sine and cosine in V8][4]
* [V8 replaced a lookup table by computing `Math.tan` as `Math.sin/Math.cos`][5]
* [Browser math accuracy issues][6]
* [ES6 accuracy of special functions][7]
* [Accuracy of `Math.exp` in V8][8]
* [Spreadsheet showing trigonometric results across browsers][9]
* [Accuracy of `Math.pow` in V8][10]
* [Accumulation of errors in Mozilla `Math.pow`][11]
* [Accuracy of hyperbolic trigonometric functions in V8][12]
* [TC39 testing of Math built-ins][13]
* [ES6 shim accuracy issues][14]
* [Non-randomness of `Math.random` in V8][15]
* [V8 fixes `Math.random`][16]
* [V8 patches `Math.random` to return pseudorandom numbers][17]
* [Webkit switched to weak PRNG for speed][18]
* [If `Math.floor` provided `-0`, V8 deoptimizes][19]
* [If `Math.ceil` provided `0`, V8 deoptimizes][20]
* [Accuracy of `Math.round` in V8][21]


<!-- <links> -->

[1]: https://bugs.chromium.org/p/v8/issues/detail?id=3006
[2]: https://bugs.chromium.org/p/chromium/issues/detail?id=320097
[3]: https://bugs.chromium.org/p/v8/issues/detail?id=3089
[4]: https://bugzilla.mozilla.org/show_bug.cgi?id=967709#c33
[5]: https://github.com/v8/v8/commit/33b5db090258c2a2dc825659c3ad109bd02110c1
[6]: https://github.com/kangax/compat-table/issues/392
[7]: https://esdiscuss.org/topic/es6-accuracy-of-special-functions
[8]: https://bugs.chromium.org/p/v8/issues/detail?id=3468
[9]: https://docs.google.com/spreadsheets/d/1t2jrptAvaQetDIYPD8GKc90Dni2dT3FuHgKKFF-eJHw/edit#gid=0
[10]: https://bugs.chromium.org/p/v8/issues/detail?id=3599
[11]: https://bugzilla.mozilla.org/show_bug.cgi?id=618251
[12]: https://github.com/paulmillr/es6-shim/issues/334
[13]: https://github.com/tc39/test262/pull/269
[14]: https://github.com/paulmillr/es6-shim/issues/314
[15]: https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d#.pxwdcvikc
[16]: http://hackaday.com/2015/12/28/v8-javascript-fixes-horrible-random-number-generator/
[17]: http://thenextweb.com/google/2015/12/17/google-chromes-javascript-engine-finally-returns-actual-random-numbers/#gref
[18]: https://bugs.chromium.org/p/chromium/issues/detail?id=246054
[19]: https://bugs.chromium.org/p/v8/issues/detail?id=2890
[20]: https://bugs.chromium.org/p/v8/issues/detail?id=4059
[21]: https://bugs.chromium.org/p/v8/issues/detail?id=958

<!-- </links> -->