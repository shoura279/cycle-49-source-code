// file system
// 1. no relationships
// 2. no constraints
// 3. duplicate data

// database systems:
// minimal data redundancy
// 1. SQL Database Management System >> [Mysql, Postgresql, Oracle] ✅ DCL >> create users apply to privilege
// 2. NoSQL Database Management System >> [MongoDB, CouchDB, Redis]


// * SQL >> Structured Query Language
// 1. DDL >> Data Definition Language
// 2. DML >> Data Manipulation Language
// ? 3. DQL >> Data Query Language
// 4. DCL >> Data Control Language

// PK >> name - age - salary
// as a business >> user with same age and salary and same name [business wise]
let users = [
    {id: 1, name: "ka3bora", email: "ka3bora@gmail.com", age: 25, salary: 30000,},
    {id: 2, name: "rabe3", email: "rabe3@g.com", age: 27, salary: 40000,},
    {id: 3, name: "3laamedany", email: "3laa@gmail.com", age: 28, salary: 50000,},
];

// composite PK >> user_id, address
let addresses = [
    {user_id: 1, address: "Helwan st.182"},
    {user_id: 1, address: 'NaserCity'},
    {user_id: 1, address: 'Sharm'},
    {user_id: 2, address: 'Helwan st.60'},
    {user_id: 2, address: 'Maddi'},
    {user_id: 2, address: "Helwan st.182"},
    {user_id: 3, address: 'Helwan st.40'},
    {user_id: 3, address: 'dokki'},
    {user_id: 3, address: '8rdaka'},
    {user_id: 3, address: "Helwan st.182"},
]

let products = [
    {id: 1, name: "laptop", price: 100000, stock: 10},
    {id: 2, name: "Nike Air Force", price: 2500, stock: 100},
    {id: 3, name: "Mac Book M3", price: 83000, stock: 2},
    {id: 4, name: "3lbt zbady", price: 10, stock: 1000},
];

let orders = [
    {user_id: 1, product_id: 2, quantity: 5}
];
// {user_name:null, email:null, role:null}
// user_name String NOT NULL DEFAULT 'system_user'
// email String NOT NULL UNIQUE DEFAULT 'system_user'
// role ENUM('admin', 'user','seller') DEFAULT 'user'

// silence errors


// logic of code BE not handle price Null
// all-data pass
// price INT NOT NULL CHECK(price > 0) DEFAULT 0
