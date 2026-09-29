-- SQL >> Structure Query Language
-- DDL >> Data Definition Language >> create table or drop table or alter table structure
-- DML >> Data Manipulation Language >> insert new Data, update data, delete data
-- DQL >> Data Query Language >> select data - retrieve data
-- DCL >> Data Control Language >> grant or revoke access to users
CREATE TYPE role AS ENUM ('customer', 'admin', 'seller');

-- ? users table
CREATE TABLE users
(
    id              SERIAL PRIMARY KEY,
    email           VARCHAR(160) NOT NULL UNIQUE CHECK ( position('@' in email) > 0 ),-- ka3borag.com
    hashed_password TEXT         NOT NULL,                                            -- asdnfjsfbgfsjgkbdfsjgkbdszfjbgdsjfikbgvdsfijbgvrsidjfbgifdscgibvfdihcfsv74
    role            role         NOT NULL DEFAULT 'customer',                         -- USER, ADMin, superadmin
    is_active       BOOLEAN               DEFAULT FALSE,
    created_at      TIMESTAMP             DEFAULT NOW()
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
    metadata   jsonb,-- '{"color":"red","size":"XL"}' >> '{"Ram":"16GB","screen":"6.5inch" ,"battery":"4000mAh"}'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
-- ? orders table
-- ? order_items table