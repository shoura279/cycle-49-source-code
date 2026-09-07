// functions
// 1. return value and only one value
// 2. not return behind the scene return undefined

// function summation(num1, num2) {
//     return console.log(console.log('summation from FN', num1 + num2)), num1 + num2;
// }
//
// const x = summation(1, 2);
// console.log('summation return from FN', x);
// function print() {
//     return console.log
// }
//
// print()('1');
// ? types of functions
// 1. declaration function
// summation(1, 2);
//
// function summation(num1, num2) {
//     console.log('summation from FN', num1 + num2);
//     return num1 + num2;
// }

// control flow of execution

// 2. expression function

// let summation = function (num1, num2) {
//     return num1 + num2;
// }
//
// summation(1, 2);
// circular dependency

// 3. arrow function:
// - shorter syntax
// - solve a problem of this
// let summation = (num1, num2) => num1 + num2;
// summation(1, 2);

// let printName = (name) => {
//     return console.log(name);
// }
// printName('ka3bora');
// 4. self-invoking function
// (function () {
//     console.log('welcome')
// })();// start a code-boot application
// 5. anonymous function


// 2. object methods
// problem:
// data from FE -> {userName, email, password, script}
// BE: get data from DB -> {userName, email, password}
// update data from FE set into DB
let userFE = {
    userName: 'ka3boraNew',
    email: 'newka3bora@gmail.com',
    // password: '12345',
    script: 'console.log("hello")',
    x: 1,
    y: 'dkfnsaibfhas'
}

let userDB = {
    userName: "ka3bora",
    email: 'ka3bora@g.com',
    password: '54321',
}

// Object.keys(userDB); ['userName','email','password']
// Object.values(); ['ka3bora','ka3bora@g.com','54321']
// Object.assign(target,source); // combine two object

// userDB.userName = userFE.userName || userDB.userName;
// userDB.email = userFE.email || userDB.email;
// userDB.password = userFE.password || userDB.password;
// how to delete a property from an object

// // const validKeys = ['userName', 'email', 'password'];
// const validKeys = Object.keys(userDB);// ['userName', 'email', 'password'];
//
// // iterate on object
// for (let key of Object.keys(userFE)) {
//     // ['userName','email','password','scripts',x,y]
//     // array method -> includes
//     const exist = validKeys.includes(key);// t , t , t , f , f , f
//     if (exist === false) {
//         delete userFE[key];// userFE[key]
//     }
// }
// Object.assign(userDB, userFE);
// console.log(userDB);

// // Q1:
// let data = '123';
// data = Number(data);
// data = data + 7;
// console.log(data);

// Q2:
