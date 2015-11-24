'use strict'

var nn = {}

nn.note = require('./note')
nn.note.split = require('./note.split')
nn.note.parse = require('./note.parse')
nn.note.str = require('./note.str')
nn.interval = require('./interval')
nn.interval.parse = require('./interval.parse')
nn.interval.str = require('./interval.str')
nn.roman = {}
nn.roman.split = require('./roman.split')
nn.roman.parse = require('./roman.parse')
nn.parser = require('./parser')
nn.props = require('./props')
nn.props.coord = require('./props.coord')

module.exports = nn
