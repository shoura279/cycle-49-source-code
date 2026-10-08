## blog app

* auth
    - register
    - login [demo]
* user
    - update
    - delete
    - view [get profile]
* blog
    - create
    - update
    - delete
    - view [get blog by its id]

## Database design:

* user has many blogs
* blog belongs to one user

* user:
    - id INT PRIMARY KEY
    - user_name VARCHAR(255) NOT NULL
    - hashed_password VARCHAR(255) NOT NULL
    - email VARCHAR(255) NOT NULL UNIQUE CHECK(position('@' in email) > 0)
    - is_deleted BOOLEAN DEFAULT FALSE >> deleted account >> is_deleted = TRUE -- soft delete
    - created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    - updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
* blog:
    - id INT PRIMARY KEY
    - user_id INT NOT NULL REFERENCES user(id)
    - title VARCHAR(255) NOT NULL
    - content TEXT NOT NULL
    - created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    - updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    - is_deleted BOOLEAN DEFAULT FALSE >> deleted blog >> is_deleted = TRUE