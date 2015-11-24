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
  roman: {
    parse: require('./rp'),
    toCoord: require('./rtc')
  },
  coord: {
    toProps: require('./ctp')
  }
}
