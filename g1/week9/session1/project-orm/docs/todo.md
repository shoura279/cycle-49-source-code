## project-using-ORM

- ORM:
  - Object Relational Mapping
  - write native queries in BE server.
  - with ORM:
    - reduce native queries.
    - multiple DBs with same functions.

- integrate DB with BE:
- different drivers:
- MySql -> BE -> mysql2 >> create pool >> pool.query('native query') -> [data,metadata] -> data -> array
- postgres -> BE -> pg > new Pool() >>> pool.query('native query') -> Object {rows:[data]} >> object.row[0]

- mysql:
  -- INSERT INTO users (name,email,password) VALUES(?,?,?);
  -- SELECT \* FROM users WHERE id = last_id; -- createdUser
- pg:
  -- INSERT INTO users (name,email,password) VALUES($1,$2,$3) RETURNING \*;

- function >> log >> query
- N+1 query problem >> users and related blogs
- inside native query

- knex >> query builder
- jpa >> ORM >> find() >> SELECT

- ORM:
- setup some config into ORM database:mysql
  -- create() >> mapping >> INSERT INTO users (name,email,password) VALUES($1,$2,$3);
  -- find() >> mapping >> SELECT \* FROM users WHERE id = $1
  -- update()
  -- delete()

- Models
  -- BE: class User -> DB: users tables into DB

Class User{
id Int
name String
email String
password String
}

> >

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY
)

- modular monolithic

- src
  - app
    - auth
      - auth.controller.js
      - auth.service.js
      - auth.route.js
    - user
      - user.controller.js
      - user.service.js
      - user.route.js
    - blog
      - blog.controller.js
      - blog.service.js
      - blog.route.js
  - common
  - server.js

- micro service

- src
  - app
    - auth
      - auth.controller.js
      - auth.service.js
      - auth.route.js
  - common
  - server.js

- src
  - app
    - user
      - user.controller.js
      - user.service.js
      - user.route.js
  - common
  - server.js

- src
  - app
    - blog
      - blog.controller.js
      - blog.service.js
      - blog.route.js
  - common
  - server.js

todo session2:
-- global error handler
-- es modules vs commonJs
