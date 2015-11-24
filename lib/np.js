'use strict'

var R = /^([a-gA-G])(#{1,}|b{1,}|x{1,}|)(-?\d*)(:\d+|)\s*(.*)\s*$/

/**
 * Note parse: parse notes and pitched elements (like chords or scales)
 *
 * Returns an array with:
 *
 * - 0: the complete string
 * - 1: the note letter
 * - 2: the accidentals
 * - 3: the octave
 * - 4: the duration
 * - 5: the element name
 *
 * @param {String} source - the string to be parsed
 * @return {Array} the parsed parts or null if not valid note
 */
module.exports = function (s) { return R.exec(s) }
