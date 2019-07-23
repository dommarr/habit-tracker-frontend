'use strict'

const store = require('../store')
const api = require('./api')
const habitEvents = require('../habits/events.js')

// const hideMessaging = function () {
//   setTimeout(function () {
//     $('#message').text('')
//     $('#message').hide()
//   }, 8000)
// }

const successMessage = message => {
  $('#message').text(message)
  // $('#message').removeClass('failure')
  // $('#message').addClass('success')
  // $('#message').show()
  // hideMessaging()
  // Clear out forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  // $('#message').removeClass('success')
  // $('#message').addClass('failure')
  // $('#message').show()
  // hideMessaging()
  // Clear out forms
  $('form').trigger('reset')
}

const signUpSuccess = responseData => {
  successMessage(`Thanks for signing up! You are now logged in.`)
  // $('#login').hide()
  // $('#nav').show()
  api.signIn(store.save)
}

const signUpFailure = () => {
  failureMessage('Sign up failed.')
}

const signInSuccess = responseData => {
  successMessage('Sign in successful.')
  // Keeping track of the user, so we can have the token for the API.
  // We use 'store' so we can access the token in any file.
  store.user = responseData.user
  habitEvents.onGetHabits()
  // $('#login').hide()
  // $('#nav').show()
}

const signInFailure = () => {
  failureMessage('Sign in failed.')
}

const changePasswordSuccess = responseData => {
  successMessage('Password changed.')
  // $('#change-password').hide()
  // $('#password').prop('disabled', false)
}

const changePasswordFailure = () => {
  failureMessage('Change password failed.')
}

const SignOutSuccess = () => {
  successMessage('Sign out succesful.')
  // $('#nav').hide()
  // $('#change-password').hide()
  // $('#game').hide()
  // $('#login').show()
}

const SignOutFailure = () => {
  failureMessage('Sign out failed.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  SignOutSuccess,
  SignOutFailure
}
