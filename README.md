# tonal.notation

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.notation)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.notation/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.notation)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.notation.svg)](https://www.npmjs.com/package/tonal.notation)
[![license](https://img.shields.io/npm/l/tonal.notation.svg)](https://www.npmjs.com/package/tonal.notation)
[![tonal](https://img.shields.io/badge/tonal-notation-yellow.svg)](https://www.npmjs.com/package/tonal)


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

Via npm only: `npm i --save tonal.notation` and then require the whole library:

```js
var notation = require('tonal.notation')
notation.roman.split(...)
```

or the individual functions (recommended):

```js
var note = require('tonal.notation/note')
note(...)
```

## Array notation

The pitches are encoding using array notation. This is a modified version of coord notation from [teoria](https://github.com/saebekassebil/teoria)

- It can represent different types of pitched elements
- All numerical, no need to parse
- All entities represented by an array
- The array length determine the type of the element

#### Pitch classes in array notation

A pitch class is a note name without octave (only a letter and -sometimes- accidentals).

A pitch class is encoded using a 1-element array in the format `[ fifhts ]` where:

- __fifths__ `{Integer}`: the number of fifths from C to the pitch class.

Here are the unaltered pitch classes in array notation:

| C | D | E | F | G | A | B |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| ` [0] `| ` [2] `| ` [4] `| ` [-1] `| ` [1] `| ` [3] `| ` [5] `|

Add 7 to add sharps:

| C# | D# | E# | F# | G# | A# | B# |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| ` [7] ` | ` [9] ` | ` [11] ` | ` [6] ` | ` [8] ` | ` [10] ` | ` [12] ` |


Subtract 7 to add flats:

| Cb | Db | Eb | Fb | Gb | Ab | Bb |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| ` [-7] ` | ` [-5] ` | ` [-3] ` | ` [-8] ` | ` [-6] ` | ` [-4] ` | ` [-2] ` |

#### Intervals in array notation

Intervals are encoded by 2-element arrays with the form `[ fifths, octaves ]` where:

- __fifths__ `{Integer}`: the number of fifths (same as pitch class)
- __octaves__ `{Integer}`: is the number of octaves (positive are ascending, negative descending)

For example, a major second is two fifths up and one octave down: `[2, -1]`


Here are the most popular ascending intervals:

| Interval name | Short | Array notation |
| :-- | :-: | :-: |
| unison | 1P | `[0, 0]` |
| minor second | 2m | `[-5, 3]` |
| major second | 2M | `[2, -1]` |
| minor third | 3m | `[-3, 2]` |
| major third | 3M | `[4, -3]` |
| perfect fourth | 4P | `[-1, 1]` |
| augmented fourth | 4A | `[6, -3]` |
| diminished fifth | 5d | `[-6, 4]` |
| perfect fifth | 5P | `[1, 0]` |
| minor sixth | 6m | `[-4, 3]` |
| major sixth | 6M | `[3, -2]` |
| minor seven | 7m | `[-2, 2]` |
| major seven | 7M | `[5, -2]` |
| octave | 8P | `[0, 1]` |

Compound intervals are created by adding octaves:

| Simple | Array | Compound | Array |
| :-- | :-: | :-: | :-: |
| second | `[2, -1]` | ninth | `[-2, 0]`
| third | `[4, -3]` | tenth | `[4, -2]`
| ... | ... | ... | ... |


Descending intervals are the same as ascending but with opposite direction:

| Interval | Ascending | Descending |
| :-- | :-: | :-: |
| major second | `[2, -1]` | `[-2, 1]`
| major third | `[4, -3]` | `[-4, 3]`
| .... | | ||

#### Notes in array notation

For notes, a 3-length array is used with the form `[fifths, octaves, duration]` where:

- __fifths__ `{Integer}`: number of fifths
- __octaves__ `{Integer}`: number of octaves
- __duration__ `{Integer}`: the duration of the note. Can be `null` to represent pure pitches (notes without duration).

Duration has no defined value, its only a relative duration where an outside reference is needed to convert to time units. Popular choices are 96 or 720 to represent quarter notes.

## Functions and documentation

You can read the [generated API documentation here](https://github.com/danigb/tonal.notation/blob/master/API.md)

The implemented functions are:

- `interval`: return an interval string from a source. `null` if not valid interval
- `interval.parse`: convert an interval string into array notation
- `interval.str`: convert an interval in array notation to string
- `note`: return an note string from a source. `null` if not valid note
- `note.split`: divides a note string into its components
- `note.parse`: convert a note string into array notation
- `note.str`: convert a note in array notation to string
- `pitch`: return an pitch string from a source. `null` if not valid pitch
- `pitch.parse`: convert a pitch string into array notation
- `pitch.str`: convert a pitch in array notation to string
- `roman.split`: divides a roman string into its components
- `roman.parse`: convert a roman string into array notation
- `operation`: decorates a function to parse params and convert to string the result
- `parser`: decorates a parser function to ensure correct params and cache results
- `props`: convert from array notation to properties
- `props.parse`: convert from properties to array notation

## Usage

Require the function and use it:

```js
var parse = require('tonal.notation/note.parse')
parse('C2') // => [0, 2, null]
```

It's fast, since all results are memoized by default.

Although you can require the while library, it's recommended to require the individual functions.

#### Entities

There are four type of entities implemented at this moment:

- __Notes__: include pitch classes (notes without octaves), notes without durations and notes with duration. Examples: `Db` (pitch class), `G#4` (notes), `Ebb5/4` (note with duration)
- __Intervals__: two different shorthand interval format: with accidentals and with qualifiers. Examples: `3M` or `3` (major third), `3m` or `3b` (minor third)
- __Pitches__: an abstraction that includes notes and intervals. Used when you want to manipulate both in a uniform way.
- __Roman numerals__: They are used to express pitches in relation with a scale. Examples: `VI`, `bIV`, `iii`

#### Processes

You can:

- __Split__: divide the string into its parts (implemented using regexp)
- __Parse__: convert a string to array notation
- __Str__: convert from array notation back to string

Examples:

```js
notation.note.split('Gb4Maj7') // => ['Gb4Maj9', 'G', 'b', '4', '', 'Maj7']
notation.roman.split('bVIIMaj7') // => ['bVIIMaj7', 'b', 'VII', 'Maj7' ]

notation.note.parse('D4') // => [1, 0, 3, null]
notation.interval.parse('P5') // => [1, 0]

notation.note.str([3]) // => 'A'
```

#### Operations

The `operation` function decorates another function that manipulates pitches in array notation without worry about parsing and convert back to string:

```js
var operation = require('tonal.notation/operation')
var parse = require('tonal.notation/interval.parse')
var str = require('tonal.notation/interval.str')

// The function adds two intervals and the operation takes care of the conversion
var add = operation(parse, str, function(a, b) {
  return [a[0] + b[0], a[1] + b[1]]
})
add('3m', '3M') // => '5P'
```

#### Create you own parser

`tonal.notation` provides a helper function to create your own parsers:

```js
notation.parser(function (str) {
  // the parameter is always an string
  // the result of the parse process is cached
})
```
#### More...

Read the [generated documentation](https://github.com/danigb/tonal.notation/blob/master/API.md) to learn more. Or take a look to [tonal](https://www.npmjs.com/package/tonal)

## License

MIT License
