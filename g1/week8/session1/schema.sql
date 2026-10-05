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


-- ALTER TABLE order_items
--   MODIFY COLUMN product_price RENAME TO unit_price;

ALTER TABLE order_items
    CHANGE COLUMN product_price unit_price NUMERIC(10, 2);
-- DML >> Data manipulation language
-- when create an admin
INSERT INTO users (email, hashed_password, role)
VALUES ('rabe3@gmail.com', 'hashed_56789', 'admin');

-- when create a customer
INSERT INTO users (email, hashed_password)
VALUES ('ka3bora@gmail.com', 'hash_123249574354');

INSERT INTO customer_profiles(user_id, full_name, phone, dob)
VALUES (3, 'ka3bora', '01024708091', '2000-01-02');

-- get all customers
SELECT id, email, hashed_password
FROM users
WHERE role = 'customer';

SELECT user_id, phone, full_name, dob
from customer_profiles;

SELECT *
FROM users
         LEFT JOIN customer_profiles ON users.id = customer_profiles.user_id;


-- when create a single product
INSERT
INTO products (name, price, stock, metadata)
VALUES ('iPhone 18 pro', 999, 10, '{"ram": "16GB", "screen":"7.1" , "battery":"4000mAh"}');

-- when bulk insert products
INSERT INTO products (name, price, stock, metadata)
VALUES ('Mac Book M3', 84000, 33, '{"ram": "16GB", "screen":"14.5" , "battery":"80000mAh"}'),
       ('3lbt zbady', 4.55, 100, '{"expiry_at":"2026-10-15","ingredients":["milk","blueberries"]}');


SELECT *
FROM products;

SELECT *
FROM order_items;

INSERT INTO orders (user_id, total_price)
VALUES (3, 13.55);

SELECT *
FROM orders;

INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES (1, 6, 3, 4.55);

-- n+1 problem
SELECT *
FROM order_items; -- 100k rows

SELECT *
FROM products
WHERE id = 6;

SELECT *
FROM order_items
         JOIN products ON order_items.product_id = products.id;


TRUNCATE TABLE order_items; -- reset table;
TRUNCATE TABLE orders;
TRUNCATE TABLE products; -- 1 2 3
TRUNCATE TABLE users; -- 1 2 3
TRUNCATE TABLE customer_profiles;
-- 20K users
-- products >> 50K rows
SELECT COUNT(*)
FROM products;
-- page1 >> 100 rows
-- page2 >> 100 rows
-- page3 >> 100 rows

UPDATE products
SET stock = 400
WHERE id = 1;

-- page1 >> 2 3 4 5 6
-- page2 >> 7 8 9 10 1
-- page3 >> 6 11 12 13 14
SET profiling = 1;
-- cursor pagination
SELECT *
FROM products
WHERE id > 15
ORDER BY id
LIMIT 5 ;


SELECT *
FROM products
ORDER BY id
LIMIT 5 offset 499995;

-- FE >> page2 >>

SHOW PROFILES;
-- offset 5 >> skip 5;
