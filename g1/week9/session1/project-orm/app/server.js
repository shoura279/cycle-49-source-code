const { sequelize } = require('./common/db/connection');

const express = require('express');
const { User } = require('./common/db/user.model');
const { Blog } = require('./common/db/blog.model');
const { userRouter } = require('./user/user.route');

const app = express();
app.use(express.json());

sequelize.sync({ });

app.get('/health', async (req, res, next) => {
  await sequelize.query('SELECT 1+1 AS result');
  res.json('ok');
});

app.use('/user', userRouter);

app.listen(3000, function () {
  console.log('server is running on port 3000');
});