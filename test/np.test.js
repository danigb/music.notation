var vows = require('vows')
var assert = require('assert')
var parse = require('..').note.parse

function eq (regex, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (regex[i] !== arr[i]) {
      console.log('fail', regex, arr, i)
      return false
    }
  }
  return true
}

vows.describe('note parse').addBatch({
  'pitch classes': function () {
    assert(eq(parse('C'), ['C', 'C']))
    assert(eq(parse('fx'), ['fx', 'f', 'x']))
  },
  'notes without duration': function () {
    assert(eq(parse('cbb4'), ['cbb4', 'c', 'bb', '4']))
  },
  'notes with duration': function () {
    assert(eq(parse('cbb4:3'), ['cbb4:3', 'c', 'bb', '4', ':3']))
  },
  'chords': function () {
    assert(eq(parse('CbMaj7'), ['CbMaj7', 'C', 'b', '', '', 'Maj7']))
  },
  'scales': function () {
    assert(eq(parse('Cbmajor'), ['Cbmajor', 'C', 'b', '', '', 'major']))
    assert(eq(parse('Cb major'), ['Cb major', 'C', 'b', '', '', 'major']))
  }
}).export(module)
