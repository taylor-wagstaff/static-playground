// You can add multiple functions to an event listener like this
window.addEventListener('resize', () => {
  myLines()
  dimensions()
})

function myLines() {
  const svgContainer = document.getElementById('svgContainer')
  const dynamicLines = document.querySelectorAll('.dynamicLine')
  const svgRect = svgContainer.getBoundingClientRect()

  dynamicLines.forEach((line) => {
    // Get the current positions in percentage values
    const x1Perc = line.getAttribute('x1')
    const y1Perc = line.getAttribute('y1')
    const x2Perc = line.getAttribute('x2')
    const y2Perc = line.getAttribute('y2')

    // Convert percentage to pixel values
    const x1 = (parseFloat(x1Perc) / 100) * svgRect.width
    const y1 = (parseFloat(y1Perc) / 100) * svgRect.height
    const x2 = (parseFloat(x2Perc) / 100) * svgRect.width
    const y2 = (parseFloat(y2Perc) / 100) * svgRect.height

    // Create a new line element with the current coordinates
    const newLine = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    )
    newLine.setAttribute('x1', x1)
    newLine.setAttribute('y1', y1)
    newLine.setAttribute('x2', x2)
    newLine.setAttribute('y2', y2)
    newLine.setAttribute('stroke', 'blue')
    newLine.setAttribute('stroke-width', '1')

    // Append the new line to the SVG container
    svgContainer.appendChild(newLine)
  })

  // Update the existing lines to adapt to the new window size
  dynamicLines[0].setAttribute('x1', '0%')
  dynamicLines[0].setAttribute('y1', '100%')
  dynamicLines[0].setAttribute('x2', '100%')
  dynamicLines[0].setAttribute('y2', '0%')

  dynamicLines[1].setAttribute('x1', '0%')
  dynamicLines[1].setAttribute('y1', '0%')
  dynamicLines[1].setAttribute('x2', '100%')
  dynamicLines[1].setAttribute('y2', '100%')
}

const height = document.querySelector('#height span')
const width = document.querySelector('#width span')

function dimensions() {
  const heightElement = document.getElementById('height')
  const widthElement = document.getElementById('width')
  heightElement.innerHTML = `${window.innerHeight} x`
  widthElement.innerHTML = `${window.innerWidth}`
}

// Insert values on load of page
window.onload = function () {
  dimensions()
}
