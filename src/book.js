function createTitle(title) {
  return 'The ' + title;
}

// -----------------------------

function buildMainCharacter() {
  var ghoulCharacter = {
    name: 'Vassya',
    age: 16,
    pronouns: 'she/her'
  }
  return ghoulCharacter;
}

//----------------------

function saveReview(reviewString, array) {
  array.push(reviewString);
  for (i = array.length - 1; i >=0; i--) {
    if (array[array.length - 1] === array[i - 1]) {
      array.pop();
    }
  }
  return array;
}

//-----------------

function calculatePageCount(title) {
  return title.split('').length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
