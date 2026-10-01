-- create user_role as type string
# CREATE TYPE user_role AS ENUM ('admin' ,'customer' );
-- ================== DDL ====================
-- data data definition lang for simple e-commerce app
-- create users table
CREATE TABLE users
(
    id            SERIAL PRIMARY KEY,
    email         VARCHAR(255) UNIQUE NOT NULL CHECK ( position('@' IN email) > 1 ),
    password_hash TEXT                NOT NULL,
    is_active     BOOLEAN             NOT NULL DEFAULT TRUE,
    role          VARCHAR(20)         NOT NULL DEFAULT 'customer',
    created_at     TIMESTAMP                    DEFAULT NOW(),
    CONSTRAINT email_format CHECK ( position('@' IN email) > 1 )
);

# --======= customer profiles [inheritance , 1-to-1]
-- create customer profiles table
CREATE TABLE customer_profiles
(
    user_id        INT PRIMARY KEY REFERENCES users (id) ON DELETE CASCADE,
    full_name      VARCHAR(150),
    phone          VARCHAR(20),
    dob            DATE,
    loyalty_points INT NOT NULL DEFAULT 0 CHECK (loyalty_points >= 0)
);

ALTER TABLE customer_profiles
    DROP loyalty_points;
ALTER TABLE customer_profiles
    ADD loyalty_points INT NOT NULL DEFAULT 0 CHECK ( loyalty_points >= 0 );
-- create product table
CREATE TABLE products
(
    id        SERIAL PRIMARY KEY,
    name      VARCHAR(150)   NOT NULL,
    price     NUMERIC(10, 2) NOT NULL CHECK ( price >= 0 ),
    stock     INT            NOT NULL DEFAULT 0 CHECK ( stock >= 0 ),
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP               DEFAULT NOW()
);

-- orders table
CREATE TABLE orders
(
    id           SERIAL PRIMARY KEY,
    user_id      INT            NOT NULL REFERENCES users (id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    total        NUMERIC(10, 2) NOT NULL CHECK ( total > 0 ),
    status       VARCHAR(20)    NOT NULL DEFAULT 'pending',
    created_at   TIMESTAMP               DEFAULT NOW(),
    delivered_at TIMESTAMP -- NULL -> in case not delivered
);

-- ================
-- [1-to-N orders -< items]
-- order_items table
CREATE TABLE order_items
(
    id         SERIAL PRIMARY KEY,
    order_id   INT            NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
    product_id INT            NOT NULL REFERENCES products (id) ON DELETE RESTRICT,
    quantity   INT            NOT NULL CHECK ( quantity > 0 ),
    unit_price NUMERIC(10, 2) NOT NULL CHECK ( unit_price >= 0 )
);
-- ================ DML ==================
-- Data Manipulation Lang
INSERT INTO users (email, password_hash, is_active, role)
VALUES ('admin@example.com', 'hash_pw_123', TRUE, 'admin'),
       ('customer@example.com', 'hash_pw_456', TRUE, 'customer');

INSERT INTO customer_profiles (user_id, full_name, phone, dob)
VALUES (2, 'ka3bora', '01024708090', '1999-09-27');

INSERT INTO products (name, price, stock, metadata)
VALUES ('Nike air force',
        2500.00,
        100,
        '{
          "color": "black"
        }'),
       ('MacBook',
        85000.00,
        5,
        '{
          "spec": "16GB RAM"
        }');

INSERT INTO orders (user_id, total, status)
VALUES (2, 2500.00, 'pending');

INSERT INTO order_items (order_id, product_id, quantity, unit_price)
VALUES (1, 1, 2, 2500.00);

UPDATE products
SET stock = stock - 2
WHERE id = 1;

UPDATE orders
SET status       = 'delivered',
    delivered_at = NOW()
WHERE id = 1;

DELETE
FROM products
WHERE id = 3;

SELECT *
FROM users;

SELECT id, email, password_hash, is_active, role, create_at
FROM users u
WHERE is_active = true
ORDER BY create_at DESC
LIMIT 5;

SELECT *
FROM orders;
EXPLAIN ANALYSE
    SELECT id, delivered_at, delivered_at IS NULL AS not_delivered
FROM orders
WHERE delivered_at IS NULL;


-- indexes and there types
-- truncate vs delete


