import { booksData } from './bookData.js'

function getRandomMinHeight(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function renderBooks(books) {
  const container = document.getElementById('books-container')
  const header = document.getElementById('header-number')

  if (!container || !header) {
    console.error('Container or Header not found')
    return
  }

  books.forEach((book, index) => {
    const bookInfo = document.createElement('div')
    bookInfo.className = 'book-info'

    // Generate a unique random min-height for each book-info
    const randomMinHeight = getRandomMinHeight(70, 150)
    bookInfo.style.minWidth = `${randomMinHeight}px`

    const titleInfo = document.createElement('div')
    titleInfo.className = 'title-info'
    titleInfo.style.writingMode = 'vertical-rl'
    titleInfo.style.alignItems = 'center'
    titleInfo.style.marginTop = '1rem'

    const titleLeft = document.createElement('div')
    titleLeft.className = 'title-left'
    titleLeft.innerHTML = `<p>${book.id}</p><p class="book-title">${book.title}</p><p style="color: blue">+</p>`

    const titleRight = document.createElement('div')
    titleRight.className = 'title-right'
    // titleRight.innerHTML = `<p>${book.detailsButton.text}</p>`
    titleRight.style.color = 'blue'
    titleRight.style.fontSize = '16px'
    titleRight.style.marginTop = '16px'

    titleInfo.appendChild(titleLeft)
    titleInfo.appendChild(titleRight)

    const revealText = document.createElement('div')
    revealText.className = 'reveal-text'
    revealText.innerHTML = `
      <div class="book-content-container">
        <div class="book-image">
          <img src="${book.image}" alt="" />
        </div>
        <div class="book-synopsis">
          ${book.synopsis.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </div>
      </div>
    `

    // Click event handler
    bookInfo.addEventListener('click', () => {
      if (
        revealText.style.display === 'none' ||
        revealText.style.display === ''
      ) {
        titleInfo.style.alignItems = 'normal'
        titleInfo.style.writingMode = 'horizontal-tb'

        // if clicked now book open...
        revealText.style.display = 'block'
        titleLeft.innerHTML = `<p>${book.id}</p><p class="book-title">${book.title}</p><p>-</p>`
        bookInfo.style.minWidth = `500px`

        bookInfo.style.display = 'block' // Turn off display: flex;
        bookInfo.style.justifyContent = 'initial' // Turn off justify-content: center;

        titleRight.innerHTML = `<p></p>`
      } else {
        // back to book view after clicked
        revealText.style.display = 'none'
        titleInfo.style.writingMode = 'vertical-rl'
        // titleRight.innerHTML = `<p>seen</p>`
        // titleRight.style.color = 'blue'
        titleInfo.style.alignItems = 'center'

        // return back to normal
        bookInfo.style.minWidth = `${randomMinHeight}px`
        bookInfo.style.display = 'flex' // Turn off display: flex;
        bookInfo.style.justifyContent = 'center' // Turn off justify-content: center;

        titleLeft.innerHTML = `<p>${book.id}</p><p class="book-title">${book.title}</p><p style="color: white">+</p>`
      }
    })

    // Add hover event listeners to each bookInfo div
    bookInfo.addEventListener('mouseover', () => {
      header.innerText = `${(index + 1).toString().padStart(3, '0')}` // Display the index number (1-based) padded to three digits
    })

    bookInfo.addEventListener('mouseout', () => {
      header.innerText = '100' // Reset to original content or whatever you want
    })

    bookInfo.appendChild(titleInfo)
    bookInfo.appendChild(revealText)

    container.appendChild(bookInfo)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks(booksData.books)
  const informationButton = document.getElementById('information-button')
  const informationText = document.getElementById('information-text')
  const additionalText =
    ' to help anyone who is learning art. Most of these books I wish I read earlier. Some I only encountered when I was ready for them. Others I didnt understand at first and reread them later. '

  informationButton.addEventListener('click', () => {
    if (informationText) {
      if (informationText.innerText.includes(additionalText)) {
        informationText.innerText = informationText.innerText.replace(
          additionalText,
          ''
        )
      } else {
        informationText.innerText += additionalText
      }
    }
  })
})
