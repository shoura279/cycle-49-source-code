CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(20) NOT NULL,
    hashed_password VARCHAR(255) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE CHECK (position('@' IN email) > 0),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW()
);