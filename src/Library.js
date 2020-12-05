function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library;
}

function addBook(libraryName, book) {
  libraryName.shelves[book.genre].push(book);
}

function checkoutBook(libraryName, bookTitle, shelf) {
  var result = `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`
  for (i = 0; i < libraryName.shelves[shelf].length; i++) {
    if (libraryName.shelves[shelf][i].title === bookTitle) {
      libraryName.shelves[shelf].splice(i, 1);
      result = `You have now checked out ${bookTitle} from the ${libraryName.name}`
      break;
    }
  }
  return result;
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
