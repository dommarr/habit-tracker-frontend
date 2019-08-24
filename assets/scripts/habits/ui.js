'use strict'

const showHabitsTemplate = require('../templates/habit-listing.handlebars')

const failureMessage = message => {
  $('.message').text(message)
  $('form').trigger('reset')
  setTimeout(function () {
    $('.message').text('')
  }, 2000)
}

const emptyMessage = message => {
  $('.empty').text(message)
  $('form').trigger('reset')
  setTimeout(function () {
    $('.empty').text('')
  }, 3000)
}

const getHabitsSuccess = (data) => {
  const showHabitsHtml = showHabitsTemplate({ habits: data.habits })
  emptyMessage('')
  $('.content').show()
  $('.content').html(showHabitsHtml)
  $('#auth').hide()
  if (data.habits.length < 1) {
    emptyMessage('⬁ Add a habit!')
  }
}

const createHabitSuccess = (data) => {
  // Close the modal after a submit event
  $('#add-habit-modal').modal('hide')
  // Show a success modal
  $('#add-habit-success-modal').modal('show')
  $('form').trigger('reset')
  $('.goal-view').hide()
  $('.habit-view').show()
  $('body').css({'background-color': '#343a40'})
}

const deleteHabitSuccess = (data) => {
  // Close the modal after a submit event
  $('#settings-modal').modal('hide')
  $('.modal-backdrop').remove()
  // Show a success modal
  $('#delete-habit-success-modal').modal('show')
  $('form').trigger('reset')
}

const updateHabitSuccess = (data) => {
  // const showHabitsHtml = showHabitsTemplate({ habits: data.habits })
  // $('.content').html(showHabitsHtml)
  $('#settings-modal').modal('hide')
  $('.modal-backdrop').remove()
  // Show a success modal
  $('#update-habit-success-modal').modal('show')
  $('form').trigger('reset')
}

const failure = () => {
  failureMessage('Application error.')
}

module.exports = {
  getHabitsSuccess,
  createHabitSuccess,
  deleteHabitSuccess,
  updateHabitSuccess,
  failure
}
