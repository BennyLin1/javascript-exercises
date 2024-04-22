const getTheTitles = function(books) {

    /*
        const title = books.map((books) => {
            return book.title
        }

        which is same as below.
    */

    const title =  books.map((books) => books.title)
    return title
};

// Do not edit below this line
module.exports = getTheTitles;
