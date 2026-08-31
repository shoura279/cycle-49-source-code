// 1. how to declare variables?
// declare
// var x = 10;
// console.log(x);// 10
// // reassignment
// x = 'ka3bora';// reassignment + loosely typed
// console.log(x);// ka3bora
// var total = 0;
//
// total = total + 10;
// total = total + 20;
// total = total + 30;// 60
//
//
// // same service but line 112
// // redeclare
// var total = 0;
// total += 1000;
// total += 200;
// total += 300;
//
// console.log(total);// 1560

// int x = 0;
// int x = 10;// error

// var ❌
// let x = 10;
// console.log(x); // 10
// let x = 12; // redeclare
// console.log(x); // error
// let x = 10;
// console.log(x);
// x = 'ka3bora'// reassignment + loosely typed
// console.log(x);
// let VODAFONE_FEES = 1 / 100;
// console.log(VODAFONE_FEES);
//
// VODAFONE_FEES = 2 / 100;// reassignment
// console.log(VODAFONE_FEES);
// const VODAFONE_FEES = 1 / 100;
// // not support reassignment
// VODAFONE_FEES = 2 / 100;
// console.log(VODAFONE_FEES);
// var - let - const
// operator + >> addition >> concatenation
// one operand of type string + concatenate

// rule1: operand of type string + number = string
// rule2: operand of type string *-/% number = number
// operator precedence
// let x = 10;
// let y = '2';// 2
// let z = 5;
//
// console.log(x + y);// 'number' + 10 >> number10

// let firstName = 'ka3bora';
// let lastName = 'rabe3el7la2'
// console.log(firstName + ' ' + lastName);// 'ka3bora rabe3el7la2'
//
// let x = 10;
// let y = '2';
// // console.log(x * y);// type coercion: js convert string to number
// // type conversion: as developer convert string to number
// y = Number(y);
// console.log(y);
// truthy falsy value ['', 0, undefined, null, false ,Nan]
// let x = 2;
// let y = '2';
// console.log(x === y);// value - value + datatype
// console.log(x == y);
// String(), Number(), Boolean(), Date();
//
// let fail = true; // FROM DB;
// fail && console.log(1) && console.log('fail');
// // if (fail === true) {
// //     console.log('fail');
// // } else {
// //     console.log('success');
// // }
// console.log(0 || 0|| null);
// cycle of update
let userNameFE = 'ka3bora';
let userNameDB = 'rabe3el7la2';

userNameDB = userNameFE || userNameDB;

console.log(userNameDB);

