const express = require('express');
const {createPool} = require('mysql2/promise');
const {Pool} = require('pg');
const app = express();

const pgPool = new Pool({
    user: 'postgres', password: '12345', host: 'localhost', port: 5432, database: 'c49_g2'
});
// establish connection to DB
const pool = createPool({
    host: "localhost", port: 3306, user: 'root', password: "", database: 'c49_g2'
});
app.use(express.json());

app.get('/health', async (req, res, next) => {
    // pool.query('SELECT 1 + 1 AS summation', () => {
    //     return res.json('ok');
    // });// sum : 2
    const {id} = req.body;
    const result = await pgPool.query(`SELECT *
                                       FROM users
                                       WHERE id = $1`, [req.body.id]); // [arr1,arr2]
    res.json({message: 'ok', data: result.rows});
});
// parse incoming requests body to Object
// auth
app.post('/auth/register', async (req, res, next) => {
    // 1. check a user exists
    // placeholder replace it with actual data
    // prepare statement - safe execution
    const [users] = await pool.query(`SELECT *
                                      FROM users
                                      WHERE email = ?`, [req.body.email]);// [arr1,arr2]
    // 2. if yes, return an error user already exists
    if (users.length > 0) return res.status(409).json({message: "user already exists", success: false});
    // 3. save the user into DB
    const [createdUser] = await pool.query(`INSERT INTO users (email, hashed_password)
                                            VALUES (?, ?)`, [req.body.email, req.body.password]);
    await pool.query(`INSERT INTO customer_profiles (user_id, full_name, phone, dob)
                      VALUES (?, ?, ?, ?)`, [createdUser.insertId, req.body.fullName, req.body.phone, req.body.dob]);
    // 4. send response
    res.status(201).json({
        message: "user created successfully", success: true,
    });
});
app.post('/auth/login', () => {
});
app.post('/auth/reset-password', () => {
});
app.post('/auth/verify-email', () => {
});
app.post('/auth/send-otp', () => {
});

// user
app.get('/user/:id', async (req, res, next) => {
    const [data, metaData] = await pool.query(`SELECT id, email, created_at, updated_at, role
                                               FROM users
                                               WHERE id = ?`, [req.params.id]);
    console.log(metaData);
    res.json(data[0]);
});

app.get('/user', async (req, res, next) => {
    const [data, metaData] = await pool.query(`SELECT id, email, created_at, updated_at, role
                                               FROM users
                                               WHERE role = 'customer'`);
    console.log(metaData);
    res.json(data);
});
app.put('/user/:id', () => {
});
app.delete('/user/:id', () => {
});

// product


app.listen(3000, () => {
    console.log('server is running on port 3000');
});