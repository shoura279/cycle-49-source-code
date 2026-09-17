// // TDZ - hoisting
// // x = undefined;
// // console.log(x);// 10; TDZ
// // // var declare but not to use before line 3
// // var x = 10;
// // sum(1, 2);// 3
// // function sum(a, b) {
// //     console.log(a + b);
// // }
// // // rule: ay7aga declaration >> hoisting
// // // class >> hosting
// // sum(1, 2);// 3
// // console.log(sum);
//
// // sum(); // undefined(); >> error sum is not a function
// // var sum = function (a, b) {
// //     console.log(a + b);
// // }
//
// // try/catch
// //
// // try {
// //     let user = {userName: "ka3bora", age: 25};
// //     if (user === null)
// //         throw new Error("User not found");
// //
// //     console.log(user);
// // } catch (error) {
// //     console.log(error.message);
// // }
// // new-folder
// // new.folder
// //
// const userRepository = require('./user.repository.js');
// const productRepository = require('./product.repository.js');
// userRepository.createUser({userName: 'hambozo', age: 13});
// console.log(userRepository.users);
// // types of modules
// // 1. core/bulitin module >> node.js
// // 2. local/custom module
// // 3. third party module
// paths - files - events
// const path = require('node:path');
// let x = 'D:/app/data/user/123456/image.png';

// function getFileName(path) {
//     let arrStr = path.split('/');// ['user','123456','image.png']
//     return arrStr.at(-1);
// }
//
// const fileName = getFileName(x);
// const result2 = path.basename(x);
// const result = path.dirname(x);
// const result2 = path.extname(x);
// const result3 = path.parse(x);
// const result4 = path.format(result3);
//
// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// windows >> \
// linux >> /
// mac >> /
// D:/app/user/123456/image.png
// let filePath1 = 'D:/app/data';
// let filePath2 = '../../user/123456/image.png';
// // console.log(filePath1 + filePath2);
// console.log(path.join(filePath1, filePath2));
//
// console.log('\'');// new line - [\ = skip char]
// let z = `D:\\route\\c49\\g1\\week4\\session2\\main.js';
// console.log(__dirname);
// console.log(__filename);
//
// //
// const path = require('node:path');
// let x = 'app/data/user/123456/image.png';
// let y = 'D:/app/data/user/123456/image.png';
// console.log(path.isAbsolute(x));
// absolute path >> root directory from OS
// relative path >> current directory

// uploads/12345.png >> DB
// D:/route/c49/g1/week4/session2/main.js >> DB
// http://aws.com/app/uploads/12345.png >> DB
// http://azure.com/app/uploads/12345.png >> DB
// http://do.com/app/uploads/12345.png >> DB
// open
// read
// close
// low level methods
// fs.open('D:/route/c49/g1/week4/session2/data.txt',
//     (err, fd) => {
//         if (err) console.log(err.message);
//         // fd >> file descriptor >> file in memory
//         fs.read(fd, (err, bytesRead, buffer) => {
//             if (err) console.log(err.message);
//             console.log(bytesRead);
//             console.log(buffer.toString());
//             fs.close(fd, (err) => {
//                 if (err) console.log(err.message);
//             });
//         })
//     }
// );

// high level methods
const fs = require('node:fs');
fs.readFile(
    'D:/route/c49/g1/week4/session2/data.txt',
    (err, data) => {
        if (err) console.log(err);
        console.log(data.toString());
    }
);



// try {
//     const data = fs.readFileSync('D:/route/c49/g1/week4/session2/data1.txt');
//     console.log(data.toString());
// }catch (error){
//     console.log(error.message);
// }

