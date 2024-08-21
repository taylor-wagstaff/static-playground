document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('container')[0] // Get the first element with the class 'container'

  if (container) {
    for (let i = 12; i >= 0; i--) {
      let p = document.createElement('p')

      p.innerHTML = `Level ${i} `.repeat(1310)

      p.id = `level-${i}`
  
      
      
    

      container.appendChild(p)
    }
  } else {
    console.error('No container')
  }
})
