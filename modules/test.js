let parent = document.querySelector('#parent')
let currentHour = null
let currentMinute = null
let currentSecond = null

function timeAccess() {
  let a = new Date()
  let hours = a.getHours()
  let minutes = a.getMinutes()
  let seconds = a.getSeconds()
  let time = `${hours}:${minutes}:${seconds}`
  document.getElementById('clockText').innerHTML = time

  if (hours !== currentHour) {
    currentHour = hours
    updateHourParagraphs(hours)
  }

  if (minutes !== currentMinute) {
    currentMinute = minutes
    updateMinuteParagraphs(minutes)
  }
  if (seconds !== currentSecond) {
    currentSecond = seconds
    updateSecondParagraphs(seconds)
  }
}

function updateHourParagraphs(hours) {
  // Clear existing hour paragraphs
  const existingHourParagraphs = parent.querySelectorAll('.hour-paragraph')
  existingHourParagraphs.forEach((p) => p.remove())

  // Add new hour paragraphs
  for (let i = 0; i < hours; i++) {
    let p = document.createElement('p')
    p.textContent = `${i + 1}`
    p.className = 'hour-paragraph'
    parent.appendChild(p)
  }
}

function updateMinuteParagraphs(minutes) {
  // Clear existing minute paragraphs
  const existingMinuteParagraphs = parent.querySelectorAll('.minute-paragraph')
  existingMinuteParagraphs.forEach((p) => p.remove())

  // Add new minute paragraphs
  for (let i = 0; i < minutes; i++) {
    let p = document.createElement('p')
    p.textContent = `${i + 1}`
    p.className = 'minute-paragraph'
    parent.appendChild(p)
  }
}

function updateSecondParagraphs(seconds) {
  // Clear existing second paragraphs
  const existingSecondParagraphs = parent.querySelectorAll('.second-paragraph')
  existingSecondParagraphs.forEach((p) => p.remove())

  // Add new second paragraphs
  for (let i = 0; i < seconds; i++) {
    let p = document.createElement('p')
    p.textContent = `${i + 1}`
    p.className = 'second-paragraph'
    parent.appendChild(p)
  }
}

setInterval(timeAccess, 1000)
