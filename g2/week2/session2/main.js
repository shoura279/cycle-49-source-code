// how to declare a variable?
// interpreter VS compiled
// var x = 10; // number
// console.log(x);// -> 10
// // reassignment -> var
// x = 'ka3bora';// string
// console.log(x); // -> ka3bora
// var total = 0;
// total = total + 100;
// total = total + 200;
// total = total + 300;// coffee
//
// // redeclaration
// var total = 0;
// total = total + 10;
// total = total + 20;
// total = total + 280;
//
// console.log(total);// 310 - error because total is already declared
// compiler
// let total = 0;
// total = total + 100;
// total = total + 200;
// total = total + 300;
// console.log(total);// 600
// total = 'ka3bora';
// console.log(total);// reassignment - loosely typed
// let total = 0;
// total = total + 10;
// total = total + 20;
// total = total + 280;
// console.log(total); // error because total is already declared
// let avoid redeclaration
// const avoid redeclaration and reassignment
// const
// const VODAFONE_FEES = 1 / 100;
// console.log(VODAFONE_FEES); // 0.01
//
// VODAFONE_FEES = 2 / 100;
// console.log(VODAFONE_FEES);// error
// + op >> concatenation
// + op >> addition must two operands of type number
// rule1: one operand of type string + number = string
// rule2: operand of type string */-% number = number
// let x = 10;
// let y = 'ka3bora';
// let z = 5;
// // operator precedence
// console.log(typeof x * y + z);// NaN + 5 = NaN
//
// console.log(typeof NaN);
// console.log(Number(y));// 2
// type coercion: js autonomic convert to another type
// type conversion: as developer casting
// let x = 10;
// let y = '2';
// console.log(x + y);// '10' + '2' = '102' -- 12
// let firstName = 'ka3bora';
// let lastName = 'rabe3el7la2';
// console.log(firstName + ' ' + lastName);
// constructor methods -> String(), Number(), Boolean(), Date()
// falsy values -> ['', 0, undefined, null, false, NaN]
// let y = 1;
// let x = '1';
// console.log(null == {});// false
// console.log(null === y);// false
// console.log(null instanceof Object);
// null isn't instantiated from Object
// let null = new Object();
// struct{value,next}
// console.log(null === undefined);
// console.log(1 && 2 && NaN && 'rbe3el7la2');//
// let errorFromDB = 'bihfyutxdyr';
// // if (errorFromDB) {
// //     console.log(errorFromDB);
// // }
// // console.log(Boolean(undefined));
// errorFromDB && console.log(errorFromDB)
//
// console.log('ka3bora' || null || undefined || 1 || 2);// t -> 1
// console.log('' || null || undefined);

// update username
let nameFromFE = '';//
let nameFromDB = 'rabe3el7la2';
nameFromDB = nameFromFE || nameFromDB;
console.log(nameFromDB);