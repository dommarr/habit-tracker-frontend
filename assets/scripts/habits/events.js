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

let mid = ''

const onSettings = event => {
  mid = $(event.target).data('id')
  console.log($(event.target).data('id'))
  console.log(`mid is ${mid}`)
}

const onDeleteHabit = (event) => {
// don't need it preventDefault because it is not a form
// event.preventDefault()
  let id = mid
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
  let id = mid
  // const streak = $(event.target).data('streak')
  const form = event.target
  const formData = getFormFields(form)
  console.log(`formData is ${formData}`)
  console.log(`id is ${id}`)
  api.updateHabit(id, formData)
    .then(() => {
      onGetHabits(event)
    })
    .catch(ui.failure)
}

const onUpdateStreak = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  console.log(`id is ${id}`)
  const title = $(event.target).data('title')
  console.log(`title is ${title}`)
  let streak = $(event.target).data('streak')
  console.log(`Streak is ${streak}`)
  streak += 1
  console.log(`Updated streak is ${streak}`)
  // const updateObject = {id: id, habit_title: habitTitle, streak: streak}
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
  $('.edit-habit').on('submit', onUpdateHabit)
  $('body').on('click', '.streakButton', onUpdateStreak)
}

module.exports = {
  addHandlers,
  onGetHabits
}
