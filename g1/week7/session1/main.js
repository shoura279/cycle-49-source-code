// database system - server separated from BE
// lang >> SQL >> Structure Query Language
// get one user
// update one user
// get user data with products

// filesystem -> read from - write into file
// 1. read specific data
// 2. apply constraints userName >=3 chars
// 3. no relationships
// 4. duplicated data

// SQL DB >> atomic values
// languages >> array >> ['python','java','c++']
// store into DB >> "['python','java','c++']"
let users = [
    {id: 1, name: "ka3bora", email: "ka3bora@g.com", password: "123456",},
    {id: 2, name: "rabe3", email: "rabe3@g.com", password: "123456",},
    {id: 3, name: "3laamedany", email: "3laamedany@g.com", password: "123456",},
];

let languages = [
    {user_id: 1, name: "cpp"},
    {user_id: 1, name: "jave"},
    {user_id: 1, name: "python"},
    {user_id: 2, name: "cpp"},
    {user_id: 2, name: "jave"},
    {user_id: 2, name: "python"},
    {user_id: 2, name: "c#"},
    {user_id: 2, name: "php"},
];

// minimal data redundancy
// composite PK
let addresses = [
    {user_id: 1, city: "Cairo", country: "Egypt", street: "129 Mohamed V"},
    {user_id: 1, address: "Maddi"},
    {user_id: 1, address: "DokKi"},
    {user_id: 2, address: "Helwan"},
    {user_id: 3, address: "Helwan"},
    {user_id: 3, address: "DokKi"},
];

let products = [
    {id: 1, name: "Mac Book M3", price: 85000, stock: 10},
    {id: 2, name: "Nike Air Force", price: 2500, stock: 100},
    {id: 3, name: "3lbt zbady", price: 10, stock: 120},
];

let orders = [
    {id: 1, user_id: 1, product_id: 1, quantity: 2},
    {id: 2, user_id: 2, product_id: 1, quantity: 1},
    {id: 3, user_id: 3, product_id: 2, quantity: 4},
]

// NOT NULL >> check if the value is null
// UNIQUE >> check if the value is unique
// CHECK >> customise condition >> price INT NOT NULL CHECK(price > 0)
// DEFAULT >> gender STRING DEFAULT 'male'
// role STRING DEFAULT 'customer'