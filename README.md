# tonal.notation

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.notation)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.notation/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.notation)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.notation.svg)](https://www.npmjs.com/package/tonal.notation)
[![license](https://img.shields.io/npm/l/tonal.notation.svg)](https://www.npmjs.com/package/tonal.notation)
[![tonal](https://img.shields.io/badge/tonal-kit-yellow.svg)](https://www.npmjs.com/package/tonal)


`tonal.notation` is a collection of javascript functions to parse strings to numerical pitch representations and convert them back to strings. Pitch in this context mean notes, intervals, pitch classes, roman numerals and other pitched elements (like chords)

This is a low level library and part of [tonal](https://www.npmjs.com/package/tonal)

You can parse pitches:

```js
var notation = require('tonal.notation')
notation.note.parse('C2') // => [0, 2, null]
notation.interval.parse('5P') // => [1, 0]
notation.roman.parse('IV') // => [-1, 0]
```

Or you can create your own parsers:

```js
notation.parser(function (str) {
  ...
})
```

## Install

Only via npm: `npm i --save tonal.notation`

## Usage

This library knows three different musical entities: pitch (notes and pitch classes), intervals and roman numerals.

```js
var parse = require('tonal.notation/note.parse')
parse('C2') // => [0, 2, null]
```

Although you can require the while library, it's recommended to require the individual functions.

Read the [generated documentation](https://github.com/danigb/tonal.notation/blob/master/API.md) to learn more. Or take a look to [tonal](https://www.npmjs.com/package/tonal)

## License

MIT License
