'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetHabits = (event) => {
  // event.preventDefault()
  api.getHabits()
    .then(ui.getHabitsSuccess)
    .catch(ui.failure)
}

const onCreateHabit = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createHabit(formData)
    .then(ui.createHabitSuccess)
    .catch(ui.failure)
  api.getHabits()
    .then(ui.getHabitsSuccess)
    .catch(ui.failure)
}

const onDeleteHabit = (event) => {
// don't need it preventDefault because it is not a form
// event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteHabit(id)
    .then(() => {
      onGetHabits(event)
    })
    .catch(ui.failure)
}

const onUpdateHabit = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const form = event.target
  const formData = getFormFields(form)
  api.updateHabit(id, formData)
  // .then(ui.updateHabitSuccess)
  // .catch(ui.failure)
  api.getHabits()
    .then(ui.getHabitsSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  // $('#sign-in').on('submit', onGetHabits)
  $('#add-habit').on('submit', onCreateHabit)
  $('body').on('click', '.deleteHabitButton', onDeleteHabit)
  $('body').on('submit', '.updateHabitButton', onUpdateHabit)
}

module.exports = {
  addHandlers,
  onGetHabits
}
