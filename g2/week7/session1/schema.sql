-- SQL >> Structure Query Language
-- DDL >> Data Definition Language >> create table or drop table or alter table structure
-- DML >> Data Manipulation Language >> insert new Data, update data, delete data
-- DQL >> Data Query Language >> select data - retrieve data
-- DCL >> Data Control Language >> grant or revoke access to users
CREATE DATABASE c49_g2;

-- CREATE TYPE role AS ENUM ('customer', 'admin', 'seller');

-- ? users table
CREATE TABLE users
(
    id              SERIAL PRIMARY KEY,
    email           VARCHAR(160)                         NOT NULL UNIQUE CHECK ( position('@' in email) > 0 ),-- ka3borag.com
    hashed_password TEXT                                 NOT NULL,                                            -- asdnfjsfbgfsjgkbdfsjgkbdszfjbgdsjfikbgvdsfijbgvrsidjfbgifdscgibvfdihcfsv74
    role            ENUM ('customer', 'admin', 'seller') NOT NULL DEFAULT 'customer',                         -- USER, ADMin, superadmin
    is_active       BOOLEAN                                       DEFAULT FALSE,
    created_at      TIMESTAMP                                     DEFAULT NOW(),
    updated_at      TIMESTAMP                                     DEFAULT NOW(),
    is_deleted      BOOLEAN                                       DEFAULT FALSE
);

-- ? customers table
CREATE TABLE customer_profiles
(
    full_name      VARCHAR(160) NOT NULL,
    phone          VARCHAR(11)  NOT NULL,
    loyalty_points INT DEFAULT 0 CHECK ( loyalty_points >= 0),-- 1000 >> 10
    dob            DATE,
    user_id        INT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE
);
-- ? products table
CREATE TABLE products
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(160)   NOT NULL,
    price      NUMERIC(10, 2) NOT NULL CHECK (price > 0),-- 99,999,999.99
    stock      INT            NOT NULL CHECK (stock >= 0),-- 1 >> 1 - 1 = 0
    metadata   TEXT,-- '{"color":"red","size":"XL"}' >> '{"Ram":"16GB","screen":"6.5inch" ,"battery":"4000mAh"}'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    is_deleted BOOLEAN   DEFAULT FALSE
);
-- ? orders table
CREATE TABLE orders
(
    id         SERIAL PRIMARY KEY,
    user_id    INT REFERENCES users (id) ON DELETE RESTRICT,
    status     VARCHAR(160) NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP             DEFAULT NOW(),
    updated_at TIMESTAMP             DEFAULT NOW()
);
-- ? order_items table
CREATE TABLE order_items
(
    order_id   int REFERENCES orders (id) ON DELETE CASCADE,
    product_id int REFERENCES products (id) ON DELETE RESTRICT,
    quantity   INT            NOT NULL CHECK ( quantity > 0 ),
    unit_price NUMERIC(10, 2) NOT NULL CHECK (unit_price > 0),-- avoid change in price after preshace time
    PRIMARY KEY (order_id, product_id)
);
-- DML
-- BE >> hash >> 12345 >> opwre0ifeurosbgfedfsuobgvjsedfgv
INSERT INTO users (email, hashed_password, role)
VALUES ('3laa@g.com', 'opwre0ifeurosbgfedfsuobgvjsedfgv', 'admin');

INSERT INTO customer_profiles(full_name, phone, dob, user_id)
VALUES ('rabe3', '01024708091', '1999-01-02', 2);


INSERT INTO products(name, price, stock, metadata)
VALUES ('Nike Air force', 2500, 10, '{"color":"red","size":"XL"}');

INSERT INTO products(name, price, stock, metadata)
VALUES ('Mac Book M3', 85000, 100, '{"ram":"16GB","screen":"6.5inch" ,"battery":"4000mAh"}'),
       ('3lbt-zbady', 40, 1000, '{expiry_at:"3 days}');
-- ACID >> atomicity, consistency, isolation, durability
-- All Success or All Fail
-- transactions: start - queries - end [COMMIT or ROLLBACK]
BEGIN;
-- 1. check product exist or not - single query - done
SELECT *
FROM products
WHERE id = 3;


-- pg_get_serial_sequence
-- 3. insert data into orders table - single query - done
INSERT INTO orders (user_id)
VALUES (1);
-- 2. insert data into order_items table - single query - done
INSERT INTO order_items(order_id, product_id, quantity, unit_price)
VALUES (LAST_INSERT_ID(), 3, 999, 40);
-- 4. update product's stock  - single query - fail
UPDATE products
SET stock = stock - 999
WHERE id = 3;

COMMIT;
-- save changes into DB

-- discard changes

-- DQL
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