'use strict'

var nn = {}

nn.note = require('./note')
nn.note.split = require('./note.split')
nn.note.coord = require('./note.coord')
nn.note.str = require('./note.str')
nn.interval = require('./interval')
nn.interval.coord = require('./interval.coord')
nn.interval.str = require('./interval.str')
nn.roman = {}
nn.roman.split = require('./roman.split')
nn.roman.coord = require('./roman.coord')
nn.coord = require('./coord')
nn.props = require('./props')
nn.props.coord = require('./props.coord')

module.exports = nn
