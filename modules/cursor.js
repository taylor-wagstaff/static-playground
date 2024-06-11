document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.querySelector('.grid-container')

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
    gridContainer.appendChild(cell)
  }

  const randomIndex = Math.floor(Math.random() * 10000)
  const randomCell = gridContainer.children[randomIndex]
  randomCell.style.cursor = findCursor
  randomCell.style.backgroundColor = 'blue'

  const targetInfo = document.getElementById('targetCursor')
  targetInfo.innerHTML = `Find the Cursor: '${findCursor}'`

  for (let i = 0; i < 10000; i++) {
    gridContainer.children[i].addEventListener('mouseover', (event) => {
      event.target.style.backgroundColor = 'green'
      if (findCursor === event.target.style.cursor) {
        alert(`Well done you found the ${findCursor} Cursor!`)
        window.location.reload()
      }
    })
  }
})
