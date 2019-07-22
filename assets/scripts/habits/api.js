'use strict'

const config = require('../config')

const getHabits = function () {
  return $.ajax({
    url: config.apiUrl + '/habits'
  })
}

const createHabit = function () {
  return $.ajax({
    url: config.apiUrl + '/habits',
    method: 'POST'
  })
}

const deleteHabit = function (id) {
  return $.ajax({
    url: config.apiUrl + '/habits/' + id,
    // url: `${config.apiUrl}/books/${id}`,
    method: 'DELETE'
  })
}

const updateHabit = function (id) {
  return $.ajax({
    url: config.apiUrl + '/habits/' + id,
    // url: `${config.apiUrl}/books/${id}`,
    method: 'PATCH'
  })
}

module.exports = {
  getHabits,
  createHabit,
  deleteHabit,
  updateHabit
}
