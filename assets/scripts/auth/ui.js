'use strict'

const store = require('../store')
const api = require('./api')
const habitEvents = require('../habits/events.js')

const successMessage = message => {
  $('.message').text(message)
  $('form').trigger('reset')
  setTimeout(function () {
    $('.message').text('')
  }, 2000)
}

const failureMessage = message => {
  $('.message').text(message)
  $('form').trigger('reset')
  setTimeout(function () {
    $('.message').text('')
  }, 2000)
}

const signUpSuccess = responseData => {
  // successMessage(`Thanks for signing up! You are now logged in.`)
  api.signIn(store.save)
    .then(signInSuccess)
    .catch(signInFailure)
}

const signUpFailure = () => {
  failureMessage('Sign up failed.')
}

const signInSuccess = responseData => {
  successMessage('Sign in successful.')
  $('.navbar').show()
  // $('#change-password').hide()
  // $('#add-habit').hide()
  $('.goal-view').hide()
  $('.habit-view').show()
  store.user = responseData.user
  $('.username').text(responseData.user.email)
  $('body').css({'background-color': '#343a40'})
  habitEvents.onGetHabits()
}

const signInFailure = () => {
  failureMessage('Sign in failed.')
}

const onShowPassword = event => {
  $('#change-password-modal').modal('show')
}

const changePasswordSuccess = responseData => {
  // Close the modal after a submit event
  $('#change-password-modal').modal('hide')
  // Show a success modal
  $('#change-password-success-modal').modal('show')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  // failureMessage('Change password failed.')
  $('form').trigger('reset')
  $('.password-error').text('Change password failed.')
  setTimeout(function () {
    $('.password-error').text('')
  }, 2000)
}

const SignOutSuccess = () => {
  successMessage('Sign out succesful.')
  $('#auth').show()
  $('.content').hide()
  $('.navbar').hide()
  $('.goal-view').hide()
  $('.habit-view').hide()
  $('body').css({'background-color': '#f8f9fa'})
}

const SignOutFailure = () => {
  failureMessage('Sign out failed.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onShowPassword,
  changePasswordSuccess,
  changePasswordFailure,
  SignOutSuccess,
  SignOutFailure
}
