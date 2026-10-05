-- =========================================================
-- 1. Allow recursive CTEs to generate large datasets
-- =========================================================

SET SESSION cte_max_recursion_depth = 200000;


-- =========================================================
-- 2. INSERT 20,000 USERS
-- =========================================================

INSERT INTO users
(email, hashed_password, role, is_active, created_at, updated_at)
WITH RECURSIVE nums AS
                   (
                       SELECT 1 AS n

                       UNION ALL

                       SELECT n + 1
                       FROM nums
                       WHERE n < 20000
                   )
SELECT
    CONCAT('user', n, '@example.com') AS email,

    -- Same fake hashed password for all users
    '$2b$10$abcdefghijklmnopqrstuu123456789012345678901234567890' AS hashed_password,

    CASE
        WHEN n <= 18000 THEN 'customer'
        WHEN n <= 19000 THEN 'seller'
        ELSE 'admin'
        END AS role,

    RAND() < 0.90 AS is_active,

    TIMESTAMP(
            '2020-01-01'
                + INTERVAL FLOOR(RAND() * 2557) DAY
        + INTERVAL FLOOR(RAND() * 86400) SECOND
    ) AS created_at,

    NOW() AS updated_at
FROM nums;


-- =========================================================
-- 3. INSERT 50,000 PRODUCTS
-- =========================================================

INSERT INTO products
(name, price, stock, metadata, created_at, updated_at)
WITH RECURSIVE nums AS
                   (
                       SELECT 1 AS n

                       UNION ALL

                       SELECT n + 1
                       FROM nums
                       WHERE n < 50000
                   )
SELECT
    CONCAT(
            'Product ',
            n,
            ' ',
            ELT(
                    FLOOR(1 + RAND() * 10),
                    'Phone',
                    'Laptop',
                    'Tablet',
                    'Monitor',
                    'Keyboard',
                    'Mouse',
                    'Headset',
                    'Camera',
                    'Watch',
                    'Speaker'
            )
    ) AS name,

    ROUND(10 + RAND() * 9990, 2) AS price,

    FLOOR(RAND() * 1000) AS stock,

    JSON_OBJECT(
            'ram', ELT(
            FLOOR(1 + RAND() * 5),
            '4GB',
            '8GB',
            '16GB',
            '32GB',
            '64GB'
                   ),
            'screen', ELT(
                    FLOOR(1 + RAND() * 5),
                    '5.5',
                    '6.1',
                    '7.1',
                    '13.3',
                    '15.6'
                      ),
            'brand', ELT(
                    FLOOR(1 + RAND() * 5),
                    'Samsung',
                    'Apple',
                    'Lenovo',
                    'Dell',
                    'HP'
                     )
    ) AS metadata,

    TIMESTAMP(
            '2020-01-01'
                + INTERVAL FLOOR(RAND() * 2557) DAY
        + INTERVAL FLOOR(RAND() * 86400) SECOND
    ) AS created_at,

    NOW() AS updated_at
FROM nums;


-- =========================================================
-- 4. INSERT 200,000 ORDERS
--
-- Each order will have exactly 3 order_items.
-- Therefore:
--
-- 200,000 orders
-- × 3 items
-- = 600,000 order_items
-- =========================================================

INSERT INTO orders
(user_id, status, total_price, created_at, updated_at)

WITH RECURSIVE nums AS
                   (
                       SELECT 1 AS n

                       UNION ALL

                       SELECT n + 1
                       FROM nums
                       WHERE n < 200000
                   )
SELECT
    -- Only customer users
    1 + MOD(n - 1, 18000) AS user_id,

    CASE
        WHEN n % 100 < 50 THEN 'completed'
        WHEN n % 100 < 70 THEN 'pending'
        WHEN n % 100 < 85 THEN 'in-progress'
        WHEN n % 100 < 95 THEN 'cancelled'
        ELSE 'refunded'
        END AS status,

    ROUND(
            (
                SELECT SUM(
                               p.price *
                               CASE
                                   WHEN item_no = 1 THEN 1
                                   WHEN item_no = 2 THEN 2
                                   ELSE 3
                                   END
                       )
                FROM
                    (
                        SELECT 1 AS item_no
                        UNION ALL
                        SELECT 2
                        UNION ALL
                        SELECT 3
                    ) items
                        JOIN products p
                             ON p.id =
                                MOD(
                                        ((n - 1) * 3 + item_no - 1),
                                        50000
                                ) + 1
            ),
            2
    ) AS total_price,

    TIMESTAMP(
            '2020-01-01'
                + INTERVAL FLOOR(RAND() * 2557) DAY
        + INTERVAL FLOOR(RAND() * 86400) SECOND
    ) AS created_at,

    NOW() AS updated_at

