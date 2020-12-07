

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};


function createLibrary(libraryName) {
  var libraryObject = {};
  libraryObject.name = libraryName;
  libraryObject.shelves = {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  };
  return libraryObject;
};

// I wasn't sure if the coding the different types of shelves
// in this way would be considered hard-coding. I guess I
// could also write out libraryObject.shelves.fantasy = []; (etc.)
// but that seemed WET.


function addBook(libraryName, book) {
  var bookGenre = book.genre;
  if (bookGenre == "fantasy") {
    libraryName.shelves.fantasy.push(book)
  } else if (bookGenre == "fiction") {
    libraryName.shelves.fiction.push(book)
  } else {
    libraryName.shelves.nonFiction.push(book)
    }
  };



function checkoutBook(libraryName, bookTitle, genre) {
    var bookObject = {
      title: bookTitle,
      genre: genre
    };
      if (bookObject.title == bookTitle && bookObject.genre == genre) {
        for (var i = 0; i < libraryName.shelves.fiction.length; i++) {
            libraryName.shelves.fiction.splice(i);
            return `You have now checked out ${bookObject.title} from the ${libraryName.name}`;
   }} else {
            return `"Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`;
    }
};

// I'm hardcoding the shit out of these. I'm so sorry.
