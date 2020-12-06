
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
var shelf = [];

function shelfBook(bookObject, shelf) {
    if ((shelf.length < 3) && (bookObject.genre == "sciFi")) {
      shelf.unshift(bookObject);
    };
 return shelf;
};


function unshelfBook(bookName, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title == bookName) {
      shelf.splice(i, 1);
     }
   };
};

function listTitles(shelf) {
  var listOfTitles = [];
  var stringTitles = "";
  listOfTitles.push(shelf[0].title);
  shelf[1].title = " " + shelf[1].title;
  shelf[2].title = " " + shelf[2].title;
  listOfTitles.push(shelf[1].title, shelf[2].title);
  return stringTitles += listOfTitles;
};

//I tried to refactor this^ and came up with:

// function listTitles(fantasyShelf) {
//   var listOfTitles = [];
//   var stringTitles = "";
//     for (var i = 0; i < fantasyShelf.length; i++){
//       listOfTitles.push(fantasyShelf[i].title)
//     }
//   stringTitles = listOfTitles;
//   console.log(listOfTitles);
// };


//But this doesn't work and I'm not sure why.


function searchShelf(shelf, bookTitle) {
  var newArray = [];
  for (var i = 0; i < shelf.length; i++) {
    newArray += shelf[i].title;
    }
  if (newArray.includes(bookTitle)) {
        return true;
      } else {
        return false;
      }
  };

// Steve and I discovered that a better way to write this
//code would be to replace line 55 with:
// newArray.push(shelf[i].title)
// because this will store individual titles separately,
// whereas the += variation in line 55 stores the titles
// in one long, uninterrupted line of letters. Both pass,
// but we are thinking that storing the titles as separate
// elements not only reads cleaner, but could be more useful
// if we needed to pull from individual titles from within that array later.
// I left my code the way I originally solved it though to show
// you the way I am naturally thinking through problems!
