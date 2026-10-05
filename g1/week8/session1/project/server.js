const express = require('express');
const mysql = require('mysql2/promise');
// establish connection to database
const pool = mysql.createPool({
    host: 'localhost', port: 3306, user: "root", password: "", database: 'c49_g1'
});


const app = express();

// endpoint check health of DB
app.get('/health', async (req, res, next) => {
    await pool.query('SELECT 1+1 as summation');// summation = 2
    res.json('OK');
});
// parse incoming request body >> obj
app.use(express.json());
app.post('/auth/register', async (req, res, next) => {
    // 1. check user existence
    // prepare statement
    let query = `SELECT *
                 FROM users
                 WHERE email = ?`; // "ka2bora@g.com"
    const result = await pool.query(query, [req.body.email]);// [[{}],[]]
    // 2. if exist throw error
    if (result[0].length > 0) return res.status(409).json({
        message: "user already exist", success: false
    });
    // todo: hash password
    // 3. create user into DB

    query = `INSERT INTO users (email, hashed_password)
             VALUES (?, ?)`;
    const [createUserResult] = await pool.query(query, [req.body.email, req.body.password]);


    query = `INSERT INTO customer_profiles (user_id, full_name, phone, dob)
             VALUES (${createUserResult.insertId}, ?, ?, ?)`;
    // QUERY >> DB >> query?
    //
    // DB >> values >> user DROP TABLE users;

    await pool.query(query, [req.body.fullName, req.body.phone, req.body.dob]);
    // 4. send response
    res.status(201).json({
        message: "user created successfully", success: true
    });
});

app.get('/user/:id', async (req, res, next) => {
    const id = req.params.id;
    // 1. get user from DB
    let query = `SELECT id,
                        email,
                        full_name,
                        phone,
                        dob,
                        role,
                        is_active,
                        updated_at,
                        created_at
                 FROM users
                          JOIN customer_profiles ON users.id = customer_profiles.user_id
                 WHERE id = ?`;

    const result = await pool.query(query, id);
    res.json({
        message: "OK", success: true, data: result[0]
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});