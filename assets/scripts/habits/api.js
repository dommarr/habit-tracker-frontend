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
  return $.ajax({
    url: config.apiUrl + '/habits/' + id,
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateStreak = function (id, streak, title) {
  return $.ajax({
    url: config.apiUrl + '/habits/' + id,
    data: { habit: {
      streak: JSON.stringify(streak),
      habit_title: title }
    },
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
  updateHabit,
  updateStreak
}
