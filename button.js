import { STORY } from './modules/story.js'

window.addEventListener('resize', myFunction)
window.addEventListener('DOMContentLoaded', createButtons)

function createButtons() {
  const buttonContainer = document.getElementById('buttonContainer')

  for (let i = 0; i < 50; i++) {
    const button = document.createElement('button')
    button.className = 'buttonResize'

    button.innerText = `${STORY}`
    buttonContainer.appendChild(button)
  }

  // Select all buttons with the class 'buttonResize' and add the click event listener
  const buttons = document.querySelectorAll('.buttonResize')
  buttons.forEach((button) => {
    button.addEventListener('click', handleButtonClick)
  })
}

let x = 10

function myFunction() {
  x += 1
  let widthX = `${x}px`
  let heightX = `${x}px`
  let txt = `${x}px`

  const buttons = document.getElementsByClassName('buttonResize')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.width = widthX
    buttons[i].style.height = heightX
    buttons[i].style.fontSize = txt
  }
}

// Function to be executed when any button is clicked
function handleButtonClick(event) {
  // Access the clicked button via event.target
  const clickedButton = event.target

  // Change the size of the clicked button
  clickedButton.style.width = '100px'
  clickedButton.style.height = '50px'
  clickedButton.style.color = 'red'
  clickedButton.style.fontSize = '50px'
}

// Select all buttons with the class 'buttonResize' and add the click event listener
