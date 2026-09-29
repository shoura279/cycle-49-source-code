-- SQL queries
-- DDL >> Data definition language
-- CREATE TABLE, DROP TABLE, ALTER TABLE
-- ! create table users [admin, customer, seller] -> email, password, role

CREATE TYPE role AS ENUM ('user', 'admin', 'seller');

CREATE TABLE users
(
    id              SERIAL PRIMARY KEY,-- INT 0, 1, 2, 3, 4
    email           VARCHAR(160) NOT NULL UNIQUE CHECK (position('@' IN email) > 0),
    hashed_password TEXT         NOT NULL,-- 12345 >> usifgbvsedfiubgdfisbgifsdbgidfsigbhfd
    role            role      DEFAULT 'user',-- User, Admin, Seller
    is_active       BOOLEAN   DEFAULT FALSE,
    created_at      TIMESTAMP DEFAULT NOW() -- joined at 2021-01-01T03:30:00.000Z

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
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(160)   NOT NULL,
    price     NUMERIC(10, 2) NOT NULL CHECK ( price > 0 ),-- 12345678.91 - 10.99
    stock     INT            NOT NULL CHECK ( stock >= 0 ),-- 1 >> 0
    metadata  TEXT, -- '{"ram": "16GB", "screen":"7.1" , "battery":"4000mAh"}'
    create_at TIMESTAMP DEFAULT NOW()
);
-- ! create table orders
-- ! create table order_items
-- DML >> Data manipulation language
-- INSERT, UPDATE, DELETE
-- DQL >> Data query language
-- SELECT >> GET DATA FROM TABLE