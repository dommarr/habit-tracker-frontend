'use strict'

const config = require('../config')
const store = require('../store')

const getHabits = function () {
  return $.ajax({
    url: config.apiUrl + '/habits',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createHabit = formData => {
  return $.ajax({
    url: config.apiUrl + '/habits',
    data: formData,
    // { habit: { habit_title: JSON.stringify(formData) } },
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteHabit = function (id) {
  return $.ajax({
    url: config.apiUrl + '/habits/' + id,
    // url: `${config.apiUrl}/books/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateHabit = function (id, formData) {
  console.log(id)
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/habits/' + id,
    // url: `${config.apiUrl}/books/${id}`,
    data: { habit: {
      id: JSON.stringify(id),
      habit_title: JSON.stringify(formData)
    } },
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getHabits,
  createHabit,
  deleteHabit,
  updateHabit
}
