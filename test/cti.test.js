var vows = require('vows')
var assert = require('assert')
var notation = require('..')
var toCoord = notation.interval.toCoord
var fromCoord = notation.interval.fromCoord

function test (intervals, expected) {
  expected = expected || intervals
  var actual = intervals.split(' ').map(toCoord)
  assert.deepEqual(actual.map(fromCoord).join(' '), expected)
}

vows.describe('coord to interval').addBatch({
  'simples': function () {
    test('1 2 3 4 5 6 7 8', '1P 2M 3M 4P 5P 6M 7M 8P')
    test('1b 2b 3b 4b 5b 6b 7b 8b', '1d 2m 3m 4d 5d 6m 7m 8d')
    test('1# 2# 3# 4# 5# 6# 7# 8#', '1A 2A 3A 4A 5A 6A 7A 8A')
  },
  'compound': function () {
    test('8 9 10 11 12 13 14 15', '8P 9M 10M 11P 12P 13M 14M 15P')
  },
  'descending': function () {
    test('-1 -2 -3 -4 -5 -6 -7 -8', '1P -2M -3M -4P -5P -6M -7M -8P')
  },
  'invalid arrays': function () {
    assert.equal(fromCoord(null), null)
    assert.equal(fromCoord('C2'), null)
    assert.equal(fromCoord(3), null)
    assert.equal(fromCoord({}), null)
    assert.equal(fromCoord([]), null)
  }
}).export(module)
