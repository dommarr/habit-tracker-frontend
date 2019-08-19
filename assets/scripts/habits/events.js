'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onGetHabits = (event) => {
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
    .then(() => onGetHabits(event))
    .catch(ui.failure)
}

let fid = ''

const onHabitSettings = event => {
  fid = $(event.target).data('id')
}

const onDeleteHabit = (event) => {
  const id = fid
  api.deleteHabit(id)
    .then(ui.deleteHabitSuccess)
    .then(() => onGetHabits(event))
    .catch(ui.failure)
}

const onUpdateHabit = (event) => {
  event.preventDefault()
  const id = fid
  const form = event.target
  const formData = getFormFields(form)
  api.updateHabit(id, formData)
    .then(ui.updateHabitSuccess)
    .then(() => onGetHabits(event))
    .catch(ui.failure)
}

const onUpdateStreak = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const title = $(event.target).data('title')
  let streak = $(event.target).data('streak')
  streak += 1
  api.updateStreak(id, streak, title)
    .then(() => onGetHabits(event))
    .catch(ui.failure)
}

const onShowHabitMenu = event => {
  $('#add-habit-modal').modal('show')
}

const onShowHabits = event => {
  $('.goal-view').hide()
  $('.habit-view').show()
  // goalEvents.onGetGoals()
  onGetHabits(event)
  $('body').css({'background-color': '#343a40'})
}

const addHandlers = () => {
  $('#add-habit').on('submit', onCreateHabit)
  $('body').on('click', '.habit-settings', onHabitSettings)
  $('body').on('click', '.deleteHabitButton', onDeleteHabit)
  $('body').on('submit', '.edit-habit', onUpdateHabit)
  $('body').on('click', '.streakButton', onUpdateStreak)
}

module.exports = {
  addHandlers,
  onGetHabits,
  onShowHabitMenu,
  onShowHabits
}
