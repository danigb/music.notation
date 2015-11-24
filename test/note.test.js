var vows = require('vows')
var assert = require('assert')
var note = require('..').note

vows.describe('notation.note').addBatch({
  'get notes': function () {
    assert.equal(note('fx'), 'F##')
    assert.equal(note('fx/4'), 'F##')
    assert.equal(note('blah'), null)
    assert.equal(note(), null)
  }
}).export(module)
