-- SQL queries
-- DDL >> Data definition language
-- CREATE TABLE, DROP TABLE, ALTER TABLE
-- ! create table users [admin, customer, seller] -> email, password, role
CREATE DATABASE c49_g1;


# CREATE TYPE role AS ENUM ('customer', 'admin', 'seller');
# ALTER TYPE role ADD VALUE 'customer';
# DROP TYPE role;
CREATE TABLE users
(
    id              SERIAL PRIMARY KEY,-- INT 0, 1, 2, 3, 4
    email           VARCHAR(160) NOT NULL UNIQUE CHECK (position('@' IN email) > 0),
    hashed_password TEXT         NOT NULL,-- 12345 >> usifgbvsedfiubgdfisbgifsdbgidfsigbhfd
    role            ENUM ('customer', 'admin', 'seller') DEFAULT 'customer',-- User, Admin, Seller
    is_active       BOOLEAN                              DEFAULT FALSE,
    created_at      TIMESTAMP                            DEFAULT NOW(), -- joined at 2021-01-01T03:30:00.000Z
    updated_at      TIMESTAMP                            DEFAULT NOW()
);
-- ! create table customer_profiles -> full_name, phone, dob, loyalty_points
CREATE TABLE customer_profiles
(
    user_id        INT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
    full_name      VARCHAR(100) NOT NULL,
    phone          VARCHAR(11)  NOT NULL,
    dob            DATE, -- nullable
    loyalty_points INT DEFAULT 0
);
-- ! create table products

CREATE TABLE products
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(160)   NOT NULL,
    price      NUMERIC(10, 2) NOT NULL CHECK ( price > 0 ),-- 12345678.91 - 10.99
    stock      INT            NOT NULL CHECK ( stock >= 0 ),-- 1 >> 0
    metadata   TEXT, -- '{"ram": "16GB", "screen":"7.1" , "battery":"4000mAh"}'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
# CREATE TYPE product_status AS ENUM ('pending', 'in-progress', 'completed', 'cancelled', 'refunded');
# DROP TYPE product_status;
# CREATE TYPE order_status AS ENUM ('pending', 'in-progress', 'completed', 'cancelled', 'refunded');

-- ! create table orders
CREATE TABLE orders
(
    id          SERIAL PRIMARY KEY,
    user_id     INT            NOT NULL REFERENCES users (id) ON DELETE RESTRICT,
    status      ENUM ('pending', 'in-progress', 'completed', 'cancelled', 'refunded') DEFAULT 'pending',
    total_price NUMERIC(10, 2) NOT NULL CHECK (total_price > 0),
    created_at  TIMESTAMP                                                             DEFAULT NOW(),
    updated_at  TIMESTAMP                                                             DEFAULT NOW()
);
-- ! create table order_items
CREATE TABLE order_items
(
    order_id      INT            NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
    product_id    INT            NOT NULL REFERENCES products (id) ON DELETE RESTRICT,
    quantity      INT            NOT NULL CHECK (quantity > 0),
    product_price NUMERIC(10, 2) NOT NULL CHECK (product_price > 0),
    primary key (order_id, product_id)
);
-- DML >> Data manipulation language
-- when create an admin
INSERT INTO users (email, hashed_password, role)
VALUES ('rabe3@gmail.com', 'hashed_56789', 'admin');

-- when create a customer
INSERT INTO users (email, hashed_password)
VALUES ('3laamedany@gmail.com', 'hash_123459877654');

INSERT INTO customer_profiles(user_id, full_name, phone, dob)
VALUES (2, '3laamedany', '01024708090', '2000-01-01');

-- when create a single product
INSERT INTO products (name, price, stock)
VALUES ('iPhone 18 pro', 999, 10);

-- when bulk insert products
INSERT INTO products (name, price, stock)
VALUES ('Mac Book M3', 84000, 33),
       ('3lbt zbady', 4.55, 100);
-- try{

-- atomicity -> all success or all fail.
-- transaction: start - queries - end -> commit changes or rollback changes.
-- BEGIN;
# try{
start transaction;
-- 1. check product exist [stock>0]. DQL
SELECT *
FROM products
WHERE id = 2;
-- save result into variable if(result.stock == 0) throw error.
-- 2. create data into order table.
INSERT INTO orders (user_id, total_price)
VALUES (1, 999.00);
-- get order id.
SELECT *
FROM orders;
-- 3. create data into order_items table.
INSERT INTO order_items(order_id, product_id, quantity, product_price)
VALUES (2, 2, 1, 84000.00);

SELECT *
from order_items;
-- 4. update product stock.[reduce stock by quantity]
UPDATE products
SET stock = stock - 1
WHERE id , 2;
-- throw error


COMMIT;
# } catch(err){
ROLLBACK;
# }
-- >> success >> commit in case fail >> rollback.
-- end transaction. commit or rollback changes.
-- handle catch rollback;

-- INSERT, UPDATE, DELETE
-- DQL >> Data query language
SELECT *
FROM users;

SELECT *
FROM customer_profiles;

SELECT *
FROM products;

SELECT *
FROM orders;
SELECT *
FROM order_items;

DELETE
FROM orders;
DELETE
FROM order_items;
-- /user?name=rabe3 & id=1 & age=20
-- req.body.name
-- req.param.id
-- req.query.name >> rabe3
-- req.query.age >> 20
-- req.query.id >> 1
-- SELECT >> GET DATA FROM TABLE