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
  $('body').css({'background-color': '#007bff'})
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
