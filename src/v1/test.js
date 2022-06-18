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

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3, 6];
// function different(arr1 = [], arr2 = []) {
//     return arr1.reduce((pre, curr) => (!arr2.includes[curr] && pre.push(curr), pre), [])
// }

// const arrDif = different(arr1, arr2);
// console.log(arrDif);

// === Way 1 ===
const arrToObj = arr => arr.reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {})

// === Way 2 ===

const arrToObj2 = arr => arr.reduce((acc, curr) => (acc[curr[0]] = curr[1], acc), {})


// Expected results:
var arrTest = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

var obj = {
    name: 'Sơn Đặng',
    sex: 'Male',
    age: 18
}

var { name: parentName, ...sex } = obj;
console.log(parentName)
console.log(sex);
// arrToObj(arrTest);
console.log(arrToObj(arrTest));


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