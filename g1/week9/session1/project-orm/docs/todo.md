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
