import { sequelize } from './common/db/connection.js';

import express from 'express';
import { blogRouter } from './app/blog/blog.route.js';
import { userRouter } from './app/user/user.route.js';

const app = express();
app.use(express.json());

sequelize.sync({});

app.get('/health', async (req, res, next) => {
  await sequelize.query('SELECT 1+1 AS result');
  res.json('ok');
});

app.use('/user', userRouter);
app.use('/blog', blogRouter);

// global error
app.use((error, req, res, next) => {
  res.json({
    message: error.message,
    success: false
  })
})
app.listen(3000, function () {
  console.log('server is running on port 3000');
});