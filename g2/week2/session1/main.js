// datatypes in ka3bora?
// 1. primitive data types -> (atomic value)
// 1.1. number [int, float, double]
// x = 10.3;
// console.log(typeof x); // typeof x -> 1+2 - * / -> OP
// 1.2. string
// x = 'ka3bora';
// console.log(typeof x);
// 1.3. boolean
// x = true; // truthy falsey
// console.log(typeof x);
// 1.4. null
// x = null;
// console.log(typeof x);//
// console.log(null == {});//
// 1.5. undefined
// x = undefined;
// console.log(x);// value
// console.log(typeof x);// type
// 1.6. symbol
// 1.7. bigint
// todo: search points use cases symbol - bigint
// 2. non-primitive data types:combination of primitive data types
// 2.1. object :
// {key: value , key: value , key: value}
// x = {"user-name": "ka3bora", salary: 30000, isActive: true};
// // how to access data from an object?
// // - dot notation
// console.log(x.user-name);
// console.log(x.salary);
// console.log(x.isActive);
// // - subscription notion
// console.log(x['user-name']);
// console.log(x['salary']);
// console.log(x['isActive']);
// naming convention
// 1. camelCase -> userName -> variable or function
// 2. PascalCase -> OrderItem -> class or interface
// 3. snake_case -> password_hash -> DB
// 4. kebab-case -> JSON -> "{"user-name":"ka3bora"}"
// 5. UPPER_SNAKE_CASE -> BASE_URL CONSTANT
// VODAFONE_FEES = 1/100
// DB_URL
// VISE_SECRET
// 5000 * VODAFONE_FEES = 50
// 6000 * VODAFONE_FEES  = 60
// 1000 * VODAFONE_FEES  = 10
// 10,000 * VODAFONE_FEES  = 200


// 2.2. array
// x = [1, 2, 3, 4, 5];
// console.log(typeof x);
// how to access data from an array? [index]
// console.log(x["0"]);// type coercion: js convert datatype to datatype
// console.log(x[1]);
// console.log(x[2]);
// console.log(x[3]);
// console.log(x[4]);
// size(arr)
// console.log(x['length']);
// OP + concatenation in case one operand is string
// role1: if operand of type string + operand of type number -> string
// role2: operand of type string */-% operand of type number -> number
x = 'a';// 97 - NaN /2 -> NaN
y = 2;
z = '5';
// operator precedence
console.log(typeof x / y + z); // string / y + z >> NaN + z >> NaN5
// 2.3. function
// how to declare a variable?