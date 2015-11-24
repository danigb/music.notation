var vows = require('vows')
var assert = require('assert')
var roman = require('..').roman

function fifths (str) {
  return str.split(' ').map(roman.coord).map(function (e) { return e[0] })
}

vows.describe('roman numerals to coord').addBatch({
  'plain roman numerals': function () {
    assert.deepEqual(fifths('I II III IV V VI VII'), [0, 2, 4, -1, 1, 3, 5])
    assert.deepEqual(fifths('I II III IV V VI VII'), fifths('i ii iii iv v vi vii'))
  },
  'altered roman numerals': function () {
    assert.deepEqual(fifths('bI bII bIII bIV bV bVI bVII'),
      fifths('i ii iii iv v vi vii').map(function (e) { return e - 7 }))
    assert.deepEqual(fifths('#I #II #III #IV #V #VI #VII'),
      fifths('i ii iii iv v vi vii').map(function (e) { return e + 7 }))
  },
  'invalid': function () {
    assert.equal(roman.coord(), null)
    assert.equal(roman.coord('VImaj7'), null)
    assert.equal(roman.coord('blah'), null)
  }
}).export(module)
