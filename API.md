## `cti`

__Coord to interval__: Convert from [coord interval notation](https://github.com/danigb/music.array.notation)
to [shorthand interval notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)

The returned string has the form: `number + quality` where number is the interval number
(positive integer for ascending intervals, negative integer for descending intervals, never 0)
and the quality is one of: 'M', 'm', 'P', 'd', 'A' (major, minor, perfect, dimished, augmented)

### Parameters

* `interval` **`Array`** the interval in array notation


### Examples

```js
var str = require('tonal.notation/cti')
str([1, 0, 0]) // => '2M'
str([1, 0, 1]) // => '9M'
```

Returns `String` the interval string in shorthand notation or null if not valid interval


## `exports`

Roman numeral parser: parse roman numerals and generic chords structures

Returns an array with the string parts:

- 0: the complete string
- 1: the accidentals
- 2: the roman numeral
- 3: the structure name

### Parameters

* `source` **`String`** the string to parse


### Examples

```js

```

Returns `Array` array - the string parts


## `interval.parse`

Parse a [interval shorthand notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)
to [interval coord notation](https://github.com/danigb/music.array.notation)

This function is cached for better performance.

### Parameters

* `interval` **`String`** the interval string


### Examples

```js
var parse = require('tonal.notation/interval.parse')
parse('3m') // => [2, -1, 0]
parse('9b') // => [1, -1, 1]
parse('-2M') // => [6, -1, -1]
```

Returns `Array` the interval in array notation or null if not a valid interval


## `notation.interval`

Get a interval from a string (or null if not valid interval)

### Parameters

* `src` **`String`** the source


### Examples

```js
interval = require('tonal.notation/interval')
interval('2M') // => '2M'
interval('2') // => '2M'
interval('2m') // => '2m'
interval('2b') // => '2m'
interval('C') // => null
```

Returns `String` the interval in short notation


## `notation.note`

Get a note from a string (or null if not valid note)

### Parameters

* `src` **`String`** the source


### Examples

```js
note = require('tonal.notation/note')
note('fx2') // => 'F##2'
note('bbb') // => 'Bbb'
note('blah') // => null
```

Returns `String` the note in scientific notation


## `notation.parser`

Decorate coordtinate conversion functions

It helps creating functions that convert from string to pitch in coordinate format.
Basically it does two things:
- ensure the function only receives strings
- memoize the result



### Examples

```js
var parser = require('tonal.notataion/parser')
var parse = parser(function (str) {
  // str is ALWAYS a string
  // the return value is memoized
})
```



## `note.parse`

Get a pitch in [coord pitch notation](https://github.com/danigb/music.array.notation)
from a string in [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)

The string to parse must be in the form of: `letter[accidentals][octave]`
The accidentals can be up to four # (sharp) or b (flat) or two x (double sharps)

This function is cached for better performance.

### Parameters

* `str` **`String`** the string to parse


### Examples

```js
var parse = require('tonal.notation/note.parse')
parse('C') // => [ 0 ]
parse('c#') // => [ 8 ]
parse('c##') // => [ 16 ]
parse('Cx') // => [ 16 ] (double sharp)
parse('Cb') // => [ -6 ]
parse('db') // => [ -4 ]
parse('G4') // => [ 2, 3, null ]
parse('c#3') // => [ 8, -1, null ]
```

Returns `Array` the note in array notation or null if not valid note


## `note.split`

Split a note string into its parts

It returns an array with:

- 0: the complete string
- 1: the note letter
- 2: the accidentals
- 3: the octave
- 4: the duration
- 5: the element name

### Parameters

* `source` **`String`** the string to be parsed


### Examples

```js
var split = require('tonal.notation/note.split')
split('c#4') // => ['c#4', 'c', '#', '4', '', '']
```

Returns `Array` the parsed parts or null if not valid note


## `note.str`

Get [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation) string
from pitch in [coordinate notation]()

Array length must be 1 or 3 (see array notation documentation)

The returned string format is `letter[+ accidentals][+ octave][/duration]` where the letter
is always uppercase, and the accidentals, octave and duration are optional.

This function is memoized for better perfomance.

### Parameters

* `arr` **`Array`** the note in array notation


### Examples

```js
var str = require('tonal.notation/note.str')
str([0]) // => 'F'
str([0, 4]) // => null (its an interval)
str([0, 4, null]) // => 'F4'
str([0, 4, 2]) // => 'F4/2'
```

Returns `String` the note in scientific notation or null if not valid note array


## `props`

Get properties from a pitch in coordinate format

The properties is an array with the form [number, alteration, octave, duration]

### Parameters

* `array` **`Array`** the pitch in coord format


### Examples

```js
var props = require('tonal.notation/props')
props([2, 1, 4]) // => [1, 2, 4]
```

Returns `Array` the pitch in property format


## `props.coord`

Get a pitch in coordinate format from properties

### Parameters

* `prop` **`Array`** the pitch in property format



Returns `Array` the pitch in coordinate format


## `roman.parser`

Roman to coordinate: convert from [roman numerals](https://en.wikipedia.org/wiki/Roman_numeral_analysis)
to [pitch coordinates]()

### Parameters

* `str` **`String`** the roman numeral string


### Examples

```js
var parse = require('tonal.notation/roman.parser')
parse('V') // => [1]
parse('bII') // => [-5]
```

Returns `Array` a coord or null if not valid roman numeral literal


