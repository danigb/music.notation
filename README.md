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

This module deals with three formats: string literals, coordinate arrays and properties arrays. You can convert, for example a note to coordinate format: use note-to-coordinate function (called ntc):

```js
var ntc = require('tonal.notation/ntc')
ntc('C2') // => [0, 2, null]
```

Although you can require the while library, it's recommended to require the individual functions.

#### String literals

String is the basic representation. `'C2'` (a note), `'5P'` (an interval), `'VI'` (roman numerals) are common examples. Convert a string to a number format is always cached, so it's fast.

#### Intervals

Intervals are strings in the form: `[num][quality]`. For example: `'4P'`, `'3m'`, `'5d'` are valid intervals (perfect fourth, minor third, diminished fifth).

This short notation deviates from the standard notation (it's common to write it with the quality first: `'P4'`) but I choose this order because I want to know without context if `A4` its an interval or a note (and with the common short interval notation its impossible to know it)

Optionally, intervals can be represented with `[num][alterations]`. For example `'2b'` means minor second.



#### Pitches, pitch classes and notes

#### Roman numbers

#### Properties format

#### Coordinate format

A coordinate format is a purely numeric array to represent pitches. The array values are well defined:

- 0: number of fifhts from C0 or 1P
- 1: number of octaves from C0 or 1P
- 3: duration

## License

MIT License
