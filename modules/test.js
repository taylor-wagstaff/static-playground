const keys = document.querySelectorAll('.piano-keys')

// Creating a object of Audio with a default sound
const pianoSound = new Audio('./KeySounds/key01.mp3')

keys.forEach((key) => {
  key.addEventListener('click', (e) => {
    const clickedKey = e.target.dataset.list
    pianoSound.src = `./KeySounds/key${clickedKey}.mp3`
    pianoSound.play()
  })
})
