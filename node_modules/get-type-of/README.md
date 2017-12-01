# get-type-of

[![Latest GitHub Tag](https://img.shields.io/github/tag/ChristianGrete/get-type-of.svg)](https://github.com/ChristianGrete/get-type-of/tags)
[![Latest GitHub Release](https://img.shields.io/github/release/ChristianGrete/get-type-of.svg)](https://github.com/ChristianGrete/get-type-of/releases/latest)
[![Total Downloads via GitHub](https://img.shields.io/github/downloads/ChristianGrete/get-type-of/latest/total.svg)](https://github.com/ChristianGrete/get-type-of/releases)
[![Node.js Module Version](https://img.shields.io/npm/v/get-type-of.svg)](https://www.npmjs.com/package/get-type-of)
[![Downloads via npm per Month](https://img.shields.io/npm/dm/get-type-of.svg)](https://www.npmjs.com/package/get-type-of)

> An ECMAScript 2015 compliant `typeof` extension for [Node.js](https://nodejs.org)

__get-type-of__ is a wrapper function that extends JavaScript’s native `typeof` operator in the most compliant way to ECMAScript 2015 as possible. It checks values of their _native types_ that represent the built-in objects `[[Class]]` internal slot tags regardless of whether they are primitives or instantiated objects:
```js
typeof [ 1, 2, 3 ]; // 'object'
getTypeOf( [1, 2, 3] ); // 'array'
```
Technically, this module depends on [mout-lang-type](https://github.com/ChristianGrete/mout-lang-type) and just aliases its `typeOf` submodule under this module’s name `get-type-of`.

## Getting started

### Installation
Install this module as a dependency to your project using [npm](https://www.npmjs.org):
```sh
$ npm install --save get-type-of@latest
```

### Usage
Just require this module and it’s ready to be used:
```js
// Load the module:
var
  typeOf = require('get-type-of');

// Then use it:
typeOf( null ) === 'null'; // true
typeOf( new Number('1') ) === 'number'; // true
```

## Policy

This is communist software. It is crafted with heart and soul to the best of the author’s knowledge and belief: _Not for profit but to satisfy the concrete needs._ Do whatever you want with it (as long as you keep the author’s copyright notice in all copies or substantial portions of it included) for free. Imagine how the world could be if others would produce and distribute their products for the same benefits and ask yourself why they’re actually not.

## License

This software is licensed under [MIT License](LICENSE.md).

Copyright © 2015 [Christian Grete](https://christiangrete.com)
- [GitHub](https://github.com/ChristianGrete)
- [npm](https://www.npmjs.com/~christiangrete)
- [Twitter](https://twitter.com/ChristianGrete)
- [XING](https://www.xing.com/profile/Christian_Grete2)