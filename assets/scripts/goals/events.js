'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetGoals = (event) => {
  api.getGoals()
    .then(ui.getGoalsSuccess)
    .catch(ui.failure)
}

const onCreateGoal = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createGoal(formData)
    .then(ui.createGoalSuccess)
    .then(() => onGetGoals(event))
    .catch(ui.failure)
}

let fid = ''

const onGoalSettings = event => {
  fid = $(event.target).data('id')
}

const onDeleteGoal = (event) => {
  const id = fid
  api.deleteGoal(id)
    .then(ui.deleteGoalSuccess)
    .then(() => onGetGoals(event))
    .catch(ui.failure)
}

const onUpdateGoal = (event) => {
  event.preventDefault()
  const id = fid
  const form = event.target
  const formData = getFormFields(form)
  api.updateGoal(id, formData)
    .then(ui.updateGoalSuccess)
    .then(() => onGetGoals(event))
    .catch(ui.failure)
}

const onGoalComplete = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // const title = $(event.target).data('description')
  let complete = $(event.target).data('complete')
  complete = !complete
  api.updateGoalComplete(id, complete)
    .then(() => onGetGoals(event))
    .catch(ui.failure)
}

const onShowGoalMenu = event => {
  $('#add-goal-modal').modal('show')
}

const onShowGoals = event => {
  $('.habit-view').hide()
  $('.goal-view').show()
  onGetGoals(event)
  $('body').css({'background-color': '#007bff'})
}

const addHandlers = () => {
  $('#add-goal').on('submit', onCreateGoal)
  $('body').on('click', '.goal-settings', onGoalSettings)
  $('body').on('click', '.deleteGoalButton', onDeleteGoal)
  $('body').on('submit', '.edit-goal', onUpdateGoal)
  $('body').on('click', '.goal-complete', onGoalComplete)
}

module.exports = {
  addHandlers,
  onGetGoals,
  onShowGoalMenu,
  onShowGoals
}
