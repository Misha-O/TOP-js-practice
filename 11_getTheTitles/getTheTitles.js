const getTheTitles = function (books) {
    const titles = [];
    books.forEach(book => {
        titles.push(book.title);
    });
    return titles;
    // return array.map(book => book.title)
};

// Do not edit below this line
module.exports = getTheTitles;
