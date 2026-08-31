// functions -> DRY
// how to declare a function
// function's type
// 1. declaration function
// sayHi('ka3bora');//
// function sayHi(name) {
//     return console.log(name);// return undefined
//     // return execution of console.log() -> undefined
// }


// ----------------- execution stack --------------------
// ----------------- sayHi('ka3bora') -----------------
// ----------------- log(hi ka3bora) -----------------
// 2. function expression
// control flow of code
//
// let sayHi = function (name) {
//     return console.log(name);// return undefined
//     // return execution of console.log() -> undefined
// }
// sayHi('ka3bora');

// 3. arrow function
// 1. shorter syntax
// 2. problem with this: blocked objects
// function convertToNumber(x) {
//     return Number(x);
// }
//
// let num = x => Number(x);
// let sayHi = name => console.log(name);
//
// let str = x => String(x);
// let bool = x => Boolean(x);

// num('1');
// 4. self-invoking function
// (function () {
//     console.log('welcome');
// })();
/// app - server
// starter code
// bootstrapping

// 5. anonymous function
// 1. object methods
// list of methods [keys, values, assign]
// let x = {
//     username: 'ka3bora',
//     age: 20,
//     email: "ka3bora@g.com"
// };
// console.log(Object.keys(x));// ["username", "age", "email"]
// console.log(Object.values(x));// ["ka3bora" , 20 , "ka3bora@g.com"]
//
// let xUpdated = {
//     userName: "new Ka3bora",
//     age: 25,
//     email: "newka3bora@g.com",
//     script: 'alter("you are hacked")'
// }
// Object.assign(x, xUpdated);// if property is not exist in x, it will be added
// console.log(x);

// problem 1: add new value to object
// avoid unessary properties
let userFromDB = {
    userName: "ka3bora",
    age: 20,
    email: "ka3bora@g.com"
}

let userFromFE = {
    userName: "new Ka3bora",
    age: 25,
    email: "newka3bora@g.com",
    script: 'alter("you are hacked")',
    hamada: "hambozo",
    ka3bora: "rabe3",
    script2: 'alter("you are hacked")',
    x: 'y',
    y: "z",
    w: 1,
    true: true,
    false: false,
    // key: "key"
}
// 1. get valid keys ->
let validKeys = Object.keys(userFromDB);// ['userName','email','age']
// 2. iterate object FE to remove invalid keys
for (let key of Object.keys(userFromFE)) {
    // some of logic
    // check key exist in validKeys
    // include -> validKeys.includes('userName');// false
    const exist = validKeys.includes(key);
    // fail case
    if (exist === false) {
        // remove key from object
        // how to delete property from object?
        delete userFromFE[exist];// delete userFromFE['key']
        // userFromFE[key] = null;
    }

}
console.log(userFromFE);
// todo: start >> array methods
