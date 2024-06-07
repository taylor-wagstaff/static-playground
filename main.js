import { WORDS } from './modules/fiveletterwords.js'

const linkLength = 1000

document.addEventListener('DOMContentLoaded', function () {
  // Generate an array of random words
  const randomWords = []
  for (let i = 0; i < linkLength; i++) {
    let idx = Math.floor(Math.random() * WORDS.length)
    randomWords.push(WORDS[idx])
  }

  // Get the container where the anchors will be appended
  const anchorContainer = document.getElementById('anchorContainer')

  // Loop over the number of anchors to create and add them to the DOM
  for (let i = 0; i < linkLength; i++) {
    let anchor = document.createElement('a')

    anchor.innerHTML = `www.${
      randomWords[i].toLowerCase() + randomWords[i + i].toLowerCase()
    }.com`
    anchor.id = `myAnchor${i + 1}`
    anchor.addEventListener('click', handleLinkClick) // Add event listener for click
    anchorContainer.appendChild(anchor)
  }
})

// Function to handle the click event on the links
function handleLinkClick(event) {
  const paragraphContainer = document.getElementById('paragraphContainer')
  let paragraph = document.createElement('p')
  paragraph.innerHTML = event.target.innerHTML
  paragraph.id = 'favLinks'
  paragraphContainer.appendChild(paragraph)
}

// Function to update the links
function updateLinks() {
  // Generate an array of random words
  const randomWords = []
  for (let i = 0; i < linkLength; i++) {
    let idx = Math.floor(Math.random() * WORDS.length)
    randomWords.push(WORDS[idx])
  }

  // Loop over each anchor element and update their href and innerHTML
  for (let i = 1; i <= linkLength; i++) {
    let anchor = document.getElementById(`myAnchor${i}`)
    anchor.innerHTML = `www.${
      randomWords[i].toLowerCase() + randomWords[i + i].toLowerCase()
    }.com`
  }
}

function clearLinks() {
  const paragraphContainer = document.getElementById('paragraphContainer')
  const paragraphs = paragraphContainer.getElementsByTagName('p')

  // Loop through all <p> tags and remove them from the DOM
  while (paragraphs.length > 0) {
    paragraphs[0].remove() // Remove the first <p> tag in each iteration
  }
}

// Add event listener to the button to update the links on click
let button = document.getElementById('updateLinkButton')
let clearButton = document.getElementById('clearButton')
button.addEventListener('click', updateLinks)
clearButton.addEventListener('click', clearLinks)
