var vows = require('vows')
var assert = require('assert')
var operation = require('..').operation

function parse (a) { return isNaN(a) ? null : +a + 10 }
function str (a) { return isNaN(a) ? null : a * 10 }

vows.describe('pitch.operation').addBatch({
  'one parameter': function () {
    var op = operation(parse, str, function (a) {
      return a + a
    })
    assert.equal(op(1), 220)
    assert.equal(op('a'), 'aa')
  },
  'two parameters': function () {
    var op = operation(parse, str, function (a, b) {
      return a + b
    })
    assert.equal(op(10, 6), '360')
    assert.equal(op('a', 'b'), 'ab')
    assert.equal(op(10, 'b'), '20b')
  },
  'curry': function () {
    var op = operation(parse, str, function (a, b) {
      return a + b
    })
    assert.equal(op(10)(6), '360')
  }
}).export(module)
