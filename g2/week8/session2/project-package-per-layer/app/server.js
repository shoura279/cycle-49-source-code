const express = require('express');
const { pool } = require('./db/connection');
const { router } = require('./route');
const app = express();

// check health
app.get('/health', async (req, res, next) => {
  await pool.query('SELECT 1+1 AS result');
  res.json('ok');
});

// parsing incoming req body
app.use(express.json());
// url == /api/user/
app.use('/api', router);

app.listen(3000, () => {
  console.log('server is running on port 3000');
});