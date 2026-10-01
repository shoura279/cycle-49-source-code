* what is a schema?
  it is a data blueprint of our app.

* some component:
    - table:  represent distinct entity (Users , orders , products) -> [{},{}].
    - row:    an individual record or instance of entity -> {}.
    - column: an attribute that defines a characteristic of the entity -> 'orders.id'.

* keys
    - PK:
        1. it serves to unique identifier for each row.
        2. use-case: most frequently an id column implemented as an auto-incrementing int.
        3. automatic indexing: database automatically index primary keys.
    - FK:
        1. Linking Tables: it one table points to another table.
        2. ex: orders.user_id -> ref to users.

* constraints
    1. NOT NULL: that ensure a column cannot have a NULL or make it mandatory field. ex: 'product.price'
    2. UNIQUE: ensure all values are distinct and preventing duplicates(email , usernames).
    3. CHECK: Enforcing a specific condition that all values in a column must be satisfied. price > 0.
    4. DEFAULT: Assign a default values to a column when no value is explicitly specified during insertion.

* normalization has 3 forms:
    1. 1st: require that all column values are atomic, such if user have multiple address.
    2. 2en: all non key attributes are fully functionally dependents on the primary key, not partial dependencies.
       `id |order_id | product_id | quantity | user_id| 
         1 |  4      |   6        | 8         | 50    |
         2 |  4      |   7        | 2         | 50    | 
         3 |  5      |   6        | 1         | 50    |`
       problem: product_name is depend on partial of composite PK. [product_id,order_id,user_id]
       solve: move product_name to separate table (products)
    3. 3rd: explain as problem: departments 1-to-m employees
       `|employee_id | department_id | department_name
        |   50       |    3          | BE
        |   52       |    3          | BE
        |   50       |    100        | FE
        |   51       |    100        | FE`
       problem: department_name is depend on department_id and department_id is not a primary key (FK).
       solve: move depart_name to departments

* when to denormalize: make performance needs.
    1. read heavy.
    2. avoid expensive joins in case multiple join.
    3. caching pre-calculated or frequently accessed data.-- total price of order
    4. no-sql like flexibility.

===================================================

* todo session2:

1. Model one-to-one, one-to-many, and many-to-many relationships using primary and foreign keys.✅
2. Explain why transactions are needed and use `BEGIN`, `COMMIT`, and `ROLLBACK`.✅
3. Combine related tables using `INNER JOIN` and `LEFT JOIN`.✅
4. Create summary reports using aggregate functions, `GROUP BY`, and `HAVING`.
5. Implement basic pagination using `LIMIT` and `OFFSET`.
6. Choose appropriate MySQL index types and verify query plans with `EXPLAIN ANALYZE`.
7. Connect an Express application to MySQL Using `mysql2`.
8. Execute safe parameterized queries and transactions from Node.js.[sql-injection].
