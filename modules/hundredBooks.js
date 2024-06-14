import { booksData } from './bookData.js'

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

    const titleInfo = document.createElement('div')
    titleInfo.className = 'title-info'
    titleInfo.style.writingMode = 'vertical-rl'
    titleInfo.style.alignItems = 'center'
    titleInfo.style.marginTop = '1rem'

    const titleLeft = document.createElement('div')
    titleLeft.className = 'title-left'
    titleLeft.innerHTML = `<p>${book.id}</p><p class="book-title">${book.title}</p>`

    const titleRight = document.createElement('div')
    titleRight.className = 'title-right'
    titleRight.innerHTML = `<p>${book.detailsButton.text}</p>`
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

        // if clicked
        revealText.style.display = 'block'
        titleInfo.style.writingMode = 'horizontal-tb'

        titleRight.innerHTML = `<p></p>`
      } else {
        // back to book view after clicked
        revealText.style.display = 'none'
        titleInfo.style.writingMode = 'vertical-rl'
        titleRight.innerHTML = `<p>${book.detailsButton.text}</p>`
        titleRight.style.color = 'blue'
        titleInfo.style.alignItems = 'center'
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
})
