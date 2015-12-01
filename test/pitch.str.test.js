var vows = require('vows')
var assert = require('assert')
var str = require('..').pitch.str

vows.describe('pitch.str').addBatch({
  'pitch to string': function () {
    assert.equal(str([0]), 'C')
    assert.equal(str([0, 0]), '1P')
    assert.equal(str([0, 0, 0]), 'C0')
  }
}).export(module)
