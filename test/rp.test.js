var vows = require('vows')
var assert = require('assert')
var parse = require('..').roman.parse

function eq (regex, arr) {
  if (!regex) return false
  for (var i = 0; i < arr.length; i++) {
    if (regex[i] !== arr[i]) {
      console.log('fail', regex, arr, i)
      return false
    }
  }
  return true
}

var nums = 'I II III IV V VI VII'.split(' ')
vows.describe('roman numeral parse').addBatch({
  'case independent': function () {
    nums.forEach(function (n) {
      assert(eq(parse(n), [n, '', n]))
      var l = n.toLowerCase()
      assert(eq(parse(l), [l, '', l]))
    })
  },
  'alterations': function () {
    nums.forEach(function (n) {
      '# ## b bb'.split(' ').forEach(function (alt) {
        assert(eq(parse(alt + n), [alt + n, alt, n]))
      })
    })
  },
  'chords': function () {
    assert(eq(parse('bVImaj7'), ['bVImaj7', 'b', 'VI', 'maj7']))
    assert(eq(parse('III dom'), ['III dom', '', 'III', 'dom']))
  }
}).export(module)
