'use strict'

const checked = (bool) => {
  if (bool) {
    return 'checked'
  } else {
    return ''
  }
}

module.exports = checked
