function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(charName, charAge, charPronouns) {
  var character = {
  name: charName,
  age: charAge,
  pronouns: charPronouns
}
return character;
};


//This is the first way I solved this group of tests:

// var reviewArray = [];
//
// function saveReview(inputReview, reviewArray) {
//     if (reviewArray.indexOf(inputReview) === -1) {
//       reviewArray.push(inputReview);
//       return reviewArray;
//     }
//   };


//I tried it again though because my mentor mentioned
//that practicing 'for' loops is a focus of Mod 1, so I
//wanted to try it this way, too. I think the above is cleaner,
//but below feels more appropriate to my experience level.
var reviewArray = [];

function saveReview(inputArray, reviewArray) {
  if (reviewArray.length == 0) {
    reviewArray.push(inputArray)
  } else {
  for (var i = 0; i < reviewArray.length; i++) {
    if (reviewArray.includes(inputArray)) {
      return reviewArray;
    } else {
      return reviewArray.push(inputArray);
    }
  }
}
};

function calculatePageCount(bookTitle) {
    var pageCount = null;
    for (var i = 0; i < bookTitle.length; i++) {
      pageCount = bookTitle.length * 20;
    }
    return pageCount;
};

function writeBook(bookTitle, bookCharacter, bookGenre) {
  var bookObject = {
    title: createTitle(bookTitle).slice(4),
    mainCharacter: buildMainCharacter(bookCharacter).name,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
};
return bookObject;
};


function editBook(bookTitle){
  bookTitle.pageCount = bookTitle.pageCount * .75;
  return bookTitle.pageCount;
};





module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
