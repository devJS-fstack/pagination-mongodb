const createApp = () => {
    const book = [];

    return {
        getBook: (index) => book[index],
        setBook: (name, price) => {
            book.push({
                name,
                price
            })
        },
        deleteBook: (index) => {
            book.slice(index, 1);
        },
        showAll: () => {
            console.log(book)
        },
        length: () => {
            return book.length;
        }
    }
}

module.exports = createApp() 