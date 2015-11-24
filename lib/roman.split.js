'use strict'

var R = /^\s*(b|bb|#|##|)(IV|III|II|I|VII|VI|V|iv|iii|ii|i|vii|vi|v)\s*(.*)\s*$/

/**
 * Roman numeral parser: parse roman numerals and generic chords structures
 *
 * Returns an array with the string parts:
 *
 * - 0: the complete string
 * - 1: the accidentals
 * - 2: the roman numeral
 * - 3: the structure name
 *
 * @param {String} source - the string to parse
 * @return {Array} array - the string parts
 *
 * @example
 */
module.exports = function (s) { return R.exec(s) }
