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


## `ctn`

__Coord to note__: Convert from [array notation](https://github.com/danigb/music.array.notation)
to [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)

Array length must be 1 or 3 (see array notation documentation)

The returned string format is `letter[+ accidentals][+ octave][/duration]` where the letter
is always uppercase, and the accidentals, octave and duration are optional.

This function is memoized for better perfomance.

### Parameters

* `arr` **`Array`** the note in array notation


### Examples

```js
var str = require('tonal.notation/ctn')
str([0]) // => 'F'
str([0, 4]) // => null (its an interval)
str([0, 4, null]) // => 'F4'
str([0, 4, 2]) // => 'F4/2'
```

Returns `String` the note in scientific notation or null if not valid note array


## `ctp`

__Coord to props__: Convert from [coord pitch notation]()
to [props pitch notation]()

The properties is in the form [number, alteration, octave, duration]

### Parameters

* `array` **`Array`** the pitch in array notation


### Examples

```js
var props = require('tonal.notation/ctp')
props([2, 1, 4]) // => [1, 2, 4]
```

Returns `Array` the properties array


## `exports`

Note parse: parse notes and pitched elements (like chords or scales)

Returns an array with:

- 0: the complete string
- 1: the note letter
- 2: the accidentals
- 3: the octave
- 4: the duration
- 5: the element name

### Parameters

* `source` **`String`** the string to be parsed



Returns `Array` the parsed parts or null if not valid note


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


## `itc`

__Interval to coord__: Convert a [interval shorthand notation](https://en.wikipedia.org/wiki/Interval_(music)#Shorthand_notation)
to [coord interval notation](https://github.com/danigb/music.array.notation)

This function is cached for better performance.

### Parameters

* `interval` **`String`** the interval string


### Examples

```js
var parse = require('tonal.notation/itc')
parse('3m') // => [2, -1, 0]
parse('9b') // => [1, -1, 1]
parse('-2M') // => [6, -1, -1]
```

Returns `Array` the interval in array notation or null if not a valid interval


## `ntc`

__Note to coord__: Convert from [scientific pitch notation](https://en.wikipedia.org/wiki/Scientific_pitch_notation)
to [coord pitch notation](https://github.com/danigb/music.array.notation)

The string to parse must be in the form of: `letter[accidentals][octave]`
The accidentals can be up to four # (sharp) or b (flat) or two x (double sharps)

This function is cached for better performance.

### Parameters

* `str` **`String`** the string to parse


### Examples

```js
var parse = require('tonal.notation/ntc')
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


## `ptc`

__Props to coord__: convert from properties to coordinate

### Parameters

* `prop` **`Array`** the pitch in property format



Returns `Array` the pitch in coordinate format


## `rtc`

Roman to coordinate: convert from [roman numerals](https://en.wikipedia.org/wiki/Roman_numeral_analysis)
to [pitch coordinates]()

### Parameters

* `str` **`String`** the roman numeral string


### Examples

```js
rtc('V') // => [1]
rtc('bII') // => [-5]
```

Returns `Array` a coord or null if not valid roman numeral literal
