document.addEventListener('DOMContentLoaded', () => {
  let hoverText = ''

  // Function to copy text to clipboard
  function copyToClipboard(text) {
    const textarea = document.createElement('textarea')
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
  }

  // Add event listeners to all elements
  document.querySelectorAll('*').forEach((element) => {
    element.addEventListener('mouseover', (event) => {
      hoverText = event.target.innerText

      // add hover state
      event.target.style.color = 'blue'
      event.target.style.cursor = 'pointer'
    })

    element.addEventListener('mouseout', (event) => {
      hoverText = ''
      event.target.style.color = 'black'
      event.target.style.cursor = 'default'
    })
  })

  // Add a global event listener for copying text
  document.addEventListener('click', () => {
    if (hoverText) {
      copyToClipboard(hoverText)
      alert(`Copied: ${hoverText}`)
    }
  })
})
