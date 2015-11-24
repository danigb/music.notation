'use strict'

module.exports = {
  note: {
    parse: require('./np'),
    toCoord: require('./ntc'),
    fromCoord: require('./ctn')
  },
  interval: {
    toCoord: require('./itc'),
    fromCoord: require('./cti')
  },
  romans: {
    toCoord: require('./rtc')
  },
  coord: {
    toProps: require('./ctp')
  }
}
