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
    .catch(ui.failure)
  api.getHabits()
    .then(ui.getHabitsSuccess)
    .catch(ui.failure)
}

let fid = ''

const onSettings = event => {
  fid = $(event.target).data('id')
}

const onDeleteHabit = (event) => {
  const id = fid
  api.deleteHabit(id)
    .then(() => {
      onGetHabits(event)
    },
    $('#message').text('Habit deleted.')
    )
    .catch(ui.failure)
}

const onUpdateHabit = (event) => {
  event.preventDefault()
  const id = fid
  const form = event.target
  const formData = getFormFields(form)
  api.updateHabit(id, formData)
    .then(() => {
      onGetHabits(event)
      $('#settings-modal').modal('hide')
    },
    $('#message').text('Habit updated.')
    )
    .catch(ui.failure)
}

const onUpdateStreak = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const title = $(event.target).data('title')
  let streak = $(event.target).data('streak')
  streak += 1
  api.updateStreak(id, streak, title)
    .then(() => {
      onGetHabits(event)
    })
    .catch(ui.failure)
}

// Change passwords
const onShowPassword = event => {
  $('#password').prop('disabled', true)
  $('#change-password').show()
}

const onShowHabit = event => {
  $('#habit-menu').prop('disabled', true)
  $('#add-habit').show()
}

const addHandlers = () => {
  $('#password').on('click', onShowPassword)
  $('#habit-menu').on('click', onShowHabit)
  $('#add-habit').on('submit', onCreateHabit)
  $('body').on('click', '.settings', onSettings)
  $('body').on('click', '.deleteHabitButton', onDeleteHabit)
  $('body').on('submit', '.edit-habit', onUpdateHabit)
  $('body').on('click', '.streakButton', onUpdateStreak)
}

module.exports = {
  addHandlers,
  onGetHabits
}
