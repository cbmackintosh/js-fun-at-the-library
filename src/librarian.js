class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patronName}!`;
    } else {
      return `Hello, ${patronName}!`;
    }
  }
  findBook(bookTitle) {
    var result = `Sorry, we do not have ${bookTitle}`
    if (this.library.shelves.fantasy.length > 0) {
      for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
        if (this.library.shelves.fantasy[i].title === bookTitle) {
          result = `Yes, we have ${bookTitle}`;
          this.library.shelves.fantasy.splice(i, 1);
          return result;
        }
      }
    }
    if (this.library.shelves.fiction.length > 0) {
      for (var i = 0; i < this.library.shelves.fiction.length; i++) {
        if (this.library.shelves.fiction[i].title === bookTitle) {
          result = `Yes, we have ${bookTitle}`;
          return result;
        }
      }
    }
    if (this.library.shelves.nonFiction.length > 0) {
      for (var i = 0; i < this.library.shelves.nonFiction.length; i++) {
        if (this.library.shelves.nonFiction[i].title === bookTitle) {
          result = `Yes, we have ${bookTitle}`
          return result;
        }
      }
    }
    return result;
  }
  calculateLateFee(daysLate) {
    var lateFee = Math.ceil(daysLate * 0.25);
    return lateFee;
  }
}

module.exports = Librarian;
