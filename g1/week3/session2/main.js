// array methods
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// // filter -> return array ele witch fit with condition
// // 1. get all even numbers
// const result = numbers.filter(
//     (value) => {
//         if (value & 1) {// 1 - 0
//             return false;// terminate function 1
//         }// select ele yes
//         return true;// select ele no // terminate function
//     }
// );
// console.log(1 + 2 * 3 / 6 + 15);
// console.log(result);
// 2. get all users whose role is admin
// let users = [
//     {userName: "ka3bora", role: "admin"},
//     {userName: "rabe3el7la2", role: "user"},
//     {userName: "3laamedany", role: "seller"},
//     {userName: "abdomomya", role: "admin"}
// ];
// const admins = users.filter(
//     (user) => {
//         if (user.role === 'admin') return true;
//         return false;
//     }
// );
// console.log(admins);
// console.log(users);
// map -> modify array
// get ele by ele modify
// 1. map numbers array to multiply by 2.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// numbers = numbers.map(
//     (value) => {
//         return value * 2;
//     }
// );
// console.log(numbers);
// 2. map users' array to add joinDate
// let users = [
//     {userName: "ka3bora", role: "admin"},
//     {userName: "rabe3el7la2", role: "user"},
//     {userName: "3laamedany", role: "seller"},
//     {userName: "abdomomya", role: "admin"}
// ];
// users.map((user) => {
//     if (user.role !== 'admin') {
//         user.joinDate = new Date();
//     }
//     return user;
// });
// console.log(users);
// let numbers = [1, 2, 3, 4, 5];
// numbers.map((value) => {
//     return value * 2;// 2 4 6 8 10
// });
// console.log(numbers);
// reduce ->
// let numbers = [1, 2, 3, 4, 5];
// first iteration => acc = 1, value = 1
// second iteration => acc = 1, value = 2
// third iteration => acc = 2, value = 3
// fourth iteration => acc = 6, value = 4
// fifth iteration => acc = 24, value = 5
// let result = numbers.reduce(
//     (acc, value) => {
//         return acc + value;// 1 + 2 = 3
//     }
//     , 100
// );
// console.log(result);
// let orders = [
//     {pName: "iphone17", price: 100000},
//     {pName: "mac book", price: 80000},
//     {pName: "Nike air force", price: 2500},
//     {pName: "3lbt zbady", price: 4}
// ];
// let total = orders.reduce((acc, value) => {
//     return acc + value.price;
// }, 30);
// console.log(total);
// destructuring -> extracting data from Object or Array
// find user into DB name = 'ka3bora'
// let resultFromDB = [true, {userName: "ka3bora", role: "admin"}];
// let exist = resultFromDB[0];
// let userData = resultFromDB[1];
// let [x, y, z, , , c] = [1, 2, 3, 4, 5, 6];
// // let x = data[0];
// // let y = data[1];
// // let z= data[2];
// // let a = data[3];
// // let b = data[4];
// // let c = data[5];
// console.log(x, y, z, c);
// get all users
// let [exists, ...numbers] = [true, 1, 2, 3, 4];
// console.log(exists);
// console.log(numbers);
//
// // rest operator
// let {userName, age ,...x} = {
//     userName: "ka3bora", role: "admin", salary: 100000, age: 25, email: "ka3bora@gmail.com"
// };
//
// console.log(userName, x);
// const requestQueryParams = {
//     page: 3,
//     limit: 15,
//     sortType: 'asc',
//     sortField: 'price',
// };
//
// let {page, limit, sortType, sortField} = requestQueryParams;
// reset - spreed operators
let arr1 = [1, 2, 3, 4, 5, [10, 20, 30, [1, 2, 4, [5, 8, 3]]]];
let arr3 = structuredClone(arr1);
arr3[5][1] = 2000;
let arr2 = JSON.parse(JSON.stringify(arr1));
// console.log(arr2);
// "[1,2,3,4,5,[10,20,30,[1,2,4,[5,8,3]]]]" >> [1,2,3,4,5,[10,20,30,[1,2,4,[5,8,3]]]]
// arr2 = JSON.parse(arr2);// generate new referenceses
// console.log(arr2);
arr2[5][1] = 2;
console.log(arr2);
console.log(arr1);
console.log(arr3)
// console.log(arr1);
// [...values of arr1] => [1,2,3,4,5,0xcf70]

// spreed operator deep copy on first layer