FROM nums;


-- =========================================================
-- 5. INSERT 600,000 ORDER ITEMS
-- =========================================================

INSERT INTO order_items
(order_id, product_id, quantity, unit_price)

SELECT
    o.id AS order_id,

    MOD(
            ((o.id - 1) * 3 + item.item_no - 1),
            50000
    ) + 1 AS product_id,

    CASE
        WHEN item.item_no = 1 THEN 1
        WHEN item.item_no = 2 THEN 2
        ELSE 3
        END AS quantity,

    p.price AS unit_price

FROM orders o

         CROSS JOIN
     (
         SELECT 1 AS item_no
         UNION ALL
         SELECT 2
         UNION ALL
         SELECT 3
     ) item

         JOIN products p
              ON p.id =
                 MOD(
                         ((o.id - 1) * 3 + item.item_no - 1),
                         50000
                 ) + 1

WHERE o.id <= 200000;


-- =========================================================
-- 6. VERIFY DATA
-- =========================================================

SELECT COUNT(*) AS users_count
FROM users;

SELECT COUNT(*) AS products_count
FROM products;

SELECT COUNT(*) AS orders_count
FROM orders;

SELECT COUNT(*) AS order_items_count
FROM order_items;



# ==================================================
CREATE TABLE numbers (
                         n INT PRIMARY KEY
);
INSERT INTO numbers (n)
SELECT
    a.n
        + b.n * 10
        + c.n * 100
        + d.n * 1000
        + e.n * 10000
FROM
    (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
     UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
        CROSS JOIN
    (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
     UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
        CROSS JOIN
    (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
     UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) c
        CROSS JOIN
    (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
     UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) d
        CROSS JOIN
    (SELECT 0 n UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
     UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) e
WHERE
    a.n
        + b.n * 10
        + c.n * 100
        + d.n * 1000
        + e.n * 10000
        < 200000;

ALTER TABLE users
    MODIFY COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    MODIFY COLUMN updated_at DATETIME DEFAULT CURRENT_TIMESTAMP;
INSERT INTO users
(email, hashed_password, role, is_active, created_at, updated_at)
SELECT
    CONCAT('user', n, '@example.com'),
    '$2b$10$abcdefghijklmnopqrstuu123456789012345678901234567890',

    CASE
        WHEN n <= 18000 THEN 'customer'
        WHEN n <= 19000 THEN 'seller'
        ELSE 'admin'
        END,

    RAND() < 0.9,

    TIMESTAMP(
            '2020-01-01'
                + INTERVAL FLOOR(RAND() * 2557) DAY
                + INTERVAL FLOOR(RAND() * 86400) SECOND
    ),

    NOW()
FROM numbers
WHERE n BETWEEN 1 AND 20000;

ALTER TABLE products
    MODIFY COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    MODIFY COLUMN updated_at DATETIME DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE orders
    MODIFY COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    MODIFY COLUMN updated_at DATETIME DEFAULT CURRENT_TIMESTAMP;

INSERT INTO products
(name, price, stock, metadata, created_at, updated_at)
SELECT
    CONCAT('Product ', n),

    ROUND(10 + RAND() * 9990, 2),

    FLOOR(RAND() * 1000),

    JSON_OBJECT(
            'ram', ELT(
            FLOOR(1 + RAND() * 5),
            '4GB', '8GB', '16GB', '32GB', '64GB'
                   ),
            'screen', ELT(
                    FLOOR(1 + RAND() * 5),
                    '5.5', '6.1', '7.1', '13.3', '15.6'
                      ),
            'brand', ELT(
                    FLOOR(1 + RAND() * 5),
                    'Samsung', 'Apple', 'Lenovo', 'Dell', 'HP'
                     )
    ),

    TIMESTAMP(
            '2020-01-01'
                + INTERVAL FLOOR(RAND() * 2557) DAY
                + INTERVAL FLOOR(RAND() * 86400) SECOND
    ),

    NOW()
FROM numbers
WHERE n BETWEEN 1 AND 50000;

SELECT COUNT(*) FROM products;