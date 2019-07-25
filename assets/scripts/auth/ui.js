'use strict'

const store = require('../store')
const api = require('./api')
const habitEvents = require('../habits/events.js')

const successMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('form').trigger('reset')
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
  $('#change-password').hide()
  $('#add-habit').hide()
  store.user = responseData.user
  habitEvents.onGetHabits()
}

const signInFailure = () => {
  failureMessage('Sign in failed.')
}

const changePasswordSuccess = responseData => {
  successMessage('Password changed.')
  $('#change-password').hide()
  $('#password').prop('disabled', false)
}

const changePasswordFailure = () => {
  failureMessage('Change password failed.')
}

const SignOutSuccess = () => {
  successMessage('Sign out succesful.')
  $('#auth').show()
  $('.content').hide()
  $('.navbar').hide()
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
