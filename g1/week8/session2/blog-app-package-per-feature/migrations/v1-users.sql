CREATE TABLE users
(
    id              INT AUTO_INCREMENT PRIMARY KEY,
    user_name       VARCHAR(255) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    email           VARCHAR(255) NOT NULL UNIQUE CHECK ( position('@' IN email) > 0 ),
    created_at      DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);