'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const onGetHabits = (event) => {
  // event.preventDefault()
  api.getHabits()
    .then(ui.getHabitsSuccess)
    .catch(ui.failure)
}

const onCreateHabit = (event) => {
  event.preventDefault()
  api.createHabit()
    .then(ui.createHabitSuccess)
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
  $(document).ready(onGetHabits)
  $('#addHabitButton').on('click', onCreateHabit)
  $('body').on('click', '.deleteHabitButton', onDeleteHabit)
  $('body').on('click', '.updateHabitButton', onUpdateHabit)
}

module.exports = {
  addHandlers
}
