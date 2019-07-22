'use strict'

const showHabitsTemplate = require('../templates/habit-listing.handlebars')

const getHabitsSuccess = (data) => {
  console.log(data)
  const showHabitsHtml = showHabitsTemplate({ habits: data.habits })
  $('.content').html(showHabitsHtml)
}

const deleteHabitSuccess = (data) => {
  console.log(data)
  const showHabitsHtml = showHabitsTemplate({ habits: data.habits })
  $('.content').html(showHabitsHtml)
}

const updateHabitSuccess = (data) => {
  console.log(data)
  const showHabitsHtml = showHabitsTemplate({ habits: data.habits })
  $('.content').html(showHabitsHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getHabitsSuccess,
  deleteHabitSuccess,
  updateHabitSuccess,
  failure
}
