'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const habitEvents = require('./habits/events.js')
const goalEvents = require('./goals/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Add Handlers
  goalEvents.addHandlers()
  habitEvents.addHandlers()
  authEvents.authHandlers()
  // Hide on Page Load
  $('.navbar').hide()
  $('.habit-view').hide()
  $('.goal-view').hide()
  $('.content').hide()
  // Nav Menu Modals
  $('#password-menu').on('click', authEvents.onShowPassword)
  $('#habit-menu').on('click', habitEvents.onShowHabitMenu)
  $('#goal-menu').on('click', goalEvents.onShowGoalMenu)
  // Flip View
  $('#show-habits').on('click', habitEvents.onShowHabits)
  $('#show-goals').on('click', goalEvents.onShowGoals)
})
