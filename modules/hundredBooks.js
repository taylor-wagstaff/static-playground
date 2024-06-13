import { booksData } from './bookData.js'

let CSS_COLORS = [
  'aliceblue',
  'antiquewhite',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgrey',
  'darkgreen',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'ghostwhite',
  'gold',
  'goldenrod',
  'gray',
  'grey',
  'green',
  'greenyellow',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgrey',
  'lightgreen',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'white',
  'whitesmoke',
  'yellow',
  'yellowgreen',
]
function renderBooks(books) {
  const container = document.getElementById('books-container')
  if (!container) {
    console.error('Container not found')
    return
  }

  books.forEach((book) => {
    const bookInfo = document.createElement('div')
    bookInfo.className = 'book-info'

    const titleInfo = document.createElement('div')
    titleInfo.className = 'title-info'
    titleInfo.style.writingMode = 'vertical-rl' // Initial writing-mode

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

    let isMouseOver = false // Flag to track mouseover state

    // Mouseover event handler
    bookInfo.addEventListener('mouseover', () => {
      if (!isMouseOver) {
        const randomColor =
          CSS_COLORS[Math.floor(Math.random() * CSS_COLORS.length)]
        bookInfo.style.backgroundColor = randomColor
        isMouseOver = true // Set flag to true after changing color
      }
    })

    // Mouseout event handler
    bookInfo.addEventListener('mouseout', () => {
      bookInfo.style.backgroundColor = 'white'
      isMouseOver = false // Reset flag to false on mouseout
    })

    // Click event handler
    bookInfo.addEventListener('click', () => {
      if (
        revealText.style.display === 'none' ||
        revealText.style.display === ''
      ) {
        revealText.style.display = 'block'
        titleInfo.style.writingMode = 'horizontal-tb'
        titleRight.innerHTML = `<p> &nbsp;&nbsp;&nbsp;-</p>`
        titleRight.style.color = 'white'
      } else {
        revealText.style.display = 'none'
        titleInfo.style.writingMode = 'vertical-rl'
        titleRight.innerHTML = `<p>${book.detailsButton.text}</p>`
        titleRight.style.color = 'blue'
      }
    })

    bookInfo.appendChild(titleInfo)
    bookInfo.appendChild(revealText)

    container.appendChild(bookInfo)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  renderBooks(booksData.books)
})
