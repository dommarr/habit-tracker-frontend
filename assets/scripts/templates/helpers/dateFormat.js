'use strict'

const moment = require('moment')

const dateFormat = (date) => {
  moment(date).format('L')
}

module.exports = dateFormat
