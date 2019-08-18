'use strict'

const countdown = (date) => {
  const endDate = new Date(date).getTime()
  const startDate = new Date().getTime()
  const timeRemaining = endDate - startDate
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
  if (timeRemaining < 0) {
    return 'Time\'s up!'
  } else {
    return `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`
  }
}

module.exports = countdown
