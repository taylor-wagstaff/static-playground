document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('.grid-container')

  // Coveredareas number
  let coveredCount = 0

  // sound
  let foundSound = new Audio('/public/found.mp3')
  let successSound = new Audio('/public/success.mp3')

  // Restarts the sound
  function playFoundSound() {
    foundSound.currentTime = 0
    foundSound.play()
  }

  // Restarts the success sound
  function playSuccessSound() {
    foundSound.currentTime = 0
    successSound.currentTime = 0
    successSound.play()
  }

  // Counter
  let count = 0
  const counter = document.getElementById('count')
  counter.innerHTML = `${count}`

  const cursorStyles = [
    'default',
    'help',
    'context-menu',
    'pointer',
    'progress',
    'wait',
    'cell',
    'crosshair',
    'text',
    'vertical-text',
    'alias',
    'copy',
    'move',
    'no-drop',
    'not-allowed',
    'grab',
    'grabbing',
    'all-scroll',
    'col-resize',
    'row-resize',
    'n-resize',
    'e-resize',
    's-resize',
    'w-resize',
    'ne-resize',
    'nw-resize',
    'se-resize',
    'sw-resize',
    'ew-resize',
    'ns-resize',
    'nesw-resize',
    'nwse-resize',
    'zoom-in',
    'zoom-out',
  ]

  // Choose a random cursor style as the target cursor
  const findCursor =
    cursorStyles[Math.floor(Math.random() * cursorStyles.length)]

  // Remove findCursor from cursorStyles
  const cursorStylesWithoutFindCursor = cursorStyles.filter(
    (cursor) => cursor !== findCursor
  )

  for (let i = 0; i < 10000; i++) {
    const cell = document.createElement('div')

    // Choose a random cursor style excluding findCursor
    const randomCursor =
      cursorStylesWithoutFindCursor[
        Math.floor(Math.random() * cursorStylesWithoutFindCursor.length)
      ]

    cell.style.cursor = randomCursor
    cell.dataset.counted = 'false' // data attribute
    cell.dataset.covered = 'false' // new attribute to track hover
    gridContainer.appendChild(cell)
  }

  // Function to generate unique random indices
  function getUniqueRandomIndices(total, count) {
    const indices = new Set()
    while (indices.size < count) {
      indices.add(Math.floor(Math.random() * total))
    }
    return Array.from(indices)
  }

  const randomIndices = getUniqueRandomIndices(10000, 10)
  randomIndices.forEach((index) => {
    gridContainer.children[index].style.cursor = findCursor
    // gridContainer.children[index].style.backgroundColor = 'blue'
  })

  const targetInfo = document.getElementById('targetCursor')
  targetInfo.innerHTML = `Find 10 <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/cursor' target='_blank'>&nbsp;'${findCursor}'&nbsp;</a> Cursors:`

  const targetSVG = document.getElementById('cursorSVG')
  targetSVG.src = `/public/${findCursor}.svg`

  for (let i = 0; i < 10000; i++) {
    gridContainer.children[i].addEventListener('mouseover', (event) => {
      const cell = event.target

      if (cell.dataset.covered === 'false') {
        cell.style.backgroundColor = 'gainsboro'
        coveredCount++
        cell.dataset.covered = 'true' // Mark the cell as covered
      }

      // create the svg that's hovered over
      const currentSVG = document.getElementById('currentSVG')
      currentSVG.src = `/public/${cell.style.cursor}.svg`

      const winCursor = document.getElementById('winCursor')

      const showCoveredCount = document.getElementById('coveredCount')
      showCoveredCount.innerHTML = `${coveredCount}`
      console.log(coveredCount)

      // Check if the cell's cursor is the target and if it hasn't been counted yet
      if (
        cell.style.cursor === findCursor &&
        cell.dataset.counted === 'false'
      ) {
        count++
        cell.dataset.counted = 'true' // Mark the cell as counted
        counter.innerHTML = `${count}`
        // Change color to indicate found in map
        cell.style.backgroundColor = 'darkorange'
        playFoundSound()

        if (count === 10) {
          winCursor.innerHTML = `All '${findCursor}' Cursors found!`
          playSuccessSound()
        }
      }
    })
  }

  const refreshButton = document.getElementById('refreshButton')
  refreshButton.addEventListener('click', () => {
    location.reload()
    count = 0
  })
})
