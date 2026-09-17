// let sum = function () {
//     console.log(1 + 2);
// }
//
// sum();
//
// sum2();
// function sum2() {
//     console.log(12+ 2);
// }
//
// sum2();
// sum();// undefined();
// var sum = function () {
//     console.log(1 + 2);
// }
// console.log(x);// undefined
// var x = 12;
// console.log(x);// 12

// truthy falsy
// success case - fail case
// try {
//     const user = undefined;
//
//     if (!user) {
//         throw new Error('user not exist');//
//     }
//
//     console.log(user);
// } catch (error) {
//     console.log(error.message);
// }
// call functions
// modules:
// file -> js -> functions.
// const userRepository = require('./user.repository.js');
// types of modules:
// 1. builtin/core modules >> default >> download node.js
// 2. local/custom modules >> user
// 3. third party modules >> throw internet [ Github ]


// function getDirName(path) {
//     const result = path.split('/');// ['app','data','user','ka3bora','image.png']
//     result.pop();// // ['app','data','user','ka3bora']
//     return result.join('/');
// // }
//
// console.log(getDirName(x))
// console.log(path.basename(x));
// console.log(path.dirname(x));
// console.log(path.extname(x));
// console.log(path.parse(x));
// path >> 'app/data/user/ka3bora/image.js'
// const path = require('node:path');
// let x = '\\app\\data\\user\\ka3bora\\image.js';
// let y = '../ka3bora/image.js';
// console.log(x);
// win >> \
// linux >> /
// mac >> /

//
// const path = require('node:path');
// console.log('app' + '../data');
// console.log(path.join('app', '../data', './user', '../ka3bora', './image.js'));
// 2 type of paths: absolute and relative
// D:/app/data/user/ka3bora/image.png -> absolute path
// ka3bora/image.png -> relative path
// const path = require('node:path');
// console.log(path.isAbsolute('D:/app/data/user/ka3bora/image.png'));
// console.log(path.isAbsolute('ka3bora/image.png'));
//
// //
// // pp: URL >> https://aws.s3.1234567.com/user/ka3bora/image.png
// // pp: URL >> user/ka3bora/image.png
// how to read file
// open
// read
// close
const fs = require('node:fs');
// low-level methods
// fs.open('D:/route/c49/g2/week4/session2/data.txt',
//     (err, fd) => {
//         if (err) console.log(err.message);
//         fs.read(fd,
//             (err, bytesRead, buffer) => {
//                 if (err) console.log(err.message);
//                 console.log(bytesRead);// 14
//                 console.log(buffer.toString());
//                 fs.close(fd, (err) => {
//                     if (err) console.log(err.message);
//                 })
//             }
//         )
//     }
// );
// high level methods
// fs.readFile('D:/route/c49/g2/week4/session2/data.txt',
//     (err, data) => {
//         if (err) console.log(err);
//         console.log(data.toString());
//     }
// );
try {
    // sync -> block the thread
    // async -> non-block the thread
    const data = fs.readFileSync('D:/route/c49/g2/week4/session2/data.txt');
    console.log(data.toString());
} catch (error) {
    console.log(error.message);
}

// stream file >> 1 >> 1 >> 1