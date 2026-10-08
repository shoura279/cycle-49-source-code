CREATE DATABASE c49_g2;

USE c49_g2;

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

INSERT INTO users (email, hashed_password, role)
VALUES ('abdo@gmail.com', '123456', 'admin');

INSERT INTO customer_profiles (full_name, phone, dob, user_id)
VALUES ('3laa', '01012345672', '1990-01-01', 3);

-- n+1 query problem
-- 100 order >> 100_000 order_items
-- query get all 100 orders
-- loop 100 get all order_items

SELECT *
FROM users
         LEFT JOIN customer_profiles
                   ON users.id = customer_profiles.user_id;

INSERT INTO products (name, price, stock, metadata)
VALUES ('3lbt-zbady', 5, 150, '{"expiry_at":"2026-10-10"}');

ALTER TABLE products
    ADD COLUMN frequently_bought_together_id INT REFERENCES products (id);-- unary relationship

UPDATE products
set frequently_bought_together_id = 1
WHERE id = 2;

SELECT p1.id,
       p1.name,
       p1.price,
       p1.stock,
       p1.metadata,
       p2.name,
       p2.price
FROM products p1
         LEFT JOIN products p2
                   ON p1.id = p2.frequently_bought_together_id;


DELETE FROM users WHERE id = 5;