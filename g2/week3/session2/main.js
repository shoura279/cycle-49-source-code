// array methods
// filter -> method -> Array -> calling return arr -> length <= arr
// ? p. 1: filter a number array to get all even numbers.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// const evenNumbers = numbers.filter(
//     function (value) {
//         if (product.price <= 10000) {
//             return true;
//         }
//         return false;
//     }
// );
// console.log(evenNumbers);
// // ? p2: filter all users to get users witch fit role === admin
// let users = [
//     {userName: "ka3bora", email: "ka3bora@gmail.com", role: "admin"},
//     {userName: 'rabe3', email: "rabe3@g.com", role: 'user'},
//     {userName: "3laamedany", email: '3laa@gmail.com', role: 'user'},
//     {userName: 'abdo momya', email: 'abdo@gmail.com', role: 'admin'}
// ];
// const admins = users.filter(
//     function (user) {
//         if (user.role === 'admin') return true;
//         return false;
//     }
// );
// console.log(admins);
// console.log(users);
// map -> modify the array -> return new array -> return modified value
// intro to factory design pattern
// ? P1: modify all number in the array to be doubled
// function map(arr, factory) {
//     let result = [];
//     for (let ele of arr) {
//         const x = factory(ele);// calling
//         result.push(x);
//     }
//     return result;
// }
//
//
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr2 = numbers.map(
//     function (value) {
//         return value * 2;
//     }
// )
// const newArr = map(
//     numbers,
//     function (value) {
//         return value * 2;
//
//     }
// );
// console.log(newArr);
// console.log(newArr2);
// // ? P2: users array >> modify users to passwords convert to string
// let users = [
//     {userName: "ka3bora", email: "ka3bora@gmail.com", role: "admin", password: 123},
//     {userName: 'rabe3', email: "rabe3@g.com", role: 'user', password: 456},
//     {userName: "3laamedany", email: '3laa@gmail.com', role: 'user', password: 456},
//     {userName: 'abdo momya', email: 'abdo@gmail.com', role: 'admin', password: 456}
// ];
//
// users.map(
//     function (user) {
//         user.password = user.password.toString();
//     }
// );
// console.log(users);
//
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.map(
//     (value) => {
//         value = value * 2;
//     }
// );
// console.log(numbers);
// let arr = [];
// arr.forEach(
//     (ele) => {
//         // some logic of code
//     })
// forEach -> for loop -> for each loop >> loop >> some logic
// P1: order price -> GET Total price
// let cart = [
//     {product: "Nike Air force", price: 2500},
//     {product: "Mac Book M5", price: 80000},
//     {product: "3lbt zbady", price: 4}
// ];
// let totalPrice = 0;
// for (let product of cart) {
//     totalPrice += product.price;
// }
// console.log(totalPrice);
// // reduce
// // 1st iteration -> acc = 0
// // 2nd iteration -> acc = 0 +2500
// // 3rd iteration -> acc = 0 + 2500 + 80,000
// // 4th iteration -> acc = 0 + 2500 + 80,000 + 4
// //
// const totalPrice2 = cart.reduce(
//     (acc, product) => {
//         acc += product.price;
//         return acc;
//     },
//     0
// );
// console.log(totalPrice2);

//

// let arr = [1, 2, 3, 4];
// // 1st iteration -> acc = 1
// // 2nd iteration -> acc = 1 * 2
// // 3rd iteration -> acc = 1 * 2 * 3
// // 4th iteration -> acc = 1 * 2 * 3 * 4
// const result = arr.reduce((acc, cur) => {
//     acc *= cur;
//     return acc;
// }, 1);
// console.log(result);
// destructuring - extracting data from object or array
// query -> GET all prducts that price <= 100000
// let [productExists, ...products] = [
//     false,
//     {product: "Nike Air force", price: 2500},
//     {product: "Mac Book M5", price: 80000},
//     {product: "3lbt zbady", price: 4},
//     {product: "3lbt zbady", price: 4},
//     {product: "3lbt zbady", price: 4},
//     {product: "3lbt zbady", price: 4},
//     {product: "3lbt zbady", price: 4},
//     {product: "3lbt zbady", price: 4},
//     {product: "3lbt zbady", price: 4},
// ];
// console.log(productExists);
// console.log(products);
// const productExists = result[0];
// const product1 = result[1];
// const product2 = result[2];
// const product3 = result[3];
let {userName,age, ...ba2yElData} = {
    age: 25,
    salary: 30000,
    phoneNumber: "01010101010",
    email: "ka3bora@g.com",
    userName: "ka3bora",
}
// let userName = user.userName;
// let age = user.age;
// let salary = user.salary;
// let phoneNumber = user.phoneNumber;
// let email = user.email;
console.log(userName);
console.log(age)
console.log(ba2yElData);