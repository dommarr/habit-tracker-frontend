'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetHabits = (event) => {
  event.preventDefault()
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
// don't need it preventDefault because it is not a form
// event.preventDefault()
  const id = $(event.target).data('id')
  api.updateHabit(id)
    .then(() => {
      onUpdateHabit(event)
    })
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getBooksButton').on('click', onGetHabits)
  $('#clearBooksButton').on('click', onDeleteHabit)
  $('body').on('click', '.deleteBookButton', onUpdateHabit)
}

module.exports = {
  addHandlers
}
