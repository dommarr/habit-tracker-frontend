'use strict'

const config = require('../config')
const store = require('../store')

const getGoals = function () {
  return $.ajax({
    url: config.apiUrl + '/goals',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGoal = formData => {
  return $.ajax({
    url: config.apiUrl + '/goals',
    data: formData,
    // { habit: { habit_title: JSON.stringify(formData) } },
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteGoal = function (id) {
  return $.ajax({
    url: config.apiUrl + '/goals/' + id,
    // url: `${config.apiUrl}/books/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGoal = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/goals/' + id,
    data: formData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const updateStreak = function (id, streak, title) {
//   return $.ajax({
//     url: config.apiUrl + '/habits/' + id,
//     data: { habit: {
//       streak: JSON.stringify(streak),
//       habit_title: title }
//     },
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getGoals,
  createGoal,
  deleteGoal,
  updateGoal
  // ,
  // updateStreak
}
