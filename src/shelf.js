
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(book, shelf) {
  shelf.splice(shelf.indexOf(book.title) - 1, 1);
}

function listTitles(shelf) {
  var result = '';
  for(i = 0; i < shelf.length; i++) {
    if (i === shelf.length - 1) {
      result = result + shelf[i].title;
    } else {
      result = result + shelf[i].title + ', ';
    }
  }
  return result;
}

function searchShelf(shelf, book) {
  var result = null;
  for (i = 0; i < shelf.length; i ++) {
    if (shelf[i].title === book) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
