# tonal.notation

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.notation)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.notation/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.notation)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.notation.svg)](https://www.npmjs.com/package/tonal.notation)
[![license](https://img.shields.io/npm/l/tonal.notation.svg)](https://www.npmjs.com/package/tonal.notation)
[![tonal](https://img.shields.io/badge/tonal-kit-yellow.svg)](https://www.npmjs.com/package/tonal)


`tonal.notation` is a collection of javascript functions to parse notes, intervals and other musical elements to numerical pitch representations and convert them back to strings:


```js
var notation = require('tonal.notation')
notation.note.parse('C2') // => [0, 2, null]
notation.interval.parse('5P') // => [1, 0]
notation.roman.parse('IV') // => [-1, 0]
notation.note.split('Bb3 dorian') // => ['Bb3', 'B', 'b', '3', '', 'dorian']
```

This is a low level library and part of [tonal](https://www.npmjs.com/package/tonal)

## Install

Via npm only: `npm i --save tonal.notation` and then require:

```js
// the whole library
var notation = require('tonal.notation')
notation.roman.split(...)

// or individual functions
var note = require('tonal.notation/note')
note(...)
```

## Usage

This library knows three different musical entities: pitch (notes and pitch classes), intervals and roman numerals.

```js
var parse = require('tonal.notation/note.parse')
parse('C2') // => [0, 2, null]
```

It's fast, since all results are memoized by default.

Although you can require the while library, it's recommended to require the individual functions.

Read the [generated documentation](https://github.com/danigb/tonal.notation/blob/master/API.md) to learn more. Or take a look to [tonal](https://www.npmjs.com/package/tonal)

#### Split

Split is the process of divide a string into its parts. It's regexp behind a function:

```js
notation.note.split('Gb4Maj7') // => ['Gb4Maj9', 'G', 'b', '4', '', 'Maj7']
notation.roman.split('bVIIMaj7') // => ['bVIIMaj7', 'b', 'VII', 'Maj7' ]
```

#### Parse

Parse is the process to convert to array notation.

#### Create you own parser

`tonal.notation` provides a function decorator to create parsers:

```js
notation.parser(function (str) {
  // str is always an string
  // the result is cached
})
```

## License

MIT License
