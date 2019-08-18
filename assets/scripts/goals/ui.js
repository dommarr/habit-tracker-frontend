'use strict'

const showGoalsTemplate = require('../templates/goal-listing.handlebars')

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
  setTimeout(function () {
    $('#message').text('')
  }, 2000)
}

const getGoalsSuccess = (data) => {
  const showGoalsHtml = showGoalsTemplate({ goals: data.goals })
  $('.content').show()
  $('.content').html(showGoalsHtml)
  $('#auth').hide()
}

const createGoalSuccess = (data) => {
  // Close the modal after a submit event
  $('#add-goal-modal').modal('hide')
  // Show a success modal
  $('#add-goal-success-modal').modal('show')
  $('form').trigger('reset')
  $('.habit-view').hide()
  $('.goal-view').show()
}

const deleteGoalSuccess = (data) => {
  // Close the modal after a submit event
  $('#goal-settings-modal').modal('hide')
  $('.modal-backdrop').remove()
  // Show a success modal
  $('#delete-goal-success-modal').modal('show')
  $('form').trigger('reset')
}

const updateGoalSuccess = (data) => {
  // const showHabitsHtml = showHabitsTemplate({ habits: data.habits })
  // $('.content').html(showHabitsHtml)
  $('#goal-settings-modal').modal('hide')
  $('.modal-backdrop').remove()
  // Show a success modal
  $('#update-goal-success-modal').modal('show')
  $('form').trigger('reset')
}

const failure = () => {
  failureMessage('Application error.')
}

module.exports = {
  getGoalsSuccess,
  createGoalSuccess,
  deleteGoalSuccess,
  updateGoalSuccess,
  failure
}
