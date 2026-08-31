// ======== primitive - non-primitive
// number - string - boolean - null - undefined -
// x = 10.2;
// console.log(typeof x);

// x = 'ka3bora';
// console.log(typeof x);

// x = 1;// act as a truthy value
// console.log(typeof x);

// x = 'undefined';
// console.log(x);

// x = null;
// console.log(x);

// todo:search points -> symbol - bigint
// // non-primitive -> object , array
// x = {userName: 'ka3bora', salary: 30000};
// // how to access data from object
// // 1. dot notation
// console.log(x.userName);
// console.log(x.salary);
// // 2. subscription notation
// console.log(x['user-name']);
// console.log(x['salary']);

// naming convention
// 1. camelCase -> userName -> variable , function
// 2. snake_case -> user_name -> DB, py, __main__
// 3. kebab-case -> JSON format -> "{"user-name":"ka3bora"}"
// 4. PascalCase -> Class -> User{}
// 5. UPPER_SNAKE_CASE -> BASE_URL = 'localhost:3000'

// array -> size(arr) -> 12
// x = [1, 2, 3];
// // how to access data from array
// console.log(x['length']);
// rule1: operand of type string + ay7aga = string
// rule2: operand of type string */-% ay7aga = number
// coercion
x = 1;
y = 'a'; // Nan
z = x * y;// + addition -> + concatenation -> 1
console.log(typeof z);

// todo: search point -> function