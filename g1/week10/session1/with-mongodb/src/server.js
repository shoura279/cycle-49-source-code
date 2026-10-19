import express from 'express';
import { authRouter } from './app/auth/auth.route.js';
import { userRouter } from './app/user/user.route.js';
import { blogRouter } from './app/blog/blog.route.js';

const app = express();

// parse incoming req body
app.use(express.json());

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/blog', blogRouter);

app.use((error, req, res, next) => {
  res.json({
    message: error.message,
    success: false
  })
})

app.listen(3000, () => {
  console.log('server is running on port 3000');
})