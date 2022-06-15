function limit(c) {
    return this.filter((x, i) => {
        if (i <= (c - 1)) { return true }
    })
}

Array.prototype.limit = limit;

function skip(c) {
    return this.filter((x, i) => {
        if (i > (c - 1)) { return true }
    })
}

Array.prototype.skip = skip;


const arr = [
    { id: 1, name: "king" },
    { id: 2, name: "master" },
    { id: 3, name: "lisa" },
    { id: 4, name: "ion" },
    { id: 5, name: "jim" },
    { id: 6, name: "gowtham" },
    { id: 1, name: "jam" },
    { id: 1, name: "lol" },
    { id: 2, name: "kwick" },
    { id: 3, name: "april" },
    { id: 7, name: "sss" },
    { id: 8, name: "brace" },
    { id: 8, name: "peiter" },
    { id: 5, name: "hey" },
    { id: 6, name: "mkl" },
    { id: 9, name: "melast" },
    { id: 9, name: "imlast" },
    { id: 10, name: "glow" }
]

// skip 

// console.log(arr.skip(2))

//limit

// console.log(arr.limit(2))

// skip + limit
// console.log(arr.skip(2).limit(5))


function salary(role) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (role == 1) {
                return resolve({
                    id: "1",
                    name: "Tinh Nguyen",
                    role: "1"
                });
            }

            reject("You need login")
        }, 1000)
    })
}

async function fixbug() {
    try {
        var test = await salary(1);
        console.log(test)
    } catch (err) {
        console.log(`This is error: ${err}`)
    }
}

var logger = (parameter) => {
    return `This is parameter ${parameter}`
}

var excute = (callback, result) => {
    return callback(result);
}

// console.log(excute(logger, "Data Params Amazon Web Services"))




const app = require('./utils/createApp')


app.setBook('Tôi và em', 4000);
app.setBook('Conan thám tử lừng danh', 5000);

// app.showAll();

// test('check item book equal with index 0', () => {
//     expect(app.getBook(0)).toEqual({
//         name: 'Conan thám tử lừng danh',
//         price: 5000,
//     })
// })

// test('check item book equal with index 1', () => {
//     expect(app.getBook(1)).toEqual({
//         name: 'Conan thám tử lừng danh',
//         price: 5000,
//     })
// })

// test('check length book with length = 2', () => {
//     expect(app.length()).toBe(2);
// })

// test('check length book with length = 1', () => {
//     expect(app.length()).toBe(1);
// })

class Book {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getNameBook() {
        return this.name;
    }
}

const book_romatic = new Book('tôi và em', 4000);
const book_emty = new Book();
console.log(book_romatic)
console.log(book_emty);
